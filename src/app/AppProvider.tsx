import { createContext, useState } from 'react'

export const AppContext = createContext({} as ContextProps)

const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [currentPage, setCurrentPage] = useState('index')

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
