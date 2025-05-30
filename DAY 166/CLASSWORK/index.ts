let myname: string = "aleqsadre"
let myage: number = 17
let myheight: number = 178.8
let yesorno: boolean = true

console.log(myname)
console.log(myage)
console.log(myheight)
console.log(yesorno)


const onlystringarr: [string] = ["aleqsandre"]
const nuberstringarr : [string,number] = ["daviti",17]

type Person = {
    name: string;
    age: number;
    isMarried: boolean;
}

interface Person1 {
    name: string;
    age: number;
    isMarried: boolean;
}


const arr1: Array<Person> = [
    {
        name: "Davit",
        age: 25,
        isMarried: false
    },
    {
        name: "giorgi",
        age: 40,
        isMarried: true
    },
]

const person: Person1[] = [
    {
        name: "Davit",
        age: 25,
        isMarried: false
    },
    {
        name: "giorgi",
        age: 40,
        isMarried: true
    },
]
