import MainComponent from "../../components/Main/MainComponent"
import { MainTextParagraph as Paragraph, MainTextBlock as Block, MainTextHref as Href, MainTextOptions as Options, MainTextTitle as Title } from "../../components/Main/MainText.components"
import PageAnchorsProvider from "../../services/configs/PageAnchorsProvider"

export const MutedNotes = () => {
    return (
        <MainComponent title="Muted Notes" anchors={PageAnchorsProvider('muted-notes')}>
            <Paragraph>
                Most PRO Guitar/Bass functions are encoded using markers and/or channel encodings. To author muted notes/chords, you must encode the note/chord notes on <Block children="MIDI CHANNEL 4" />. Muted notes and chords are displayed in-game as blue shapes withour fret numbering.
                <br /><br />
                Muted notes and chords behave as normal notes/chords on basically all functions, such as <Href href='/fret-hand-position'>Fret Hand Positions</Href> and <Href href='/slide-notes'>Slide Notes</Href> rules.
                <br /><br />
                Palm muted notes and chords with sonical distinction between frets must be authored as normal notes.
            </Paragraph>
        </MainComponent>
    )
}

export const SlideNotes = () => {
    return (
        <MainComponent title="Slide Notes" anchors={PageAnchorsProvider('slide-notes')}>
            <Paragraph>
                Slide notes and chords appear in-game with curved sustain tails, telling the player which direction it must slide the note/chord. To make a note/chord a slide one, you must place a <strong className="text-cyan-500">SLIDE NOTE MARKER</strong> <Block children="G6" /> (103) (for Expert difficulty) encopassing the whole note/chord you want to be a slide one.
            </Paragraph>

            <Title id='slideDirectionRules'>Slide Direction Rules</Title>
            <Paragraph>
                <em>Old tutorials believed that slide directions was based on the <strong className="text-cyan-500">SLIDE NOTE MARKER</strong> velocity, but they couldn't explain why some notes didn't respect that rule, with the slide going to the opposite direction that is was intended to go.</em>
                <br /><br />
                Actually, <strong className="text-cyan-500">SLIDE NOTE MARKERS</strong> directions have two rules they can follow:
                <br />
                <div>
                    <Options>The <span className="text-cyan-500">FRET</span> rule, by default.</Options>
                    <Options>The <span className="text-cyan-500">1/16 NOTE GAP</span> rule.</Options>
                </div>
                If you want to reverse the slide direction under any of this conditions, you must encode the <strong className="text-cyan-500">SLIDE NOTE MARKER</strong> on <Block>MIDI CHANNEL 12</Block>.
                <br /><br />
                You can also encopass multiple notes/chords within one <strong className="text-cyan-500">SLIDE NOTE MARKER</strong> just like on <Href href="/hopos">HO/POs</Href>, but every note/chord will follow the rules according to each specific situation.
            </Paragraph>

            <Title id='theFretRule'>The Fret Rule</Title>
            <Paragraph>
                This rule is based on the <strong>note velocity</strong> (in other words, the <span className="text-cyan-500">note fret</span>). Slides from open notes [0] to fret [7] with go <span className="text-cyan-500">up</span>, slides from fret [8] notes to fret [17] (or fret [22], for 22-fret guitar/bass tracks) will go <span className="text-cyan-500">down</span>.
            </Paragraph>

            <Title id="the1_16NoteGapRule">The 1/16 Note Gap Rule</Title>
            <Paragraph>
                <strong>If the slide note's sustail tail ends with a gap of 1/16 note (or closer) from a following note</strong>, the slide will go to the direction of that note. If the following note has the same fret of the slide note, the slide direction will always go <span className="text-cyan-500">down</span>.
            </Paragraph>

            <Title id="behaviorWithChords">Behavior with Chords</Title>
            <Paragraph>
                With chords, the fret from the <span className="text-cyan-500">lowest string</span> is what counts as reference, and this <strong>includes open notes as well</strong>.
            </Paragraph>
        </MainComponent>
    )
}