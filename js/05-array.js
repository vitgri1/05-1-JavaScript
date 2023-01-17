console.clear();
/*
ARRAY (sarasas, list'as, masyvas, matrica)
- rekomenduotina laikyti homogeniska informacija
- galima ir skitingu tipu informacija

*/

const empty = [];
const marks = [10, 2, 8, 4, 6];
const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const chaos = [true, 7, 'asd', -3.14, 'ahawh', false, []];

console.log(empty, marks);

const petroPazimys1 = 10;
const petroPazimys2 = 2;
const petroPazimys3 = 8;
const petroPazimys4 = 4;
const petroPazimys5 = 6;

const petroSuma = petroPazimys1 + petroPazimys2 + petroPazimys3 + petroPazimys4 + petroPazimys5;

const petroKiekis = 5;
const petroVidurkis = petroSuma / petroKiekis;

console.log('Petro pazymiu vidurkis:',petroVidurkis);
console.log('--------------------------------------');

// index: 0, 1, 2, 3, 4, ....
const ona = [10, 2, 8, 4, 6];

const onosSuma = ona[0] + ona[1] + ona[2] + ona[3] + ona[4];

const onosKiekis = ona.length;

const onosVidurkis = onosSuma / onosKiekis;
console.log('Onos pazymiu vidurkis:', onosVidurkis);

console.log('--------------------------------------');

const jonas = [];

jonas.push(10);
jonas.push(2);
jonas.push(8);

console.log(jonas);

const arTuri7 = jonas.includes(7);
console.log(arTuri7);

const kelintas2 = jonas.indexOf(2);
console.log(kelintas2);

const kelintas7 = jonas.indexOf(7);
console.log(kelintas7);

const pazymai = 'Jono pazymai: ' + jonas.join(', ') + '.';
console.log(pazymai);

const pazymai2 = `Jono pazymai: ${jonas.join(', ')}.`;
console.log(pazymai2);
