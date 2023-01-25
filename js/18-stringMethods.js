console.clear();

const abc = 'abcdefghijklmnoprstuvwxyz';

console.log(abc.at(2), abc[2]);
console.log(abc.at(-2), abc[abc.length - 2]);
console.log(abc.charAt(2));
console.log(abc.charCodeAt(0));

console.log('a', 'A', 'a' > 'A');
console.log('a'.charCodeAt(0), 'A'.charCodeAt(0));

console.log(abc.indexOf('F'));
console.log(abc.indexOf('defg'));

console.log('a'.repeat(5));

console.log('Labas rytas'.replace('rytas', 'vakaras'));
console.log('Labas rytas'.replace('Katu', 'vakaras'));

console.log('Lalalalalalalala'.replace('la', 'me'));
console.log('Lalalalalalalala'.replaceAll('la', 'me'));

const abcArray = abc.split('f');
console.log(abcArray);

console.log('Labas'.toUpperCase());
console.log('LaBaS'.toUpperCase());
console.log('LaBaS'.toLowerCase());

