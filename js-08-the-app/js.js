
const App = {
    //big bang
    init () {
        console.log("inicio")
        console.log(this)
        this.Controller.setBorder()
        // App.Controller.setBorder()
        console.log("End")

    },
    //banco de dado estatico 
    state:{},
    //funcoes que podem ser chamadas
    Controller: {
        setBorder(){
            const root = App.elements.root
            console.log("border")
            root.style.border="1px solid black"
            root.innerHTML="ryan"
        }
    },
    //aqui guardamos todas as referencia de nossos objetos 
    elements: {
        root: document.getElementById("app"),
        container: document.createElement("div"),
        

    },

}

App.init()
console.log(App)