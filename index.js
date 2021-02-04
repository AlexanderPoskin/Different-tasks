'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             const str = `Oh, you are a millenial, ${firstName}`;
//             console.log(str);
//         }
        
//     }
//     printAge();

//     return age;
// }

// const firstName = 'Alex';
// calcAge(1991);


// Hoisting Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'ALex';
// let job = 'CS';
// const year = 1991;

// // functions

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArr(2, 3));


// function addDecl(a, b) {
//     return a + b;
// }
// const addExpr = function(a, b) {
//     return a + b;
// };
// var addArr = (a, b) => a + b;


let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
    name: 'Alex',
    age: 30,
};
const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me);

// Set
const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risoto',
    'Pasta',
    'Pizza',
]);
console.log(orderSet);

console.log(orderSet.size);
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risoto');
// orderSet.clear();

console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
    );

    console.log(new Set('AlexPoskin').size);

    // Map

    const rest = new Map();
    rest.set('name', 'Italiano');
    rest.set(1, 'Italy');
    rest.set(2, 'Portugal');
    console.log(rest.set('Portugal'));

