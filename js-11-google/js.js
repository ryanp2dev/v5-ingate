const App = {
    init(){
        console.log("Start")
        this.controller.createLayout()
        // this.controller.setStyle()
        console.log("Stop")
    },
    state:{},
    controller:{
        createHeader(){
            const els = App.elements.header
            els.gmail.innerHTML="Gmail"
            els.gmail.href="https://mail.google.com/mail/?authuser=0&ogbl"

            els.imagem.innerHTML="imagem"
            els.imagem.href="https://www.google.com.br/imghp?hl=pt-BR&authuser=0&ogbl"

            els.dots.alt="dots"
            els.dots.src="https://cdn-icons-png.flaticon.com/512/17/17704.png"

            
            this.setStyle(els.gmail,{
                color:"black",
                textDecoration:"none"
            })

            this.setStyle(els.imagem,{
                color:"black",
                textDecoration:"none"
            })

            els.avatar.alt="avatar"
            els.avatar.src="https://lh3.googleusercontent.com/ogw/ADea4I75d2MwYAu1u14_MYmkHhaRZm5Od3cQgPBuG_62=s32-c-mo"

            this.setStyle(els.container,{
                display:"flex",
                justifyContent:"flex-end",
                alignItems:"center",
                gap:"20px",
                padding:"10px"
                })


            this.setStyle(els.dots,{
                width:"auto",
                height: "24px"
            })

            this.setStyle(els.avatar,{
                borderRadius:"50%"
            })


            els.container.appendChild(els.gmail)
            els.container.appendChild(els.imagem)
            els.container.appendChild(els.dots)
            els.container.appendChild(els.avatar)
        },
        createBody(){
            const els = App.elements.body

            els.google.imgGoogle.alt="google"
            els.google.imgGoogle.src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"

            
            this.setStyle(els.google.container,{
                marginTop: "80px"
            })
            
            els.google.container.appendChild(els.google.imgGoogle)
            els.container.appendChild(els.google.container)
            

            this.setStyle(els.search.searchInput,{
                width:"900px",
                borderRadius:"5px",
                outline: "0",
                border:"0",
                fontSie:"24px",
                
            })



            this.setStyle(els.search.container,{
                display:"flex",
                justifyContent: "center",
                alignItems:"center",
                border:"1px solid black",
                width:"450px",
                padding: "4px",
                borderRadius: "30px",
                height:"auto",
                
            })


            this.setStyle(els.search.searchIcon,{
                width:"24px",
                height: "24px",
                marginLeft:"10px"
            })
            els.search.searchIcon.src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"



            this.setStyle(els.search.micIcon,{
                width:"auto",
                height: "24px",
                marginRight: "10px",
                

            })
            els.search.micIcon.alt="mic"
            els.search.micIcon.src="https://uxwing.com/wp-content/themes/uxwing/download/08-computers-mobile-hardware/microphone-line.png"
            els.search.container.appendChild(els.search.searchIcon)
            els.search.container.appendChild(els.search.searchInput)
            els.search.container.appendChild(els.search.micIcon)
            els.container.appendChild(els.search.container)

            
            els.button.searchButton.innerHTML="Pesquisa Google"
            els.button.luckButton.innerHTML="Estou com sorte"


            this.setStyle(els.button.luckButton,{
                border: "none",
                padding:"10px",
                backgroundColor: "#F8F9FA",
                borderRadius:"4px"


            })

            this.setStyle(els.button.searchButton,{
                border: "none",
                padding:"7px",
                backgroundColor: "#F8F9FA",
                borderRadius:"4px"


            })

            this.setStyle(els.button.container,{
                display:"flex",
                
                gap:"20px"
            })

              
            this.setStyle(els.container,{
                display:"flex",
                flexDirection: "column",
                flexGrow:"2",
                alignItems:"center",
                gap: "20px"
                })

            els.button.container.appendChild(els.button.searchButton)
            els.button.container.appendChild(els.button.luckButton)
            els.container.appendChild(els.button.container)

            els.text.span.innerHTML="Disponibilizado pelo Google em:"
            els.text.a.innerHTML="English"
            els.text.a.href="https://www.google.com.br/setprefs?sig=0_SguiHap-p1-SZhxxUJSG4sjBKbI%3D&hl=en&source=homepage&sa=X&ved=0ahUKEwjI-YCE-7L3AhXzuZUCHSQsAJIQ2ZgBCBI"

            this.setStyle(els.text.a,{
                textDecoration:"none",
                color:"black",
                marginLeft:"5px"

            })

            els.text.container.appendChild(els.text.span)
            els.text.container.appendChild(els.text.a)
            els.container.appendChild(els.text.container)





           
        },
        createFooter(){
            const els = App.elements.footer

            els.brasil.text.innerHTML="Brasil"
            els.brasil.container.appendChild(els.brasil.text)
            els.container.appendChild(els.brasil.container)
            this.setStyle(els.brasil.text,{
                paddingLeft:"27px",
            })

            this.setStyle(els.brasil.container,{
                borderBottom:"1px solid #C2CBCC"

            })

            els.config.left.sobre.innerHTML="Sobre"
            els.config.left.sobre.href="https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1"
            els.config.left.container.appendChild(els.config.left.sobre)

            els.config.left.publicidade.innerHTML="Publicidade"
            els.config.left.publicidade.href="https://www.google.com.br/intl/pt-BR_br/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            els.config.left.container.appendChild(els.config.left.publicidade)

            els.config.left.negocios.innerHTML="Negócios"
            els.config.left.negocios.href="https://www.google.com.br/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
            els.config.left.container.appendChild(els.config.left.negocios)

            els.config.left.como.innerHTML="Como funciona a Pesquisa"
            els.config.left.como.href="https://google.com/search/howsearchworks/?fg=1"
            els.config.left.container.appendChild(els.config.left.como)
           
            els.config.container.appendChild(els.config.left.container)



            els.config.rigth.privacidade.innerHTML="Privacidade"
            els.config.rigth.privacidade.href="https://policies.google.com/privacy?hl=pt-BR&fg=1"
            els.config.rigth.container.appendChild(els.config.rigth.privacidade)

            els.config.rigth.termos.innerHTML="Termos"
            els.config.rigth.termos.href="https://policies.google.com/terms?hl=pt-BR&fg=1"
            els.config.rigth.container.appendChild(els.config.rigth.termos)

            els.config.rigth.configuracao.innerHTML="Configuração"
            els.config.rigth.configuracao.href="#"
            els.config.rigth.container.appendChild(els.config.rigth.configuracao)

            this.setStyle(els.config.rigth.configuracao,{
                paddingLeft:"10px",
                color:"black",
                textDecoration:"none"
            })

            this.setStyle(els.config.rigth.privacidade,{
                paddingLeft:"10px",
                color:"black",
                textDecoration:"none"
            })

            this.setStyle(els.config.rigth.termos,{
                paddingLeft:"10px",
                color:"black",
                textDecoration:"none"
            })






            this.setStyle(els.config.rigth.container,{
                padding:"15px",
                display:"flex",
                flexWrap:"wrap"
            })



            this.setStyle(els.config.left.como,{
                paddingLeft:"10px",
                color:"black",
                textDecoration:"none"
            })

            this.setStyle(els.config.left.negocios,{
                paddingLeft:"10px",
                color:"black",
                textDecoration:"none"
            })

            this.setStyle(els.config.left.publicidade,{
                paddingLeft:"10px",
                color:"black",
                textDecoration:"none"
            })

            this.setStyle(els.config.left.sobre,{
                paddingLeft:"10px",
                color:"black",
                textDecoration:"none"
            })
            this.setStyle(els.config.left.container,{
                padding:"15px",
                display:"flex",
                flexWrap:"wrap",
            })


            els.config.container.appendChild(els.config.rigth.container)


            this.setStyle(els.config.container,{
                display:"flex",
                justifyContent:"space-between",
            })
            
            els.container.appendChild(els.config.container)








            this.setStyle(els.container,{
                display:"flex",
                display:"flex",
                flexDirection: "column",
                backgroundColor:"#F2F2F2",
                paddingTop:"20px"
                })
            
        },


createLayout(){
const els = App.elements
    console.log("inico")

    this.setStyle(els.container,{
        display:"flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FFFFFF"

    })
    this.createHeader()
    els.container.appendChild(els.header.container)
    this.createBody()
    els.container.appendChild(els.body.container)
    this.createFooter()
    els.container.appendChild(els.footer.container)
    els.root.appendChild(els.container)
    console.log("fim")
},


        setStyle(el,style){
            for(let key in style){
                console.log("[]...",key,style[key])
                el.style[key] = style[key]
            }
        }
    },
    elements:{
        root: document.getElementById("app"),
        container: document.createElement("div"),
        header: {
            container: document.createElement("div"),
            gmail: document.createElement("a"),
            imagem: document.createElement("a"),
            dots: document.createElement("img"),
            avatar: document.createElement("img")


        },
        body: {
            container: document.createElement("div"),
            google: {
                container: document.createElement("div"),
                imgGoogle: document.createElement("img")
            },
            search: {
                container: document.createElement("div"),
                searchInput: document.createElement("input"),
                searchIcon: document.createElement("img"),
                micIcon: document.createElement("img")
            },
            button: {
                container: document.createElement("div"),
                searchButton: document.createElement("button"),
                luckButton: document.createElement("button")
            },
            text: {
                container: document.createElement("div"),
                span: document.createElement("span"),
                a: document.createElement("a")
            }
            
        },
        footer: {
            container: document.createElement("div"),
            brasil: {
                container: document.createElement("div"),
                text: document.createElement("span")
            },
            config: {
                container: document.createElement("div"),
                left:{
                    container: document.createElement("div"),
                    sobre: document.createElement("a"),
                    publicidade: document.createElement("a"),
                    negocios: document.createElement("a"),
                    como: document.createElement("a"),
                },
                rigth:{
                    container: document.createElement("div"),
                    privacidade: document.createElement("a"),
                    termos: document.createElement("a"),
                    configuracao: document.createElement("a"),

                }
            }
        }

    }
}

App.init()