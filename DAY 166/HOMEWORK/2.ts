function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

// 🔍 გამოყენება:
const firstNumber = getFirstItem<number>([10, 20, 30]);
const firstString = getFirstItem<string>(["apple", "banana", "cherry"]);

interface Person {
  name: string;
  age: number;
}

const firstPerson = getFirstItem<Person>([
  { name: "Ana", age: 25 },
  { name: "Luka", age: 30 }
]);

console.log(firstNumber); // 10
console.log(firstString); // "apple"
console.log(firstPerson); // { name: "Ana", age: 25 }
