interface HeaderIconsProps {
    src: string
    alt: string
    width: string
    height: string
    className?: string
}

interface HeaderButtonAreaProps {
    title: string
    size?: string
}

interface HeaderDropdownButtonsProps {
    title: string
    url: string
}

interface HeaderMenuProps {
    activated: boolean
    setHeaderMenu: React.Dispatch<React.SetStateAction<boolean>>
}

interface HeaderMenuCloseActionProps {
    action: React.Dispatch<React.SetStateAction<boolean>>
}

interface HeaderMenuTopicProps {
    title: string
}

interface HeaderMenuTopicLinkProps extends HeaderMenuCloseActionProps {
    to: string
}