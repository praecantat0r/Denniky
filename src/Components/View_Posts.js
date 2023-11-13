import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Footer from "./Footer"
function Create_Post() {
    const [userUid, setUserUid] = useState(null);
    const [userData, setUserData] = useState(null);
    const auth = getAuth();
  
    useEffect(() => {
      // Use Firebase Authentication to get the user's UID
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserUid(user.uid);
        } else {
          setUserUid(null);
        }
      });
    });

    const getItems = async () => {
        const querySnapshot = await getDocs(collection(db, userUid));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data().Title);
        });
    };
    useEffect(() => {
        getItems();
    })
    return (
        <div>

        <body>
        <div>
            <div className="bg-[url('/Assets/main-small-bg.png')] flex h-screen items-center justify-center bg-cover 2xl:bg-[url('/Assets/background.png')] md:bg-[url('/Assets/md-screen-bg.png')]">
                <div className="absolute h-[95vh] top-0 w-screen flex flex-col flex-nowrap overflow-auto">
                    <div className="m-2 bg-white rounded-lg border-2 border-black flex flex-row" style={{height: "50px"}}>
                        <div className="border-r-2 border-black h-full w-1/5 flex justify-center items-center text-center font-bold text-gray-600">1</div>
                        <div className="border-r-2 border-black h-full w-1/5 flex justify-center items-center text-center font-bold text-gray-600">2</div>
                        <div className="border-r-2 border-black h-full w-1/5 flex justify-center items-center text-center font-bold text-gray-600">3</div>
                        <div className="border-r-2 border-black h-full w-1/5 flex justify-center items-center text-center font-bold text-gray-600">4</div>
                        <div className=" w-1/5 flex justify-center items-center text-center font-bold text-gray-600 ">5</div>
                    </div>
                    <div className="m-3 bg-white rounded-lg border-2 border-black overflow-hidden flex flex-row" style={{height: "150px"}}> 
                        <div className="h-full w-1/3 bg-gray-200 border-r-2 border-black rounded-lg flex-none">
                            <div className="w-full h-full flex justify-center items-center"><img src="https://www.iconarchive.com/download/i141855/iconarchive/cute-animal/Cute-Penguin.1024.png" className=" h-20" alt="" /></div>
                        </div>
                        <div className="w-full">
                            <div className="w-full h-6 border-b-2 border-black"><p className="mx-1 font-dotgothic">Skalka</p></div>
                        </div>
                    </ div>
                    <div className="m-3 bg-white rounded-lg border-2 border-black overflow-hidden flex flex-row" style={{height: "150px"}}> 
                        <div className="h-full w-1/3 bg-gray-200 border-r-2 border-black rounded-lg flex-none">
                            <div className="w-full h-full flex justify-center items-center"><img src="https://www.iconarchive.com/download/i141855/iconarchive/cute-animal/Cute-Penguin.1024.png" className=" h-20" alt="" /></div>
                        </div>
                        <div className="w-full">
                            <div className="w-full h-6 border-b-2 border-black"><p className="mx-1 font-dotgothic">Chopok</p></div>
                        </div>
                    </ div>
                    <div className="m-3 bg-white rounded-lg border-2 border-black overflow-hidden flex flex-row" style={{height: "150px"}}> 
                        <div className="h-full w-1/3 bg-gray-200 border-r-2 border-black rounded-lg flex-none">
                            <div className="w-full h-full flex justify-center items-center"><img src="https://www.iconarchive.com/download/i141855/iconarchive/cute-animal/Cute-Penguin.1024.png" className=" h-20" alt="" /></div>
                        </div>
                        <div className="w-full">
                            <div className="w-full h-6 border-b-2 border-black"><p className="mx-1 font-dotgothic">Suchy Vrch</p></div>
                        </div>
                    </ div>
                    <div className="m-3 bg-white rounded-lg border-2 border-black overflow-hidden flex flex-row" style={{height: "150px"}}> 
                        <div className="h-full w-1/3 bg-gray-200 border-r-2 border-black rounded-lg flex-none">
                            <div className="w-full h-full flex justify-center items-center"><img src="https://www.iconarchive.com/download/i141855/iconarchive/cute-animal/Cute-Penguin.1024.png" className=" h-20" alt="" /></div>
                        </div>
                        <div className="w-full">
                            <div className="w-full h-6 border-b-2 border-black"><p className="mx-1 font-dotgothic">Sachticka</p></div>
                        </div>
                    </ div>
                    <div className="m-3 bg-white rounded-lg border-2 border-black overflow-hidden flex flex-row" style={{height: "150px"}}> 
                        <div className="h-full w-1/3 bg-gray-200 border-r-2 border-black rounded-lg flex-none">
                            <div className="w-full h-full flex justify-center items-center"><img src='https://www.iconarchive.com/download/i141855/iconarchive/cute-animal/Cute-Penguin.1024.png' className=" h-20" alt="" /></div>
                        </div>
                        <div className="w-full">
                            <div className="w-full h-6 border-b-2 border-black"><p className="mx-1 font-dotgothic">Badin</p></div>
                        </div>
                    </ div>
                    <div className="m-3 bg-white rounded-lg border-2 border-black overflow-hidden flex flex-row" style={{height: "150px"}}> 
                        <div className="h-full w-1/3 bg-gray-200 border-r-2 border-black rounded-lg flex-none">
                            <div className="w-full h-full flex justify-center items-center"><img src="https://www.iconarchive.com/download/i141855/iconarchive/cute-animal/Cute-Penguin.1024.png" className=" h-20" alt="" /></div>
                        </div>
                        <div className="w-full">
                            <div className="w-full h-6 border-b-2 border-black"><p className="mx-1 font-dotgothic">Donovaly</p></div>
                        </div>
                    </ div>
                    
                </div>
            </div>
        </div>
    </body>
    <Footer></Footer>
    </div> 
    )
}
export default Create_Post