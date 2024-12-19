// 1ST HOMEWORK:

function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}

const numbers = [4, 11, 8, 15, 3, 22];
const result = filterGreaterThanTen(numbers);
console.log(result); 


// 2ND HOMEWORK:

function getMaxValue(...numbers) {
    return Math.max(...numbers);
}

const max = getMaxValue(4, 11, 8, 15, 3, 22);
console.log(max);


// 3ND HOMEWORK:


const h1 = document.getElementById("h1")

h1.innerHTML = "<mark>aleqsandre</mark>chankvetadze"


// 4TH HOMEWORK:


function removeDuplicates(array) {
    return [...new Set(array)];
}

const numbersArr = [1, 2, 3, 4, 3, 2, 5, 6, 1];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);



// 5TH HOMEWORK:

function getMinValue(...numbers) {
    return Math.min(...numbers);
}

const min = getMinValue(4, 11, 8, 15, 3, 22);
console.log(min);



// const numsArr = [1,10,16,17,5,7,9,20,26,28,18]
// const result = numsArr.filter(numsHigherThan10)

// function numsHigherThan10(num){
//     return num >= 10
// }

// console.log(result)




// SET IS ONLY FOR UNIQUE NUMS IN ARR

// const numsArr = [1,3,7,9,17,7,9]

// const nonDuplicatedNumsArr = [...new Set(numsArr)]

// console.log(nonDuplicatedNumsArr)



