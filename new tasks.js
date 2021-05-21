// You get an array of numbers, return the sum of all of the positives ones.
// Note: array may be empty, in this case return 0.

[1, -4, 7, 12];

const getSum = function (arr) {
  return arr.reduce((acc, current) => {
    if (current > 0) {
      return acc + current;
    }
    return acc;
  }, 0);
};

console.log(getSum([1, -4, 7, 12]));

// Write a function that takes an array of strings as an argument
// and returns a sorted array containing the same strings, ordered from shortest to longest.

['Telescopes', 'Glasses', 'Eyes', 'Monocles'];

const sortByLength = function (arr) {
  return arr.sort((a, b) => a.length - b.length);
};

console.log(sortByLength(['Telescopes', 'Glasses', 'Eyes', 'Monocles']));

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle

var haystack_1 = [
  '3',
  '123124234',
  undefined,
  'needle',
  'world',
  'hay',
  2,
  '3',
  true,
  false,
];
var haystack_2 = [
  '283497238987234',
  'a dog',
  'a cat',
  'some random junk',
  'a piece of hay',
  'needle',
  'something somebody lost a while ago',
];
var haystack_3 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  'needle',
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];

const findNeedle = function (arr) {
  const item = arr.findIndex((item) => item === 'needle');
  return console.log(`found the needle at position ${item}`);
};

findNeedle(haystack_1);
findNeedle(haystack_2);
findNeedle(haystack_3);

// Implement a function likes :: [String] -> String, which must take in input array,
// containing the names of people who like an item. It must return the display text as shown in the examples

const calculateLikes = function (names) {
  if (names.length == []) {
    return 'must be "no one likes this';
  } else if (names.length == 1) {
    return `must be ${names[0]} likes this`;
  } else if (names.length == 2) {
    return `must be ${names[0]} and ${names[1]} like this`;
  } else if (names.length == 3) {
    return `must be ${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `must be ${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
};

console.log(calculateLikes([]));
console.log(calculateLikes(['Peter']));
console.log(calculateLikes(['Jacob', 'Alex']));
console.log(calculateLikes(['Max', 'John', 'Mark']));
console.log(calculateLikes(['Bob', 'Max', 'John', 'Mark', "Alex"]));
