import { useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";
import {getCurrentDate} from './GetDate';

function Create_Posts() {
    const navigate = useNavigate();
    const [title, SetTitle] = useState("");
    const [decs, setDecs] = useState(""); 
    const [warning, SetWarning] = useState("");
    const [icon, SetIcon] = useState("");
    const getDate = getCurrentDate();
    const auth = getAuth();
    const HandleSubmitt = async (e) => {
        e.preventDefault();
        if (title && decs && icon) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                const uid = user.uid;
                console.log("uid", uid)
                setDoc(doc(db, uid, title), {
                    Title: title,
                    Description: decs,
                    Icon: icon,
                    Date: getDate,
                });
                navigate('/main')
                }
                else {
                    console.error("User is not signed in!")
                }
            })
        }
        else {
            SetWarning('Boths fields are required!');
        }
    }

    return (
        <div>
        <body>
        <div>
            <div className="bg-[url('/Assets/main-small-bg.png')] flex h-screen items-center justify-center bg-cover 2xl:bg-[url('/Assets/background.png')] md:bg-[url('/Assets/md-screen-bg.png')]">
                <div className="m-3 flex justify-center items-center w-screen h-[80vh] bg-white border-4 border-black  rounded-lg">
                <form action="" className="h-full w-full flex flex-col p-10 rounded-md">
                    <label >
                        <p className="w-full flex justify-center items-center text-gray-600 font-bold">Title</p>
                        <input type="text" className="w-full  h-12 text-gray-600 border m-1 text-center rounded-md placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" value={title} onChange={(e) => SetTitle(e.target.value)}/>
                    </label>
                    <label className="mt-8">
                        <p className="w-full flex justify-center items-center text-gray-600 font-bold">Description</p>
                        <textarea className=" w-full flex items-center justify-center h-80 text-gray-600 border m-1 rounded-md placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" value={decs} onChange={(e) => setDecs(e.target.value)}/>
                    </label>
                    <label className="">
                        <p className="w-full flex justify-center items-center text-gray-600 font-bold">Icon</p>
                        <input type="text" className="w-full h-12 w-full text-gray-600 font-bold border m-1 text-center rounded-md placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" value={icon} onChange={(e) => SetIcon(e.target.value)}/>
                    </label>
                        <button type="submit" className="text-gray-600 m-2 bg-pink-violet-200 mt-10 rounded-md font-bold" onClick={HandleSubmitt}>Submit</button>
                        { warning && <p className="flex text-center justify-center items-center drop-shadow text-red-500 font-bold">{warning}</p>}
                    </form>
                </div>
            </div>
        </div>
    </body>
    </div> 
    )
}
export default Create_Posts