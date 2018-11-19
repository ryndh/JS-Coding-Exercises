//The Supermarket Queue

function queueTime(customers, n) {
    myArr = Array(n).fill(0)
    customers.forEach(customer => {
        goToQueue = Math.min(...myArr)
        idx = myArr.indexOf(goToQueue)
        newQ = +myArr.splice(idx, 1) + customer
        myArr.push(newQ)
    })
    return Math.max(...myArr)

  }


console.log(queueTime([1,2,3,4,5], 100))

//Codewars
// function queueTime(customers, n) {
//     var w = new Array(n).fill(0);
//     for (let t of customers) {
//       let idx = w.indexOf(Math.min(...w));
//       w[idx] += t;
//     }
//     return Math.max(...w);
//   }