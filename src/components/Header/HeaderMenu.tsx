import { useEffect } from "react"
import { Link } from "react-router-dom"
import { IoCloseSharp } from 'react-icons/io5'
import '../../assets/scss/Header/Header.scss'

interface HeaderMenuProps {
    activated: boolean
    action: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ activated, action }) => {

    const CloseHeaderMenu = () => {
        action(false)
    }
    useEffect(() => {
        const HeaderMenuBG = document.getElementById("HeaderMenuBG") as HTMLDivElement
        const HeaderMenuContent = document.getElementById("HeaderMenuContent") as HTMLDivElement

        if (activated) {
            document.body.style.overflowY = 'hidden'
            HeaderMenuBG.style.left = '0'

            setTimeout(() => {
                HeaderMenuContent.style.left = '0'
            }, 100)
        } else {
            document.body.style.overflowY = 'auto'
            HeaderMenuContent.style.left = '-100%'

            setTimeout(() => {
                HeaderMenuBG.style.left = '-100%'
            }, 100)
        }
    }, [activated])

    return (
        <>
            <div id='HeaderMenuBG' className="fixed bg-main-black/90 z-20 w-full h-screen duration-300" style={{ left: '-100%' }}>
                <div className="w-[10%] ml-auto items-center py-2">
                    <button aria-label='Close Header Menu' className="w-fit" onClick={ev => CloseHeaderMenu()}>
                        <IoCloseSharp className="text-2xl" />
                    </button>
                </div>
            </div>
            <div id='HeaderMenuContent' style={{ left: '-100%' }}>
                <Link to="/" onClick={ev => CloseHeaderMenu()}>RUGGY'S PRO GUITAR/BASS GUIDE</Link>

                <h2>BASICS</h2>
                <div>
                    <Link to="/notes" onClick={ev => CloseHeaderMenu()}>NOTES</Link>
                    <Link to="/chords" onClick={ev => CloseHeaderMenu()}>CHORDS</Link>
                </div>

                <h2>MARKERS</h2>
                <div>
                    <Link to='/muted-notes-and-chords' onClick={ev => CloseHeaderMenu()}>MUTED NOTES & CHORDS</Link>
                    <Link to='/hopo' onClick={ev => CloseHeaderMenu()}>HO/PO MARKER</Link>
                    <Link to='/slide' onClick={ev => CloseHeaderMenu()}>SLIDE MARKER</Link>
                    <Link to='/arpeggio' onClick={ev => CloseHeaderMenu()}>ARPEGGIO MARKER</Link>
                    <Link to='/strumming-pattern' onClick={ev => CloseHeaderMenu()}>STRUMMING PATTERN MARKER</Link>
                    <Link to='/force-chord-numbering' onClick={ev => CloseHeaderMenu()}>FORCE CHORD NUMBERING</Link>
                </div>
                <h2>EVENTS</h2>
                <div>
                    <Link to='/left-hand-position' onClick={ev => CloseHeaderMenu()}>LEFT HAND POSITION</Link>
                    <Link to='/note-encodings' onClick={ev => CloseHeaderMenu()}>NOTE ENCODINGS</Link>
                    <Link to='/overdrive-solo-bre' onClick={ev => CloseHeaderMenu()}>OVERDRIVE, SOLO & BRE</Link>
                    <Link to='/trainer-sections' onClick={ev => CloseHeaderMenu()}>TRAINER SECTIONS</Link>
                    <Link to='/custom-chord-names' onClick={ev => CloseHeaderMenu()}>CUSTOM CHORD NAMES</Link>
                </div>
                <h2>MASTERING</h2>
                <div>
                    <Link to='/tunings' onClick={ev => CloseHeaderMenu()}>TUNINGS</Link>
                    <Link to='/reductions' onClick={ev => CloseHeaderMenu()}>REDUCTIONS</Link>
                    <Link to='/common-magma-errors' onClick={ev => CloseHeaderMenu()}>COMMON MAGMA ERRORS</Link>
                </div>
            </div>
        </>
    )
}

export default HeaderMenu