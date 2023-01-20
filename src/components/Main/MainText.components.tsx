import { Link } from "react-router-dom"

export const MainTextTitle: React.FC<React.PropsWithChildren<MainTextTitleProps>> = ({ children, id }) => {
    return <h1 id={`#${id}`} className="!leading-[1.10] w-full text-2xl tablet-md:text-4xl border-b-2 border-main-white/25 text-left px-4 py-3 mb-4"> {typeof children === 'string' ? children.toUpperCase() : children} </h1>
}

export const MainTextParagraph: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <p className="font-text text-left">{children}</p>
}

export const MainTextBlock: React.FC<React.PropsWithChildren<MainTextBlockProps>> = ({ children, color, invertTextColor }) => {
    return <span className={`inline-flex font-title py-1 px-2 rounded-sm text-sm mx-1 tracking-normal self-center relative -top-[0.10rem] ${color ? "" : "bg-cyan-600"}`} style={{
        backgroundColor: color ? color : "",
        color: invertTextColor ? "#080808" : ""
    }}>{children}</span>
}

export const MainTextList: React.FC<React.PropsWithChildren<MainTextListProps>> = ({ children, title }) => {
    return <li>
        <span className="relative -ml-2 z-[-1]">
            <strong className="text-cyan-500 ">{typeof title === 'string' ? `${title}: ` : title}</strong>
            {children ? children : ""}
        </span>
    </li>
}

export const MainTextOptions: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <li className="mb-0 last:mb-4">{children}</li>
}

export const MainTextHref: React.FC<React.PropsWithChildren<MainTextHrefProps>> = ({ children, href }) => {
    if (href.startsWith("http")) {
        return (
            <a href={href} target="_blank" rel="noreferrer" className='inline-flex text-cyan-500 hover:underline'>{children}</a>
        )
    } else if (href.startsWith("/")) {
        return (
            <Link to={href} className='inline-flex text-cyan-500 hover:underline'>{children}</Link>
        )
    } else {
        return null
    }
}

export const MainTextLink: React.FC<React.PropsWithChildren<MainTextLinkProps>> = ({ children, to, title }) => {
    return <li>
        <span className="relative -ml-2 z-[-1]"></span>
        <a href={to} target="_blank" rel="noreferrer" className='tracking-tight inline-flex font-bold text-cyan-500 hover:underline'>{title}</a>: {children}
    </li>
}