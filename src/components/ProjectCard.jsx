const ProjectCard = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.class}</p>
            <p>{props.year}</p>
        </div>
    )
}

export default ProjectCard;