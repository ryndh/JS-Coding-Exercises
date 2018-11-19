// If given directions n, w, s, e, where each tells you to walk one city block in that direction, check to see if a set of directions will lead you back to your current position and only take 10 minutes. 

function isValidWalk(walk) {
    eastWest = 0;
    northSouth = 0;
    if (walk.length == 10){
        walk.forEach(function(dir) {
            if (dir == 'w') {
            eastWest -= 1
            } else if (dir == 'e') {
            eastWest += 1
            } else if (dir == 's') {
            northSouth -= 1
            } else if (dir == 'n') {
            northSouth += 1
            }
        })
        if (eastWest == 0 && northSouth == 0) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
  }
// Better solution via codewars:
function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }
  