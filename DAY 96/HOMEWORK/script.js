// 1ST HOMEWORK:

const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueNumbers = new Set();

numbers.forEach(num => {
    if (!uniqueNumbers.has(num)) {
        uniqueNumbers.add(num);
    }
});

console.log(uniqueNumbers); // Set { 1, 2, 3, 4, 5, 6 }


// 2ND HOMEWORK:

const myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');

console.log(myMap); 
// Map { 'name' => 'John', 'age' => 30, 'city' => 'New York' }



// 3ND HOMEWORK:


const anotherMap = new Map();

anotherMap.set('a', 1);
anotherMap.set('b', 2);
anotherMap.set('c', 3);

anotherMap.delete('b'); // წაშლის key-ს "b"

console.log(anotherMap); 
// Map { 'a' => 1, 'c' => 3 }


// 4TH HOMEWORK:

const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet); // Set { 1, 2, 3 }

mySet.clear(); // წაშლის ყველა ელემენტს

console.log(mySet); // Set {}


// 5TH HOMEWORK:


class CollectionManager {
    constructor() {
        this.mySet = new Set();
        this.myMap = new Map();
    }

    addToMap(key, value) {
        this.myMap.set(key, value);
    }

    removeFromMap(key) {
        this.myMap.delete(key);
    }

    addToSet(item) {
        this.mySet.add(item);
    }

    clearSet() {
        this.mySet.clear();
    }

    showMap() {
        console.log("Map contents:");
        this.myMap.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    }

    showSet() {
        console.log("Set contents:");
        console.log([...this.mySet]);
    }
}
