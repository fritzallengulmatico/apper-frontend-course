function isPalindrome(word){
    if(typeof word === 'string'){
        const editedWord = word.split('').reverse().join('')
        if (editedWord === word){
            return true
        }
        else {
            return false
        }
    }
}

const word = 'radar'
if (isPalindrome(word)){
    console.log('It is a palindrome!')
}
else if (typeof word !== 'string'){
    console.log('Please input a string')
}
else {
    console.log('It is not a palindrome!')
}