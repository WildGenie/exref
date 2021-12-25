// from n days ago till today
let n = 400;
[...Array(n)].map((d,i)=> (d=new Date, d.setDate(d.getDate()-n+i)/1000))

// other intervals
d.getFullYear()     // year
d.getMonth()        // month
d.getDate()         // day of the month
d.getDay()          // day of the week
d.getHours()        // hour
d.getMinutes()      // minutes
d.getSeconds()      // seconds
d.getMilliseconds() // milliseconds

// date strs
[...Array(n)].map((d,i)=> (d=new Date, d.setDate(d.getDate()-n+i), [d.getFullYear(), d.getMonth()+1, d.getDate()].join('-') ))

// date strs (consistent form)
[...Array(n)].map((d,i)=> (d=new Date, d.setDate(d.getDate()-n+i), d=d.getFullYear()*10000 + (d.getMonth()+1)*100 + d.getDate() + '', [d.slice(0,4),d.slice(4,6),d.slice(6,8)].join('-') ))