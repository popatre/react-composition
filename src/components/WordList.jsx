export default function WordList({ word1, word2, word3 }) {
    return (
        <ul>
            <li>
                <a href={`https://www.dictionary.com/browse/${word1}`}>
                    {word1}
                </a>
            </li>
            <li>
                <a href={`https://www.dictionary.com/browse/${word2}`}>
                    {word2}
                </a>
            </li>
            <li>
                <a href={`https://www.dictionary.com/browse/${word3}`}>
                    {word3}
                </a>
            </li>
        </ul>
    );
}
