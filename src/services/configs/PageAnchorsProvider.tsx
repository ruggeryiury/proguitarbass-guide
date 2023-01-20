const PageAnchorsProvider = (page?: string): AnchorsLinkDocument[] => {

    if (page) {
        if (page === 'index-page') {
            return [{ title: "Introduction", id: "introduction" }, { title: "Authoring Tools", id: "authoringTools" }, { title: "Preparing Your Reaper Project", id: "preparingYourReaperProject" }]

        } else if (page === 'notes') {
            return [{ title: "Strings", id: "strings" }, { title: "Frets", id: "frets" }]

        } else if (page === 'chords') {
            return [{ title: "Root Note Indicators", id: "rootNoteIndicators" }, { title: "Slash Chords", id: "slashChords" }, { title: "Omitting Muted Strings from Chords", id: "omittingMutedStringsfromChords" }, { title: "Hide Chord Name", id: "hideChordName" }]

        } else if (page === 'slide-notes') {
            return [{ title: "Slide Direction Rules", id: "slideDirectionRules" }, { title: "The Fret Rule", id: "theFretRule" }, { title: "The 1/16 Note Gap Rule", id: "the1_16NoteGapRule" }, { title: "Behavior with Chords", id: "behaviorWithChords" }]

        } else if (page === 'note-encodings') {
            return [{ title: "Channel Used on Notes", id: "channelUsedOnNotes" }, { title: "Channel Used on Markers", id: "channelUsedOnMarkers" }]

        } else if (page === 'overdrive-solo-bre') {
            return [{ title: "Overdrive", id: "overdrive" }, { title: "Solo Markers", id: "soloMarkers" }, { title: "Big Rock Endings", id: "bigRockEndings" }]
            
        } else {
            return []
        }
    }
    else {
        return []
    }
}

export default PageAnchorsProvider