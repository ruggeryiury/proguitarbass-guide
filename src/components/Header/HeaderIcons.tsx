interface HeaderIconsProps {
    src: string
    alt: string
    width: string
    height: string
    className?: string
}

const HeaderIcons: React.FC<HeaderIconsProps> = ({ src, alt, width, height, className }) => {
    return (
        <img src={src} alt={alt} className={`w-6 ${className ? className : ""}`} width={width} height={height} />
    )
}

export default HeaderIcons