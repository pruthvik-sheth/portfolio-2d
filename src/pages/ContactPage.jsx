import { SiMaildotru, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";

const ContactPage = () => {

    return (
        <div className="col-span-2">
            <div className="py-12 border">
                <div className="w-5/6 mx-auto">
                    <h1 className="text-5xl font-black leading-8">Contact<br /><span className="text-lg font-semibold">Me</span></h1>
                </div>
            </div>

            <div className="py-12 border border-t-0">
                <div className="w-5/6 mx-auto">
                    <p className="mb-12">I'm thrilled that you want to connect. Whether you have a question, a collaboration proposal, or just want to chat about the latest in tech, feel free to reach out. I'm always open to new opportunities and conversations.</p>
                    <div className="flex items-center mb-4">
                        <SiMaildotru />
                        <p className="mb-0 ml-4">You can drop me a line at: <a href="mailto:pns00911@gmail" className="text-accent underline">pns00911@gmail</a></p>
                    </div>
                    <div className="flex items-center mb-4">
                        <SiLinkedin />
                        <p className="mb-0 ml-4">Connect with me on: <a href="https://www.linkedin.com/in/pruthvik-sheth/" className="text-accent underline">linkedin.com/in/pruthvik-sheth</a></p>
                    </div>
                    <div className="flex items-center mb-4">
                        <SiGithub />
                        <p className="mb-0 ml-4">Explore my coding adventures on: <a href="https://github.com/pruthvik-sheth" className="text-accent underline">github.com/pruthvik-sheth</a></p>
                    </div>
                    <div className="flex items-center mb-4">
                        <SiTwitter />
                        <p className="mb-0 ml-4">Twitter: <a href="https://twitter.com/pruthvik_sheth" className="text-accent underline">twitter.com/pruthvik_sheth</a></p>
                    </div>
                    <p className="mt-10 mb-0">I'm looking forward to hearing from you! Your thoughts and ideas are always welcome.<br />Best regards,<br /><br />Pruthvik Sheth</p>
                </div>
            </div>
        </div >
    )
}

export default ContactPage