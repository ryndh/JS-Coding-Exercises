// Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

// This should only work if the number has 4 digits or more. If not, return "Number is too small".

// Example

// lowestProduct("123456789")--> 24 (1x2x3x4)
// lowestProduct("35") --> "Number is too small"

function lowestProduct(input) { 
    if (input.length < 4) {
        return 'Number is too small'
    }
    myArray = input.split('').map(num => parseInt(num))
    lowest = myArray[0] * myArray[1] * myArray[2] * myArray[3]
    for (i = 0; i < myArray.length - 3; i++) {
        const newArray = [...myArray]
        const checkMe = newArray.slice(i, i+4)
        const total = checkMe.reduce((a, b)=> a * b)
        if (total < lowest) {
            lowest = total
        }
    }
    return(lowest)
}


lowestProduct("789")