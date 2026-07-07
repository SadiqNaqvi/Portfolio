import { useRef, type PropsWithChildren } from "react"
import nextIcon from "../assets/nextIcon.svg";
import prevIcon from "../assets/prevIcon.svg";
import pagesProjectLogo from "../assets/pagesLogo.png";
import pagesProjectImage from "../assets/pagesProject.png";
import techbookProjectLogo from "../assets/techbookLogo.png";
import techbookProjectImage from "../assets/techbookProject.png";
import parloculaProjectImage from "../assets/project_parlocula.png";
import redisFlowProjectImage from "../assets/redisFlow_project.webp";
import sendIcon from "../assets/sendIcon.svg";
import codepen from "../assets/codepen.svg";
import starsIcon from "../assets/startsIcon.svg";
import type { ProjectSlideProps } from "./ProjectSlide";
import ProjectSlide from "./ProjectSlide";
import GetInTouchButton from "./GetInTouchButton";

const Carousel = ({ children }: PropsWithChildren) => {

    const containerRef = useRef<HTMLUListElement | null>(null);

    const goNext = () => {
        const carouselContainer = containerRef.current;
        if (!carouselContainer) return;
        const atEnd = carouselContainer.scrollLeft + carouselContainer.clientWidth >= carouselContainer.scrollWidth
        if (atEnd) return;

        carouselContainer.scrollLeft += carouselContainer.clientWidth;
    }

    const goPrev = () => {
        const carouselContainer = containerRef.current;
        if (!carouselContainer || carouselContainer.scrollLeft <= 1) return;

        carouselContainer.scrollLeft -= carouselContainer.clientWidth;
    }

    return (
        <div className="relative animate delay-100 w-full">
            <ul ref={containerRef} className="pb-2 noScroll overflow-x-auto scroll-smooth flex items-center snap-x snap-mandatory">
                {children}
            </ul>
            <div className="pt-4 sm:pt-0 flex-cntr-sb">
                <button onClick={goPrev} className="border-2 sm:absolute bottom-4 left-0">
                    <img src={prevIcon} alt="Prev Button" className="w-6" />
                </button>

                <button onClick={goNext} className="border-2 sm:absolute bottom-4 right-0">
                    <img src={nextIcon} alt="Next Button" className="w-6" />
                </button>
            </div>
        </div>
    )
}

const ProjectsSection = () => {

    const projects: ProjectSlideProps[] = [
        {
            name: "Pages",
            description: `Meet Pages, a sophisticated web app, designed to elevate your note-taking experience. Whether you're a student, professional, or creative thinker, Pages caters to your needs with its seamless interface and powerful features. \n\nAccessible anytime, anywhere, and built with cutting-edge technologies, Pages ensures a secure, responsive, and visually stunning note-taking experience across all your devices. \n\n Tech Stack: React JS, Firebase`,
            giantImage: pagesProjectImage,
            logo_path: pagesProjectLogo,
            path: "https://pagesbysadiq.web.app"
        },
        {
            name: "Techbook",
            description: `A Progressive Web Application that combines note-taking, task management, and lightweight design creation in a single platform. It is the next evolution of "Pages - Digital Notebook", boasting enhanced features and unmatched performance. Perfect for those living in the digital realm, offering a personalized space to store everything from online snippets to design prototypes.

                            Highlights

                            - Offline-capable PWA experience
                            - Real-time cloud synchronization
                            - Firebase serverless architecture
                            
                            Tech Stack: React.js, Firebase
                          `,
            giantImage: techbookProjectImage,
            logo_path: techbookProjectLogo,
            path: "https://mytechbook.web.app"
        },
        {
            name: "Parlocula",
            description: `A community-driven social media platform designed for movie and TV show enthusiasts.
                            
                            Highlights :-

                            - Real-time interactions using Ably
                            - Push notifications
                            - Scalable data layer with Redis caching
                            - Modern responsive UI
                            - Optimized data fetching with TanStack Query
                                    
                            Tech Stack: Next.js, MongoDB, Redis, Tailwind CSS, Ably, Zustand, Zod, REST APIs, Web Push Notifications
`,
            giantImage: parloculaProjectImage,
            logo_path: "https://parlocula.vercel.app/android-chrome-192x192.png",
            path: "https://parlocula.vercel.app"
        },
        {
            name: "Redis Flow",
            description: `An open-source TypeScript library built to simplify Redis workflows and developer experience.

                            Highlights

                            - Open-source project
                            - Type-safe developer experience
                            - Focus on clean abstractions and maintainability

                            Tech Stack: TypeScript
`,
            giantImage: redisFlowProjectImage,
            path: "https://npmjs.org/package/@redis-flow/core"
        },
    ]

    return (
        <section id="projects" className="py-28 px-4 flex-col justify-center">
            <span className="catalyst"></span>
            <div className="my-8 mx-auto animate">
                <h2 className="text-4xl my-2 text-center">My Projects</h2>
                <p className="text-gray-400 text-center">The Landmarks of my Tech Journey</p>
            </div>
            <Carousel>
                {projects.map(project => (
                    <li key={project.path} className="contents">
                        <ProjectSlide {...project} />
                    </li>
                ))}
                <li className="contents">
                    <article className="flex-cntr min-w-full snap-center">
                        <div className="sm:w-[90%] w-full aspect-video p-4 border border-dashed border-(--accent) rounded-2xl flex-cntr flex-col gap-2">
                            <img src={codepen} alt="Codepen.io icon" className="w-12" />
                            <h3 className="text-2xl">My Codepen</h3>
                            <p className="short text-gray-400 text-xs text-center">
                                Find some of my simple but interesting projects on my codepen.
                            </p>
                            <a href="https://codepen.io/Sadiq-Naqvi" target="_blank">
                                <button className="tertiary mt-8">
                                    <img
                                        src={sendIcon}
                                        alt="Visit Button"
                                        className="w-6 rotate-45"
                                    />
                                    Visit
                                </button>
                            </a>
                        </div>
                    </article>
                </li>
                <li className="contents">
                    <article className="flex-cntr min-w-full snap-center">
                        <div className="sm:w-[90%] w-full aspect-video p-4 border border-dashed border-(--accent) rounded-2xl flex-cntr flex-col gap-2">
                            <img src={starsIcon} alt="" className="w-12" />
                            <h3 className="text-2xl">Our Project Goes Here</h3>
                            <p className="text-gray-400 text-xs">Yes, Your idea and My code.</p>
                            <p className="text-gray-400 text-xs text-center">
                                Let's turn your idea into a visual reality.
                            </p>
                            <GetInTouchButton className="mt-4" />
                        </div>
                    </article>
                </li>
            </Carousel>
        </section>
    )
}

export default ProjectsSection;