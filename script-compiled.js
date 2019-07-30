'use strict';

//1
var firstWord = 'Hello';
var secondWord = 'World';
var text = firstWord + ', ' + secondWord;

//2
var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(2, 3));
console.log(multiply(155));

//3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (x, y) {
    return x + y;
  }) / args.length;
};

console.log(average(1, 2, 3));
console.log(average(20, 40));

//4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

//5
var strange = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = strange[2],
    lastname = strange[4];

console.log(firstname + ' ' + lastname);
