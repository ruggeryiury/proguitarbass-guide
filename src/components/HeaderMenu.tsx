import { useEffect } from "react"
import { IoCloseSharp } from 'react-icons/io5'
import { HeaderMenuTopic as Topic, HeaderMenuTopicLink as TopicLink } from "./HeaderMenu.components"
import HeaderConfig from '../services/constants/HeaderConfig'
import MainPagesConfig from "../services/constants/MainPagesConfig"

const HeaderMenu = ({ activated, setHeaderMenu }: HeaderMenuProps) => {

    const PageNames = Object.keys(MainPagesConfig)

    useEffect(() => {

        const HeaderMenuActivation = () => {
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
        }

        HeaderMenuActivation()
    }, [activated])

    return (
        <>
            <div id='HeaderMenuBG' className="fixed bg-main-black/80 z-20 w-full h-screen duration-300  backdrop-blur-sm" style={{ left: '-100%' }}>
                <div className="w-[10%] ml-auto items-center py-2">
                    <button aria-label='Close Header Menu' className="w-fit" onClick={ev => setHeaderMenu(false)}>
                        <IoCloseSharp className="text-2xl" />
                    </button>
                </div>
            </div>
            <div id='HeaderMenuContent' style={{ left: '-100%' }} className='fixed items-start bg-gradient-to-br from-[#111]/90 to-[#121217]/90 z-30 w-[90%] h-screen duration-300 px-4 py-4 overflow-y-auto'>
                <h1 className="leading-none text-start text-2xl mb-4 uppercase">Ruggy's PRO Guitar/Bass Guide</h1>

                <Topic title={HeaderConfig.basics.title}>
                    {
                        PageNames.map((value, index) => {
                            const content = MainPagesConfig[value]
                            return content.type === 'basics' ? <TopicLink key={`basicsButtonMobile${index}`} index={content.index ? true : false} to={content.url} action={setHeaderMenu}>{content.title}</TopicLink> : null
                        })
                    }
                </Topic>

                <Topic title={HeaderConfig['notes-and-markers'].title}>
                    {
                        PageNames.map((value, index) => {
                            const content = MainPagesConfig[value]
                            return content.type === 'notes-and-markers' ? <TopicLink key={`notesAndMarkersButtonMobile${index}`} index={content.index ? true : false} to={content.url} action={setHeaderMenu}>{content.title}</TopicLink> : null
                        })
                    }
                </Topic>

                <Topic title={HeaderConfig.events.title}>
                    {
                        PageNames.map((value, index) => {
                            const content = MainPagesConfig[value]
                            return content.type === 'events' ? <TopicLink key={`eventsButtonMobile${index}`} index={content.index ? true : false} to={content.url} action={setHeaderMenu}>{content.title}</TopicLink> : null
                        })
                    }
                </Topic>

                <Topic title={HeaderConfig.mastering.title}>
                    {
                        PageNames.map((value, index) => {
                            const content = MainPagesConfig[value]
                            return content.type === 'mastering' ? <TopicLink key={`masteringButtonMobile${index}`} index={content.index ? true : false} to={content.url} action={setHeaderMenu}>{content.title}</TopicLink> : null
                        })
                    }
                </Topic>
            </div>
        </>
    )
}

export default HeaderMenu