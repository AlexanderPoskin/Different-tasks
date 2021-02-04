'use strict';
const firstName = 'Alex';
const job = 'CS';
const birthYear = 1991;
const year = 2040;

const alex = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(alex);

const alexNow = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(alexNow); 

console.log(String(23), 23);

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

// Iterables: arrays, strings, maps, sets NOT objects

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);



