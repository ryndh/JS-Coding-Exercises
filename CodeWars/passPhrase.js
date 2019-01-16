// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.
// #Example:

// your text: "BORN IN 2015!", shift 1

// 1 + 2 + 3 -> "CPSO JO 7984!"

// 4 "CpSo jO 7984!"

// 5 "!4897 Oj oSpC"

// With longer passphrases it's better to have a small and easy program. Would you write it?

function playPass(s, n) {
    const alphaChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    moreSecurePass = []
    for (character of s) {
        if (+ character || character == '0') {
            const num = 9 - character
            moreSecurePass.unshift(num)
        } else if (alphaChar.includes(character)) {
            const index = alphaChar.indexOf(character)
            const newIndex = index + n < 52 ? index + n : index + n - 52
            moreSecurePass.unshift(moreSecurePass.length % 2 == 0 ? alphaChar[newIndex].toUpperCase() : alphaChar[newIndex].toLowerCase() )
        } else {
            moreSecurePass.unshift(character)
        }
    }
    console.log(moreSecurePass.join('')) 
}

playPass("MYGRANMACAMEFROMNYONTHE23RDOFAPRIL2015", 2)

function realPass(s, n) {
    const alphaChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    originalPass = []
    for (character of s) {
        if (+ character || character == '0') {
            const num = 9 - character
            originalPass.unshift(num)
        } else if (alphaChar.includes(character)) {
            const index = alphaChar.indexOf(character)
            const newIndex = index - n > -1 ? index - n : index - n + 52
            originalPass.unshift(alphaChar[newIndex].toLowerCase() )
        } else {
            originalPass.unshift(character)
        }
    }
    console.log(originalPass.join(''))
}

realPass('4897nKtRcHqFt67GjVpQaPoQtHgOcEcOpCtIaO', 2)