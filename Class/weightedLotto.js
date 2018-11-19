const obj = {
    win: 7,
    lose: 2,
    tie: 1,
}

const coin = {
    heads: 1,
    tails: 1,
}

const weightedLotto = obj => {
    myArr = []
    Object.keys(obj).forEach(key => {
        myArr.push(...Array(obj[key]).fill(key))
    })    
    return myArr[Math.floor(Math.random()* myArr.length)]
}

console.log(weightedLotto(coin))

//Jordan's solution:
// const weightedLottery = weights => {
//     let containerArray = [];

//     Object.keys(weights).forEach(key =>(
//         for (let 1 = 0; i < weights[key]; i++) {
//             containerArray.push(key);
//         }
//     ))

//     return containerArray[(Math.random() * containerArray.length) | 0];
// }

// const weights = {
//     winning: 1,
//     losing: 1000
// }

// weightedLottery(weights)