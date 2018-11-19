//Given an integer return all divisors of that integer except 1 and the number and if prime return "integer is prime"
function divisors(integer) {
    finalArray = []
    for (const i in [...Array(integer)]) {
        if (integer % i === 0) {
            finalArray.push(+i)
        }
    }
    finalArray.shift()
    if (finalArray.length == 0) {
        return `${integer} is prime`
    } else {
        return finalArray
    }
};

console.log(divisors(13))

//Other solution on codewars
function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
  };