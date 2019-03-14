// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    const letters = string.split('')
    let word = []
    const sentence = []
    for (let letter of letters) {
        if (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123 ) {
            word.push(letter)
        } else {
            sentence.push(word.join(''))
            word = [letter]
        }
    }
    sentence.push(word.join(''))
    return sentence.join(' ')
}

console.log(solution('camelCasing'))


// solution via codewars using regex:

// function solution(string) {
//     return(string.replace(/([A-Z])/g, ' $1'));
  
//   }