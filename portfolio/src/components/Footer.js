import './Footer.css'
import { FaGithub, FaLinkedin, FaRegFilePdf } from 'react-icons/fa'
export default function Footer() {
    return (
        <div className="footer">
            <div className="d-flex flex-wrap justify-content-around align-items-center">
                <div className="d-flex flex-column">
                    <p>Phone: <a href="tel:0426 081 060">0426 081 060</a></p>
                    <p>Email: <a href="mailto:tonymelek.au@gmail.com">tonymelek.au@gmail.com</a></p>

                </div>

                <div className="d-flex">
                    <div className="d-flex flex-column align-items-center mb-2">
                        <a href="https://github.com/tonymelek" target="_blank"><FaGithub className="icons" /></a>
                        <p>Github</p>
                    </div>
                    <div className="d-flex flex-column align-items-center  mb-2">
                        <a href="https://www.linkedin.com/in/tonymelek/" target="_blank"><FaLinkedin className="icons" /></a>
                        <p>LinkedIn</p>
                    </div>
                    <div className="d-flex flex-column align-items-center  mb-2">
                        <a href="./resume/TonyMelek_Resume.pdf" download><FaRegFilePdf className="icons" /></a>
                        <p>Resume</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
