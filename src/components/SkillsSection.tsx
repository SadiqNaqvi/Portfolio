import coolorsLogo from "../assets/coolors.png";
import cssLogo from "../assets/css.png";
import figmaLogo from "../assets/figma.png";
import firebaseLogo from "../assets/firebase.svg";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import htmlLogo from "../assets/html.png";
import javascriptLogo from "../assets/javascript.png";
import mongodbLogo from "../assets/mongodb.png";
import techbookLogo from "../assets/techbookLogo.png";
import typescriptLogo from "../assets/typescript.png";
import vscodeLogo from "../assets/vscodeIcon.png";
import zustandLogo from "../assets/zustand.png";
import SkillTile, { type Skill } from "./SkillTile";

const SkillsSection = () => {

    const languages: Skill[] = [
        {
            label: "HTML",
            logo: htmlLogo
        },
        {
            label: "CSS",
            logo: cssLogo
        },
        {
            label: "JavaScript",
            logo: javascriptLogo
        },
        {
            label: "TypeScript",
            logo: typescriptLogo
        },
    ]

    const frontend: Skill[] = [
        {
            label: "React JS",
            logo: "https://avatars.githubusercontent.com/u/6412038?s=200&v=4",
        },
        {
            label: "Next JS",
            logo: "https://avatars.githubusercontent.com/u/126103961?s=200&v=4",
        },
        {
            label: "Tailwind",
            logo: "https://avatars.githubusercontent.com/u/67109815?s=200&v=4",
        },
        {
            label: "Zustand",
            logo: zustandLogo,
        },
        {
            label: "Tanstack Query & Router",
            logo: "https://tanstack.com/apple-touch-icon.png",
        },
    ]

    const backend: Skill[] = [
        {
            label: "Node JS",
            logo: "https://avatars.githubusercontent.com/u/9950313?s=200&v=4",
        },
        {
            label: "Ably",
            logo: "https://avatars.githubusercontent.com/u/1859245?s=200&v=4",
        },
        {
            label: "Zod",
            logo: "https://media2.dev.to/dynamic/image/width=800,fit=scale-down,gravity=auto,format=auto/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gpeh3ce2tf7p5av777dm.png",
        },
    ]

    const databases: Skill[] = [
        {
            label: "Mongo DB",
            logo: mongodbLogo,
        },
        {
            label: "Firebase",
            logo: firebaseLogo,
        },
        {
            label: "Redis",
            logo: "https://redis.io/docs/latest/images/favicons/mstile-150x150.png",
        },
    ]

    const vcs: Skill[] = [
        {
            label: "Git",
            logo: gitLogo,
        },
        {
            label: "Github",
            logo: githubLogo,
        },
    ]

    const tools: Skill[] = [
        {
            label: "Chat gpt",
            logo: "https://chatgpt.com/cdn/assets/favicon-l4nq08hd.svg",
        },
        {
            label: "Claude Code",
            logo: "https://assets-proxy.anthropic.com/claude-ai/v2/assets/v1/cd02a42d9-Vq_H3mgS.svg",
        },
        {
            label: "VS code",
            logo: vscodeLogo,
        },
        {
            label: "Figma",
            logo: figmaLogo,
        },
        {
            label: "Techbook",
            logo: techbookLogo,
        },
        {
            label: "Coolors",
            logo: coolorsLogo,
        },
    ]

    const skillDivision: { heading: string, skills: Skill[] }[] = [
        {
            heading: "The Languages I Know.",
            skills: languages
        },
        {
            heading: "The Tools I use at Frontend.",
            skills: frontend
        },
        {
            heading: "The Tools I use at Backend.",
            skills: backend
        },
        {
            heading: "The Databases I use right now.",
            skills: databases
        },
        {
            heading: "The Version Control System ofcourse.",
            skills: vcs
        },
        {
            heading: "Other useful tools worth mentioning.",
            skills: tools
        },
    ]

    return (

        <section id="skills" className="py-28 px-4 flex-col flex-cntr">
            <div className="my-4 relative">
                <span className="catalyst"></span>
                <h2 className="text-4xl mb-2 uppercase text-center">My Skills</h2>
                <span className="text-gray-300 text-opacity-40 text-center w-full block">The Languages and Dev Tools I use.</span>
            </div>
            <div>
                {skillDivision.map(({ heading, skills }) => (
                    <div className="relative my-6">
                        <span className="catalyst"></span>
                        <h3 className="text-gray-400 text-center animate">{heading}</h3>
                        <ul className="my-2 mx-auto justify-center lg:w-[80%] flex flex-wrap gap-3 animate delay-100">
                            {skills.map(({ label, logo }, i) => (
                                <li className="contents" key={i}>
                                    <SkillTile label={label} logo={logo} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection;