function reverse(word){
    if(typeof word === 'string'){
        const editedWord = word.split('').reverse().join('')
        return editedWord
    }
    else{
        console.log('Please input a string')
    }
}

const word = 'hello'
const reversedWord = reverse(word)
console.log(reversedWord)

// for inputs that are not strings
const num = 1645326
const reversedNum = reverse(num)
//console.log(reversedWord)