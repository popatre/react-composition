import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { getRandomWord } from "./utils/api";
import Random from "./pages/Random";

function App() {
    const [word, setWord] = useState("");

    useEffect(() => {
        getRandomWord().then((randomWord) => {
            setWord(randomWord);
        });
    }, []);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home title={word} />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/random" element={<Random word={word} />} />
            </Routes>
        </>
    );
}

export default App;
