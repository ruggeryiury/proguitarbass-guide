import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../app/AppProvider"

export const HeaderMenuTopic = ({ title, children }: HeaderMenuTopicProps) => {
    return (
        <>
            <h2 className="border-b border-main-white w-full text-left pl-1 text-lg mb-2">{title.toUpperCase()}</h2>
            <div className="mb-2 last:mb-0">
                {children}
            </div>
        </>
    )
}

export const HeaderMenuTopicLink = ({ children, action, to, index }: HeaderMenuTopicLinkProps) => {
    const Context = useContext(AppContext)

    const id = index ? 'index' : to.slice(1)
    return <Link to={to} onClick={ev => action(false)} className={`w-fit pl-4 my-1 text-left leading-none mb-2 last:mb-4 ${Context.currentPage === id ? 'text-cyan-500' : 'text-neutral-300'}`}>{(children as string).toUpperCase()}</Link>
}