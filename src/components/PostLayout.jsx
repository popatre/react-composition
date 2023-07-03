import { useEffect, useState } from "react";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

export default function PostLayout() {
    const [progress, setProgress] = useState(0);

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

    return (
        <>
            <h2 className="progress">Progress: {progress}%</h2>

            <main className="content">
                <h1>New Post</h1>
                {posts.map((post) => {
                    return <PostCard key={post.id} content={post.content} />;
                })}
            </main>
            <footer>
                <h2 className="progress">Progress: {progress}%</h2>
            </footer>
        </>
    );
}
