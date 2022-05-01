let input = require("fs").readFileSync("stdin", "utf8");

let numbers12 = input.split("\n");
let A = parseInt(numbers12[0]);
let B = parseInt(numbers12[1]);

let soma = A + B;

console.log("SOMA = " + soma);

