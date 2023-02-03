import { useEffect } from "react"
import { Link } from "react-router-dom"
import { IoCloseSharp } from 'react-icons/io5'
import { HeaderMenuIndexLink as IndexLink, HeaderMenuTopic as Topic, HeaderMenuTopicLink as TopicLink } from "./HeaderMenu.components"

const HeaderMenu: React.FC<HeaderMenuProps> = ({ activated, setHeaderMenu }) => {

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
                    <button aria-label='Close Header Menu' className="w-fit" onClick={ev => setHeaderMenu(false)}>
                        <IoCloseSharp className="text-2xl" />
                    </button>
                </div>
            </div>
            <div id='HeaderMenuContent' style={{ left: '-100%' }} className='fixed items-start bg-gradient-to-br from-cyan-700/90 to-cyan-800/90 z-30 w-[90%] h-screen duration-300 px-4 py-4 overflow-y-auto'>
                <IndexLink action={setHeaderMenu} />

                <Topic title="Basics">
                    <TopicLink to='/notes' action={setHeaderMenu}>Notes</TopicLink>
                    <TopicLink to='/chords' action={setHeaderMenu}>Chords</TopicLink>
                    <TopicLink to='/left-hand-position' action={setHeaderMenu}>Left Hand Position</TopicLink>
                </Topic>

                <Topic title='Notes & Markers'>
                    <TopicLink to='/muted-notes-and-chords' action={setHeaderMenu}>Muted Notes & Chords</TopicLink>
                    <TopicLink to='/hopo' action={setHeaderMenu}>Hammer-ons & Pull-offs</TopicLink>
                    <TopicLink to='/slide' action={setHeaderMenu}>Slide Markers</TopicLink>
                    <TopicLink to='/arpeggio' action={setHeaderMenu}>Arpeggio Markers</TopicLink>
                    <TopicLink to='/strumming-pattern' action={setHeaderMenu}>Strumming Pattern Markers</TopicLink>
                    <TopicLink to='/force-chord-numbering' action={setHeaderMenu}>Force Chord Numbering</TopicLink>
                    <TopicLink to='/trill-tremolo' action={setHeaderMenu}>Trill & Tremolo Markers</TopicLink>
                </Topic>

                <Topic title='Events'>
                    <TopicLink to='/note-encodings' action={setHeaderMenu}>Note Encodings</TopicLink>
                    <TopicLink to='/overdrive-solo-bre' action={setHeaderMenu}>Overdrive, Solo & BRE</TopicLink>
                    <TopicLink to='/trainer-sections' action={setHeaderMenu}>Trainer Sections</TopicLink>
                    <TopicLink to='/custom-chord-names' action={setHeaderMenu}>Custom Chord Names</TopicLink>
                </Topic>

                <Topic title='Mastering'>
                    <TopicLink to='/tunings' action={setHeaderMenu}>Tunings</TopicLink>
                    <TopicLink to='/reductions' action={setHeaderMenu}>Reductions</TopicLink>
                    <TopicLink to='/common-magma-errors' action={setHeaderMenu}>Common MAGMA Errors</TopicLink>
                </Topic>
            </div>
        </>
    )
}

export default HeaderMenu