import './ProjectBrief.css'
export default function ProjectBrief({ project }) {
    return (
        <div className="project__brief__main">
            <div className="d-flex flex-column project__brief__item">
                <img src={`./projects/${project.name}.png`} alt={project.name} className="project__snap" />
                <h3 className="text-center">{project.name}</h3>
                <p className="p-2">{project.about_p1}</p>
                <p className='click__note'>**Click the project card for details**</p>
            </div>


        </div>
    )
}
