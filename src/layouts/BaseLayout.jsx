import SideBar from "../components/SideBar"

const BaseLayout = ({ children }) => {

    return (
        <div className="my-20">
            <div className="custom_container">
                {/* <div className="flex items-stretch justify-center"> */}
                <div className="grid auto-rows-fr grid-cols-3 gap-0">
                    <SideBar />
                    {children}
                </div>
            </div>
        </div>

    )
}

export default BaseLayout