// Build Tower

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]

const pyramid = (n) => {
    const finalArray = []
    let myArray = []
    let greatestStars = n * 2 - 1
    let currentStars = 1
    for (let x of Array(n)) {
        for (let x of Array(currentStars)) {
            myArray.push('*')
        }
        for (let x of Array((greatestStars - currentStars) / 2)) {
            myArray.push(' ')
            myArray.unshift(' ')
        }
        finalArray.push(myArray.join(''))
        currentStars += 2
        myArray = []
    }
    return finalArray
}

pyramid(3)