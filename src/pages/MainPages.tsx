// React-related imports
import { useContext, useEffect } from "react"
import { AppContext } from "../app/AppProvider"

// Main components
import MainComponent from "../components/MainComponent"
import { MainParagraph as Paragraph, MainTitle as Title, MainOptions as Options, MainBlock as Block, MainHref as Href, MainList as List, MainLink as Link, MainWindow as Window } from "../components/MainComponent.components"
import MainPagesConfig from "../services/constants/MainPagesConfig"

// Images imports

// Left Hand Position images
import IndexFingerExampleImg from '../assets/images/index-finger.webp'
import IndexFingerExampleImgMobile from '../assets/images/index-finger-mobile.webp'

export const Index = () => {
    const Context = useContext(AppContext)
    const id = 'index'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            <Title id='introduction'>Introduction</Title>
            <Paragraph>This guide will help you creating PRO Guitar/Bass parts for your customs, with every single PRO mode features explained.<br /><br />Here are some things you should consider before authoring PRO Guitar/Bass parts:</Paragraph>
            <ul className="list-disc">
                <List title="Playability VS. Accuracy">All PRO Guitar/Bass charts must follow their 5-lane charts, but certain dynamics and articulations are way easier to portrait on 5-lane charts. Sometimes, you'll chart different guitar sections and realize there's a big fret jumping between one charted section to the other, Then this happens, feel free to underchart, and even take a 4th note space away from the chart to let the player position its hand to keep playing the song. Songs were meant to be playable and this rule applies to everything. If you're in doubt of what to do, ask to any PRO Guitar/Bass player for opinions about how's the best approach for your song.</List>
                <List title="Basic music theory knowlegde">Just like PRO Keys parts, music theory plays a big role while charting PRO Guitar/Bass parts, so it's inevitable for you to understand basic concepts of playing guitar/bass to make PRO Guitar/Bass parts for your custom.</List>
            </ul>

            <Title id='authoringTools'>Authoring Tools</Title>
            <ul>
                <Link to='https://rhythmgamingworld.com/forums/topic/pro-guitar-preview-for-reaper-v10/' title='PRO Guitar Preview Plugin for REAPER'>A REAPER JSFX plugin created by C3 user <em>Seil</em> that translates PRO Guitar/Bass notes to actual MIDI notes, so you can use any VST plugin (like REAPER's <em>ReaSynth</em>) to hear the notes you're charting.</Link>
                <Link to='/proguitarbass-guide/static/REAPERNoteNames.zip' title='PRO Guitar/Bass note names for REAPER'>Including two text files for you to use on your PRO Guitar/Bass tracks on REAPER, one has note names for all difficulties and the other has just for Expert difficulty.</Link>
                <Link to='https://code.google.com/archive/p/ziggy-pro-editor/' title="Ziggy's PRO Editor">Since CAT can't do automatic PRO Guitar/Bass reductions, <em>Ziggy's PRO Editor</em> might be handy tool for you to auto-generate EMH difficulties in a flash! You can find a tutorial to generate reductions on the <Href href='/reductions'>Reductions</Href> page.</Link>
            </ul>

            <Title id='preparingYourReaperProject'>Preparing Your Reaper Project</Title>
            <ol className="list-decimal">
                <List title='Install PRO Guitar Preview, and the PRO Guitar/Bass note names' decimal>
                    The <em>PRO Guitar/Bass Preview plugin</em> must be placed anywhere inside <em className='text-cyan-500 break-words'>AppData\Roaming\REAPER\Effects</em>, and the note names text files must be placed where you have all the other note names text files that is installed using the RBN2 Authoring Tools.
                </List>
                <List title="Create PRO Guitar/Bass tracks" decimal>
                    Start by adding two new tracks on your REAPER project:
                </List>
            </ol>
            <ul className="list-disc pl-2 mt-2">
                <Options>
                    <Block children="PART REAL_GUITAR" /> for <em>PRO Guitar</em> parts.
                </Options>
                <Options>
                    <Block children="PART REAL_BASS" /> for <em>PRO Bass</em> parts.
                </Options>
            </ul>
            <Paragraph>
                These tracks is meant to be played on the 17-fret <em>Mustang PRO Guitar</em>, if your Guitar/Bass chart has notes above the 17-fret, you must chart these on <Block children='PART REAL_GUITAR_22' /> and <Block children="PART REAL_BASS_22" /> tracks and they're only used when you're playing with the <em>Squier PRO Guitar Controller</em>.
                <br /><br />

                <Block children='PART REAL_GUITAR' noMarginLeft /> and <Block children="PART REAL_BASS" /> tracks are <strong>obrigatory</strong> even if your chart has notes above the 17-fret. Notes above the 17th fret must be transposed to suit in the 17-fret tracks while trying to connect the transposed notes without messing with the player's fret position too much. To do this, try to also transpose notes within a big section where the player can play all notes correctly.
            </Paragraph>
            <ol className="list-decimal" start={3}>
                <List title='Load PRO Guitar/Bass note names' decimal>
                    On the track editor, go to <em className='text-cyan-500'>File &gt; Customize note names &gt; Load note names from file...</em> and Select the "RB PRO Guitar-Bass Expert.txt" file from the .
                </List>
                <List title='Place the notes color based on the MIDI channel' decimal>
                    The MIDI notes channels plays a major role on the PRO Guitar/Bass authoring. To view notes color based on the MIDI channel, open the MIDI track and to go <em className='text-cyan-500'>View &gt; Color notes by &gt; Channel</em>.
                </List>
                <List title="Configure the PRO Guitar Preview FX" decimal>
                    On the tracks' FX, add the <em>PRO Guitar Preview</em> and add <em>ReaSynth</em> (or any other VST plugin), so you can hear the notes you charted.
                </List>
            </ol>
        </MainComponent >
    )
}

