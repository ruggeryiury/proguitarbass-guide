import { useState } from "react"
import Styles from '../../assets/scss/Header/Header.module.scss'

interface ButtonAreaProps {
    title: string
    size?: string
}

const ButtonArea: React.FC<React.PropsWithChildren<ButtonAreaProps>> = ({ children, title, size }) => {
    const [dropdownActive, setDropdownState] = useState(false)

    return (
        <div className={`relative h-full min-w-[8rem] border-l-2 border-main-white/10 last-of-type:border-r-2`} onMouseOver={ev => setDropdownState(true)} onMouseLeave={ev => setDropdownState(false)}>
            <button className={`w-full justify-center items-center font-condensed h-full duration-200 ${size ? `px-${size}` : "px-4"} ${dropdownActive ? "bg-[#333]/75" : ""}`}>{title}</button>
            <div className={`${Styles.ButtonsDropdownMenu} ${dropdownActive ? "" : "hidden"}`}>
                {children}
            </div>
        </div>
    )
}

export default ButtonArea