// children - დამიბრუნებს ყველა შვილ ელემენტს
// firstElementChild - დამიბრუნებს პირველ შვილ ელემენტს
// lastElementChild - დამიბრუნებს ბოლო შვილ ელემენტს
// nextElementSibling - დამიბრუნებს კონკრეტული ელემენტის შემდეგ დედმამიშვიულს
// previousElementSibling - დამიბრუნებს კონკრეტული ელემენტის წინა დედმამიშვიულს 




// let div = document.getElementById("div")

// let variable = div.lastChild

// console.log(variable)

// let myP = document.getElementById("my-p")

// let cloneP = myP.cloneNode(true)

// const body = document.body

// body.appendChild(cloneP)
// console.log(cloneP)


const myP = document.getElementById("my-p")
const body = document.body

//ზემოთა ორ ხაზზე მოგვაქვს html ელემენტი js ში

let newElement = document.createElement("p")
//ამ ხაზზე ვქმნით ახალ html ელემენტს js მეშვეობით


newElement.id = "new-p"
newElement.textContent = "New element"
//ამ ორ ხაზზე ვცვლით მის უნიკალურ id და ტექსტს

body.appendChild(newElement)
// ამ ხაზზე კი ვამატებთ ამ ელემენტს html-ში კერძოდ body-ში

console.log(newElement)
//აქ კი კონსოლში გამოგვაქვს ჩვენი ახალი ელემენტი