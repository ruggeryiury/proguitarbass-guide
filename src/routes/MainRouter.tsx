import { Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import ErrorPage from "../pages/ErrorPage"
import * as Topics from '../pages/Topics'

const MainRouter = () => {
    
    return (
        <>
            <Header />
            <Routes>
                (Index Page)
                <Route index element={<Topics.Index />} />

                (Basics)
                <Route path='/notes' element={<Topics.Notes />} />
                <Route path='/chords' element={<Topics.Chords />} />
                <Route path='/muted-notes-and-chords' element={<Topics.MutedNotesAndChords />} />

                (Markers)
                <Route path='/hopo' element={<Topics.HOPO />} />
                <Route path='/slide' element={<Topics.Slide />} />
                <Route path='/arpeggio' element={<Topics.Arpeggio />} />
                <Route path='/strumming-pattern' element={<Topics.StrummingPatterns />} />
                <Route path='/force-chord-numbering' element={<Topics.ForceChordNumbering />} />

                (Events)
                <Route path='/left-hand-position' element={<Topics.LeftHandPosition />} />
                <Route path='/note-encodings' element={<Topics.NoteEncondings />} />
                <Route path='/overdrive-solo-bre' element={<Topics.OverdriveSoloBRE />} />
                <Route path='/trainer-sections' element={<Topics.TrainerSections />} />
                <Route path='/custom-chord-names' element={<Topics.CustomChordNames />} />

                (Mastering)
                <Route path='/tunings' element={<Topics.Tunings />} />
                <Route path='/reductions' element={<Topics.Reductions />} />
                <Route path='/common-magma-errors' element={<Topics.CommonMAGMAErrors />} />

                (Error Page)
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default MainRouter