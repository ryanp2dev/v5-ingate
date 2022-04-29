console.log("Desafio")

    const el = document.createElement("div")
    el.style.border= "1px solid black"
    el.style.width="fit-content"
    el.style.padding="5px"


    const text = document.createElement("div")
    text.innerHTML="Ingate Fullstack v5"
    text.style.textAlign="center"
    text.style.fontWeight="bold"

    const text1 = document.createElement("div")
    text1.innerHTML="The best course ever"

    const container = document.createElement("div")
    container.style.display= "flex"
    container.style.justifyContent= "center"
    container.style.alignItems= "center"

    const img = document.createElement("img")
    img.style.width= "32px"

    img.src="https://github.com/ingate-educa/fullstack-assets/raw/main/v5/Logo-short.png"


    el.appendChild(text)
    el.appendChild(text1)
    el.appendChild(container)
    container.appendChild(img)
    document.body.appendChild(el)

console.log(el)