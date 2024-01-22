import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProjectsPage from "../pages/ProjectsPage"
import BaseLayout from "../layouts/BaseLayout"
import ExperiencePage from "../pages/ExperiencePage"
import AboutPage from "../pages/AboutPage"
import ContactPage from "../pages/ContactPage"

const AppRouter = () => {

    return (
        <BrowserRouter>
            < Routes >
                <Route path="/" element={<HomePage />} />
                <Route path='/*' element={
                    <BaseLayout>
                        <Routes>
                            <Route path='/projects' element={<ProjectsPage />} />
                            <Route path='/experience' element={<ExperiencePage />} />
                            <Route path='/about' element={<AboutPage />} />
                            <Route path='/contact' element={<ContactPage />} />
                            <Route path='*' element={<h1>404 - Page Not Found</h1>} />
                        </Routes>
                    </BaseLayout>
                }
                />
            </Routes >
        </BrowserRouter>
    )
}

export default AppRouter