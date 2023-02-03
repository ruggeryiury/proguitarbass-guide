import { HashLink } from 'react-router-hash-link'
import { useInView } from 'react-intersection-observer'
import { BsArrowReturnRight } from 'react-icons/bs'
import ScrollUpButton from './ScrollUpButton'

interface MainComponentProps {
    title: string
    anchors: AnchorsLinkDocument[]
}

const MainComponent: React.FC<React.PropsWithChildren<MainComponentProps>> = ({ children, title, anchors }) => {
    const [ref, inView] = useInView({
        initialInView: true
    })

    return (
        <>
            <ScrollUpButton show={inView} />

            <main className="flex-col laptop:flex-row w-full h-[92%] tablet-md:h-[94%] justify-center overflow-y-auto laptop:overflow-y-hidden animate__animated animate__fadeIn animate__faster">
                <div className="hidden laptop:flex h-full w-full laptop:w-[22%] py-6 px-6 tablet-md:px-12 laptop:px-8 border-r-0 laptop:border-r-2 border-main-white/10">
                    <h1 className="!leading-[1.10] text-xl laptop-lg:text-2xl desktop:text-3xl text-left mb-4 w-full pb-2 border-b-2 border-main-white/25">{title.toUpperCase()}</h1>
                    {
                        anchors.map((value, index) => {
                            return <HashLink className='pl-2 laptop:text-sm laptop-lg:text-base desktop:text-lg !leading-[1.10] text-left mb-2 w-fit hover:text-cyan-500' to='' key={`AnchorsLink${index}`} elementId={`#${value.id}`} smooth>{value.title.toUpperCase()}</HashLink>
                        })
                    }
                </div>
                <div id='MainComponentContent' className="h-full w-[100%] laptop-lg:w-[88%] px-6 tablet-md:px-12 py-4 tablet-md:py-8 overflow-y-auto">
                    <div className='flex laptop:hidden text-left' ref={ref}>
                        <h1 className="!leading-[1.10] w-full text-2xl tablet-md:text-4xl border-b-2 border-main-white/25 text-left py-3 mb-4">{title.toUpperCase()}</h1>
                        {
                            anchors.length > 0 ? (
                                <div className='mb-6 bg-main-white/10 py-6 px-2 rounded-md'>
                                    {
                                        anchors.map((value, index) => {
                                            return <HashLink className='flex-row pl-2 laptop:text-sm laptop-lg:text-base desktop:text-lg !leading-[1.10] text-left mb-2 w-fit hover:text-cyan-500 last:mb-0' to='' key={`AnchorsLink${index}`} elementId={`#${value.id}`} smooth>
                                                <BsArrowReturnRight className='text-base mr-2' />{value.title.toUpperCase()}
                                            </HashLink>
                                        })
                                    }
                                </div>
                            ) : null
                        }
                    </div>
                    <>
                        {children}
                    </>
                </div>
            </main>
        </>
    )

}

export default MainComponent