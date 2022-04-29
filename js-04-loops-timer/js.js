// for: por um tempo determinado 

for(let i = 0;i<=10;i++){
    console.log(i)
}


const arr = ["a",'f',"b","c",'f']

for(let i = 0;i<arr.length;i++){
    console.log(arr[i])
}


// while: Quase nao se usar no navegador, riso de travar 

let i = 0
while(i<10){
    console.log(i,"oi")
    i++
}

// timerOut
let cb = 0
const SECOND = 1000
const fn = ()=> {
    console.log("hey")
    cb++
    if(cb<10){
        setTimeout(fn,SECOND)
    }else{
        console.log("acabou")
    }
}

     fn()
cab= 0
     const fn2 = ()=>{
         console.log("y",cab)
         cab++
         if(cab>=3){
            clearInterval(interval)
         }
     }
     const interval = setInterval(fn2,SECOND)
        