export const Notes = () => {
    const Context = useContext(AppContext)
    const id = 'notes'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            <Paragraph>
                You must handle with two basic things while authoring PRO Guitar/Bass notes, that are the strings and frets.
            </Paragraph>

            <Title id='strings'>Strings</Title>
            <Paragraph>
                To determine the strings of a note, we use these MIDI notes:
            </Paragraph>
            <ul className="list-disc">
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
    const Context = useContext(AppContext)
    const id = 'chords'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
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

            <Title id='sharpFlatSwap'>Sharp/Flat Swap</Title>
            <Paragraph>
                The <strong className="text-cyan-500">SHARP/FLAT SWAP MARKER</strong> <Block>F♯-1</Block> (18) is used to change the accident symbols used on chords. The default accident symbol used on chords is based on the song's key signature and tonality (that is defined on the song's .dta file) and it follows the <a href='https://en.wikipedia.org/wiki/Circle_of_fifths' target="_blank" rel="noreferrer" className='tracking-tight inline-flex text-cyan-500 hover:underline'>circle of fifths</a> theory, but when song key changes in the middle of the song, the <strong className="text-cyan-500">SHARP/FLAT SWAP MARKER</strong> should be used to fit the symbol used on that specific key.
                <br /><br />
                The most notable example is on the Rock Band 3 on-disc song <em className="text-cyan-500">Foolin'</em>, by Def Leppard. The song key starts on A minor (which uses the sharp symbol as default), but on the pre-chorus/chorus, the song key changes to D minor (which uses the flat symbol), so the <strong className="text-cyan-500">SHARP/FLAT SWAP MARKER</strong> is used on the <Block>B♭5</Block> chord, otherwise it would be shown as <Block>A♯5</Block>.
                <br /><br />
                Here is a table with all symbols used on all key signatures:
            </Paragraph>
            <table>
                <thead>
                    <tr>
                        <th>KEY SIGNATURES</th>
                        <th>SYMBOL USED</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>C / Am</td>
                        <td>SHARP (♯)</td>
                    </tr>
                    <tr>
                        <td>D♭ / B♭m</td>
                        <td>FLAT (♭)</td>
                    </tr>
                    <tr>
                        <td>D / Bm</td>
                        <td>SHARP (♯)</td>
                    </tr>
                    <tr>
                        <td>E♭ / Cm</td>
                        <td>FLAT (♭)</td>
                    </tr>
                    <tr>
                        <td>E / C♯m</td>
                        <td>SHARP (♯)</td>
                    </tr>
                    <tr>
                        <td>F / Dm</td>
                        <td>FLAT (♭)</td>
                    </tr>
                    <tr>
                        <td>F♯ / D♯m</td>
                        <td>SHARP (♯)</td>
                    </tr>
                    <tr>
                        <td>G / Em</td>
                        <td>SHARP (♯)</td>
                    </tr>
                    <tr>
                        <td>A♭ / Fm</td>
                        <td>FLAT (♭)</td>
                    </tr>
                    <tr>
                        <td>A / F♯m</td>
                        <td>SHARP (♯)</td>
                    </tr>
                    <tr>
                        <td>B♭ / Gm</td>
                        <td>FLAT (♭)</td>
                    </tr>
                    <tr>
                        <td>B / G♯m</td>
                        <td>SHARP (♯)</td>
                    </tr>
                </tbody>
            </table>
        </MainComponent>
    )
}

