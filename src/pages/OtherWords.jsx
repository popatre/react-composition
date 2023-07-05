import SuperCoolContainer from "../components/SuperCoolContainer";

export default function OtherWords({ word }) {
    const word1 = "conceited";
    const word2 = "gregarious";
    const word3 = "stoic";
    return (
        <main>
            <h1>
                Im another component that also uses the word of the day, which
                is... {word}
            </h1>
            <p>
                Click below to find the definitions to {word1}, {word2} and{" "}
                {word3}
            </p>
            <SuperCoolContainer word1={word1} word2={word2} word3={word3} />
        </main>
    );
}
