const App = {
    init() {
        console.log("inicio")
        this.controller.crateContainer()
        console.log("fim")
    },
    state:{},
    controller:{
        createSectionHeader(){
           const els = App.elements.sectionHeader
            els.style.textAlign="center"
            els.style.fontWeight="bold"
            
            els.innerHTML="Ingate Fullstack v5"
           
        },

        crateSectionP(){
            const els = App.elements.sectionP
            els.innerHTML="The best course ever"
        },

        crateSectionContainerImg(){
            const els = App.elements.sectionContainerImg
            els.style.display="flex"
            els.style.justifyContent="center"
            els.style.alignItems="center"
        },

        crateSectionImg(){
            const els = App.elements.sectionImg
            els.src="https://github.com/ingate-educa/fullstack-assets/raw/main/v5/Logo-short.png"
            els.style.width="32px"
        },


     

        crateContainer(){
            const els = App.elements
            els.container.style.border="1px solid black"
            els.container.style.width="fit-content"
            els.container.style.padding="5px"

            this.createSectionHeader()
            this.crateSectionP()
            this.crateSectionContainerImg()
            this.crateSectionImg()

            
            els.sectionMain.appendChild(els.sectionP)
            els.sectionContainerImg.appendChild(els.sectionImg)
            els.sectionMain.appendChild(els.sectionContainerImg)
            
            
            els.container.appendChild(els.sectionHeader)
            els.container.appendChild(els.sectionMain)


            
            els.root.appendChild(els.container)
            console.log(els.root)
        }
    },
    elements:{
        root: document.getElementById("app"),
        container: document.createElement("div"),
        sectionHeader: document.createElement("div"),
        sectionMain: document.createElement("div"),
        sectionP: document.createElement("div"),
        sectionContainerImg: document.createElement("div"),
        sectionImg: document.createElement("img"),

    }

}


App.init()

console.log(App)