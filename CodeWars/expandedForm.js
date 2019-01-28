// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. 
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    const myArray = num.toString().split('')
    const length = myArray.length
    const solution = []
    for (i = 0; i < length; i++) {
        let number = myArray.shift()
        if (number != '0') {
            solution.push(number + ('0'.repeat(myArray.length)))
        } 
    }
    return solution.join(' + ')
}


// console.log(expandedForm(12))
// console.log(expandedForm(42))
console.log(expandedForm(70304))

// Clever solution via codewars:
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

