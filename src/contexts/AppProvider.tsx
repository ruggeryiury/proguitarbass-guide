import { createContext, useState } from "react"

export const AppContext = createContext({} as ContextDocument)

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    const [lang, setLang] = useState('ENG')
    const [currentPage, setCurrentPage] = useState('index')

    return (
        <AppContext.Provider value={{
            lang, setLang,
            currentPage, setCurrentPage
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider