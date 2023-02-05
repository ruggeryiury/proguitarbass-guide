import { HashRouter as Router, Routes, Route } from "react-router-dom"
import MainRouter from "../routes/MainRouter"

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                {/* <Route path='/help' element={<h1>help</h1>} /> */}
                <Route path='/*' element={<MainRouter />} />
                <Route path='/examples' element={null} />
            </Routes>
        </Router>
    )
}

export default AppRouter