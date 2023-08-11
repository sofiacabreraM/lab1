// Load module
const calculator = require('birthday-calculator');
 
// Instantiate
const date = new Date('2003,12,04');
const result = calculator.getDayWhenBorn(date);
console.log(result);