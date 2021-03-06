"use strict";

let list = function (numbs) {
  let counter = 0;
  while (counter < numbs.length) {
    numbs[counter] = 0;
    counter = counter + 1;
  }
  return numbs;
};

let double = function (values) {
  let pos = 0;
  while (pos < values.length) {
    values[pos] = values[pos] * 2;
    pos = pos + 1;
  }
  return values;
};

let even = function (amounts) {
  let pos = 0;
  let list = [];
  while (pos < amounts.length) {
    if (amounts[pos] % 2 == 0) {
      list.push(amounts[pos]);
    }
    pos = pos + 1;
  }
  return list;
};

let average = function (numbers) {
  let pos = 0;
  let oddLength = 0;
  let evenSum = 0;
  let oddTotal = 0;
  while (pos < numbers.length) {
    if (numbers[pos] % 2 == 0) {
      evenSum = evenSum + numbers[pos];
    }
    if (numbers[pos] % 2 == 1) {
      oddLength = oddLength + 1;
      oddTotal = oddTotal + numbers[pos];
    }
    pos = pos + 1;
  }
  return { evenSum: evenSum, oddAverage: oddTotal / oddLength };
};

let reverse = function (numbers) {
  let pos = numbers.length - 1;
  let list = [];
  while (pos >= 0) {
    list.push(numbers[pos]);
    pos--;
  }
  return list;
};

let isPrime = function (N) {
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i == 0) {
      return false;
    }
  }
  return true;
};

let prime = function (N) {
  let list = [];
  for (let i = 2; i < N; i++) {
    if (isPrime(i)) {
      list.push(i);
    }
  }
  return list;
};

let print = function (n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
};

//CLIENT

console.log(prime(3589898744650));
