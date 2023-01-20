interface HeaderIconsProps {
    src: string,
    alt: string,
    className?: string
}

const HeaderIcons: React.FC<React.PropsWithChildren<HeaderIconsProps>> = ({ children, src, alt, className }) => {
    return (
        <img src={src} alt={alt} className={`w-6 ${className ? className : ""}`}/>
    )
}

export default HeaderIcons