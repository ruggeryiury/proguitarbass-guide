import { TbArrowBigTop } from 'react-icons/tb'

interface ScrollUpButtonProps {
    show: boolean
}

const ScrollUpButton: React.FC<ScrollUpButtonProps> = ({ show }) => {

    const ScrollUp = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const MainComponentContent = document.getElementById('MainComponentContent') as HTMLDivElement
        MainComponentContent.scrollTo({
            behavior: 'smooth',
            top: 0,
        })
    }

    return show ? null : (
        <button aria-label="Scroll to Top" className="flex laptop:hidden fixed z-50 bottom-0 right-0 m-3 border-2 p-1 border-main-white/25 bg-main-black/90 ml-auto rounded-md" onClick={ev=>ScrollUp(ev)}>
            <TbArrowBigTop />
        </button>
    )
}

export default ScrollUpButton