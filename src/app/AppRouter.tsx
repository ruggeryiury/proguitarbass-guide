import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import ErrorPage from '../pages/ErrorPage'
import * as MainPages from '../pages/MainPages'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/help' element={<h1>help</h1>} /> */}
        <Route
          path="/*"
          element={
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Starts Main Router

            <>
              <Header />
              <Routes>
                (Index Page)
                <Route
                  index
                  element={<MainPages.Index />}
                />
                (Basics)
                <Route
                  path="/notes"
                  element={<MainPages.Notes />}
                />
                <Route
                  path="/chords"
                  element={<MainPages.Chords />}
                />
                <Route
                  path="/left-hand-position"
                  element={<MainPages.LeftHandPosition />}
                />
                (Markers)
                <Route
                  path="/muted-notes-and-chords"
                  element={<MainPages.MutedNotesAndChords />}
                />
                <Route
                  path="/hopo"
                  element={<MainPages.HOPO />}
                />
                <Route
                  path="/slide"
                  element={<MainPages.Slide />}
                />
                <Route
                  path="/arpeggio"
                  element={<MainPages.Arpeggio />}
                />
                <Route
                  path="/strumming-pattern"
                  element={<MainPages.StrummingPattern />}
                />
                <Route
                  path="/force-chord-numbering"
                  element={<MainPages.ForceChordNumbering />}
                />
                <Route
                  path="/trill-tremolo"
                  element={<MainPages.TrillTremolo />}
                />
                (Events)
                <Route
                  path="/note-encodings"
                  element={<MainPages.NoteEncodings />}
                />
                <Route
                  path="/overdrive-solo-bre"
                  element={<MainPages.OverdriveSoloBRE />}
                />
                <Route
                  path="/trainer-sections"
                  element={<MainPages.TrainerSections />}
                />
                <Route
                  path="/custom-chord-names"
                  element={<MainPages.CustomChordNames />}
                />
                (Mastering)
                <Route
                  path="/tunings/*"
                  element={
                    <Routes>
                      <Route
                        index
                        element={<MainPages.Tunings />}
                      />
                    </Routes>
                  }
                />
                <Route
                  path="/authoring-rules"
                  element={<MainPages.AuthoringRules />}
                />
                <Route
                  path="/common-magma-errors"
                  element={<MainPages.CommonMAGMAErrors />}
                />
                (Error Page)
                <Route
                  path="/*"
                  element={<ErrorPage />}
                />
              </Routes>
            </>

            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Ends Main Router
          }
        />
        <Route
          path="/examples"
          element={null}
        />
      </Routes>
    </Router>
  )
}

export default AppRouter
