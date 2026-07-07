import { github_account_link, insta_account_link, linkedin_account_link, primary_email, resume_link, twitter_account_link } from "../lib/constants";
import mailIcon from "../assets/mailIcon.svg";
import briefcaseIcon from "../assets/briefcase.svg";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/githubIcon.svg";
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram.svg";

const Footer = () => (
    <footer id="contact" className="py-28 px-4 flex-cntr flex-col">
        <span className="catalyst"></span>

        <h2 className="my-4 text-4xl animate">Connect and Build</h2>
        
        <h3 className="my-2 text-2xl animate delay-200 text-center">
            Let's Collaborate and Contribute in the repo called `Future`.
        </h3>
        
        <p className="short my-1 text-gray-500 animate delay-200">
            Got an idea, Have a question or just want to say Hi.
        </p>
        <p className="short my-1 text-gray-500 animate delay-200">
            Let's Connect. My inbox is always open for you.
        </p>
        <div className="flex gap-4 my-6 animate delay-300">
            <a href={`mailto:${primary_email}`}>
                <img src={mailIcon} alt="Mail Icon" className="w-8" />
            </a>
            <a href={resume_link} target="_blank">
                <img src={briefcaseIcon} alt="Briefcase Icon" className="w-8" />
            </a>
            <a href={linkedin_account_link} target="_blank">
                <img src={linkedinIcon} alt="Linkedin Icon" className="w-8" />
            </a>
            <a href={github_account_link} target="_blank">
                <img src={githubIcon} alt="Github Icon" className="w-8" />
            </a>
            <a href={twitter_account_link} target="_blank">
                <img src={twitterIcon} alt="Twitter Icon" className="w-8" />
            </a>
            <a href={insta_account_link} target="_blank">
                <img src={instagramIcon} alt="Instagram Icon" className="w-8" />
            </a>
        </div>
        <p className="short text-gray-500 my-1 animate delay-500">
            I'll get back to you as soon as i can.
        </p>
        <p className="short text-gray-500 my-1 animate delay-500">
            Feel free to mail me about any relevant job updates.
        </p>
    </footer>
)

export default Footer;