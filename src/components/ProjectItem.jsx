
const ProjectItem = ({ id, title, image, description }) => {

    return (
        <div>
            <h1 className={`text-3xl font-semibold mb-6 ${id > 1 && "mt-12"}`}>{title}</h1>
            <div>
                {
                    description.slice(0, 2).map((line, index) => (<p className={`${(index + 1) === 2 && "mb-0"}`} key={index}>{line}</p>))
                }
            </div>
            <img className="max-w-full my-6 border" src={image} alt="" />
            <div>
                {
                    description.slice(2).map((line, index) => (<p key={index} className={`${(index + 3) === description.length && "mb-0"}`}>{line}</p>))
                }
            </div>
        </div>
    )
}

export default ProjectItem