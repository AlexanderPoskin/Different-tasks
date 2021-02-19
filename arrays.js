'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice
console.log(arr.slice(2));  
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());

// Splice
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

// Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j', 'f'];

console.log(arr2.reverse());
console.log(arr2);

// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(' --> '));

// for of and forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//     if(movement > 0) {
//         console.log(`You deposited ${movement}`);
//     } else {
//         console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// }

movements.forEach(function(mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

  currencies.forEach(function(value, key, map) {
      console.log(`${key}: ${value}`);
  });

  // Set
  const currenciesUnique = new Set(['USD', 'GBR', 'USD', 'EUR', 'EUR']);
  console.log(currenciesUnique);
  currenciesUnique.forEach(function(value, _, map) {
      console.log(`${value}: ${value}`);
  });

  // Map method
  const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const euroToUsd = 1.1;

//   const movementsUSD = movements2.map(function(mov) {
//       return mov * euroToUsd;
//     });
  const movementsUSD = movements2.map(mov => mov * euroToUsd);
    
  console.log(movements2);
  console.log(movementsUSD);

// Filter method
const deposits = movements2.filter(function(mov) {
   return mov > 0;
}); 
console.log(deposits);

const withdrawals = movements2.filter(function(mov) {
    return mov < 0;
});
console.log(withdrawals);

// Reduce
const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements3.reduce(function(acc, cur, i, arr) {
//     console.log(`Iteration ${i}: ${acc}`);
//     return acc + cur;
// }, 0);
const balance = movements3.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for(const mov of movements3) balance2 += mov;
console.log(balance2);

// Maximum value 
const max = movements3.reduce((acc, mov) => {
    if (acc > mov) {
        return acc;
    } else {
        return mov;
    }
}, movements3[0]);

console.log(max);

// Find method
const movements4 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements4.find(mov => mov < 0);

// console.log(movements4);
// console.log(firstWithdrawal);

// Some and Every methods

// Equality
console.log(movements4.includes(-130));

// Some: Condition
const anyDeposits = movements4.some(mov => mov > 1500);
console.log(anyDeposits);

// Every
console.log(movements4.every(mov => mov > 0));

// Flat 
const newArr= [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(newArr.flat());

const deepArr= [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(deepArr.flat(2));

// Sorting
const owners = ['Alex', 'Zach', 'Adam', 'Bob'];
console.log(owners.sort());

console.log(movements4.sort());


