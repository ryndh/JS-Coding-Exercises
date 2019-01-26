// this one was pretty ugly looking...

// Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22
// He knows that the time is 11:38
// in the same manner:
// 05:25 --> 06:35
// 01:50 --> 10:10
// 11:58 --> 12:02
// 12:01 --> 11:59
// Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.
// Return the real time as a string.
// Consider hours to be between 1 <= hour < 13.
// So there is no 00:20, instead it is 12:20.
// There is no 13:20, instead it is 01:20.


function WhatIsTheTime(timeInMirror){
    time = timeInMirror.split(':')

    time2 = 60 - (parseInt(time[1]))
    time1 = time2 == 60 ? 12 - parseInt(time[0]) : 12 - (parseInt(time[0]) +1 )

    hour = time1 == 0 ? '12' : time1 == -1 ? '11' : time1 > 9 ? time1 : '0' + time1
    minute = time2 < 10 ? '0' + time2 : time2 == 60 ? '00' : time2
    return `${hour}:${minute}`
}


WhatIsTheTime("06:35") 
WhatIsTheTime("11:59") 
WhatIsTheTime("12:02") 
WhatIsTheTime("04:00") 
WhatIsTheTime("06:00") 
WhatIsTheTime("12:00") 
// "05:25"
// "12:01"
// "11:58"
// "08:00"
// "06:00"
// "12:00"