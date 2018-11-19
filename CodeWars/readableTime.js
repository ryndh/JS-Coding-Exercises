//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
    HH = Math.floor(seconds/3600).toString()
    HHleft = (seconds - HH * 3600)
    MM = Math.floor(HHleft/60).toString()
    SS = (HHleft - MM * 60).toString()
    return `${HH.padStart(2, 0)}:${MM.padStart(2, 0)}:${SS.padStart(2, 0)}`

  }

console.log(humanReadable(60))

// Codewars Solution

function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
           pad(parseInt(seconds / 60 % 60)) + ":" +
           pad(seconds % 60)
  }