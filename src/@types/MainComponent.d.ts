interface MainComponentProps extends React.PropsWithChildren {
    /**
     * The page ID, it will use to create the link anchors.
     */
    id: string
    /**
     * The page title, it will appear on the left of the screen (desktop)
     * and as the first element (mobile)
     */
    title: string
}

interface ScrollUpButtonProps {
    show: boolean
}

interface MainTitleProps extends React.PropsWithChildren {
    id: string
}
interface MainParagraphProps extends React.PropsWithChildren {}

interface MainBlockProps extends React.PropsWithChildren {
    text?: string
    bg?: string 
    measure?: boolean
    noMarginLeft?: boolean
    noMarginRight?: boolean
}

interface MainListProps extends React.PropsWithChildren {
    title: React.ReactNode | string
    decimal?: boolean
}

interface MainOptionProps extends React.PropsWithChildren {}

interface MainHrefProps extends React.PropsWithChildren {
    href: string
}

interface MainLinkProps extends React.PropsWithChildren {
    to: string
    title: string
}

interface MainWindowProps extends React.PropsWithChildren {
    title: React.ReactNode | string
}