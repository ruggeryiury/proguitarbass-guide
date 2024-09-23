import { Link } from 'react-router-dom'

export const MainTitle = ({ index, config }: MainTitleProps) => {
  if (config.anchors) {
    const anchor = config.anchors[index]

    return (
      <h1
        id={`#Anchor_${anchor.id}`}
        className="!leading-[1.10] w-full text-2xl tablet-md:text-4xl border-b-2 border-main-white/25 text-left px-4 py-3 mb-4"
      >
        {anchor.title.toUpperCase()}
      </h1>
    )
  }

  return null
}

export const MainParagraph = ({ children }: MainParagraphProps) => {
  return <p className="font-text text-left">{children}</p>
}

export const MainBlock = ({ children, text, bg, measure, noMarginLeft, noMarginRight }: MainBlockProps) => {
  return (
    <span
      className={`inline-flex font-normal font-title py-1 px-2 rounded-sm text-sm ${noMarginLeft ? '' : 'ml-1'} ${noMarginRight ? '' : 'mr-1'} tracking-normal self-center relative -top-[0.10rem] ${bg ? '' : 'bg-cyan-800'} ${text ? text : 'text-main-white'}`}
      style={{
        backgroundColor: bg ? bg : '',
      }}
    >
      {measure ? '[XX:X:XXX]' : children}
    </span>
  )
}

export const MainList = ({ children, title, decimal }: MainListProps) => {
  return (
    <li className="list-inside">
      <span className={`relative -ml-2 z-[-1] ${decimal ? 'hidden' : ''}`} />
      <strong className="text-cyan-500">{title}:</strong> {children ? children : ''}
    </li>
  )
}

export const MainOptions = ({ children }: MainOptionProps) => {
  return <li className="list-inside mb-0 last:mb-4">{children}</li>
}

export const MainHref = ({ children, href }: MainHrefProps) => {
  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline text-cyan-500 hover:underline"
      >
        {children}
      </a>
    )
  } else if (href.startsWith('/')) {
    return (
      <Link
        to={href}
        className="inline text-cyan-500 hover:underline"
      >
        {children}
      </Link>
    )
  } else {
    return null
  }
}

export const MainLink = ({ children, to, title }: MainLinkProps) => {
  return (
    <li className="list-inside list-disc">
      <span className="relative -ml-2 z-[-1]" />
      <a
        href={to}
        target="_blank"
        rel="noreferrer"
        className="tracking-tight inline font-bold text-cyan-500 hover:underline"
      >
        {title}:
      </a>{' '}
      {children}
    </li>
  )
}

export const MainWindow = ({ children, title }: MainWindowProps) => {
  return (
    <ul className="bg-neutral-800/90 rounded p-2 mb-4 last:mb-0">
      <li className="list-inside list-disc flex flex-col">
        <span className="relative -ml-2 z-[-1]" />
        <strong className="text-cyan-500 font-title font-normal mb-2 border-b-2 border-main-white/25 pb-2">{title}</strong>
        <span className="italic text-right tablet-md:text-left"> {children ? children : ''}</span>
      </li>
    </ul>
  )
}
