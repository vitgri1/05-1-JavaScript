console.clear();

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

const array4 = [...array1, ...array2];
const array5 = [...array1, 5, 6, 'l', ...array2];
console.log(array4);
console.log(array5);

const array6 = [...array1, ...array1, ...array1];
console.log(array6);

console.clear();

const marks = [10, 2, 8, 4, 6];

function double(n){
    return n*2;
}

const marks2x = marks.map(double);

console.log(marks);
console.log(marks2x);

const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];

function abbr(str){
    return str[0];
}

const namesAbbr = names.map(abbr);

console.log(names);
console.log(namesAbbr);