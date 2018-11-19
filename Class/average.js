
//Get average of an array
const list = [1,2,3,4,5,6];

summer = x => {return x.reduce(adder)/ x.length;}
adder = (a, b) => {return a + b;}

console.log(summer(list))


//Jordan's Solution
const getAverage = arr => {
    const reducer = (total, currentValue) => total + currentValue;
    const total = arr.reduce(reducer);
    return total / arr.length;
  };
  
  const arr = [1, 2, 3, 4, 5, 6];
  
  console.log(getAverage(arr));