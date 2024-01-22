import Header from "../components/Header"
import myBarcodeImage from "../assets/barcode.png"

const HomePage = () => {

    return (
        <>
            <section className="max-w-4xl mx-auto w-3/4 min-h-screen flex items-center justify-center">
                <div className="flex items-stretch justify-center">
                    {/* Left complete section */}
                    <div>
                        {/* Upper logo and para */}
                        <div className="flex items-stretch justify-center">
                            <div className="border border-r-0 p-10 flex items-center justify-center">
                                <h1 className="text-6xl font-black">Ps.</h1>
                            </div>
                            <div className="border p-8">
                                <h3 className="text-lg font-[300]">👋 Hey there! How's it going!</h3>
                                <h1 className="text-2xl font-[200]">I'm <span className="font-[600]">Pruthvik Sheth</span>, a curious software engineer based in Ahmedabad, India 🌍. Interested in cars 🏎️, hardware interfaces, science & developer tools, human interactions, productivity.</h1>
                            </div>
                        </div>

                        {/* Bottom Links */}
                        <Header />
                    </div>

                    {/* Right Section */}
                    <div className="border p-12 border-l-0 flex items-center justify-center">
                        <img className="max-w-full w-3/4" src={myBarcodeImage} alt="" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default HomePage