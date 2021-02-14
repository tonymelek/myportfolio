import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectBrief from '../components/ProjectBrief'
import ProjectCard from '../components/ProjectCard'
import projects from '../json/projects.json'
import './Projects.css'

export default function Projects() {
    const [projectDisplay, setProjectDisplay] = useState({
        name: '',
        about_p1: '',
        about_p2: '',
        about_p3: '',
        about_p4: '',
        technologies: '',
        github_link: '',
        deployed_app: ''
    })
    const [showProjectCard, setShowProjectCard] = useState(false);
    const handleDisplay = (project) => {
        setProjectDisplay(project)
        setShowProjectCard(true)
    }



    return (

        <div className="projects__main position-relative">
            <Header />
            {showProjectCard && <div className="project__card__container">
                <ProjectCard project={projectDisplay} setShowProjectCard={setShowProjectCard} />
            </div>}
            <div className={`my__projects d-flex flex-wrap justify-content-between align-items-center mx-5  cursor-pointer ${showProjectCard ? 'hazy' : ''}`}>
                {projects.map((project, i) =>
                    <div key={project.name} onClick={() => handleDisplay(project)} className={`card flex-grow-1 m-3 project__summary animate__animated animate__fadeInUp animate__delay-${i}s`}>

                        <ProjectBrief project={project} />
                    </div>)}

            </div>
            <Footer />
        </div>
    )
}
