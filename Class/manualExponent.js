//Manual Exponent Function
const manualExponent = (num, exp) => {
    return Array(exp).fill(num).reduce((x, y) => x * y)
}

console.log(manualExponent(2, 3))