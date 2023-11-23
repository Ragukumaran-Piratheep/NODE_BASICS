// const a = 10;
// const b = 20;
// let c = 30;
// console.log(c);

// const math = require("./maths");
// console.log(math.add(25, 35));
// console.log(math.sub(45,35));

const { add, sub, mul, div } = require("./maths");
console.log(add(26, 87));
console.log(sub(87, 42));
console.log(mul(26, 87));
console.log(div(25, 5));
