const LangParser = (language: string) => {
    if (language.includes('en-') || language.startsWith('en')) {
        return 'ENG'
    } else if (language.includes('pt-') || language.startsWith('pt')) {
        return 'POR'
    } else if (language.includes('es-') || language.startsWith('es')) {
        return 'ESP'
    } else {
        return 'ENG'
    }
}

export default LangParser