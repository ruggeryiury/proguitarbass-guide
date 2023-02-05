import { Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import ErrorPage from "../pages/ErrorPage"
import * as MainPages from '../pages/MainPages'

const MainRouter = () => {
    
    return (
        <>
            <Header />
            <Routes>
                (Index Page)
                <Route index element={<MainPages.Index />} />

                (Basics)
                <Route path='/notes' element={<MainPages.Notes />} />
                <Route path='/chords' element={<MainPages.Chords />} />
                <Route path='/left-hand-position' element={<MainPages.LeftHandPosition />} />

                (Markers)
                <Route path='/muted-notes-and-chords' element={<MainPages.MutedNotesAndChords />} />
                <Route path='/hopo' element={<MainPages.HOPO />} />
                <Route path='/slide' element={<MainPages.Slide />} />
                <Route path='/arpeggio' element={<MainPages.Arpeggio />} />
                <Route path='/strumming-pattern' element={<MainPages.StrummingPattern />} />
                <Route path='/force-chord-numbering' element={<MainPages.ForceChordNumbering />} />
                <Route path='/trill-tremolo' element={<MainPages.TrillTremolo />} />

                (Events)
                <Route path='/note-encodings' element={<MainPages.NoteEncodings />} />
                <Route path='/overdrives-solos-bre' element={<MainPages.OverdrivesSolosBRE />} />
                <Route path='/trainer-sections' element={<MainPages.TrainerSections />} />
                <Route path='/custom-chord-names' element={<MainPages.CustomChordNames />} />

                (Mastering)
                <Route path='/tunings' element={<MainPages.Tunings />} />
                <Route path='/reductions' element={<MainPages.Reductions />} />
                <Route path='/common-magma-errors' element={<MainPages.CommonMAGMAErrors />} />

                (Error Page)
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default MainRouter