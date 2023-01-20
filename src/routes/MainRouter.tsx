import { Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import IndexPage from "../pages/main/IndexPage"
import { Notes, Chords } from "../pages/main/Basics.pages"
import { MutedNotes, SlideNotes } from "../pages/main/NotesPages"
import { Arpeggio, HOPO, StringEmphasisStrummingPattern } from "../pages/main/Markers.pages"
import { CustomChordNames, FretHandPosition, NoteEncondings, OverdriveSoloBRE, TrainerSections } from "../pages/main/Events.pages"
import ErrorPage from "../pages/ErrorPage"
import { CommonMAGMAErrors, Reductions, Tunings } from "../pages/main/Mastering.pages"

const MainRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                (Index Page)
                <Route index element={<IndexPage />} />

                (Basics)
                <Route path='/notes' element={<Notes />} />
                <Route path='/chords' element={<Chords />} />

                (Notes)
                <Route path='/muted-notes' element={<MutedNotes />} />
                <Route path='/slide-notes' element={<SlideNotes />} />

                (Markers)
                <Route path='/hopo' element={<HOPO />} />
                <Route path='/arpeggio' element={<Arpeggio />} />
                <Route path='/string-emphasis-strumming-pattern' element={<StringEmphasisStrummingPattern />} />

                (Events)
                <Route path='/fret-hand-position' element={<FretHandPosition />} />
                <Route path='/note-encodings' element={<NoteEncondings />} />
                <Route path='/overdrive-solo-bre' element={<OverdriveSoloBRE />} />
                <Route path='/trainer-sections' element={<TrainerSections />} />
                <Route path='/custom-chord-names' element={<CustomChordNames />} />

                (Mastering)
                <Route path='/tunings' element={<Tunings />} />
                <Route path='/reductions' element={<Reductions />} />
                <Route path='/common-magma-errors' element={<CommonMAGMAErrors />} />

                (Error Page)
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default MainRouter