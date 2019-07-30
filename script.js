//1
const firstWord = 'Hello';
const secondWord ='World';
const text = `${firstWord}, ${secondWord}`;

//2
const multiply = (a, b = 1) => a * b;

console.log(multiply(2, 3));
console.log(multiply(155));

//3
const average = (...args) => args.reduce((x, y) => x + y)/args.length;

console.log(average(1, 2, 3));
console.log(average(20, 40));

//4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//5
const strange = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = strange
console.log(`${firstname} ${lastname}`);