function convertToVowels(word) {
    const vowelsOnly = [];
    const editedWord = word.split('');
    editedWord.forEach(element => {
        if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
            vowelsOnly.push(element);
        }
    });
    return vowelsOnly.join('');
}

const word = 'this is some word';
const wordWithOnlyVowels = convertToVowels(word);
console.log(wordWithOnlyVowels); // ['i', 'i', 'o', 'e', 'o']