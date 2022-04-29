const fnSync = (a)=>{
    return new Promise((resolve,reject)=>{
        console.log("Promese")
        setTimeout(() => {
            if(a===1){
            resolve("hey")
        }else{
            reject("nonnonononono")
        }
        }, 2000);
    })
}

console.log(fnSync())


//callback não utilizado mais 
const fnAsync = async (a,b,callback)=>{

    try {
        const res = await fnSync()
        console.log("[].... ", res)
    } catch (error) {
        console.log("xxxxx", error)
    }

    console.log("Função Assicrona")
    //utilizado no oriente
   

    setTimeout(() => {
    callback()
        
    },2000);
}
fnAsync(1,7,()=>{
    console.log("Acabou")
}).catch((err)=>{
    console.log(err)
})

//MAIS UTILIZADO
fnSync().then(res =>{
    console.log("then" , res)
}).catch((err)=>{
    alert(err)
}) 
