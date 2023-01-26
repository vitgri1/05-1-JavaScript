console.clear();
/*
Ciklai: for, for-of, while, do-while, foreatch,
        map, filter, sort, reduce,
        for-in, ...
*/

const marks = [10,2,8,4,6];

// FOR
let sumFor = 0;
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    sumFor += mark;
}
console.log('FOR vidurkis: ', sumFor / marks.length);

// FOR-OF
let sumForOf = 0;
for (const mark of marks) {
    sumForOf +=mark;
}
console.log('FOR-OF vidurkis: ', sumForOf / marks.length);

// WHILE
let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    sumWhile += marks[iWhile++];
}
console.log('WHILE vidurkis: ', sumWhile / marks.length);

let sumWhile2 = 0;
let iWhile2 = marks.length;
while (iWhile2) {
    sumWhile2 += marks[--iWhile2];
}
console.log('WHILE vidurkis: ', sumWhile2 / marks.length);

// DO-WHILE
let sumDoWhile = 0;
let iDoWhile = 0;
do {
    sumDoWhile += marks[iDoWhile++];
} while (iDoWhile < marks.length);
console.log('DO-WHILE vidurkis: ', sumDoWhile / marks.length);

// FOREACH
let sumForeach = 0;
marks.forEach((mark, i, x) => {
    console.log(mark, i, x); //extra info i, x
    sumForeach += mark;
});
console.log('FOREACH vidurkis: ', sumForeach / marks.length);

// 
// MAP

const doubleMarks = marks.map(mark => mark * 2);
console.log(doubleMarks);

//FILTER
const goodMarks = marks.filter(mark => mark >= 5);
console.log(goodMarks);

//SORT
const marksAsc = marks.sort((a, b) => a - b);
console.log(marksAsc);

const students = [
    {
        name: 'Petras',
        age: 99,
    },
    {
        name: 'Maryte',
        age: 88,
    },
    {
        name: 'Jonas',
        age: 55,
    },
    {
        name: 'Ona',
        age: 77,
    }
];

students.sort((a, b) => a.age - b.age);
console.log(students);

const luckyNumbers = [666, 6, 13, 13, 9, 999, 4];

luckyNumbers.sort((a, b) => a > b ? 1 : a === b ? 0 : -1);

console.log(luckyNumbers);

//REDUCE
const sumReduce = marks.reduce((sum, mark) => sum + mark);
console.log('REDUCE vidurkis ', sumReduce/ marks.length);

const nums = [10,1,2,3,4,5];
const minusReduce = nums.reduce((sum, mark) => sum - mark);
console.log('REDUCE ', minusReduce);

const multipReduce = nums.reduce((sum, mark) => sum * mark);
console.log('REDUCE ',multipReduce);

const divReduce = nums.reduce((sum, mark) => sum / mark);
console.log('REDUCE ',divReduce);

const sumReduce2 = nums.reduce((sum, mark) => sum + mark, 100);
console.log('REDUCE ', sumReduce2);

//FOR-IN
console.log('---------------');

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
}

for (const key of Object.keys(person)) {
    console.log(person[key]);
}
console.log('===');

for (const key in person) {
    console.log(person[key]);
}
//--

for (const key in [1, 2, 3]) {
    console.log(key);
}