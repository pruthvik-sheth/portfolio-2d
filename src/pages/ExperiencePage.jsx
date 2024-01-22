

const ExperiencePage = () => {

    return (
        <div className="col-span-2">
            <div className="py-12 border">
                <div className="w-5/6 mx-auto">
                    <h1 className="text-5xl font-black leading-8">Experience <br /><span className="text-lg font-semibold">& Work done</span></h1>
                </div>
            </div>

            <div className="py-12 border border-t-0">
                <div className="w-5/6 mx-auto">
                    <h1 className="text-3xl font-semibold mb-2">Avesta Technologies</h1>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-lg font-medium">Data Scientist</h2>
                        <h2 className="text-lg font-medium">July, 2023 - Present</h2>
                    </div>
                    <ul className="list-disc font-[300]">
                        <li>Built a React-Flask application to automate the detection and tagging of property features within images, addressing incomplete property tagging issues.</li>
                        <li className="mt-4">Trained an object detection model (yolov5) using a dataset of over 6000 property images, enabling identification of key features like dishwashers, built-in robes, and more.</li>
                        <li className="mt-4">Improved the accuracy of property search results, potentially expanding property listings and contributing to increased revenue for RealEstateView.com.au through enhanced property visibility.</li>
                        <li className="mt-4">Built an application using large language models to extract insights from product reviews using the LangChain framework.</li>
                        <li className="mt-4">Provided a comprehensive understanding of user sentiment and product features. Enhanced the comprehension of product performance and user experience.</li>
                    </ul>


                    <h1 className="text-3xl font-semibold mt-12 mb-2">Tatvasoft</h1>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-lg font-medium">Frotend Intern</h2>
                        <h2 className="text-lg font-medium">July, 2023 - Present</h2>
                    </div>
                    <ul className="list-disc font-[300]">
                        <li>Built a React-Flask application to automate the detection and tagging of property features within images, addressing incomplete property tagging issues.</li>
                        <li className="mt-4">Trained an object detection model (yolov5) using a dataset of over 6000 property images, enabling identification of key features like dishwashers, built-in robes, and more.</li>
                        <li className="mt-4">Improved the accuracy of property search results, potentially expanding property listings and contributing to increased revenue for RealEstateView.com.au through enhanced property visibility.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePage