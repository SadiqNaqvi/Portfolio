import avatar from "../assets/avatar.png";
import { resume_link } from "../lib/constants";
import GetInTouchButton from "./GetInTouchButton";

const Header = () => (
    <header id="home" className="py-28 px-4 flex-col flex-cntr">
        <span className="catalyst"></span>

        <div id="intro" className="flex">
            <img
                id="headerAvatar"
                src={avatar}
                alt="Avatar"
                className="animate w-50 aspect-square"
            />

            <div className="flex-col flex-cntr ml-3 animate delay-200">
                <p className="mb-2 text-left text-xl w-full">Hey There 👋,</p>
                <p className="text-left text-3xl">
                    I am <span id="introName" className="relative">Sadiq Naqvi</span>
                </p>
            </div>
        </div>

        <div className="mt-8 animate delay-300 flex-col">
            <span className="mb-2 accent text-sm mx-auto sm:-ml-10">An Enthusiastic</span>
            <p className="text-2xl text-center">Software Developer | Learner | Explorer</p>
        </div>

        <div id="headerOptions" className="-mb-10 mt-10 gap-5 flex animate delay-500">
            <a
                href={resume_link}
                target="_blank"
                title="Resume Link"
                aria-label="Resume Link"
            >
                <button className="primary px-4 py-3">Checkout Resume</button>
            </a>
            <GetInTouchButton />
        </div>
    </header>
)

export default Header;