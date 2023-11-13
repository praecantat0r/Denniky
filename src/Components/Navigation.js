import react, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

function Navigation() {
    const navigate = useNavigate();
    const [ShowMenu, setShowMenu] = useState(false)

    let menu
    let menuMask

    if (ShowMenu) {
        menu = 
        <div className='fixed bg-white top-0 left-0 h-full w-4/5 z-50 shadows'>
            <li className='py-3 border-t border-b text-center list-none'>
                Skalka
            </li>
            <li className='text-center py-3 border-t border-b list-none absolute bottom-0 w-full' onClick={() => navigate('/', {replace: true})}>
                Log Out
            </li>
        </div>
        menuMask =
        <div className='bg-black-t-50 fixed top-0 left-0 h-full w-full z-50' onClick={() => setShowMenu(false)}>
                        
        </div> 
    } 

    return (
    <nav>
        <span className='text-xl'>
            <FontAwesomeIcon className='text-blue-600' icon={faBars} onClick={() => setShowMenu(!ShowMenu)}/>
        </span>

        { menuMask }
        { menu }
    </nav>
    )
}

export default Navigation