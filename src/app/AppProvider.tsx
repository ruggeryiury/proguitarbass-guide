import { createContext, useState } from "react"

export const AppContext = createContext({} as ContextDocument)

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('Index')

    return (
        <AppContext.Provider value={{
            currentPage, setCurrentPage
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider