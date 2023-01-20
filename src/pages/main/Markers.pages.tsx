import MainComponent from "../../components/Main/MainComponent"
import { MainTextParagraph as Paragraph, MainTextBlock as Block, MainTextList as List, MainTextOptions as Options } from "../../components/Main/MainText.components"
import PageAnchorsProvider from "../../services/configs/PageAnchorsProvider"

export const HOPO = () => {
    return (
        <MainComponent title="Hammer-Ons & Pull-Offs" anchors={PageAnchorsProvider('hopo')}>
            <Paragraph>
                Hammer-Ons and Pull-Offs (HO/PO) are usual techniques for guitar/bass players. On PRO Guitar/Bass, HO/PO notes work the same way as on 5-lane guitar/bass/keys, letting you to play a note without strumming. HO/PO notes display in-game as notes with a luminous light around them.
                <br /><br />
                Chords can also be played without strumming, but <strong>only</strong> if you place a <strong className="text-cyan-500">FORCE HO/PO MARKER</strong> <Block>F♯6</Block> (102) (for Expert difficulty) aligned to it, since the HO/PO Threshold doesn't affect them (just like on 5-lane guitar/bass/keys). <em>Unlike notes, they don't have any visual distinction in-game, displayed just like normal chord notes.</em>
                <br /><br />
                You can change HO/PO Threshold settings on MAGMA when you compile your song, but remember that the HO/PO Threshold will also change HO/PO behavior for other play modes as well (5-lane guitar, bass, and keys). In the end, it's up to you to know the best setting for your song.
                <br /><br />
                There are three possible articulations of HO/PO notes:
                <div>
                    <List title="Based on the HO/PO Threshold">Notes are automatically displayed as HO/PO if they are 1/16th note (or closer) of each other.</List>
                    <List title="Forcing HO/PO Notes On">
                        You can force notes to be HO/PO notes by using the <strong className="text-cyan-500">FORCE HO/PO MARKER</strong> <Block>F♯6</Block> (102) (for Expert difficulty). Like on 5-lane guitar/bass/keys, you can force HO/PO on with multiple notes in a row as well, just place a marker encopassing all the notes you want to be displayed as HO/PO.
                    </List>
                    <List title="Forcing HO/PO Notes Off">You can force notes NOT to be HO/PO notes by using the <strong className="text-cyan-500">FORCE HO/PO MARKER</strong> <Block>F♯6</Block> (102) (for Expert difficulty) encoded on <Block>MIDI CHANNEL 13</Block>. Forcing HO/PO off is useful for songs with slow BPMs (100BPM or lower), since 1/16th note sequences aren't fast enough to avoid strumming. On songs with higher BPMs, it must be used sparingly and with conscience, since it can make the song unfairly harder to play.</List>
                </div>
            </Paragraph>
        </MainComponent>
    )
}

export const Arpeggio = () => {
    return (
        <MainComponent title="Arpeggio" anchors={PageAnchorsProvider('arpeggio')}>
            <Paragraph>
                An arpeggio is a type of broken chord, in which the notes that compose a chord are played, mostly, in a rising or descending order. To place an arpeggio, you have the <strong className="text-cyan-500">ARPEGGIO MARKER</strong> <Block>G♯6</Block> (104) (for Expert difficulty).
                <br /><br />
                They appear in-game as a <em>turquoise lane</em> on the fretboard with a ghost chord shape that will follow it until the end of the marker. This chord must be placed at the beginning of the <strong className="text-cyan-500">ARPEGGIO MARKER</strong>, aligned with a root note indicator and must have, at least, one playable note. Non-playable notes must be encoded on <Block>MIDI CHANNEL 2</Block> to create the ghost shape of the chord.
                <br /><br />
                Any note/chord fragment that is compatible with the chord of the <strong className="text-cyan-500">ARPEGGIO MARKER</strong> are displayed as turquoise notes on every string.
                There are two main concepts of using the <strong className="text-cyan-500">ARPEGGIO MARKER</strong>:
                <div>
                    <Options>That, on the whole marker, you can let your fingers placed correctly on all respective frets of the chord.</Options>
                    <Options>That the arpeggiated chord also serves as an accurate rhythm transcription of the respective moment of the song.</Options>
                </div>
                Incompatible notes can be placed inside an <strong className="text-cyan-500">ARPEGGIO MARKER</strong> as well, they are displayed in-game with the normal color of the respective string, to differentiate from compatible notes.
                <br /><br />
                The concept of using incompatible notes is that they can be played without undoing your fingers position for the asigned chord, althought specific cases can appear. Generally an incompatible note that is meant to be played with an unused finger on the chord formation, or losing any finger to play an open string is acceptable. All of these situations can let you go back to the compatible chord formation easily. See the example below.
            </Paragraph>
        </MainComponent>
    )
}

export const StringEmphasisStrummingPattern = () => {
    return (
        <MainComponent title='String Emphasis / Strumming Pattern' anchors={PageAnchorsProvider('string-emphasis-strumming-pattern')}>
            
        </MainComponent>
    )
}