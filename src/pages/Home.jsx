import WelcomeHeader from "../components/WelcomeHeader";

export default function Home({ word }) {
    return (
        <main>
            <WelcomeHeader word={word} />
            <p>
                This random word was brought to you by
                https://random-word-api.herokuapp.com/home
            </p>
        </main>
    );
}
