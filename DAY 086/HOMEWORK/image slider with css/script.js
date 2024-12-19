const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const img = document.getElementById("img")


let images = [
    "./P90411347_highRes_the-new-bmw-m5-cs-st.jpg",
    "./36745671453_ef75c7db8f_o.jpg",
    "./maxresdefault.jpg"
]

let count = 0 

nextBtn.addEventListener('click',function(){
    count += 1
    
    if(count >= images.length){
        count = 0
    }

    img.src = images[count]
})

prevBtn.addEventListener('click',function(){
    count -= 1

    if(count < 0){
        count = images.length - 1
    }
    img.src = images[count]
})