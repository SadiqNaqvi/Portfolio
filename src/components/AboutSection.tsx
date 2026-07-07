import GetInTouchButton from "./GetInTouchButton";

const AboutSection = () => (
    <section id="about" className="py-28 px-4 flex-col flex-cntr">
        <span className="catalyst"></span>
        <div className="my-4 animate">
            <h2 className="text-4xl uppercase mb-2 text-center">About me</h2>
            <p className="text-gray-300 text-opacity-40 text-center">
                Who am I and What I do?
            </p>
        </div>

        <div className="my-4 animate delay-150">
            <h3 className="mb-2 text-sm w-full text-gray-400 text-opacity-60 text-left">
                WHO AM I?
            </h3>
            <p>
                I'm Sadiq Naqvi, a self-taught Software Developer from India, recently graduated my Bachelors in Computer Science & Engineering.
                My journey in the tech field is fueled by a strong drive to innovate and contribute positively to our evolving world through programming and problem solving.
            </p>
        </div>

        <div className="my-4 animate delay-200">
            <h3 className="mb-2 text-sm w-full text-gray-400 text-opacity-60 text-left">
                WHAT DO I DO?
            </h3>
            <p>
                I specialize in Full Stack Web Development with 3+ years of hands-on experience building modern web applications using React.js, Next.js, JavaScript, TypeScript, Node.js, MongoDB, and Tailwind CSS.
                Passionate about developing highperformance, responsive, and Progressive Web Applications (PWAs) with clean, maintainable code.
            </p>
            <p className="mt-4">
                Through my experiences, I've encountered and tackled various challenges, refining my skills to ensure seamless and effective solutions.
                Continuously striving for excellence, I'm committed to expanding my knowledge of web development technologies to stay at the forefront of the field.
            </p>
        </div>

        <p className="text-gray-400 my-4 animate delay-300 text-center">
            "I would like to change the world but they won't give me the source code
            :/"
        </p>
        <GetInTouchButton />
    </section>
)

export default AboutSection;