export const LeftHandPosition = () => {
    const Context = useContext(AppContext)
    const id = 'left-hand-position'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            <Paragraph>
                Left Hand Position notes are charted on MIDI note <Block>C7</Block> (108). In-game, nothing is fisically or visually influenced by these notes, but they're still required, as you can get <Href href="/common-magma-errors">MAGMA errors</Href> related to them.
            </Paragraph>

            <Title id='concept'>Concept</Title>
            <img src={IndexFingerExampleImg} alt='Left Hand Position Note explained' width='1266px' height='620px' className="hidden tablet-md:flex mb-4" />
            <img src={IndexFingerExampleImgMobile} alt='Left Hand Position Note explained' width='1266px' height='620px' className="flex tablet-md:hidden mb-4" />
            <Paragraph>
                The <strong className="text-cyan-500">LEFT HAND POSITION NOTES</strong> is used to keep track where the player's index finger should be on the fretboard. On a range, the player can use your middle, ring, and pinky finger to play higher notes on the fretboard. The position is determined by <strong>the note velocity</strong> (the same as <Href href='/notes'>notes</Href>). Open string notes are not affected by <strong className="text-cyan-500">LEFT HAND POSITION NOTES</strong> and it is accepted with any note velocity. By so, <strong className="text-cyan-500">LEFT HAND POSITION NOTES</strong> with velocity 100 must not be used.
                <br /><br />
                On chords, you must place a <strong className="text-cyan-500">LEFT HAND POSITION NOTE</strong> with velocity of the lowest fret of the respective chord (excluding open string notes).
                <br /><br />
                The first <strong className="text-cyan-500">LEFT HAND POSITION NOTE</strong> must be aligned with the first note of the track, and so on. You don't really have to place a <strong className="text-cyan-500">LEFT HAND POSITION NOTE</strong> on every note of the song, you only need to place another <strong className="text-cyan-500">LEFT HAND POSITION NOTE</strong> when you see the left hand position should be changed to follow the range of all following notes.
            </Paragraph>

            <Title id='usesOnCustomSongs'>Uses on Customs Songs</Title>
            <Paragraph>
                You can use the <strong className="text-cyan-500">LEFT HAND POSITION NOTES</strong> to make 5-lane Guitar/Bass animations look more accurate by simply copying them to the <Block>PART GUITAR/BASS</Block> tracks and making all proper changes to use them as animations.
            </Paragraph>
        </MainComponent>
    )
}

