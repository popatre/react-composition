import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
    const userName = "Joe Bloggs";
    return (
        <>
            <Navbar username={userName} />
            <Routes>
                <Route path="/" element={<Home username={userName} />} />
            </Routes>
        </>
    );
}

export default App;
