// const myObj = {
//     name:"Aleqsandre",
//     lastname:"chankvetadze",
//     age:16
// }

// console.log(myObj)




// class Person{
//     constructor(name,lastname,age){
//         this.name = name
//         this.lastname = lastname
//         this.age = age
//     }
//     personAge(){
//         return this.age
//     }
// }

// const newPerson = new person("ალექსანდრე","ჭანკვეტაძე",16)

// console.log(newPerson)
// console.log(newPerson.personAge())



class Animal{
    constructor(name,type,canDo){
        this.name = name
        this.type = type
        this.canDo = canDo
    }


    get canDoSmth(){
        return ("ეს ცოდვილი" + " " + this.canDo)
    }
}

const newAnimal = new Animal("ავჩალკა","მხეცი","ყეფს")

console.log(newAnimal)
console.log(newAnimal.canDoSmth)


// class Animal {
//     constructor(name, weight, type,xinkhali) {
//       this.name = name;
//       this.weight = weight;
//       this.type = type;
//       this.xinkhali=xinkhali
//     }

//     get speak(){
//         return `${this.xinkhali} ამბობს, რომ იგი არის ${this.xinkhali}`;
//     }
// }

// const newAnimal = new Animal(name, weight, type,xinkhali ამათი value-ბი ჩაწერე აქ)

// console.log(Animal)
// console.log(Animal.speak)