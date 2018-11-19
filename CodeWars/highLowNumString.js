//Take in string of numbers, return high and low numbers
function highAndLow(numbers){
    arr = numbers.split(" ")
    arr2 = []
    arr.forEach(function(el) {
      arr2.push(+el)
    })
    return `${Math.max(...arr2)} ${Math.min(...arr2)}`
  }
//Other solution on codewars.
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }