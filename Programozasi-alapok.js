// változó, szám
let valtozo = 12;
console.log(valtozo);

// string (szöveg)
let szoveg = 'string';
console.log(szoveg);

// konstans
const constans = 25;
console.log(constans);

// logikai
let gameEnd = true;
let gameStart = false;
console.log(gameEnd, gameStart);

// tömb
let array1 = [2, 4, 6, 8, 10];
console.log(array1);

let array2 = [1, 2, 3, 4, 5, 6];

// objektum
const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 'string'
};
console.log(object);

// Összeadás
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

// megszámlálás
const counter = (arr, e) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) {
      count++;
    }
  }
  return count;
};
console.log('A 2-esek száma a tömbben: ', counter(array1, 2));

const bemenet = 10;

switch (bemenet) {
  case 9:
    console.log('Eggyel kevesebb!');
    break;
  case 11:
    console.log('Eggyel több!');
    break;
  case 10:
    console.log('Eltaláltad!');
    break;
  default:
    console.log('Messze jársz');
}

const metszet = (arr1, arr2) => {
  let arr3 = [];
  let k = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr3[k] = arr1[i];
        k++;
        break;
      }
    }
  }
  return arr3;
};

console.log('Metszet: ', metszet(array1, array2));

let a = 7;
let b = 8;
let c = '+';

const add2 = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const operation = (a, b, c) => {
  return c(a, b);
};

switch (c) {
  case '+':
    console.log(operation(a, b, add2));
    break;
  case '-':
    console.log(operation(a, b, sub));
    break;
  case '*':
    console.log(operation(a, b, mult));
    break;
  case '/':
    console.log(operation(a, b, div));
}

let readline = require('readline-sync');
let n = readline.question('Kérem, adja meg a tömb magasságát');
let m = readline.question('Kérem, adja meg a tömb szélességét');

const generate2D = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

let array4 = generate2D(n, m);

const fill2D = (arr) => {
  arr[0][0] = 1;
  arr[0][1] = 2;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 2; j < arr[i].length; j++) {
      arr[i][j] = arr[i][j - 1] * 2;
    }
  }
  return arr;
};

let array5 = fill2D(array4);
console.log(array5);
