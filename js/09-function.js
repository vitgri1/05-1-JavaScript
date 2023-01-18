console.clear();

function sudetis(a, b) {
    console.log('oooooo');
    return a + b;
}

const s1 = sudetis(7, 5);
console.log(s1);

const s2 = sudetis(8, 2);
console.log(s2);

function arLyginis (a) {
    if (a % 2 === 0) {
        return 'lyginis'        
    } 
    return 'nelyginis'
}

const l1 = arLyginis(3);
console.log(l1);
