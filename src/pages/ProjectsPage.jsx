import { useContext } from "react"
import ProjectItem from "../components/ProjectItem"
import { projects } from "../utils/data"
import { ProjectsFilterContext } from "../context/ProjectsFilterContext"
import { MdOutlineSmartToy, MdMiscellaneousServices } from "react-icons/md";
import { CgBrowser } from "react-icons/cg";

const ProjectsPage = () => {
    const { projectsFilterType, setProjectsFilterType } = useContext(ProjectsFilterContext)

    return (
        <div className="col-span-2">
            <div className="py-12 border">
                <div className="w-5/6 mx-auto">
                    <h1 className="text-5xl font-black leading-8">Projects <br /><span className="text-lg font-semibold">& Hobbies</span></h1>
                </div>
            </div>

            <div className="py-12 border border-t-0">
                <div className="w-5/6 mx-auto">
                    {
                        projectsFilterType == "default" ? (
                            <>
                                <button onClick={() => { setProjectsFilterType("ai") }} className="transition-all ease-in-out p-6 text-2xl font-bold border w-full flex justify-start items-center hover:text-purple-400 mb-6">
                                    <MdOutlineSmartToy size={"2em"} />
                                    <div className="ml-6 text-left">
                                        <h1 className="text-3xl">AI/ML</h1>
                                        <h2 className="font-[200] text-[18px]">Projects</h2>
                                    </div>
                                </button>

                                <button onClick={() => { setProjectsFilterType("web") }} className="transition-all ease-in-out p-6 text-2xl font-bold border w-full flex justify-start items-center hover:text-purple-400 mb-6">
                                    <CgBrowser size={"2em"} />
                                    <div className="ml-6 text-left">
                                        <h1 className="text-3xl">Web</h1>
                                        <h2 className="font-[200] text-[18px]">Projects</h2>
                                    </div>
                                </button>

                                <button onClick={() => { setProjectsFilterType("misc") }} className="transition-all ease-in-out p-6 text-2xl font-bold border w-full flex justify-start items-center hover:text-purple-400">
                                    <MdMiscellaneousServices size={"2em"} />
                                    <div className="ml-6 text-left">
                                        <h1 className="text-3xl">Misc.</h1>
                                        <h2 className="font-[200] text-[18px]">Projects</h2>
                                    </div>
                                </button>
                            </>
                        ) : (
                            <>
                                {
                                    projects
                                        .filter((project) => project.tag === projectsFilterType)
                                        .map(project => <ProjectItem key={project.id} id={project.id} title={project.title} image={project.image} description={project.description} />)
                                }
                            </>

                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default ProjectsPage