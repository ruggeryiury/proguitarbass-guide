const PageAnchors = (id: string): AnchorsLinkDocument[] => {
    if (id === 'index') {
        return [
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

    } else if (id === 'notes') {
        return [
            {
                title: "Strings",
                id: "strings"
            },
            {
                title: "Frets",
                id: "frets"
            }
        ]

    } else if (id === 'chords') {
        return [
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

    } else if (id === 'left-hand-position') {
        return [
            {
                title: "Concept",
                id: "concept"
            },
            {
                title: "Uses on Custom Songs",
                id: "usesOnCustomSongs"
            }
        ]

    } else if (id === 'slide') {
        return [
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

    } else if (id === 'trill-tremolo') {
        return [
            {
                title: "MIDI Notes",
                id: "midiNotes"
            },
            {
                title: "On Hard Difficulty",
                id: "onHardDifficulty"
            }
        ]

    } else if (id === 'note-encodings') {
        return [
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

    } else if (id === 'overdrive-solo-bre') {
        return [
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

    } else if (id === 'trainer-sections') {
        return [
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
    } else if (id === 'common-magma-errors') {
        return [
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
            }]
    } else {
        return []
    }
}

export default PageAnchors