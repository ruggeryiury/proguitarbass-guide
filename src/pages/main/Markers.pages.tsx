import MainComponent from "../../components/Main/MainComponent"
import { MainTextParagraph as Paragraph, MainTextBlock as Block, MainTextList as List, MainTextOptions as Options, MainTextTitle as Title, MainTextHref as Href } from "../../components/Main/MainText.components"
import PageAnchorsProvider from "../../services/configs/PageAnchorsProvider"

export const HOPO = () => {
    return (
        <MainComponent title="Hammer-Ons & Pull-Offs" anchors={PageAnchorsProvider('hopo')}>
            <Paragraph>
                Hammer-Ons and Pull-Offs (HO/PO) are usual techniques for guitar/bass players. On PRO Guitar/Bass, HO/PO notes work the same way as on 5-lane guitar/bass/keys, letting you to play a note without strumming. HO/PO notes display in-game as notes with a luminous light around them.
                <br /><br />
                Chords can also be played without strumming, but <strong>only</strong> if you place a <strong className="text-cyan-500">HO/PO MARKER</strong> <Block>F♯6</Block> (102) (for Expert difficulty) aligned to it, since the HO/PO Threshold doesn't affect them (just like on 5-lane guitar/bass/keys). <em>Unlike notes, they don't have any visual distinction in-game, displayed just like normal chord notes.</em>
                <br /><br />
                You can change HO/PO Threshold settings on MAGMA when you compile your song, but remember that the HO/PO Threshold will also change HO/PO behavior for other play modes as well (5-lane guitar, bass, and keys). In the end, it's up to you to know the best setting for your song.
                <br /><br />
                There are three possible articulations of HO/PO notes:
            </Paragraph>
            <ul>
                <List title="Based on the HO/PO Threshold">Notes are automatically displayed as HO/PO if they are 1/16th note (or closer) of each other.</List>
                <List title="Forcing HO/PO Notes On">You can force notes to be HO/PO notes by using the <strong className="text-cyan-500">HO/PO MARKER</strong> <Block>F♯6</Block> (102) (for Expert difficulty). Like on 5-lane guitar/bass/keys, you can force HO/PO on with multiple notes in a row as well, just place a marker encopassing all the notes you want to be displayed as HO/PO.</List>
                <List title="Forcing HO/PO Notes Off">You can force notes NOT to be HO/PO notes by using the <strong className="text-cyan-500">HO/PO MARKER</strong> <Block>F♯6</Block> (102) (for Expert difficulty) encoded on <Block color="#758c5e">MIDI CHANNEL 13</Block>. Forcing HO/PO off is useful for songs with slow BPMs (100BPM or lower), since 1/16th note sequences aren't fast enough to avoid strumming. On songs with higher BPMs, it must be used sparingly and with conscience, since it can make the song unfairly harder to play.</List>
            </ul>
        </MainComponent>
    )
}

