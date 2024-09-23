import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { HeaderTitle, ButtonArea, HeaderDropdownButtons } from './Header.components'
import HeaderMenu from './HeaderMenu'
import HeaderConfig from '../services/constants/HeaderConfig'
import MainPagesConfig from '../services/constants/MainPagesConfig'

const Header = () => {
  const [headerMenu, setHeaderMenu] = useState(false)
  const PageNames = Object.keys(MainPagesConfig)

  return (
    <>
      <HeaderMenu
        activated={headerMenu}
        setHeaderMenu={setHeaderMenu}
      />
      <header className='relative z-10 w-full mobile:landscape:h-[12%] mobile:portrait:h-[8%] laptop:landscape:h-[6%] tablet-md:portrait:h-[6%] bg-[#222] bg-[url("../../assets/images/pattern-transparency-sm.webp")] bg-[length:128px] border-b border-main-white/20 shadow-[0px_8px_24px_0px_rgba(0,0,0,1)] animate-patternMove'>
        <div className="h-full bg-gradient-to-t from-transparent to-[#111] flex-row w-full items-center px-4">
          <HeaderTitle />
          <div className="hidden laptop:flex flex-row ml-auto h-full">
            <ButtonArea title={HeaderConfig.basics.title}>
              {PageNames.map((value, index) => {
                const content = MainPagesConfig[value]
                return content.type === 'basics' ? (
                  <HeaderDropdownButtons
                    key={`basicsButtonLaptop${index}`}
                    index={content.index ? true : false}
                    title={content.title}
                    url={content.url}
                  />
                ) : null
              })}
            </ButtonArea>
            <ButtonArea title={HeaderConfig['notes-and-markers'].title}>
              {PageNames.map((value, index) => {
                const content = MainPagesConfig[value]
                return content.type === 'notes-and-markers' ? (
                  <HeaderDropdownButtons
                    key={`notesAndMarkersButtonLaptop${index}`}
                    index={content.index ? true : false}
                    title={content.title}
                    url={content.url}
                  />
                ) : null
              })}
            </ButtonArea>
            <ButtonArea title={HeaderConfig.events.title}>
              {PageNames.map((value, index) => {
                const content = MainPagesConfig[value]
                return content.type === 'events' ? (
                  <HeaderDropdownButtons
                    key={`eventsButtonLaptop${index}`}
                    index={content.index ? true : false}
                    title={content.title}
                    url={content.url}
                  />
                ) : null
              })}
            </ButtonArea>
            <ButtonArea title={HeaderConfig.mastering.title}>
              {PageNames.map((value, index) => {
                const content = MainPagesConfig[value]
                return content.type === 'mastering' ? (
                  <HeaderDropdownButtons
                    key={`masteringButtonLaptop${index}`}
                    index={content.index ? true : false}
                    title={content.title}
                    url={content.url}
                  />
                ) : null
              })}
            </ButtonArea>
          </div>
          <button
            aria-label="Header Menu"
            className="border-2 p-1 border-main-white/25 ml-auto rounded-md flex laptop:hidden"
            onClick={(ev) => setHeaderMenu(true)}
          >
            <FiMenu className="text-xl tablet-md:text-base" />
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
