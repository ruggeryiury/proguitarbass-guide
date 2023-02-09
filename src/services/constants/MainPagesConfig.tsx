const MainPagesConfig: { [key: string]: MainPagesConfigContentProps } = {

    // Basics
    index: {
        index: true,
        title: 'Getting Started',
        url: '/',
        type: 'basics',
        anchors: [
            {
                title: "Introduction",
                id: "introduction"
            },
            {
                title: "Authoring Tools",
                id: "authoringTools"
            },
            {
                title: "Preparing Your Reaper Project",
                id: "preparingYourReaperProject"
            }
        ]
    },
    notes: {
        title: 'Notes',
        url: '/notes',
        type: 'basics',
        anchors: [
            {
                title: "Strings",
                id: "strings"
            },
            {
                title: "Frets",
                id: "frets"
            }
        ]
    },
    chords: {
        title: 'Chords',
        url: '/chords',
        type: 'basics',
        anchors: [
            {
                title: "Root Note Indicators",
                id: "rootNoteIndicators"
            },
            {
                title: "Slash Chords",
                id: "slashChords"
            },
            {
                title: "Omitting Muted Strings from Chords",
                id: "omittingMutedStringsfromChords"
            },
            {
                title: "Hide Chord Name",
                id: "hideChordName"
            },
            {
                title: "Sharp/Flat Swap",
                id: "sharpFlatSwap"
            }
        ]
    },
    'left-hand-position': {
        title: 'Left Hand Position',
        url: '/left-hand-position',
        type: 'basics',
        anchors: [
            {
                title: "Concept",
                id: "concept"
            },
            {
                title: "Uses on Custom Songs",
                id: "usesOnCustomSongs"
            }
        ]
    },

    // Notes & Markers
    'muted-notes-and-chords': {
        title: 'Muted Notes & Chords',
        url: '/muted-notes-and-chords',
        type: 'notes-and-markers'
    },
    hopo: {
        title: 'Hammer-Ons & Pull-Offs',
        url: '/hopo',
        type: 'notes-and-markers'
    },
    slide: {
        title: 'Slide Markers',
        url: '/slide',
        type: 'notes-and-markers',
        anchors: [
            {
                title: "Slide Direction Rules",
                id: "slideDirectionRules"
            },
            {
                title: "The Fret Rule",
                id: "theFretRule"
            },
            {
                title: "The 1/16 Note Gap Rule",
                id: "the1_16NoteGapRule"
            },
            {
                title: "Behavior with Chords",
                id: "behaviorWithChords"
            }
        ]
    },
    arpeggio: {
        title: 'Arpeggio Markers',
        url: '/arpeggio',
        type: 'notes-and-markers'
    },
    'strumming-pattern': {
        title: 'Strumming Pattern Markers',
        url: '/strumming-pattern',
        type: 'notes-and-markers'
    },
    'force-chord-numbering': {
        title: 'Force Chord Numbering',
        url: '/force-chord-numbering',
        type: 'notes-and-markers'
    },
    'trill-tremolo': {
        title: 'Trill & Tremolo Markers',
        url: '/trill-tremolo',
        type: 'notes-and-markers',
        anchors: [
            {
                title: "MIDI Notes",
                id: "midiNotes"
            },
            {
                title: "On Hard Difficulty",
                id: "onHardDifficulty"
            }
        ]
    },

    // Events
    'note-encodings': {
        title: 'Note Encodings',
        url: '/note-encodings',
        type: 'events',
        anchors: [
            {
                title: "Channel Used on Notes",
                id: "channelUsedOnNotes"
            },
            {
                title:
                    "Channel Used on Markers",
                id: "channelUsedOnMarkers"
            }
        ]
    },
    'overdrive-solo-bre': {
        title: 'Overdrive, Solo & BRE',
        url: '/overdrive-solo-bre',
        type: 'events',
        anchors: [
            {
                title: "Overdrive",
                id: "overdrive"
            },
            {
                title: "Solo Markers",
                id: "soloMarkers"
            },
            {
                title: "Big Rock Endings",
                id: "bigRockEndings"
            }
        ]
    },
    'trainer-sections': {
        title: 'Trainer Sections',
        url: '/trainer-sections',
        type: 'events',
        anchors: [
            {
                title: "For PRO Guitar",
                id: "forProGuitar"
            },

            {
                title: "For PRO Bass",
                id: "forProBass"
            },
            {
                title: "Looped Trainer Sections",
                id: "loopedTrainerSections"
            },
            {
                title: "Rules",
                id: "rules"
            }
        ]
    },
    'custom-chord-names': {
        title: 'Custom Chord Names',
        url: '/custom-chord-names',
        type: 'events'
    },

    // Mastering
    tunings: {
        title: 'Tunings',
        url: '/tunings',
        type: 'mastering'
    },
    'authoring-rules': {
        title: 'Authoring Rules',
        url: '/authoring-rules',
        type: 'mastering'
    },
    'common-magma-errors': {
        title: 'Common MAGMA Errors',
        url: '/common-magma-errors',
        type: 'mastering',
        anchors: [
            {
                title: "Related to Gems",
                id: "relatedToGems"
            },
            {
                title: "Related to MIDI Notes",
                id: "relatedToMIDINotes"
            },
            {
                title: "Related to Chords",
                id: "relatedToChords"
            },
            {
                title: "Related to Left Hand Position",
                id: "relatedToLHP"
            },
            {
                title: "Related to Overdrive",
                id: "relatedToOverdrive"
            },
            {
                title: "Other Errors",
                id: "otherErrors"
            }
        ]
    }
}

export default MainPagesConfig