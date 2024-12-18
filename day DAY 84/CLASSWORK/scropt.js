// let px = 0;

// const moveRight = setInterval(function(){
//     div.style.left = `${px}px`;
//     px++;

//     if(px >= 1000){
//         clearInterval(moveRight);
//     }
// }, 50);




const childDiv = document.getElementById("child-div")

let px = 0
let py = 0

let moveDown = setInterval(function(){
    childDiv.style.top = `${py}px`
    py++

    if(py >= 450){
        clearInterval(moveDown)
        let moveRight = setInterval(function(){
            childDiv.style.left = `${px}px`
            px++
            if(px >= 450){
                clearInterval(moveRight)

                let moveTop = setInterval(function(){
                    childDiv.style.top = `${py}px`
                    py--
                    if(py <= 0){
                        clearInterval(moveTop)

                        let moveLeft = setInterval(function(){
                            childDiv.style.left = `${px}px`
                            px--

                            if(px <= 0){
                                clearInterval(moveLeft)
                            }
                        },2)
                    }
                },2)
            }
        },2)
    }
},2)