import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ProGtrIcon from '../assets/images/progtr.webp'
import ProBassIcon from '../assets/images/probass.webp'
import { AppContext } from '../app/AppProvider'

export const HeaderTitle = () => {
  return (
    <div className="flex-row items-center h-full group cursor-default">
      <HeaderIcons
        src={ProGtrIcon}
        alt="PRO Guitar Icon"
        width="64"
        height="64"
      />
      <HeaderIcons
        src={ProBassIcon}
        alt="PRO Bass Icon"
        className="mr-2"
        width="64"
        height="64"
      />
      <h1 className="text-left text-sm laptop-lg:text-base !leading-[1.10] duration-200 group-hover:drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]">RUGGY'S PRO GUITAR/BASS GUIDE</h1>
    </div>
  )
}

export const HeaderIcons = ({ src, alt, width, height, className }: HeaderIconsProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-6 ${className ? className : ''}`}
      width={width}
      height={height}
    />
  )
}

export const ButtonArea = ({ children, title, size }: React.PropsWithChildren<HeaderButtonAreaProps>) => {
  const [dropdownActive, setDropdownState] = useState(false)

  return (
    <div
      className="relative h-full min-w-[8rem] border-l-2 border-main-white/10 last-of-type:border-r-2"
      onMouseOver={(ev) => setDropdownState(true)}
      onMouseLeave={(ev) => setDropdownState(false)}
    >
      <button className={`w-full justify-center items-center font-condensed h-full duration-200 ${size ? `px-${size}` : 'px-4'} ${dropdownActive ? 'bg-[#333]/75' : ''}`}>{title}</button>
      <div className={`absolute w-full left-0 top-full bg-main-black/[.99] rounded-b-md mb-2 p-2 border-b-2 border-x-2 border-main-white/25 animate-rotateMenu origin-top ${dropdownActive ? '' : 'hidden'}`}>{children}</div>
    </div>
  )
}

export const HeaderDropdownButtons = ({ title, url, index }: HeaderDropdownButtonsProps) => {
  const Context = useContext(AppContext)
  const id = index ? 'index' : url.slice(1)

  if (Context.currentPage === id) {
    return <div className="rounded-md last:mb-0 leading-none py-4 font-condensed bg-[#262626] px-4 mb-1 border-2 border-main-white/5 cursor-default">{title}</div>
  } else {
    return (
      <Link
        to={url}
        className="rounded-md last:mb-0 leading-none py-4 font-condensed hover:bg-[#262626] px-4 mb-1 border-2 border-main-white/5"
      >
        {title}
      </Link>
    )
  }
}
