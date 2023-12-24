import react from 'react'
import { useNavigate } from 'react-router'
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';

function Body() {
    const navigate = useNavigate()
    const HandleLogOut = () => {
        signOut(auth).then(() => {
            console.log('Signed Out!')
            navigate('/')
        })
    }
    return (
    <body>
        <div>
            <div className="bg-[url('/Assets/main-small-bg.png')] flex h-screen items-center justify-center bg-cover overflow-hidden 2xl:bg-[url('/Assets/background.png')] md:bg-[url('/Assets/md-screen-bg.png')]">
                <div className="">
                    <form action="" className="flex flex-col justify-center items-center p-10 rounded-md">
                        <span className="flex items-center justify-center h-10 w-40 font-bold text-gray-600 text-2xl" >Ahoj!</span>
                        <button className="m-1 h-10 w-40 border-2 border-gray-500 bg-white font-bold rounded-lg text-gray-600 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" onClick={() => navigate('/create', {replace: true})}>Pridaj</button>
                        <button className="m-1 h-10 w-40 border-2 border-gray-500 bg-white font-bold rounded-lg text-gray-600 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" onClick={() => navigate('/view_posts')}>Precitaj</button>
                        <button className="m-1 h-10 w-40 border-2 border-gray-500 bg-white font-bold rounded-lg text-gray-600 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" onClick={HandleLogOut}>Odhlasit sa</button>
                    </form>
                </div>
            </div>
        </div>
    </body>
    )
}

export default Body