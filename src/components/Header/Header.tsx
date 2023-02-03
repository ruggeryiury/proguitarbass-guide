import ButtonArea from './ButtonArea'
import HeaderDropdownButtons from './HeaderDropdownButtons'
import HeaderTitle from './HeaderTitle'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'
import HeaderMenu from './HeaderMenu'

const Header = () => {
    const [headerMenu, setHeaderMenu] = useState(false)

    const HandleHeaderButton = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const HeaderMenuContent = document.getElementById("HeaderMenuContent") as HTMLDivElement
        HeaderMenuContent.scrollTo({ top: 0 })
        setHeaderMenu(true)
    }

    return (
        <>
            <HeaderMenu activated={headerMenu} action={setHeaderMenu} />
            <header className='relative z-10 w-full h-[8%] tablet-md:h-[6%] bg-[#222] bg-[url("../../assets/images/pattern-transparency-sm.webp")] bg-[length:128px] outline outline-2 outline-main-white/25 animate-patternMove'>
                <div className='h-full bg-gradient-to-t from-transparent to-[#111] flex-row w-full items-center px-4'>
                    <HeaderTitle />
                    <div className='hidden laptop:flex flex-row ml-auto h-full'>
                        <ButtonArea title="Basics">
                            <HeaderDropdownButtons title="Notes" url="/notes" />
                            <HeaderDropdownButtons title="Chords" url="/chords" />
                            <HeaderDropdownButtons title="Left Hand Position" url="/left-hand-position" />
                        </ButtonArea>
                        <ButtonArea title="Notes and Markers">
                            <HeaderDropdownButtons title="Muted Notes & Chords" url="/muted-notes-and-chords" />
                            <HeaderDropdownButtons title="HO/PO Marker" url="/hopo" />
                            <HeaderDropdownButtons title="Slide Marker" url="/slide" />
                            <HeaderDropdownButtons title="Arpeggio Marker" url="/arpeggio" />
                            <HeaderDropdownButtons title="Strumming Pattern Marker" url="/strumming-pattern" />
                            <HeaderDropdownButtons title="Force Chord Numbering" url="/force-chord-numbering" />
                        </ButtonArea>
                        <ButtonArea title="Events">
                            <HeaderDropdownButtons title="Note Encodings" url="/note-encodings" />
                            <HeaderDropdownButtons title="Overdrive, Solo & BRE" url="/overdrive-solo-bre" />
                            <HeaderDropdownButtons title="Trainer Sections" url="/trainer-sections" />
                            <HeaderDropdownButtons title="Custom Chord Names" url="/custom-chord-names" />
                        </ButtonArea>
                        <ButtonArea title="Mastering">
                            <HeaderDropdownButtons title="Tunings" url="/tunings" />
                            <HeaderDropdownButtons title="Reductions" url="/reductions" />
                            <HeaderDropdownButtons title="Common MAGMA Errors" url="/common-magma-errors" />
                        </ButtonArea>
                    </div>
                    <button aria-label='Header Menu' className='border-2 p-1 border-main-white/25 ml-auto rounded-md flex laptop:hidden' onClick={ev => HandleHeaderButton(ev)}><FiMenu className='text-xl tablet-md:text-base' /></button>
                </div>
            </header>
        </>
    )
}

export default Header