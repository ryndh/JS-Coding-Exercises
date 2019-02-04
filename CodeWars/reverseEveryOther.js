// Reverse every other word in a given string, then return the string. 
// Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
// Punctuation marks should be treated as if they are apart of the word in this kata.

function reverse(str) {
    myArray = str.trim(' ').split(' ')
    finalArray = []
    myArray.map((word, index) => index % 2 == 0 ? finalArray.push(word) : finalArray.push(word.split('').reverse().join('')))
    return finalArray.join(' ')
}


console.log(reverse("Reverse this string, please!"))
console.log(reverse("I really don't like reversing strings!"))