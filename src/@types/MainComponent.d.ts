// MainComponent.tsx

interface MainComponentProps extends React.PropsWithChildren {
    /**
     * The page content configuration, given by the `MainPagesConfig` object.
     */
    config: MainPagesConfigContentProps
}

interface MainPagesConfigContentProps {
    index?: boolean
    title: string,
    url: string,
    type: string,
    anchors?: AnchorsLinkDocument[]
}

interface AnchorsLinkDocument {
    title: string
    id: string
}

interface ScrollUpButtonProps {
    show: boolean
}

// MainComponent Components

interface MainTitleProps extends React.PropsWithChildren {
    id: string
}
interface MainParagraphProps extends React.PropsWithChildren { }

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

interface MainOptionProps extends React.PropsWithChildren { }

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