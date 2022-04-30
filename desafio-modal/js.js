const App = {
    init () {
        console.log("Inicio")
        this.controller.createContainer()
        this.controller.setStyle()
        this.controller.createEvents()
        console.log("Fim")
    },
    state:{
        count:0

    },
    controller:{


        createEvents(){
            const els = App.elements
            els.modal.open.openModal.onclick = () => {
                this.setStyle(els.text.container,{
                display:"block"

                })
                this.setStyle(els.modal.open.openModal,{
                    display:"none"
                })
            }

            els.text.el.close.onclick = () =>{
                this.setStyle(els.text.container,{
                    display:"none"
                })
                this.setStyle(els.modal.open.openModal,{
                    display:"block"
                })
               
            }

            els.text.el.coutMais.onclick = () => {
                App.state.count++
                els.text.el.cout.innerHTML=App.state.count
                console.log(App.state.count)
            }

            
            els.text.el.coutMenos.onclick = () => {
                App.state.count--
                els.text.el.cout.innerHTML=App.state.count
                console.log(App.state.count)
            }
            
            
        },
        createModal(){
            const els = App.elements.modal
            els.open.openModal.innerHTML="Open modal"
            els.open.openModal.href="#"
            this.setStyle(els.open.openModal,{
            })
            els.container.appendChild(els.open.openModal)

        },

        createText(){
            const els = App.elements.text

            this.setStyle(els.container,{
                width:"200px",
                height: "200px",
                backgroundColor: "#ccc",
                display:"none",
                position: 'fixed',
                left:"500px",
                top:"200px"

             })

             this.setStyle(els.el.container,{
                 display:"flex",
                 flexDirection: "column",
             })

            els.el.cout.innerHTML=App.state.count
             els.el.container.appendChild(els.el.cout)

             els.el.coutMais.innerHTML="mais"
             els.el.coutMais.href="#"

             els.el.coutMenos.innerHTML="Subtraia"
             els.el.coutMenos.href="#"


             els.el.container.appendChild(els.el.coutMais)
             els.el.container.appendChild(els.el.coutMenos)

             els.el.close.innerHTML="close modal"
             els.el.close.href="#"
             els.el.container.appendChild(els.el.close)
             els.container.appendChild(els.el.container)

        },

        createContainer(){
            const els = App.elements
            this.createModal()
            this.createText()
            els.el.appendChild(els.text.container)
            els.el.appendChild(els.modal.container)
            els.root.appendChild(els.el)


        },
        setStyle(el,style){
            for(let key in style){
                console.log("[]...",key,style[key])
                el.style[key] = style[key]
            }
        }
      
    },
    elements:{
        root:document.getElementById("app"),
        el: document.createElement("div"),
        modal: {
            container: document.createElement("div"),
            open: {
                el: document.createElement("div"),
                openModal:document.createElement("a"),
            
            },
           
           

        },
        text: {
            container: document.createElement("div"),
            el:{
                container: document.createElement("div"),
                close: document.createElement("a"),
                coutMais: document.createElement("span"),
                coutMenos:document.createElement("span"),
                cout: document.createElement("span")
            }

        }

    }

}


App.init()