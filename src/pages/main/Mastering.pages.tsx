import MainComponent from "../../components/Main/MainComponent"
import { MainTextParagraph as Paragraph, MainTextBlock as Block, MainTextList as List, MainTextOptions as Options } from "../../components/Main/MainText.components"
import PageAnchorsProvider from "../../services/configs/PageAnchorsProvider"

export const Tunings = () => {
    return (
        <MainComponent title='Tunings' anchors={PageAnchorsProvider('tunings')}>

        </MainComponent>
    )
}

export const Reductions = () => {
    return (
        <MainComponent title='Reductions' anchors={PageAnchorsProvider('reductions')}>

        </MainComponent>
    )
}

export const CommonMAGMAErrors = () => {
    return (
        <MainComponent title='Common MAGMA Errors' anchors={PageAnchorsProvider('common-magma-errors')}>
            
        </MainComponent>
    )
}