export const Slide = () => {
    return (
        <MainComponent title="Slide Marker" anchors={PageAnchorsProvider('slide')}>
            <Paragraph>
                Slide notes and chords appear in-game with curved sustain tails, telling the player which direction it must slide the note/chord. To make a note/chord a slide one, you must place a <strong className="text-cyan-500">SLIDE MARKER</strong> <Block children="G6" /> (103) (for Expert difficulty) encopassing the whole note/chord you want to be a slide one.
            </Paragraph>

            <Title id='slideDirectionRules'>Slide Direction Rules</Title>
            <Paragraph>
                <em>Old tutorials believed that slide directions was based on the <strong className="text-cyan-500">SLIDE MARKER</strong> velocity, but they couldn't explain why some notes didn't respect that rule, with the slide going to the opposite direction that is was intended to go.</em>
                <br /><br />
                Actually, <strong className="text-cyan-500">SLIDE MARKERS</strong> directions have two rules they can follow:
            </Paragraph>

            <ul>
                <Options>The <span className="text-cyan-500">FRET</span> rule, by default.</Options>
                <Options>The <span className="text-cyan-500">1/16 NOTE GAP</span> rule.</Options>
            </ul>
            
            <Paragraph>
                If you want to reverse the slide direction under any of this conditions, you must encode the <strong className="text-cyan-500">SLIDE MARKER</strong> on <Block color="#8c6f5e">MIDI CHANNEL 12</Block>.
                <br /><br />
                You can also encopass multiple notes/chords within one <strong className="text-cyan-500">SLIDE MARKER</strong> just like on <Href href="/hopo">HO/POs</Href>, but every note/chord will follow the rules according to each specific situation.
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

export const Arpeggio = () => {
    return (
        <MainComponent title="Arpeggio Marker" anchors={PageAnchorsProvider('arpeggio')}>
            <Paragraph>
                An arpeggio is a type of broken chord, in which the notes that compose a chord are played, mostly, in a rising or descending order. To place an arpeggio, you have the <strong className="text-cyan-500">ARPEGGIO MARKER</strong> <Block>G♯6</Block> (104) (for Expert difficulty).
                <br /><br />
                They appear in-game as a <em>turquoise lane</em> on the fretboard with a ghost chord shape that will follow it until the end of the marker. This chord must be placed at the beginning of the <strong className="text-cyan-500">ARPEGGIO MARKER</strong>, aligned with a root note indicator and must have, at least, one playable note. Non-playable notes must be encoded on <Block color="#7a8c00">MIDI CHANNEL 2</Block> to create the ghost shape of the chord.
                <br /><br />
                Any note/chord fragment that is compatible with the chord of the <strong className="text-cyan-500">ARPEGGIO MARKER</strong> are displayed as turquoise notes on every string.
                There are two main concepts of using the <strong className="text-cyan-500">ARPEGGIO MARKER</strong>:
                <ul>
                    <Options>That, on the whole marker, you can let your fingers placed correctly on all respective frets of the chord.</Options>
                    <Options>That the arpeggiated chord also serves as an accurate rhythm transcription of the respective moment of the song.</Options>
                </ul>
                Incompatible notes can be placed inside an <strong className="text-cyan-500">ARPEGGIO MARKER</strong> as well, they are displayed in-game with the normal color of the respective string, to differentiate from compatible notes.
                <br /><br />
                The concept of using incompatible notes is that they can be played without undoing your fingers position for the asigned chord, althought specific cases can appear. Generally an incompatible note that is meant to be played with an unused finger on the chord formation, or losing any finger to play an open string is acceptable. All of these situations can let you go back to the compatible chord formation easily.
            </Paragraph>
        </MainComponent>
    )
}

export const StrummingPatterns = () => {
    return (
        <MainComponent title='Strumming Pattern Marker' anchors={PageAnchorsProvider('strumming-pattern')}>
            <Paragraph>
                The Strumming Pattern is a feature that tells the player which part should be emphasized on the strumming. It is commonly used to tells the player the direction of the strumming as well. Instead of breaking chords to emphasize lower, middle, or higher strings, you can use the <strong className="text-cyan-500">STRUMMING PATTERN MARKER</strong> <Block>A6</Block> (105) (for Expert difficulty) so you won't have to deal with the same chord name appearing many times throughout the section this chord is being particularly played.
                <br /><br />
                To place a Strumming Pattern on a chord, just place a <strong className="text-cyan-500">STRUMMING PATTERN MARKER</strong> aligned to the chord you want to have a strumming pattern. The string emphasis is defined by the following MIDI channels:

            </Paragraph>
            <ul>
                <Options> <Block color="#5e8c7b">MIDI CHANNEL 14</Block> to emphasize higher strings. </Options>
                <Options> <Block color="#5e698c">MIDI CHANNEL 15</Block> to emphasize middle strings. </Options>
                <Options> <Block color="#875e8c">MIDI CHANNEL 16</Block> to emphasize lower strings. </Options>
            </ul>
        </MainComponent>
    )
}

export const ForceChordNumbering = () => {
    return (
        <MainComponent title='Force Chord Numbering' anchors={PageAnchorsProvider('force-chord-numbering')}>
            <Paragraph>
            </Paragraph>
        </MainComponent>
    )
}

export const TrillTremolo = () => {
    return null
}