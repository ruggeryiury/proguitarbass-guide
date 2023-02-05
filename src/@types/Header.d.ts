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
    index?: boolean
}

interface HeaderMenuProps {
    activated: boolean
    setHeaderMenu: React.Dispatch<React.SetStateAction<boolean>>
}

interface HeaderMenuTopicProps extends React.PropsWithChildren {
    title: string
}

interface HeaderMenuTopicLinkProps extends React.PropsWithChildren {
    action: React.Dispatch<React.SetStateAction<boolean>>
    to: string
    index?: boolean
}