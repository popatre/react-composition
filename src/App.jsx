import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
function App() {
    // For this exercise, leave this variable - don't move this from here
    const userName = "Joe Bloggs";
    return (
        <>
            <Navbar username={userName} />
            <Routes>
                <Route path="/" element={<Home username={userName} />} />
                <Route path="/blog" element={<BlogPost />} />
            </Routes>
        </>
    );
}

export default App;
