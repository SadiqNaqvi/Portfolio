import Sheet from "./Sheet";
import sendIcon from "../assets/sendIcon.svg"

export type ProjectSlideProps = {
    name: string,
    description: string,
    logo_path?: string,
    giantImage: string,
    path: string,
}

const ProjectSlide = ({ description, giantImage, name, path, logo_path }: ProjectSlideProps) => {
    return (
        <article className="flex-cntr flex-col size-full min-w-full snap-center">
            <img
                className="w-full aspect-video customize object-contain"
                src={giantImage}
                alt={`Image for project - ${name}`}
            />
            <div className="mt-6 size-full rounded-2xl flex-cntr flex-col gap-2">
                <div className="flex items-center gap-2">
                    {logo_path && (
                        <img src={logo_path} alt={`Logo of project ${name}`} className="w-8 rounded-md" />
                    )}
                    <h3 className="text-2xl">{name}</h3>
                </div>
                <div className="flex gap-2">
                    <Sheet
                        buttonChildren="View Details"
                        buttonClassName="primary inline"
                        title={name}
                    >
                        <p className="px-2 whitespace-pre-line">{description}</p>
                    </Sheet>
                    <a href={path} target="_blank" className="inline">
                        <button className="tertiary">
                            <img
                                src={sendIcon}
                                alt="Visit Icon"
                                className="w-6"
                            />
                            Visit Project
                        </button>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default ProjectSlide;