import react from 'react'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    const navigate = useNavigate();
    return (
    <footer className='flex flex-row border-t-2 border-black absolute bottom-0 w-full h-10 bg-white'>
        <div className='flex justify-center items-center h-full w-screen'><p className='font-bold' onClick={() => navigate('/main', {replace: true})}>Menu</p></div>
    </footer>
    )
}

export default Footer