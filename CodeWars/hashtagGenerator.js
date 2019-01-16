// The marketing team is spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
function generateHashtag(someString) {
    wordList = someString.split(' ')
    hash = []
    wordList.forEach(word => {
        if (word.length > 0) {
            hash.push(word[0].toUpperCase() + word.substring(1))
        }
    })
    return hash.join().length > 140 || hash.join().length == 0 ? false : `#${hash.join('')}`

}

generateHashtag(" Hello there thanks for trying my Kata")