export const MutedNotesAndChords = () => {
    const Context = useContext(AppContext)
    const id = 'muted-notes-and-chords'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            <Paragraph>
                Most PRO Guitar/Bass functions are encoded using markers and/or channel encodings. To author muted notes/chords, you must encode the note/chord notes on <Block bg="#00578c">MIDI CHANNEL 4</Block>. Muted notes and chords are displayed in-game as blue shapes withour fret numbering.
                <br /><br />
                Muted notes and chords behave as normal notes/chords on basically all functions, such as <Href href='/fret-hand-position'>Fret Hand Positions</Href> and <Href href='/slide-notes'>Slide Notes</Href> rules.
                <br /><br />
                Palm muted notes and chords with sonical distinction between frets must be authored as normal notes.
            </Paragraph>
        </MainComponent>
    )
}

export const HOPO = () => {
    const Context = useContext(AppContext)
    const id = 'hopo'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            <Paragraph>
                Hammer-ons and Pull-offs (HO/POs) are usual techniques for guitar/bass players. On PRO Guitar/Bass, HO/PO notes work the same way as on 5-lane guitar/bass/keys, letting you to play a note without strumming. HO/PO notes display in-game as notes with a luminous light around them.
                <br /><br />
                Chords can also be played without strumming, but <strong>only</strong> if you place a <strong className="text-cyan-500">HO/PO MARKER</strong> <Block>F♯6</Block> (102) (for Expert difficulty) aligned to it, since the HO/PO Threshold doesn't affect them (just like on 5-lane guitar/bass/keys). <em>Unlike notes, they don't have any visual distinction in-game, displayed just like normal chord notes.</em>
                <br /><br />
                You can change HO/PO Threshold settings on MAGMA when you compile your song, but remember that the HO/PO Threshold will also change HO/PO behavior for other play modes as well (5-lane guitar, bass, and keys). In the end, it's up to you to know the best setting for your song.
                <br /><br />
                There are three possible articulations of HO/PO notes:
            </Paragraph>
            <ul className="list-disc">
                <List title="Based on the HO/PO Threshold">Notes are automatically displayed as HO/PO if they are 1/16th note (or closer) of each other.</List>
                <List title="Forcing HO/PO Notes On">You can force notes to be HO/PO notes by using the <strong className="text-cyan-500">HO/PO MARKER</strong> <Block>F♯6</Block> (102) (for Expert difficulty). Like on 5-lane guitar/bass/keys, you can force HO/PO on with multiple notes in a row as well, just place a marker encopassing all the notes you want to be displayed as HO/PO.</List>
                <List title="Forcing HO/PO Notes Off">You can force notes NOT to be HO/PO notes by using the <strong className="text-cyan-500">HO/PO MARKER</strong> <Block>F♯6</Block> (102) (for Expert difficulty) encoded on <Block bg="#758c5e">MIDI CHANNEL 13</Block>. Forcing HO/PO off is useful for songs with slow BPMs (100BPM or lower), since 1/16th note sequences aren't fast enough to avoid strumming. On songs with higher BPMs, it must be used sparingly and with conscience, since it can make the song unfairly harder to play.</List>
            </ul>
        </MainComponent>
    )
}

