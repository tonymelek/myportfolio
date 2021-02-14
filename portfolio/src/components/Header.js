import { useEffect, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import './Header.css'
export default function Header() {
    const [clicked, setClicked] = useState(false)
    const [navDisplay, setNavDisplay] = useState(true)

    useEffect(() => {
        // Add event listener
        window.addEventListener("resize", () => {
            console.log(window.innerWidth);
            if (window.innerWidth < 600) {
                setNavDisplay(false)
            } else {
                setNavDisplay(true)
            }
        });

    }); // Empty array ensures that effect is only run on mount 
    return (
        <div className="header">

            <div className='burger__menu cursor-pointer' onClick={() => setClicked(!clicked)}>
                <BiMenu />
            </div>
            <nav className={`navbar ${navDisplay || clicked ? 'd-flex animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutRight d-none'} `}>
                <li>Home</li>
                <li>Projects</li>
                <li>  Contact Me</li>
            </nav>
        </div>
    )
}
