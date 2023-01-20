interface ContextDocument {
    lang: string
    setLang: React.Dispatch<React.SetStateAction<string>>
    currentPage: string
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}