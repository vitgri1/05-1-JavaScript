console.clear();
/*
FOR (ciklas)

for (pradzia; klausimas; pakeitimas) {
    kartojama logika
}

*/

const marks = [10, 2, 8, 4, 6];

let sum = 0;
let index = 0;

sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];

console.log('Vidurkis: ', sum/marks.length);

// isspausdinti nuo 0 iki 5.
for (let i=0; i <= 5; i++) {
    console.log(i);
}

console.log('-----------------------');

const pazymai = [2, 4, 6, 8, 10, 8, 9, 7];

for (let i = 0; i < pazymai.length; i++) {
    console.log(i, '-->', pazymai[i]);
}

console.log('-------------');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 3; i < numbers.length; i += 2) {
    console.log(numbers[i]); 
}