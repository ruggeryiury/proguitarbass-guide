import { Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import IndexPage from "../pages/main/IndexPage"
import { Notes, Chords, MutedNotesAndChords } from "../pages/main/Basics.pages"
import { Arpeggio, ForceChordNumbering, HOPO, Slide, StrummingPatterns } from "../pages/main/Markers.pages"
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
                <Route path='/muted-notes-and-chords' element={<MutedNotesAndChords />} />

                (Markers)
                <Route path='/hopo' element={<HOPO />} />
                <Route path='/slide' element={<Slide />} />
                <Route path='/arpeggio' element={<Arpeggio />} />
                <Route path='/strumming-pattern' element={<StrummingPatterns />} />
                <Route path='/force-chord-numbering' element={<ForceChordNumbering />} />

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