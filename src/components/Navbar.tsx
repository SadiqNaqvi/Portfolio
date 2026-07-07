import AppLogo from "../assets/appLogo.svg"

const Navbar = () => (
    <nav className="flex items-center sm:justify-between w-full gap-2 flex-col sm:flex-row p-4">
        <span id="navLogo">
            <img src={AppLogo} className="w-8" alt="Portfolio Logo" />
        </span>

        <ul className="flex gap-4">
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
)

export default Navbar;