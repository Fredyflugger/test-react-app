import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";
import TestPage from "./pages/Test";
import MainNav from "./components/mainNavMenu";

function App() {
    return (
        <div>
            <MainNav />
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/test" element={<TestPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
