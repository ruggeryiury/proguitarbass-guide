import { Link } from "react-router-dom"

export const MainTextTitle: React.FC<React.PropsWithChildren<MainTextTitleProps>> = ({ children, id }) => {
    return <h1 id={`#${id}`} className="!leading-[1.10] w-full text-2xl tablet-md:text-4xl border-b-2 border-main-white/25 text-left px-4 py-3 mb-4"> {typeof children === 'string' ? children.toUpperCase() : children} </h1>
}

export const MainTextParagraph: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <p className="font-text text-left">
        {children}
    </p>
}

export const MainTextBlock: React.FC<React.PropsWithChildren<MainTextBlockProps>> = ({ children, text, bg, measure }) => {

    return (
        <span className={`inline-flex font-normal font-title py-1 px-2 rounded-sm text-sm mx-1 tracking-normal self-center relative -top-[0.10rem] ${bg ? "" : "bg-cyan-800"} ${text ? text : "text-main-white"}`} style={{
            backgroundColor: bg ? bg : ""
        }}>
            {measure ? "[XX:X:XXX]" : children}
        </span>
    )
}

export const MainTextList: React.FC<React.PropsWithChildren<MainTextListProps>> = ({ children, title }) => {

    return (
        <li className='list-inside list-disc'>
            <span className="relative -ml-2 z-[-1]" />
            <strong className="text-cyan-500">{title}:</strong> {children ? children : ""}
        </li>
    )
}

export const MainTextOptions: React.FC<React.PropsWithChildren> = ({ children }) => {

    return <li className="list-inside list-disc mb-0 last:mb-4">{children}</li>
}

export const MainTextHref: React.FC<React.PropsWithChildren<MainTextHrefProps>> = ({ children, href }) => {

    if (href.startsWith("http")) {
        return <a href={href} target="_blank" rel="noreferrer" className='inline text-cyan-500 hover:underline'>{children}</a>

    } else if (href.startsWith("/")) {
        return <Link to={href} className='inline text-cyan-500 hover:underline'>{children}</Link>

    } else {
        return null

    }
}

export const MainTextLink: React.FC<React.PropsWithChildren<MainTextLinkProps>> = ({ children, to, title }) => {

    return (
        <li className='list-inside list-disc'>
            <span className="relative -ml-2 z-[-1]" />
            <a href={to} target="_blank" rel="noreferrer" className='tracking-tight inline font-bold text-cyan-500 hover:underline'>{title}:</a> {children}
        </li>
    )
}

export const MainTextWindow: React.FC<React.PropsWithChildren<MainTextWindowProps>> = ({ children, title }) => {
    return (
        <ul className="bg-neutral-800/90 rounded p-2 mb-4 last:mb-0">
            <li className='list-inside list-disc flex flex-col'>
                <span className="relative -ml-2 z-[-1]" />
                <strong className="text-cyan-500 font-title font-normal mb-2 border-b-2 border-main-white/25 pb-2">{title}</strong><span className="italic text-right tablet-md:text-left"> {children ? children : ""}</span>
            </li>
        </ul>
    )
}