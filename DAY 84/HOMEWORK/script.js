const mainDiv = document.getElementById("main-div")
const secondDiv = document.getElementById("second-div")

let pt = 0
let pb = 0

window.addEventListener("keydown",function(e){
    if(e.key = "ArrowDown"){
    secondDiv.style.top =  `${pt}px`
    pt+=5
    }
    console.dir(window)
})

