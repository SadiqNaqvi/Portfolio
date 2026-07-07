import { primary_email } from "../lib/constants";
import sendIcon from "../assets/sendIcon.svg";

const GetInTouchButton = ({className}:{className?:string}) => (
    <a title="Mail me" aria-label="Mail button" className={className} href={`mailto:${primary_email}`}>
        <button className="tertiary px-4 py-3">
            <img
                src={sendIcon}
                alt="Contact Icon"
                className="w-6 rotate-45"
            />
            Get in Touch
        </button>
    </a>
)

export default GetInTouchButton;