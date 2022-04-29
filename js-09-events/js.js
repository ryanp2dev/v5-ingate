const App = {
    init () {
        console.log("Inicio")
        this.controller.createContainer()
        this.controller.createEvents()
        console.log("Fim")
    },
    state:{},
    controller:{


        createEvents(){
        const els = App.elements


        els.td1.onclick = (evt) => {
            console.log("cliquei",evt)
        }

        els.td2.onmousemove = (evt) => {
            console.log("passei",evt)
        }

        els.td3.addEventListener("click", ()=> {
            console.log("event lister")
            alert("iiii")
        })

        const click =(evt)=> {
            console.log("event listeeeer",evt)
        }
        els.td3.addEventListener("click",click)

        els.td4.addEventListener("mousemove",() =>{
            alert("passou o mouse")
        })

        setTimeout(() => {
            els.td3.removeEventListener("click",click)
        }, 5000);
        },

        

        createContainer(){
            const els= App.elements
           
            els.td1.innerHTML="td11"
            els.td2.innerHTML="td12"
            els.td3.innerHTML="td21"
            els.td4.innerHTML="td22"

            els.el.style.border="1px solid black"
            els.table.style.border="1px solid black"
            els.td1.style.border="1px solid black"
            els.td2.style.border="1px solid black"
            els.td3.style.border="1px solid black"
            els.td4.style.border="1px solid black"




            els.tr1.appendChild(els.td1)
            els.tr1.appendChild(els.td2)
            els.tr2.appendChild(els.td3)
            els.tr2.appendChild(els.td4)

            els.table.appendChild(els.tr1)
            els.table.appendChild(els.tr2)
            els.el.appendChild(els.table)
            els.root.appendChild(els.el)
        }
    },
    elements:{
        root:document.getElementById("app"),
        el: document.createElement("div"),
        table:document.createElement("table"),
        tr1:document.createElement("tr"),
        tr2:document.createElement("tr"),
        td1:document.createElement("td"),
        td2:document.createElement("td"),
        td3:document.createElement("td"),
        td4:document.createElement("td"),


    }

}


App.init()