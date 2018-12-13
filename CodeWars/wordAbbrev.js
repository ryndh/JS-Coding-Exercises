// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

function abbreviate(string) {
    const unpacked = string.split('')
    let staged = []
    const final = []
    for (el of unpacked) {
      if (typeof el === 'string' && /[A-Za-z]/.test(el)) {
        staged.push(el)
      } else if (staged.length > 3) {
        let word = staged[0] + staged.slice(1,-1).length +staged.slice(-1)
        final.push(word)
        staged = []
        final.push(el)
      } else {
        let word = staged.join('')
        final.push(word)
        staged=[]
        final.push(el)
      }
    }
    if (staged.length > 1 && staged.length < 4) {
      final.push(staged.join(''))
    } else if (staged.length > 3) {
      final.push(staged[0] + staged.slice(1,-1).length +staged.slice(-1))
    } else if (staged.length == 1){
      final.push(staged[0])
    }
    return final.join('')
}

