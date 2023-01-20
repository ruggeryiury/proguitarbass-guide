import { Link } from "react-router-dom"
import Styles from '../../assets/scss/Header/Header.module.scss'

interface HeaderDropdownButtonsProps {
    title: string
    url: string
}

const HeaderDropdownButtons: React.FC<HeaderDropdownButtonsProps> = ({ title, url }) => {
    return (
        <Link to={url} className={`${Styles.ButtonsDropdownMenuLinks}`}>{title}</Link>
    )
}

export default HeaderDropdownButtons