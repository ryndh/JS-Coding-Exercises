// Description:

// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    for (i = 0; i < A.length; i++) {
        let newArray = A.filter(num => num == A[i])
        if (newArray.length % 2 == 1) {
            return newArray[0]
        }
    }
}

// Most clever solution via codewars:
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);