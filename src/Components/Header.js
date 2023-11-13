import react from 'react'
import styles from '../index.css'
import Navigation from './Navigation'

function Header() {
    return (
        <header className="border-b p-3 items-center">
            <div className='flex justify-between'>
                <Navigation></Navigation>
                <span className='font-bold justify-center'>Denniky Vyletov</span>
                <span></span>
            </div>
        </header>
    )
}

export default Header