import { Link } from "react-router-dom"

export const HeaderMenuIndexLink: React.FC<HeaderMenuCloseActionProps> = ({ action }) => {
    return <Link to="/" onClick={ev => action(false)} className='leading-none text-start text-2xl mb-4'>RUGGY'S PRO GUITAR/BASS GUIDE</Link>
}

export const HeaderMenuTopic: React.FC<React.PropsWithChildren<HeaderMenuTopicProps>> = ({ title, children }) => {
    return (
        <>
            <h2 className="border-b border-main-white w-full text-left pl-1 text-lg mb-2">{title.toUpperCase()}</h2>
            <div className="mb-2 last:mb-0">
                {children}
            </div>
        </>
    )
}

export const HeaderMenuTopicLink: React.FC<React.PropsWithChildren<HeaderMenuTopicLinkProps>> = ({ children, action, to }) => {
    return <Link to={to} onClick={ev => action(false)} className='w-fit pl-4 text-left leading-none mb-2 last:mb-4'>{(children as string).toUpperCase()}</Link>
}