export const Slide = () => {
    const Context = useContext(AppContext)
    const id = 'slide'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            <Paragraph>
                Slide notes and chords appear in-game with curved sustain tails, telling the player which direction it must slide the note/chord. To make a note/chord a slide one, you must place a <strong className="text-cyan-500">SLIDE MARKER</strong> <Block children="G6" /> (103) (for Expert difficulty) encopassing the whole note/chord you want to be a slide one.
            </Paragraph>

            <Title id='slideDirectionRules'>Slide Direction Rules</Title>
            <Paragraph>
                <em>Old tutorials believed that slide directions was based on the <strong className="text-cyan-500">SLIDE MARKER</strong> velocity, but they couldn't explain why some notes didn't respect that rule, with the slide going to the opposite direction that is was intended to go.</em>
                <br /><br />
                Actually, <strong className="text-cyan-500">SLIDE MARKERS</strong> directions have two rules they can follow:
            </Paragraph>

            <ul className="list-disc">
                <Options>The <span className="text-cyan-500">FRET</span> rule, by default.</Options>
                <Options>The <span className="text-cyan-500">1/16 NOTE GAP</span> rule.</Options>
            </ul>

            <Paragraph>
                If you want to reverse the slide direction under any of this conditions, you must encode the <strong className="text-cyan-500">SLIDE MARKER</strong> on <Block bg="#8c6f5e">MIDI CHANNEL 12</Block>.
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
    const Context = useContext(AppContext)
    const id = 'arpeggio'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            <Paragraph>
                An arpeggio is a type of broken chord, in which the notes that compose a chord are played, mostly, in a rising or descending order. To place an arpeggio, you have the <strong className="text-cyan-500">ARPEGGIO MARKER</strong> <Block>G♯6</Block> (104) (for Expert difficulty).
                <br /><br />
                They appear in-game as a <em>turquoise lane</em> on the fretboard with a ghost chord shape that will follow it until the end of the marker. This chord must be placed at the beginning of the <strong className="text-cyan-500">ARPEGGIO MARKER</strong>, aligned with a root note indicator and must have, at least, one playable note. Non-playable notes must be encoded on <Block bg="#7a8c00">MIDI CHANNEL 2</Block> to create the ghost shape of the chord.
                <br /><br />
                Any note/chord fragment that is compatible with the chord of the <strong className="text-cyan-500">ARPEGGIO MARKER</strong> are displayed as turquoise notes on every string.
                There are two main concepts of using the <strong className="text-cyan-500">ARPEGGIO MARKER</strong>:
            </Paragraph>
            <ul className="list-disc">
                <Options>That, on the whole marker, you can let your fingers placed correctly on all respective frets of the chord.</Options>
                <Options>That the arpeggiated chord also serves as an accurate rhythm transcription of the respective moment of the song.</Options>
            </ul>
            <Paragraph>
                Incompatible notes can be placed inside an <strong className="text-cyan-500">ARPEGGIO MARKER</strong> as well, they are displayed in-game with the normal color of the respective string, to differentiate from compatible notes.
                <br /><br />
                The concept of using incompatible notes is that they can be played without undoing your fingers position for the asigned chord, althought specific cases can appear. Generally an incompatible note that is meant to be played with an unused finger on the chord formation, or losing any finger to play an open string is acceptable. All of these situations can let you go back to the compatible chord formation easily.
            </Paragraph>
        </MainComponent >
    )
}

export const StrummingPattern = () => {
    const Context = useContext(AppContext)
    const id = 'strumming-pattern'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            <Paragraph>
                The Strumming Pattern is a feature that tells the player which part should be emphasized on the strumming. It is commonly used to tells the player the direction of the strumming as well. Instead of breaking chords to emphasize lower, middle, or higher strings, you can use the <strong className="text-cyan-500">STRUMMING PATTERN MARKER</strong> <Block>A6</Block> (105) (for Expert difficulty) so you won't have to deal with the same chord name appearing many times throughout the section this chord is being particularly played.
                <br /><br />
                To place a Strumming Pattern on a chord, just place a <strong className="text-cyan-500">STRUMMING PATTERN MARKER</strong> aligned to the chord you want to have a strumming pattern. The string emphasis is defined by the following MIDI channels:

            </Paragraph>
            <ul className="list-disc">
                <Options> <Block bg="#5e8c7b">MIDI CHANNEL 14</Block> to emphasize higher strings. </Options>
                <Options> <Block bg="#5e698c">MIDI CHANNEL 15</Block> to emphasize middle strings. </Options>
                <Options> <Block bg="#875e8c">MIDI CHANNEL 16</Block> to emphasize lower strings. </Options>
            </ul>
        </MainComponent>
    )
}

