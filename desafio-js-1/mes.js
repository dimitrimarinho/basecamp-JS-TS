let input = require("fs").readFileSync("stdin2", "utf8");

let lines = input.split('\n');

let month = String(lines.shift());

let months = {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December",  
}

console.log(months[month]);

