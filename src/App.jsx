import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
function App() {
    // For this exercise, leave this variable - don't move this from here
    const userName = "Joe Bloggs";
    return (
        <>
            <Navbar username={userName} />
            <Routes>
                <Route path="/" element={<Home username={userName} />} />
                <Route path="/post" element={<Post />} />
            </Routes>
        </>
    );
}

export default App;
