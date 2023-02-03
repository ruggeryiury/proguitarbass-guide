interface MainTextTitleProps {
    id: string
}
interface MainTextBlockProps {
    text?: string
    bg?: string 
    measure?: boolean
}
interface MainTextListProps {
    title: React.ReactNode | string
}
interface MainTextHrefProps {
    href: string
}
interface MainTextLinkProps {
    to: string
    title: string
}
interface MainTextWindowProps extends MainTextListProps {}