export const getRandomWord = async () => {
    const result = await fetch("https://random-word-api.herokuapp.com/word");
    const word = await result.json();
    return word[0];
};
