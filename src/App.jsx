import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
function App() {
    // For this exercise/sprint, pretend the userName needs to live in the app
    const userName = "Joe Bloggs";

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home userName={userName} />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </>
    );
}

export default App;
