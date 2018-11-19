function findUniq(arr) {
    arr.forEach(function(el){
        var duplicate = [...arr]
        console.log(duplicate)
        element = duplicate.indexOf(el)
        check = duplicate.slice(element, 1)
        console.log(check)
        if (duplicate.every(num => num == duplicate[0])) {
            return check
        }
    })
  }
  
findUniq([ 3, 10, 3, 3, 3, 3, 3, 3, 3 ])

//Got stuck above, codewars solution below:
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }
//Other solution:
  function findUniq(arr) {
    let [a,b,c] = arr.slice(0,3);
    if( a != b && a!=c ) return a;
    for( let x of arr ) if( x!=a ) return x
  }