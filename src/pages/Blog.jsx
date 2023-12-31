import { useEffect, useState, useRef } from "react";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

export default function Blog() {
    const [progress, setProgress] = useState(0);
    const renderCountRef = useRef(0);

    useEffect(() => {
        const scrollListener = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const totalScrollableDistance = documentHeight - windowHeight;
            const scrollProgress =
                (scrollPosition / totalScrollableDistance) * 100;
            setProgress(Math.round(scrollProgress));
        };

        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    useEffect(() => {
        /* Leave in Blog.jsx */
        renderCountRef.current += 1;
    });

    return (
        <>
            <h2 className="progress">Progress: {progress}%</h2>
            {/* Leave the re-render h2 in Blog.jsx */}
            <h2 className="render">
                I have re-rendered {renderCountRef.current} times
            </h2>
            <main className="content">
                <h1>All Posts</h1>
                {posts.map((post) => {
                    return <PostCard key={post.id} content={post.content} />;
                })}
            </main>
            <footer>
                <h2 className="footer-progress">
                    {progress < 100
                        ? `Progress: ${progress}%`
                        : "You're at the bottom of the page"}
                </h2>
                <br></br>
                <br></br>
                <br></br>
            </footer>
        </>
    );
}
