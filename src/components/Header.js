import React, { useEffect, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom';
import './Header.css'
export default function Header() {

    const [clicked, setClicked] = useState(false)
    const [navDisplay, setNavDisplay] = useState(window.innerWidth < 600 ? false : true)
    const location = useLocation();
    const active = location.pathname.split('/')[1];

    useEffect(() => {
        // Add event listener
        window.addEventListener("resize", () => {
            if (window.innerWidth < 600) {
                setNavDisplay(false)
            } else {
                setNavDisplay(true)
            }
        });
    }, []);
    return (
        <div className="header">

            <div className='burger__menu cursor-pointer' onClick={() => setClicked(!clicked)}>
                <BiMenu />
            </div>
            <nav className={`navbar ${navDisplay || clicked ? 'd-flex ' : 'd-none'} `}>

                <li ><Link className={`react__link ${active === '' ? 'active' : ''}`} to="/" >Home</Link></li>
                <li ><Link className={`react__link ${active === 'portfolio' ? 'active' : ''}`} to="/portfolio">Projects</Link></li>
                <li ><Link className={`react__link ${active === 'contact-me' ? 'active' : ''}`} to="/contact-me">Contact Me</Link></li>
            </nav>
        </div>
    )
}
