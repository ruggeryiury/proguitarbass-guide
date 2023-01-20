/**
 * **Checks on `localStorage` for saved language configuration.**
 * @returns {string | null} If has saved language configuration on the `localStorage`, it returns the string with the language to be parsed then send the WebApp's Context, otherwise `null`.
 */
const CheckLocalStorage = (): string | null => {
    const hasLangConfigSaved = localStorage.getItem('lang')

    if (hasLangConfigSaved) {
        return hasLangConfigSaved
    } else {
        return null
    }
}

export default CheckLocalStorage