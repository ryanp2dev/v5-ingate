// let a = 1 
// let b = 2

// // fucoes são blocos de codigos


// // ficoes tradicionais 
// function sua() {
//     return a + b
// }

// const res = sua()

// console.log(res)



// //fucões setas 

// const fn = () => {
//     console.log("HEllo")
// }


// // fucoes pura e impuras

// function pura(a,b) {
//     return a + b
// }



// function asd(c) {
//     return c + a
// }


// console.log(asd(19))

// exercio da aula

// Criar um função normal
let n1 = 8
let n2 = 4
function divisao (){
    return n1 / n2
}

console.log(divisao())

// Criar uma função pura

function resto (n,res) {
    return n% res
}

console.log(resto(18,5))
// Criar uma função impura
let par = 2
function par2 (n) {
    if(n%par  ==0){
        return "Par"
    }else{
        return "Impar"
    }
}
console.log(par2(29))
console.log(par2(12))

// Criar uma função seta

const fn2 = () => {
    console.log("Heloo")
}

fn2()