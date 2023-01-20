import AppProvider from "../contexts/AppProvider"
import AppRouter from "../routes/AppRouter"

const App = () => {
    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    )
}

export default App