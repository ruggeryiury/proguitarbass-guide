import { Link } from "react-router-dom"
import HeaderIcons from "./HeaderIcons"
import ProGtrIcon from '../../assets/images/progtr.webp'
import ProBassIcon from '../../assets/images/probass.webp'

const HeaderTitle = () => {
    return (
        <Link to="/" className='flex-row items-center h-full group' title="Go back to Main Page">
            <HeaderIcons src={ProGtrIcon} alt="PRO Guitar Icon" />
            <HeaderIcons src={ProBassIcon} alt="PRO Bass Icon" className='mr-2' />
            <h1 className="text-left text-sm laptop-lg:text-base !leading-[1.10] duration-200 group-hover:drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]">RUGGY'S PRO GUITAR/BASS GUIDE</h1>
        </Link>
    )
}

export default HeaderTitle