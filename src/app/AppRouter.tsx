import { useContext, useEffect } from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { AppContext } from "./AppProvider"
import MainRouter from "../routes/MainRouter"

const AppRouter = () => {
    const Context = useContext(AppContext)

    useEffect(() => {
    }, [Context.lang])
    return (
        <Router>
            <Routes>
                {/* <Route path='/help' element={<h1>help</h1>} /> */}
                <Route path='/*' element={<MainRouter />} />
            </Routes>
        </Router>
    )
}

export default AppRouter