import MainComponent from '../../components/Main/MainComponent'
import { MainTextTitle, MainTextParagraph, MainTextList, MainTextLink, MainTextHref, MainTextBlock } from '../../components/Main/MainText.components'
import PageAnchorsProvider from '../../services/configs/PageAnchorsProvider'

const IndexPage = () => {
    return (
        <MainComponent title="Ruggy's PRO Guitar/Bass Guide" anchors={PageAnchorsProvider('index-page')}>
            <MainTextTitle id='introduction'>Introduction</MainTextTitle>
            <MainTextParagraph>This guide will help you creating PRO Guitar/Bass parts for your customs, with every single PRO mode features explained.<br /><br />Here are some things you should consider before authoring PRO Guitar/Bass parts:</MainTextParagraph>
            <ul>
                <MainTextList title="Playability VS. Accuracy">All PRO Guitar/Bass charts must follow their 5-lane charts, but certain dynamics and articulations are way easier to portrait on 5-lane charts. Sometimes, you'll chart different guitar sections and realize there's a big fret jumping between one charted section to the other, Then this happens, feel free to underchart, and even take a 4th note space away from the chart to let the player position its hand to keep playing the song. Songs were meant to be playable and this rule applies to everything. If you're in doubt of what to do, ask to any PRO Guitar/Bass player for opinions about how's the best approach for your song.</MainTextList>
                <MainTextList title="Basic music theory knowlegde">Just like PRO Keys parts, music theory plays a big role while charting PRO Guitar/Bass parts, so it's inevitable for you to understand basic concepts of playing guitar/bass to make PRO Guitar/Bass parts for your custom.</MainTextList>
            </ul>

            <MainTextTitle id='authoringTools'>Authoring Tools</MainTextTitle>
            <ul>
                <MainTextLink to='https://rhythmgamingworld.com/forums/topic/pro-guitar-preview-for-reaper-v10/' title='PRO Guitar Preview Plugin for REAPER'>A REAPER JSFX plugin created by C3 user <em>Seil</em> that translates PRO Guitar/Bass notes to actual MIDI notes, so you can use any VST plugin (like REAPER's <em>ReaSynth</em>) to hear the notes you're charting.</MainTextLink>
                <MainTextLink to='/proguitarbass-guide/static/REAPERNoteNames.zip' title='PRO Guitar/Bass note names for REAPER'>Including two text files for you to use on your PRO Guitar/Bass tracks on REAPER, one has note names for all difficulties and the other has just for Expert difficulty.</MainTextLink>
                <MainTextLink to='https://code.google.com/archive/p/ziggy-pro-editor/' title="Ziggy's PRO Editor">Since CAT can't do automatic PRO Guitar/Bass reductions, <em>Ziggy's PRO Editor</em> might be handy tool for you to auto-generate EMH difficulties in a flash! You can find a tutorial to generate reductions on the <MainTextHref href='/reductions'>Reductions</MainTextHref> page.</MainTextLink>
            </ul>

            <MainTextTitle id='preparingYourReaperProject'>Preparing Your Reaper Project</MainTextTitle>
            <ul>
                <MainTextList title='Install PRO Guitar Preview, and the PRO Guitar/Bass note names'>
                    The <em>PRO Guitar/Bass Preview plugin</em> must be placed anywhere inside <em className='text-cyan-500 break-words'>AppData\Roaming\REAPER\Effects</em>, and the note names text files must be placed where you have all the other note names text files that is installed using the RBN2 Authoring Tools.

                </MainTextList>
                <MainTextList title="Create PRO Guitar/Bass tracks">
                    Start by adding two new tracks on your REAPER project:
                    <br /><br />

                    <MainTextBlock children="PART REAL_GUITAR" /> for <em>PRO Guitar</em> parts.
                    <br />
                    <MainTextBlock children="PART REAL_BASS" /> for <em>PRO Bass</em> parts.
                    <br /><br />

                    These tracks is meant to be played on the 17-fret <em>Mustang PRO Guitar</em>, if your Guitar/Bass chart has notes above the 17-fret, you must chart these on <MainTextBlock children='PART REAL_GUITAR_22' /> and <MainTextBlock children="PART REAL_BASS_22" /> tracks and they're only used when you're playing with the <em>Squier PRO Guitar Controller</em>.
                    <br /><br />

                    <MainTextBlock children='PART REAL_GUITAR' /> and <MainTextBlock children="PART REAL_BASS" /> tracks are <strong>obrigatory</strong> even if your chart has notes above the 17-fret. Notes above the 17th fret must be transposed to suit in the 17-fret tracks while trying to connect the transposed notes without messing with the player's fret position too much. To do this, try to also transpose notes within a big section where the player can play all notes correctly.
                </MainTextList>
                <MainTextList title='Load PRO Guitar/Bass note names'>
                    On the track editor, go to <em className='text-cyan-500'>File &gt; Customize note names &gt; Load note names from file...</em> and Select the "RB PRO Guitar-Bass Expert.txt" file from the .
                </MainTextList>
                <MainTextList title='Place the notes color based on the MIDI channel'>
                    The MIDI notes channels plays a major role on the PRO Guitar/Bass authoring. To view notes color based on the MIDI channel, open the MIDI track and to go <em className='text-cyan-500'>View &gt; Color notes by &gt; Channel</em>.
                </MainTextList>
                <MainTextList title="Configure the PRO Guitar Preview FX">
                    On the tracks' FX, add the <em>PRO Guitar Preview</em> and add <em>ReaSynth</em> (or any other VST plugin), so you can hear the notes you charted.
                </MainTextList>
            </ul>
        </MainComponent>
    )
}

export default IndexPage