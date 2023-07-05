import SuperCoolContainer from "../components/SuperCoolContainer";

export default function OtherWords({ word }) {
    const word1 = "spanners";
    const word2 = "lawnmower";
    const word3 = "bus";
    return (
        <main>
            <h1>
                Im another component that also uses the word of the day, which
                is... {word}
            </h1>
            <SuperCoolContainer word1={word1} word2={word2} word3={word3} />
        </main>
    );
}
