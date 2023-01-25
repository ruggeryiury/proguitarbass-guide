import MainComponent from "../../components/Main/MainComponent"
import { MainTextParagraph as Paragraph, MainTextTitle as Title, MainTextOptions as Options, MainTextBlock as Block } from "../../components/Main/MainText.components"
import PageAnchorsProvider from "../../services/configs/PageAnchorsProvider"

export const Notes = () => {
    return (
        <MainComponent title='Notes' anchors={PageAnchorsProvider('notes')}>
            <Paragraph>
                You must handle with two basic things while authoring PRO Guitar/Bass notes, that are the strings and frets.
            </Paragraph>

            <Title id='strings'>Strings</Title>
            <Paragraph>
                To determine the strings of a note, we use these MIDI notes:
            </Paragraph>
            <ul>
                <Options>From <Block>C6</Block> (96) to <Block>F6</Block> (101) for Expert difficulty.</Options>
                <Options>From <Block>C4</Block> (72) to <Block>F4</Block> (77) for Hard difficulty.</Options>
                <Options>From <Block>C2</Block> (48) to <Block>F2</Block> (53) for Medium difficulty.</Options>
                <Options>From <Block>C0</Block> (24) to <Block>F0</Block> (29) for Easy difficulty.</Options>
            </ul>

            <Title id='frets'>Frets</Title>
            <Paragraph>
                The <strong>note velocity</strong> is what determines the fret of the note, starting from velocity <Block children="100" /> (open string note) to <Block children="117" /> (for normal 17-fret guitar/bass track) or <Block children="122" /> (for 22-fret guitar/bass track).
            </Paragraph>
        </MainComponent>
    )
}

export const Chords = () => {
    return (
        <MainComponent title='Chords' anchors={PageAnchorsProvider('chords')}>
            <Paragraph>
                A chord is a group of notes sounded together, as a basis of harmony. On Rock Band 3, they're displayed as blue shapes, displaying only the lower note of a chord on its string and creating a shape based on it. Open notes will be displayed as white.
            </Paragraph>

            <Title id='rootNoteIndicators'>Root Note Indicators</Title>
            <Paragraph>
                The game automatically calculates the invervals of each note of a chord and displays a name for it, but we need to tell it what scale the chord is. For this, we have <strong>Root Note Indicators</strong>. Placing a note aligned with a chord, starting with <Block>E-2</Block> (4), going up chromatically to <Block>D♯-1</Block> (15), you tell the game what scale the aligned chord (and following chords) are. You don't need to put a root note on <strong>every</strong> chord in a sequence, just place it aligned to the first chord, and all the following chords will be named using the scale you placed, until you change it to another root note.
                <br /><br />
                Root Note Indications don't need to be longer than a 1/16 note, even if the first chord aligned to it is a sustained one.
            </Paragraph>

            <Title id='slashChords'>Slash Chords</Title>
            <Paragraph>
                A slash chord is a chord which indicates emphasis of a bass note other than the root of the chord. When a chord is played, it is typically assumed the bass will emphasize the root of the chord. Occasionally, a different note is preferred and results in a chord with an alternate bass note.
                <br /><br />
                To turn a chord into a slash chord, you must place a <strong className="text-cyan-500">SLASH CHORD MARKER</strong> <Block>E-1</Block> (16) aligned with a root note indicator and a chord itself. Slash chords are notated in-game with a chord's root note, followed by a forward slash, followed by the alternate bass note. For example, <Block>G/B</Block> or <Block>D7/F♯</Block> are slash chords.
                <br /><br />
                Keep in mind that you're dealing with a <strong>marker</strong>, this means that all chords encopassing it will be displayed as slash chords as well, this is useful if you have a sequence of different slash chords.
                <br /><br />
                On slash chords, the game will always choose the bass note based on the note of the lowest string.
            </Paragraph>

            <Title id="omittingMutedStringsfromChords">Omitting Muted Strings from Chords</Title>
            <Paragraph>
                For chords with any muted string in-between, you must omit the muted string. If you encode a single string mute on a chord, the whole chord will appear muted in-game.
            </Paragraph>

            <Title id='hideChordName'>Hide Chord Name</Title>
            <Paragraph>
                The <strong className="text-cyan-500">HIDE CHORD NAME MARKER</strong> <Block>F-1</Block> (17) is handy when you deal with chords that don't consistently belong to any scale, or don't have any big importance on naming it, like two-string oblique bends. To hide chord names, place a <strong className="text-cyan-500">HIDE CHORD NAME MARKER</strong> encopassing any root note indicator you want its name not to be displayed in-game. After any hide chord name marker, the game will search chord names based on the last root note indicator placed (even if placed within the marker), unless you put another root note indicator aligned with any first chord after the marker.
            </Paragraph>
        </MainComponent>
    )
}