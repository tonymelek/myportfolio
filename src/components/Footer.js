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
                    <div className="d-flex flex-column align-items-center mb-2 links">
                        <a href="https://github.com/tonymelek" target="_blank"><FaGithub className="icons" /></a>
                        <p><a href="https://github.com/tonymelek" target="_blank">Github</a></p>
                    </div>
                    <div className="d-flex flex-column align-items-center  mb-2 links">
                        <a href="https://www.linkedin.com/in/tonymelek/" target="_blank"><FaLinkedin className="icons" /></a>
                        <p><a href="https://www.linkedin.com/in/tonymelek/" target="_blank">LinkedIn</a></p>
                    </div>
                    <div className="d-flex flex-column align-items-center  mb-2 links">
                        <a href="./resume/TonyMelek_Resume.pdf" download><FaRegFilePdf className="icons" /></a>
                        <p><a href="./resume/TonyMelek_Resume.pdf" download>Resume</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
