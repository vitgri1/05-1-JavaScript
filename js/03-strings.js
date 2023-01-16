console.clear();
/*
STRINGS (tekstas)

Iniciavimo tipai: ' (vienguba), " (dviguba), ` (backtick)
*/

const vardas = 'Petras';
console.log(vardas);

const pavarde = "Petraitis";
console.log(pavarde);


// Vienguba (') ir dviguba (") kabutes.
const priekis = "Vienguba (') ir ";
const galas = 'dviguba (") kabutes.';
const kabute12_0 = priekis + galas;
console.log(kabute12_0);

const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
console.log(kabute12_1);

const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(kabute12_2);

const kabute12_3 = 'Vienguba (\') ir dviguba (\") kabutes.';
console.log(kabute12_3);

const kabute12_4 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(kabute12_4);

const spec = '\\f';
console.log(spec);

console.log('--------------------------');

/*
<header>
    <img src="#">
    <nav></nav>
<header>
*/

const HTML = "<header>\r\n\
    <img src=\"#\">\r\n\
    <nav></nav>\r\n\
<header>";
console.log(HTML);

const HTML2 = `<header>
    <img src="#">
    <nav>backtick (\`)</nav>
<header>`;
console.log(HTML2);

const name = 'Maryte';
const age = 88;
const city = 'Miestelis';

//Sveiki, mano vardas Maryte, man yra 88 metai ir as esu is Miestelis.
const sms = 'Sveiki, mano vardas '+ name +', man yra ' + age + ' metai ir as esu is ' + city +'.';
console.log(sms);

//Sveiki, mano vardas [name], man yra [age] metai ir as esu is [city].
const sms2 = `Sveiki, mano vardas ${name}, man yra ${age} metai ir as esu is ${city}.`;
console.log(sms2);