console.clear();
/*
KINTAMUJU INICIJAVIMO BUDAI:
- const (default)
- let (jie reikes keisti/atnajinti reiksme)
- var (niekada nenaudoti)

NUMBERS:
- teigiami/neigiami
- sveikieji/desimtainiai
- normalus/nenormalus skaiciai:
    - begalybe
    - NaN (not-a-number)

ARITMETINIAI OPERATORIAI: +, -, /, *, ** (laipsnis), % (liekana)
PRISKIRIMO OPERTORIAI: =, +=, -=, /=, *=, **=, %=
*/

const metai = 2023;
const PI = 3.1415;
const neigiamas = -6.7;

console.log(metai, PI, neigiamas);

console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

const a = 7;
const b = 5;

const suma = a + b;
console.log(suma);

const skirtumas = a - b;
console.log(skirtumas);

const dalmuo = a / b;
console.log(dalmuo);

const sandauga = a * b;
console.log(sandauga);

const kampas = 90 * 90;
const kampas2 = 90 ** 2;
console.log(kampas, kampas2);

const liekana1 = a % b;
console.log(liekana1);

const liekana2 = 21 % 3;
console.log(liekana2);

const liekana3 = 31 % 3;
console.log(liekana3);

const liekana4 = -41 % 3;
console.log(liekana4);

const liekana5 = -51 % -5;
console.log(liekana5);

const liekana6 = 3.1415 % 3;
console.log(liekana6);


let pinigine = 0;
console.log(pinigine);

pinigine = pinigine + 5;
console.log(pinigine);

console.log('---------------------');

let temperatura = 0;
console.log(temperatura);

temperatura = temperatura + 2;
console.log(temperatura);

temperatura += 3;
console.log(temperatura);


console.log('----------------');

let svoris = 20;
console.log(svoris);

svoris++;
console.log(svoris);

++svoris;
console.log(svoris);

//priekyje vs gale
console.log('---------pries---------');

let gg = 0;
console.log(++gg);
console.log(++gg);
console.log(++gg);
console.log(++gg);
console.log(++gg);
console.log(++gg);

console.log('---------po---------');

let hh = 0;
console.log(hh++);
console.log(hh++);
console.log(hh++);
console.log(hh++);
console.log(hh++);
console.log(hh++);