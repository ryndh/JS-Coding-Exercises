// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

function prefill(n, v) {
    if (n === 0 || n === '0') {
        return []
    } else if (Number.isInteger(n) && n > -1) {
        return Array(n).fill(v)
    } else {
        throw TypeError(`${n} is invalid`)
    }
}

console.log(prefill(3,1))
console.log(prefill(2,"abc"))
console.log(prefill('hey', 1))