export const ForceChordNumbering = () => {
    const Context = useContext(AppContext)
    const id = 'force-chord-numbering'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            <Paragraph>
            </Paragraph>
        </MainComponent>
    )
}

export const TrillTremolo = () => {
    const Context = useContext(AppContext)
    const id = 'trill-tremolo'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            <Paragraph>
                Trill and Tremolo markers trigger free form lanes that appear on the track. These markers allow a a player to strum or play quickly without forcing them to playing the actual authored rhythm of the part. As long as the player is strumming or alternating at 160ms or faster, they will be allowed to continue playing in the free form lanes. If they dip below 160ms, the free form lanes will disappear, and they will be forced to play to the rhythm at which the part is authored.
                <br /><br />
                The threshold of 160ms is a hard coded number, so edge cases can creep up where using a trill marker may not feel as good as just playing the authored rhythm. Using Trill and Tremolo lanes as opposed to an authored section is a judgement call, but in general if the original playing happens very fast and without regard to tempo, if it would be very difficult to match the audio, or if there would be a very long stretch of 16th or 32nd notes it might be a good candidate for a trill or tremolo section.
            </Paragraph>

            <Title id='midiNotes'>MIDI Notes</Title>
            <ul className="list-disc">
                <Options>
                    <strong className="text-cyan-500">TREMOLO MARKERS</strong> are placed on MIDI note <Block>F♯8</Block> and are used on fast, odd rhythm strumming sections.
                </Options>
                <Options>
                    <strong className="text-cyan-500">TRILL MARKERS</strong> are placed on MIDI note <Block>G8</Block> and are used on two rapid notes across two different frets.
                </Options>
            </ul>

            <Title id='onHardDifficulty'>On Hard Difficulty</Title>
            <Paragraph>
                Both <strong className="text-cyan-500">TREMOLO</strong> and <strong className="text-cyan-500">TRILL MARKERS</strong> can be placed on Hard difficulty if you place these markers under velocity 40.
            </Paragraph>
        </MainComponent>
    )
}

export const NoteEncodings = () => {
    const Context = useContext(AppContext)
    const id = 'note-encodings'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            <Paragraph>
                All PRO Guitar/Bass functions are encoded using markers and channel encodings. Here is all possible channel encodings and their respective uses.
            </Paragraph>

            <Title id='channelUsedOnNotes'>Channel Used on Notes</Title>
            <ul className="list-disc">
                <Options>
                    <Block bg="#8c0000">MIDI CHANNEL 1</Block>: The default channel for new notes on REAPER. On PRO Guitar/Bass authoring, it is used to display normal notes.
                </Options>
                <Options>
                    <Block bg="#7a8c00">MIDI CHANNEL 2</Block>: Used for <em>Ghost notes</em> on <Href href='/arpeggio'>Arpeggio markers</Href>.
                </Options>
                <Options>
                    <Block bg="#008c23">MIDI CHANNEL 3</Block>: Used for <em>Bend notes</em>. These kind of notes have no visual distinction in-game.
                </Options>
                <Options>
                    <Block bg="#00578c">MIDI CHANNEL 4</Block>: Used for <Href href='/arpeggio'>Muted notes</Href>.
                </Options>
                <Options>
                    <Block bg="#46008c">MIDI CHANNEL 5</Block>: Used for <em>Right-handed Tap notes</em>. Tap notes are displayed just like <Href href='/hopo'>HO/PO Notes</Href> (so, you don't have to force HO/PO on them).
                </Options>
                <Options>
                    <Block bg="#8c3052">MIDI CHANNEL 6</Block>: Used for <em>Harmonics and Pinch Harmonics</em>. These kind of notes have no visual distinction in-game.
                </Options>
            </ul>
            <Paragraph></Paragraph>

            <Title id='channelUsedOnMarkers'>Channel Used on Markers</Title>
            <ul className="list-disc">
                <Options>
                    <Block bg="#8c6f5e">MIDI CHANNEL 12</Block>: Used on <Href href="/slide-notes">Slide Markers</Href> to <em>reverse a slide direction</em> based on each note rule.
                </Options>
                <Options>
                    <Block bg="#758c5e">MIDI CHANNEL 13</Block>: Used on <Href href="/hopo">HO/PO Markers</Href> to <em>force off</em> HO/PO notes.
                </Options>
                <Options>
                    <Block bg="#5e8c7b">MIDI CHANNEL 14</Block>: Used on <Href href="/strumming-patterns">Strumming Pattern Markers</Href> <em>to emphasize the playing of higher strings of a chord</em> OR <em>to tell the player the strumming direction is upward</em>.
                </Options>
                <Options>
                    <Block bg="#5e698c">MIDI CHANNEL 15</Block>: Used on <Href href="/strumming-patterns">Strumming Pattern Markers</Href> <em>to emphasize the playing of middle strings of a chord</em> (as string emphasis).
                </Options>
                <Options>
                    <Block bg="#875e8c">MIDI CHANNEL 16</Block>: Used on <Href href="/strumming-patterns">Strumming Pattern Markers</Href> <em>to emphasize the playing of lower strings of a chord</em> OR <em>to tell the player the strumming direction is downward</em>.
                </Options>
            </ul>
        </MainComponent>
    )
}

