const prettyPrice = (val, dec) => {
    return `${Math.floor(val)}.${dec.toFixed(2).slice(-2)}`
}

console.log(prettyPrice(1.2111, .37999))