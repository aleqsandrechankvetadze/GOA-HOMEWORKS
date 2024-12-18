// 1ST HOMEWORK:


function* infiniteNumbers() {
    let num = 0;
    while (true) {
        yield num++;
    }
}

const generator1 = infiniteNumbers();
console.log(generator1.next().value);
console.log(generator1.next().value);



// 2ND HOMEWORK:


function* evenNumbers() {
    let num = 0
    while (true) {
        yield num
        num += 2
    }
}

const generator2 = evenNumbers();

console.log(generator2.next().value)
console.log(generator2.next().value)



// 3ND HOMEWORK:


function* randomNumbers() {
    while (true) {
        yield Math.random()
    }
}

const generator3 = randomNumbers()
console.log(generator3.next().value)
console.log(generator3.next().value)



// 4TH HOMEWORK:

function* letterByLetter(word) {
    for (const letter of word) {
        yield letter
    }
}

const generator4 = letterByLetter("სალამი");
console.log(generator4.next().value)
console.log(generator4.next().value)
console.log(generator4.next().value)
