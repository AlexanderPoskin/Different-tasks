'use strict';

console.log(23 === 23.0);

// Convershion
console.log(Number('23'));
console.log(+'23');

// Pasrsing
console.log(Number.parseInt('30px'));
console.log(Number.parseFloat('2.5rem'));

console.log(Number.isNaN(+'2x'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));

console.log(Math.sqrt(25));
console.log(25 ** 1/2);
console.log(8 ** (1 / 3));

console.log(Math.max(5, 22, 12, 3, 333));
console.log(Math.min(5, 22, 12, 3, 333));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

// Rounding integers
console.log(Math.trunc(23.3));
console.log(Math.round(23.3));
console.log(Math.ceil(23.1));
console.log(Math.floor(23.9));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.345).toFixed(3)); 

// Remainder Operator

console.log(5 % 2);
console.log(5 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(3));

console.log(10000n + 10000n);
console.log(BigInt(12423456456567567567566666634) + BigInt(2341235343454));

// Create a date
const now = new Date();
console.log(now); 

console.log(new Date('2021-02-22'));
console.log(new Date('December 24, 2018'));

console.log(new Date(2037, 10, 19, 15, 22, 6));
console.log(new Date(2037, 10, 31));

const future = new Date(2040, 10, 23, 12, 22);
console.log(+future);

const calcDaysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);
const day1 = calcDaysPassed(new Date(2040, 5, 22), new Date(2045, 3, 30));
console.log(day1);

const ingredients = ['olives', 'cheese' ];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
3000,
...ingredients
);
console.log('Waiting...');

// if(ingredietns.includes('cheese')) clearTimeout
// (pizzaTimer);