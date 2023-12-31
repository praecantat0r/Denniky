import React, {useState} from "react"
import { useNavigate } from "react-router"
function Landing() {
    const navigate = useNavigate()
    return (
        <div className="h-screen overflow-hidden">
            <div className="bg-[url('/Assets/small-screen-bg.png')] bg-cover object-scale-down h-screen flex items-center justify-center overflow-hidden 2xl:bg-[url('/Assets/background.png')] md:bg-[url('/Assets/md-screen-bg.png')]">
                <div className="">
                    <form action="" className="flex flex-col justify-center items-center p-10 rounded-md">
                        <button className="m-1 h-10 w-40 border-2 border-gray-500 bg-white font-bold rounded-lg text-gray-600 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" onClick={() => navigate('/login')}>Prihlasit</button>
                        <button className="m-1 h-10 w-40 border-2 border-gray-500 bg-white font-bold rounded-lg text-gray-600 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" onClick={() => navigate('/register')}>Registrovat</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Landing