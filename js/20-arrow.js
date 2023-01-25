console.clear();
const h = 7;
const g = 5;

//function declaration
function suma(a, b) {
    return a + b;
}
console.log(`${g} + ${h} = ${suma(g, h)}`);

//
const skirtumas = function (a, b) {
    return a - b;
}
console.log(`${g} - ${h} = ${skirtumas(g, h)}`);

// arrow function
const sandauga = (a, b) => {
    return a * b;
}
console.log(`${g} * ${h} = ${sandauga(g, h)}`);

// arrow function
// jei yra 1 statemen'as, tai galima nerasyti {} ir return
const dalmuo = (a, b) => a / b;
console.log(`${g} / ${h} = ${dalmuo(g, h)}`);

// arrow function
// jei yra 1 parametra, tai galima nerasyti ()
const kvadratu = a => a ** 2;
console.log(`${g}^2 = ${kvadratu(g, h)}`);

const math = {
    sum: (a, b) => a + b,
    skir: (a, b) => a - b,
    multi: (a, b) => a * b,
    div: (a, b) => a / b,
    laip: a => a ** 2,
}

console.log(math.sum(7,5));
console.log(math.skir(7,5));
console.log(math.multi(7,5));
console.log(math.div(7,5));
console.log(math.laip(7));

const matematika = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '^': (a, b) => a ** b,
}

const x = 9;
const y = 0.5;
const op = '^';

const ats = matematika[op](x,y);
console.log(`${x} ${op} ${y} = ${ats}`)