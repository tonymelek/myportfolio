import './ProjectCard.css'
export default function ProjectCard({ project, setShowProjectCard }) {
    return (
        <div className="project__card__main container animate__animated animate__pulse ">
            <div className="card">
                <div className="card-header">
                    <p className="close-display" onClick={() => setShowProjectCard(false)}>X</p>
                    <h2 className="text-center">{project.name}</h2>
                </div>
                <div className="card-body row">
                    <div className="col-12  col-lg-6">
                        <img src={`./projects/${project.name}.png`} alt={project.name} />
                    </div>
                    <div className="col-12  col-lg-6 ">
                        <h3>Description</h3>
                        <p>{project.about_p1}</p>
                        <p>{project.about_p2}</p>
                        <p>{project.about_p3}</p>
                        <p>{project.about_p4}</p>
                        <h3>Technologies Used</h3>
                        <ul className="list-unstyled d-inline-flex flex-wrap ">
                            {project.technologies.split(',').map(tech =>
                                <li key="tech" className="m-2 tech__item">{tech}</li>
                            )}
                        </ul>
                        <div className="project__links d-flex justify-content-between">
                            <a href={project.deployed_app} target="_blank" className="btn btn-success mx-2 deploy__link">View Depolyed Project</a>
                            <a href={project.github_link} target="_blank" className="btn btn-success mx-2 repo__link">View GitHub Repository</a>

                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-info mx-auto w-50 d-block" onClick={() => setShowProjectCard(false)} > Close</button>
                </div>
            </div>

        </div>
    )
}
