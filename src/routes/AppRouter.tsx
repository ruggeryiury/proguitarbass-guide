import { useContext, useEffect } from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { AppContext } from "../contexts/AppProvider"
import CheckLocalStorage from "../services/configs/CheckLocalStorage"
import LangParser from "../services/utils/LangParser"
import MainRouter from "./MainRouter"

const AppRouter = () => {
    const Context = useContext(AppContext)

    useEffect(() => {
        const savedLanguage = CheckLocalStorage()

        if (savedLanguage) {
            Context.setLang(savedLanguage)
        } else {
            const language = LangParser(navigator.language)
            
            Context.setLang(language)
        }
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