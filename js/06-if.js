console.clear();
/*
IF (loginis playginimas)

Palyginimo operatoriai:
- visi: <, >, ==, !=, >=, <=,
- naudotini: <, >, >=, <=, ===, !==
- nenaudotini: ==, !=

Loginiai operatoriai:
- && (AND)
- || (OR)

Sabalonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () else {}

*/

if (4 > 22) {
    console.log('4 yra daugiau uz 2');
} else {
    console.log('nera daugiau');
}

if (4 == 4) {
    console.log('lygu');
} else {
    console.log('nelygu');
}


if (4 != 4) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

if (88 >= 9) {
    console.log('daugiau arba lygu');
} else {
    console.log('maziau');
}

console.log('------------------');

if (4 == '4') {
    console.log('x');
} else {
    console.log('y');
}

if (0 == false) {
    console.log('x');
} else {
    console.log('y');
}

if (0 == ' ') {
    console.log('x');
} else {
    console.log('y');
}

if ('f' > 'b') {
    console.log('daugiau');
} else {
    console.log('maziau arba lygu');
}

if ('z' > 'A') {
    console.log('daugiau');
} else {
    console.log('maziau arba lygu');
}

console.log('------------------');
// pirma tikrina duomenu tipa:

if (7 === '7') {
    console.log('grieztai lygu');
} else {
    console.log('grieztai nelygu');
}

if (7 !== '7') {
    console.log('grieztai nelygu');
} else {
    console.log('grieztai lygu');
}

console.log('------------------');

const diena = 9;

if (diena === 1) {
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis');
} else if (diena === 3) {
    console.log('treciadienis');
} else if (diena === 4) {
    console.log('ketvirtadienis');
} else if (diena === 5) {
    console.log('penktadienis');
} else if (diena === 6) {
    console.log('sestadienis');
} else if (diena === 7) {
    console.log('sekmadienis');
} else {
    console.log('nezinau tokios dienos');
}

//CODE NESTING - nestinimas

const day = 3;

if (day === 1) {
    console.log('pirmadienis');
} else {
    if (day === 2) {
        console.log('antradienis');
    } else {
        if (day === 3) {
            console.log('treciadienis');
        } else {
            if (day === 4) {
                console.log('ketvirtadienis');
            } else {
                if (day === 5) {
                    console.log('penktadienis');
                } else {
                    if (day === 6) {
                        console.log('sestadienis');
                    } else {
                        if (day === 7) {
                            console.log('sekmadienis');
                        } else {
                            console.log('nera tokios dienos');
                        }
                    }
                }
            }
        }
    }
}

console.log('------------------');

const nuoKadaSilta = 15;
const temperatura = 30;
const arLyja = false;

if (temperatura < nuoKadaSilta) {
    if (arLyja) {
        console.log("Nera silta ir lyja: reikia striukes ir skecio");
    } else {
        console.log("Nera silta ir nelyja: reikia striukes");
    }
} else {
    if (arLyja) {
        console.log('Silta ir lyja: varom be maikes');
    } else {
        console.log('Silta ir nelyja: varom su maike');
    }
}

if (temperatura >= nuoKadaSilta && !arLyja) {
    console.log('Silta ir nelyja: varom su maike');
} else if (temperatura >= nuoKadaSilta && arLyja) {
    console.log('Silta ir nelyja: varom be maikes');
} else if (temperatura < nuoKadaSilta && arLyja) {
    console.log("Nera silta ir lyja: reikia striukes ir skecio");
} else {
    console.log("Nera silta ir nelyja: reikia striukes");
}