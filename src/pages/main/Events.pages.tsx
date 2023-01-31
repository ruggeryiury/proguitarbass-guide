import MainComponent from "../../components/Main/MainComponent"
import { MainTextBlock as Block, MainTextHref as Href, MainTextOptions as Options, MainTextParagraph as Paragraph, MainTextTitle as Title, MainTextList as List } from "../../components/Main/MainText.components"
import PageAnchorsProvider from "../../services/configs/PageAnchorsProvider"

export const FretHandPosition = () => {
    return (
        <MainComponent title='Fret Hand Position' anchors={PageAnchorsProvider('fret-hand-position')}>

        </MainComponent>
    )
}

export const NoteEncondings = () => {
    return (
        <MainComponent title='Note Encodings' anchors={PageAnchorsProvider('note-encodings')}>
            <Paragraph>
                All PRO Guitar/Bass functions are encoded using markers and channel encodings. Here is all possible channel encodings and their respective uses.
            </Paragraph>

            <Title id='channelUsedOnNotes'>Channel Used on Notes</Title>
            <ul>
                <Options>
                    <Block color="#8c0000">MIDI CHANNEL 1</Block>: The default channel for new notes on REAPER. On PRO Guitar/Bass authoring, it is used to display normal notes.
                </Options>
                <Options>
                    <Block color="#7a8c00">MIDI CHANNEL 2</Block>: Used for <em>Ghost notes</em> on <Href href='/arpeggio'>Arpeggio markers</Href>.
                </Options>
                <Options>
                    <Block color="#008c23">MIDI CHANNEL 3</Block>: Used for <em>Bend notes</em>. These kind of notes have no visual distinction in-game.
                </Options>
                <Options>
                    <Block color="#00578c">MIDI CHANNEL 4</Block>: Used for <Href href='/arpeggio'>Muted notes</Href>.
                </Options>
                <Options>
                    <Block color="#46008c">MIDI CHANNEL 5</Block>: Used for <em>Right-handed Tap notes</em>. Tap notes are displayed just like <Href href='/hopo'>HO/PO Notes</Href>.
                </Options>
                <Options>
                    <Block color="#8c3052">MIDI CHANNEL 6</Block>: Used for <em>Harmonics and Pinch Harmonics</em>. These kind of notes have no visual distinction in-game.
                </Options>
            </ul>
            <Paragraph></Paragraph>

            <Title id='channelUsedOnMarkers'>Channel Used on Markers</Title>
            <ul>
                <Options>
                    <Block color="#8c6f5e">MIDI CHANNEL 12</Block>: Used on <Href href="/slide-notes">Slide Markers</Href> to <em>reverse a slide direction</em> based on each note rule.
                </Options>
                <Options>
                    <Block color="#758c5e">MIDI CHANNEL 13</Block>: Used on <Href href="/hopo">HO/PO Markers</Href> to <em>force off</em> HO/PO notes.
                </Options>
                <Options>
                    <Block color="#5e8c7b">MIDI CHANNEL 14</Block>: Used on <Href href="/strumming-patterns">Strumming Pattern marker</Href> to <em>emphasize the playing of higher strings on a chord</em> (as string emphasis), or to <em>tell the player the strumming direction is upward</em> (as strumming pattern).
                </Options>
                <Options>
                    <Block color="#5e698c">MIDI CHANNEL 15</Block>: Used on <Href href="/strumming-patterns">Strumming Pattern marker</Href> to <em>emphasize the playing of middle strings on a chord</em> (as string emphasis).
                </Options>
                <Options>
                    <Block color="#875e8c">MIDI CHANNEL 16</Block>: Used on <Href href="/strumming-patterns">Strumming Pattern marker</Href> to <em>emphasize the playing of lower strings on a chord</em> (as string emphasis), or to <em>tell the player the strumming direction is downward</em> (as strumming pattern).
                </Options>
            </ul>
        </MainComponent>
    )
}