export const OverdriveSoloBRE = () => {
    const Context = useContext(AppContext)
    const id = 'overdrive-solo-bre'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
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
    const Context = useContext(AppContext)
    const id = 'trainer-sections'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            <Paragraph>
                Trainer sections are authored as text events. These text events must be placed on the 17-fret tracks only.
            </Paragraph>

            <Title id='forProGuitar'>For PRO Guitar</Title>
            <ul className="list-disc">
                <Options>
                    <Block>[begin_pg song_trainer_pg_#]</Block> at the beginning of the trainer section, where # represents the trainer's count.
                </Options>
                <Options>
                    <Block>[end_pg song_trainer_pg_#]</Block> at the end of the trainer section, where # represents the trainer's count.
                </Options>
            </ul>
            <Paragraph />

            <Title id='forProBass'>For PRO Bass</Title>
            <ul className="list-disc">
                <Options>
                    <Block>[begin_pb song_trainer_pb_#]</Block> at the beginning of the trainer section, where # represents the trainer's count.
                </Options>
                <Options>
                    <Block>[end_pb song_trainer_pb_#]</Block> at the end of the trainer section, where # represents the trainer's count.
                </Options>
            </ul>
            <Paragraph />

            <Title id='loopedTrainerSections'>Looped Trainer Sections</Title>
            <Paragraph>
                By default, trainers create a gap at the end of the section for the player to breathe before the section starts again. On looped trainers, there's no pause between the beginning and the end of a section. To make a trainer section a looped one, add these text events anywhere between the beginning and the end of the trainer section:
            </Paragraph>
            <ul className="list-disc">
                <Options>
                    <Block>[pg_norm song_trainer_pg_#]</Block>, for PRO Guitar. Where # represents the trainer's count.
                </Options>
                <Options>
                    <Block>[pb_norm song_trainer_pb_#]</Block>, for PRO Bass. Where # represents the trainer's count.
                </Options>
            </ul>
            <Paragraph />

            <Title id='rules'>Rules</Title>
            <ul className="list-disc">
                <List title='Looped trainer sections must be grid-snapped'></List>
                <List title='Avoid making bigger sections for solo parts'>The idea is to slice solos into parts where you can train these specific parts and try to connect them while playing.</List>
            </ul>
        </MainComponent>
    )
}

export const CustomChordNames = () => {
    const Context = useContext(AppContext)
    const id = 'custom-chord-names'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            {/* <Paragraph>
                You can place custom chord names on any chord with 
            </Paragraph> */}
        </MainComponent>
    )
}

export const Tunings = () => {
    const Context = useContext(AppContext)
    const id = 'tunings'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>

        </MainComponent>
    )
}

export const AuthoringRules = () => {
    const Context = useContext(AppContext)
    const id = 'authoring-rules'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>
            <Paragraph>
            </Paragraph>
        </MainComponent>
    )
}

export const CommonMAGMAErrors = () => {
    const Context = useContext(AppContext)
    const id = 'common-magma-errors'
    const config = MainPagesConfig[id]

    useEffect(() => {
        Context.setCurrentPage(id)
    })

    return (
        <MainComponent config={config}>

            <Title id='relatedToGems'>Related to Gems</Title>
            <Window title={
                <span>Gem at <Block measure /> in easy/medium/hard/expert difficulty has no slots</span>
            }>
                Ghost notes, used on <Href href='/'>Arpeggio Markers</Href>, where found somewhere <strong>without</strong> an Arpeggio marker. This happens sometimes when you use automatic reductions using Ziggy's. and these notes is probably is on the auto-generated difficulties notes (EMH). Track your Arpeggios markers on the Expert difficulty and check the lowest difficulties that were generated.
            </Window>

            <Title id='relatedToMIDINotes'>Related to MIDI Notes</Title>
            <Window title={
                <span>MIDI note <Block>108</Block> at <Block measure /> has invalid velocity ???</span>
            }>
                A <Href href='/'>Left Hand Position note</Href> was found with <strong>velocity below 100 or above 122</strong>.
            </Window>

            <Title id='relatedToChords'>Related to Chords</Title>
            <Window title={
                <span>No root note set for gem at <Block measure /></span>
            }>
                If a chord is found on any track, you must place a <Href href='/chords'>Root Note Indicator or a Hide Chord Marker</Href> <strong>before or aligned to it</strong>.
            </Window>

            <Title id='relatedToLHP'>Related to Left Hand Position</Title>
            <Window title={
                <span>No left hand position set for gem at <Block measure /></span>
            }>
                <strong>No <Href href='/left-hand-position'>Left Hand Position note(s)</Href> were found before or aligned to the specified gem</strong>. Left Hand Position notes must be properly charted for MAGMA to compile the song.
            </Window>
            <Window title={
                <span>Fret is less than left hand position on gem at <Block measure /></span>
            }>
                The specified gem has <strong>lower velocity than the declared <Href href='/left-hand-position'>Left Hand Position note</Href> before or aligned to it</strong>.
            </Window>
            <Window title={
                <span>Fret is too far away from left hand position on gem at <Block measure /></span>
            }>
                The specified gem velocity is <strong>too high for the declared <Href href='/left-hand-position'>Left Hand Position note</Href> before or aligned to it</strong>.
            </Window>

            <Title id='relatedToOverdrive'>Related to Overdrive</Title>
            <Window title={
                <span>Overdrive phrase at <Block>[XX:X:XXX-XX:X:XXX]</Block> for guitar/bass but not real_guitar/real_bass</span>
            }>
                <strong>Overdrive Phrases on PRO Guitar/Bass must be identical from the 5-lane guitar/bass tracks</strong>. There's a CAT option to copy overdrive from 5-lane guitar/bass tracks
            </Window>

            <Title id='otherErrors'>Other Errors</Title>
            <Window title={
                <span>Real Guitar On Midi Message out of range at tick <Block measure /> with pitch 124/125</span>
            }>
                This error happens on PRO Bass tracks with <Href href="/overdrive-solo-bre">Big Rock Ending</Href> songs. <strong>PRO Bass only uses four notes for BREs (as a reference for four strings used on Bass) and, somehow, it was found BRE notes for 5th and/or 6th string</strong>.
                <br /><br />
                Only the PRO Guitar track uses all 6 BRE notes.
            </Window>
        </MainComponent>
    )
}