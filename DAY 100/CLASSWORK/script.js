const asyncFunc = (work) => {
    return new Promise((resolve,reject)=>{
        if(work == ""){
            reject(Error("!!!!"))
        }
        setTimeout(() =>{
            resolve(work)
        },1000)
    })
}

asyncFunc("work 1").then((result)=>{
    console.log(result)
    return asyncFunc("work 2")
})

.catch((error)=>{
    console.log(error)
})