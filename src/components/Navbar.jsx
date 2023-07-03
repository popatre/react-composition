import React from "react";

export default function Navbar({ username }) {
    return (
        <nav>
            <p>Signed in as - {username}</p>
            <button>Sign in</button>
        </nav>
    );
}
