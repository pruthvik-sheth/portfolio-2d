

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
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-medium">Data Scientist</h2>
                        <h2 className="text-lg font-medium">Dec, 2023 - Present</h2>
                    </div>
                    <ul className="list-disc font-[300]">
                        <li>Expanded the real estate image dataset curated during internship and fine-tuned the YOLOv5 model, resulting in a 29% improvement in the model’s overall mean average precision score. Subsequently, deployed the enhanced model on AWS to autonomously tag a vast collection of 1.5 million real estate images</li>
                        <li className="mt-4">Developed a real estate description dataset and fine-tuned the Mistral-7B LLM to extract feature tags. Integrated these tags with YOLOv5’s output, to further improve search and filter accuracy by 16% for real estate listings.</li>
                    </ul>

                    <h1 className="text-3xl font-semibold mt-12 mb-2">Avesta Technologies</h1>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-medium">Data Science Intern</h2>
                        <h2 className="text-lg font-medium">Jun, 2023 - Nov, 2023</h2>
                    </div>
                    <ul className="list-disc font-[300]">
                        <li>Developed expertise in deep learning, implementing neural networks from scratch and incorporating advanced techniques such as regularization, batch normalization, Adam optimizer etc.</li>
                        <li className="mt-4">Remedied missing tags in real estate properties on view.com.au by curating a real estate image dataset exceeding 20k images and fine-tuning a YOLOv5 object detection model for automatic tag generation (dishwasher, kitchen island, etc.) resulting in an enhancement of search accuracy and subsequent 38% increase in website traffic.</li>
                        <li className="mt-4">Acquired proficiency in the Langchain framework for prompt engineering and vector databases like Pinecone to develop chatbots with long term memory.</li>
                    </ul>


                    <h1 className="text-3xl font-semibold mt-12 mb-2">Tatvasoft</h1>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-medium">Full Stack Development Intern</h2>
                        <h2 className="text-lg font-medium">Jun, 2022 - Jul, 2022</h2>
                    </div>
                    <ul className="list-disc font-[300]">
                        <li>Developed a comprehensive E-commerce web application from scratch using React JS, Node JS, and Express JS with some subtle UI features like dynamic themeing of the web app based on a user chosen product, showcasing proficiency in full-stack web development.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePage