import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ProjectsFilterContext } from "../context/ProjectsFilterContext"


const SideBar = () => {

    const { projectsFilterType, setProjectsFilterType } = useContext(ProjectsFilterContext)
    console.log(projectsFilterType);

    return (
        <header className="border border-r-0 py-12">
            <nav className="w-4/6 mx-auto sticky top-10">
                <div>
                    <h1 className="pb-12 text-6xl font-black">Ps.</h1>
                </div>
                <ul className="list-none flex items-start justify-between flex-col">
                    <NavLink onClick={() => { setProjectsFilterType("default") }} to={"/"} className={({ isActive }) => ("mt-4 cursor-pointer p-0 btn btn-link text-lg font-normal " + (isActive ? "text-accent" : "text-base-content"))}>Home</NavLink>

                    <NavLink onClick={() => { setProjectsFilterType("default") }} to={"about"} className={({ isActive }) => ("mt-4 cursor-pointer p-0 btn btn-link text-lg font-normal " + (isActive ? "text-accent" : "text-base-content"))}>About</NavLink>

                    <NavLink onClick={() => { setProjectsFilterType("default") }} to={"experience"} className={({ isActive }) => ("mt-4 cursor-pointer p-0 btn btn-link text-lg font-normal " + (isActive ? "text-accent" : "text-base-content"))}>Experience</NavLink>

                    <NavLink onClick={() => { setProjectsFilterType("default") }} to={"projects"} className={({ isActive }) => ("mt-4 cursor-pointer p-0 btn btn-link text-lg font-normal " + (isActive ? "text-accent" : "text-base-content"))}>Projects</NavLink>

                    {
                        projectsFilterType != "default" && (
                            <>
                                <li onClick={() => { setProjectsFilterType("ai") }} className={`ml-6 mt-4 cursor-pointer p-0 btn btn-link text-lg font-normal ${projectsFilterType === "ai" ? "text-accent" : "text-base-content"}`}>AI/ML Projects</li>
                                <li onClick={() => { setProjectsFilterType("web") }} className={`ml-6 mt-4 cursor-pointer p-0 btn btn-link text-lg font-normal ${projectsFilterType === "web" ? "text-accent" : "text-base-content"}`}>Web Projects</li>
                                <li onClick={() => { setProjectsFilterType("misc") }} className={`ml-6 mt-4 cursor-pointer p-0 btn btn-link text-lg font-normal ${projectsFilterType === "misc" ? "text-accent" : "text-base-content"}`}>Misc. Projects</li>
                            </>
                        )
                    }
                    <NavLink onClick={() => { setProjectsFilterType("default") }} to={"contact"} className={({ isActive }) => ("mt-4 cursor-pointer p-0 btn btn-link text-lg font-normal " + (isActive ? "text-accent" : "text-base-content"))}>Contact</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default SideBar