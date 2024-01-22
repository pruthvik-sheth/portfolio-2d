

const AboutPage = () => {

    return (
        <div className="col-span-2">
            <div className="py-12 border">
                <div className="w-5/6 mx-auto">
                    <h1 className="text-5xl font-black leading-8">Hey there!<br /><span className="text-lg font-semibold">Welcome to my portfolio!</span></h1>
                </div>
            </div>

            <div className="py-12 border border-t-0">
                <div className="w-5/6 mx-auto">
                    <p className="mb-0">Hello there! I'm <span className="font-bold text-accent">Pruthvik Sheth</span>, a passionate software engineer based in Ahmedabad. I recently graduated from Vishwakarma Govt. Engineering College in 2023, and my journey in the world of technology has been nothing short of exhilarating.</p>
                    <h1 className="text-3xl font-semibold mt-12 mb-6">A word about me,</h1>
                    <p className="mb-0">I am a passionate data scientist with an insatiable curiosity for all things related to the world of data and its intricate patterns. My days are immersed in the realm of algorithms, statistics, and machine learning, where I unravel complex insights from seemingly chaotic information. Beyond my professional endeavors, my heart beats for the wonders of science and its captivating narratives. Whether it's the unfolding mysteries of the cosmos or the intricate workings of our own planet, I find solace in the realm of scientific stories.</p>
                    <h1 className="text-3xl font-semibold mt-12 mb-6">Hobbies & Interests,</h1>
                    <p className="mb-0">Beyond the realm of coding, you'll often find me immersed in the fascinating worlds of science, technology, and space. I have a voracious appetite for knowledge, and my downtime is happily consumed by reading and watching content related to these topics. Additionally, I'm a fervent DIY enthusiast, always eager to roll up my sleeves and bring ideas to life.</p>
                    <p className="mt-12">Thank you for stopping by and getting to know a bit about me. Whether you're here for professional collaboration or to share a mutual interest, I'm excited to connect and explore the boundless possibilities that the world of technology has to offer.</p>
                    <button className="btn btn-accent mb-10">Download Resume</button>
                </div>
            </div>
        </div>
    )
}

export default AboutPage