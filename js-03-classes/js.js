class Player {

    //variaveis da classe 
 name = "";
 age = 0;
 attack= 0
 life=0
 
 constructor (name,age) {
     this.name= name
     this.age = age
     this.attack = (100* Math.random()).toFixed(0)
     this.life = (100* Math.random()).toFixed(0)

 }

 

 getName() {
     return this.name
 }

 setName(newName) {
     this.name = newName
 }
}

const p1 = new Player("Ryan",20)
const p2 = new Player("Maria",16)
console.log(p1)
console.log(p2)

// p1.setName("Novo ")
