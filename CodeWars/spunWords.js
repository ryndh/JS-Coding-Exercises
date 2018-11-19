function spinWords(str){
    newList = str.split(" ");
    final = []
    newList.forEach(function(word){
        if (word.length > 4) {
            spunWord = word.split('').reverse().join('')
            console.log(spunWord)
            final.push(spunWord)
        } else {
            final.push(word)
        }
    })
    return final.join(" ")
  }

console.log(spinWords("Hi there how are you doing today"))

//Other codewars solution
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }
