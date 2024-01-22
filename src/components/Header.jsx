import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    return (
        <header className="w-full p-12 border">
            <nav>
                <ul className="list-none flex items-center justify-between">
                    <li onClick={() => { navigate('/about') }} className="cursor-pointer p-0 btn btn-link text-base-content text-lg font-normal">About</li>
                    <li onClick={() => { navigate('/experience') }} className="cursor-pointer p-0 btn btn-link text-base-content text-lg font-normal">Experience</li>
                    <li onClick={() => { navigate('/projects') }} className="cursor-pointer p-0 btn btn-link text-base-content text-lg font-normal">Projects</li>
                    <li onClick={() => { navigate('/contact') }} className="cursor-pointer p-0 btn btn-link text-base-content text-lg font-normal">Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header