export const OverdriveSoloBRE = () => {
    return (
        <MainComponent title='Overdrive / Solo / BRE' anchors={PageAnchorsProvider('overdrive-solo-bre')}>
            <Paragraph>
                <em>Overdrives</em>, <em>Solo markers</em>, and <em>Big Rock Endings</em> <strong>must match</strong> the 5-lane Guitar/Bass sections. If you already have 5-lane Guitar/Bass parts authored, just copy and paste on the PRO Guitar/Bass tracks.
            </Paragraph>
            <Title id='overdrive'>Overdrive</Title>
            <Paragraph>
                Overdrives are authored on MIDI note <Block>G♯7</Block> (116), the same note for 5-lane Guitar/Bass as well.
            </Paragraph>
            <Title id='soloMarkers'>Solo Markers</Title>
            <Paragraph>
                Solo markers are authored on MIDI note <Block>G7</Block> (115). This note is not the same note shared by 5-lane Guitar/Bass tracks (which they use MIDI note <Block>G6</Block> (103)), so don't forget to place it correctly.
            </Paragraph>
            <Title id='bigRockEndings'>Big Rock Endings</Title>
            <Paragraph>
                Big Rock Endings are authored from MIDI notes:
                <ul>
                    <Options>
                        For PRO Guitar tracks: <Block>C8</Block> (120) to <Block>F8</Block> (125)
                    </Options>
                    <Options>
                        For PRO Bass tracks: <Block>C8</Block> (120) to <Block>D♯8</Block> (123)
                    </Options>
                </ul>
            </Paragraph>
        </MainComponent>
    )
}

export const TrainerSections = () => {
    return (
        <MainComponent title="Trainer Sections" anchors={PageAnchorsProvider('trainer-sections')}>
            <Paragraph>
                Trainer sections are authored as text events. These text events must be placed on the 17-fret tracks only.
            </Paragraph>

            <Title id='forProGuitar'>For PRO Guitar</Title>
            <ul>
                <Options>
                    <Block>[begin_pg song_trainer_pg_#]</Block> at the beginning of the trainer section, where <Block>#</Block> represents the trainer's count.
                </Options>
                <Options>
                    <Block>[end_pg song_trainer_pg_#]</Block> at the end of the trainer section, where <Block>#</Block> represents the trainer's count.
                </Options>
            </ul>
            <Paragraph />

            <Title id='forProBass'>For PRO Bass</Title>
            <ul>
                <Options>
                    <Block>[begin_pb song_trainer_pb_#]</Block> at the beginning of the trainer section, where <Block>#</Block> represents the trainer's count.
                </Options>
                <Options>
                    <Block>[end_pb song_trainer_pb_#]</Block> at the end of the trainer section, where <Block>#</Block> represents the trainer's count.
                </Options>
            </ul>
            <Paragraph />

            <Title id='loopedTrainerSections'>Looped Trainer Sections</Title>
            <Paragraph>
                By default, trainers create a gap at the end of the section for the player to breathe before the section starts again. On looped trainers, there's no pause between the beginning and the end of a section. To make a trainer section a looped one, add these text events anywhere between the beginning and the end of the trainer section:
            </Paragraph>
            <ul>
                <Options>
                    <Block>[pg_norm song_trainer_pg_#]</Block>, for PRO Guitar. Where <Block>#</Block> represents the trainer's count.
                </Options>
                <Options>
                    <Block>[pb_norm song_trainer_pb_#]</Block>, for PRO Bass. Where <Block>#</Block> represents the trainer's count.
                </Options>
            </ul>
            <Paragraph />

            <Title id='rules'>Rules</Title>
            <ul>
                <List title='Rhythm parts must have grid-snapped sections'></List>
                <List title='Avoid making bigger sections for solo parts'>The idea is to slice solos into parts where you can train these specific parts and try to connect them while playing.</List>
            </ul>
        </MainComponent>
    )
}

export const CustomChordNames = () => {
    return (
        <MainComponent title="Custom Chord Names" anchors={PageAnchorsProvider('custom-chord-names')}>
            {/* <Paragraph>
                You can place custom chord names on any chord with 
            </Paragraph> */}
        </MainComponent>
    )
}