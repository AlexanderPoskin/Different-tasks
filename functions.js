'use strict';

const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199) {

    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
  
};

createBooking('LH123');
createBooking('LH123', 2, 800);

//

const flight = 'LH123';
const alex = {
    name: 'Alex',
    passport: 1241234
};

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH554';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 1241234) {
        alert('Check in');
    } else {
        alert('Wrong passport');
    }
 
};

checkIn(flight, alex);
console.log(flight);
console.log(alex);

//

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order fuction
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//

const greet = function(greeting) {
return function(name) {
    console.log(`${greeting} ${name}`);
};
 };

 const greeterHey = greet('Hey');
 greeterHey('Alex');
 greeterHey('Steven');

 greet('Hello')('Alex');

 // 

 const greetArr = greeting => name => console.log(`${greeting} ${name}`);

 greetArr('Hi')('Alex');

 //

 const lufthansa = {
     airline: 'Lufthansa',
     iataCode: 'LH',
     booking: [],
     book(flightNumber, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
        );
        // this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name});
     },
 };

 lufthansa.book(239, 'Alex');
 lufthansa.book(632, 'John');

 const eurowings = {
     name: 'Eurowings',
     iataCode: 'EW',
     booking: [],
     
 };

 const book = lufthansa.book;

 // Does NOT work
//  book(23, 'Sarah');


//Call method
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    booking: [],
};

book.call(swiss, 583, 'Mary');
console.log(swiss);

//Apply method
const flightData = [583, 'George'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Bob');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Alex');
bookEW23('Matha');

// Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

document
.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    };
};

const addVAT2 = addTaxRate(0.23);

// Immediately Invoked Function Expressions

const runOnce = function () {
    console.log('This will never run again');
};
runOnce();

(function () {
    console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))
();