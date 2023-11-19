import React, {useState} from "react"
import { useNavigate } from "react-router"
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function Login() {
    const navigate = useNavigate();
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    const [warning, SetWarning] = useState("")
    const HandleLogin = async (e) => {
        e.preventDefault()
        if (email && password) {
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const uid = user.uid
                setDoc(doc(db, uid, 'Test'), {
                })
                console.log(user);
                navigate('/login')
            })
            .catch((error) => {
                SetWarning('User already exists!');
            })
        }
        else {
            SetWarning('Boths fields are required!');
        }
    }
    return (
        <div>
            <div className="bg-[url('/Assets/small-screen-bg.png')] flex h-screen items-center justify-center overflow-hidden bg-cover 2xl:bg-[url('/Assets/background.png')] md:bg-[url('/Assets/md-screen-bg.png')]">
                <div className="">
                    <form action="" className="flex flex-col p-10 rounded-md">
                        <input type="text" placeholder="Email" className="text-gray-600 font-bold border m-1 text-center rounded-md placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" value={email} onChange={e => SetEmail(e.target.value)}/>
                        <input type="password"  placeholder="Password" className="text-gray-600 font-bold border m-1 text-center rounded-md placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" value={password} onChange={e => SetPassword(e.target.value)}/>
                        <button type="submit" className="text-gray-600 m-2 bg-pink-violet-200 rounded-md font-bold" onClick={HandleLogin}>Register</button>
                        { warning && <p className="flex text-center justify-center items-center drop-shadow text-red-500 font-bold">{warning}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login