import { useState } from "react";

type SheetProps = {
    buttonChildren: React.ReactNode;
    buttonClassName?: string,
    className?: string,
    title?: string,
    children: React.ReactNode,
    defaultOpen?: boolean
}

const Sheet = ({ buttonChildren, children, buttonClassName, className, defaultOpen = false, title }: SheetProps) => {

    const [open, setOpen] = useState(defaultOpen);

    const handleClose = () => setOpen(false);

    const handleOpen = () => setOpen(true);

    return (
        <>
            <button onClick={handleOpen} className={buttonClassName}>{buttonChildren}</button>
            <div className={open ? "absolute w-full left-0 z-10 bottom-0 flex flex-col" : "hidden"}>
                <section className="bg-zinc-900 p-4">
                    <div className="flex flex-cntr-sb border-b border-zinc-500 pb-2 mb-2">
                        <h5>{title}</h5>
                        <button onClick={handleClose} className="px-3 py-1 aspect-square rounded-md border border-gray500/50 customize">X</button>
                    </div>
                    <div className={className}>{children}</div>
                </section>
            </div>
        </>
    )
}

export default Sheet;