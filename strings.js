const airline = 'TAP Air Ukraine';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[2]);

// console.log('8734'[0]);

// console.log(airline.length);
// console.log('8734'.length);

// console.log(airline.indexOf('A'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Ukraine'));

// console.log(airline.slice(4)); //substring
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat) {
// // B and E are middle seats
// const s = seat.slice(-1);
// if (s === 'B' || s === 'E') console.log('You got the middle seat');
// else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

const passenger = 'aLeX'; // Alex
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Compare emails
const email = 'hello@gmail.com';
const loginEmail = ' Hello@gmail.com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,9£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace(/door/g, 'gate'));

// Booleans

const newPlane = 'A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.includes('Boeing'));
console.log(newPlane.startsWith('Air'));
console.log(newPlane.startsWith('A3'));

 console.log('a+very+nice+string'.split('+'));
 console.log('Just Text'.split(' '));


 const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));
 }
 capitalizeName('jessica ann smith davis');

// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(234324345666234));
console.log(maskCreditCard('34523464564112'));

// Repeat
const message2 = 'Bad weather... All departures Delayed... ';
console.log(message2.repeat(5));


