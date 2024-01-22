import { useState } from "react"
import { ProjectsFilterContext } from "./context/ProjectsFilterContext"
import AppRouter from "./router/AppRouter"

function App() {

  const [projectsFilterType, setProjectsFilterType] = useState("default")

  return (
    <ProjectsFilterContext.Provider value={{ projectsFilterType, setProjectsFilterType }}>
      <AppRouter />
    </ProjectsFilterContext.Provider>
  )
}

export default App
