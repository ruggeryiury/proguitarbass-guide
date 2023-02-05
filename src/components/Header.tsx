import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { HeaderTitle, ButtonArea, HeaderDropdownButtons } from './Header.components'
import HeaderMenu from './HeaderMenu'

const Header = () => {

    const [headerMenu, setHeaderMenu] = useState(false)

    return (
        <>
            <HeaderMenu activated={headerMenu} setHeaderMenu={setHeaderMenu} />
            <header className='relative z-10 w-full mobile:landscape:h-[12%] mobile:portrait:h-[8%] laptop:landscape:h-[6%] tablet-md:portrait:h-[6%] bg-[#222] bg-[url("../../assets/images/pattern-transparency-sm.webp")] bg-[length:128px] border-b border-main-white/20 shadow-[0px_8px_24px_0px_rgba(0,0,0,1)] animate-patternMove' >
                <div className='h-full bg-gradient-to-t from-transparent to-[#111] flex-row w-full items-center px-4'>
                    <HeaderTitle />
                    <div className='hidden laptop:flex flex-row ml-auto h-full'>
                        <ButtonArea title="Basics">
                            <HeaderDropdownButtons index title="Getting Started" url="/" />
                            <HeaderDropdownButtons title="Notes" url="/notes" />
                            <HeaderDropdownButtons title="Chords" url="/chords" />
                            <HeaderDropdownButtons title="Left Hand Position" url="/left-hand-position" />
                        </ButtonArea>
                        <ButtonArea title="Notes & Markers">
                            <HeaderDropdownButtons title="Muted Notes & Chords" url="/muted-notes-and-chords" />
                            <HeaderDropdownButtons title="Hammer-ons & Pull-offs" url="/hopo" />
                            <HeaderDropdownButtons title="Slide Markers" url="/slide" />
                            <HeaderDropdownButtons title="Arpeggio Markers" url="/arpeggio" />
                            <HeaderDropdownButtons title="Strumming Pattern Markers" url="/strumming-pattern" />
                            <HeaderDropdownButtons title="Force Chord Numbering" url="/force-chord-numbering" />
                            <HeaderDropdownButtons title='Trill & Tremolo Markers' url='/trill-tremolo' />
                        </ButtonArea>
                        <ButtonArea title="Events">
                            <HeaderDropdownButtons title="Note Encodings" url="/note-encodings" />
                            <HeaderDropdownButtons title="Overdrive, Solo & BRE" url="/overdrives-solos-bre" />
                            <HeaderDropdownButtons title="Trainer Sections" url="/trainer-sections" />
                            <HeaderDropdownButtons title="Custom Chord Names" url="/custom-chord-names" />
                        </ButtonArea>
                        <ButtonArea title="Mastering">
                            <HeaderDropdownButtons title="Tunings" url="/tunings" />
                            <HeaderDropdownButtons title="Reductions" url="/reductions" />
                            <HeaderDropdownButtons title="Common MAGMA Errors" url="/common-magma-errors" />
                        </ButtonArea>
                    </div>
                    <button aria-label='Header Menu' className='border-2 p-1 border-main-white/25 ml-auto rounded-md flex laptop:hidden' onClick={ev => setHeaderMenu(true)}><FiMenu className='text-xl tablet-md:text-base' /></button>
                </div>
            </header>
        </>
    )
}

export default Header