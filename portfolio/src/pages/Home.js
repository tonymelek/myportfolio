import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './Home.css'

export default function Home() {
    const technologies = ['html', 'css', 'js', 'react', 'sass', 'bootstrap', 'materialize', 'node', 'sql', 'mongo', 'handlebars']
    return (
        <div className="home__main position-relative">
            <Header />
            <div className="main__content__container">
                <div>
                    <h1 className="text-center my__name">Tony Melek</h1>
                    <h2 className="text-center text-light">Full stack web developer and passionate learner</h2>
                </div>
                <div className="row m-5">
                    <div className="col-12 col-lg-3  d-flex justify-content-center animate__animated animate__fadeInLeft">
                        <img src="./photo/tony.jpg" alt="tony" className='my__photo' />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-12 col-lg-8 d-flex flex-column align-items-center animate__animated animate__fadeInRight">
                        <h1 className="titles">About Me</h1>
                        <div className="card p-3">
                            <p> Full-stack web developer with a telecommunications engineering background and data analysis experience. Obtained a Certificate from the Coding Bootcamp at Monash University, through which I have developed new skills such as HTML, CSS, Javascript, JQuery,Node.Js, React.js, MySQL and responsive web design</p>
                            <p>My Technical Skill list :</p>
                            <div className="d-flex flex-wrap">
                                {technologies.map(tech => <div key={tech} className="m-2">
                                    <img src={`./technologies/${tech}.png`} alt="texh" width="50" />
                                </div>)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
