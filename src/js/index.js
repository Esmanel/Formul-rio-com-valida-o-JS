const tagInput = document.querySelectorAll("input")
const tagText = document.querySelectorAll(".campo")
const tagForm = document.querySelector(".formulario")
const tagTextArea = document.querySelector("textarea")

tagInput.forEach(function(input) {

    input.addEventListener("change", function() {

        if(input.value !== "") {
            console.log(input.value)
            input.classList.add("borda-verde")

        } else if(input.value == "") {
            input.classList.remove("borda-verde")
            input.classList.add("sem-preenchimento")
            for(let i = 0; i < tagInput.length-1; i++) {
                if(tagInput[i].classList.contains("sem-preenchimento")) {
                tagText[i].classList.remove("ocultar") 
                }    
            } 
        } 

        for(let i = 0; i < tagInput.length-1; i++) {
            if (tagInput[i].value !== "") {
                tagText[i].classList.add("ocultar")
            }
        }
    })   
})

let textoDigitado = tagTextArea.value
let click = document.querySelector("#enviar")

console.log(tagTextArea)
console.log(textoDigitado)

if (textoDigitado == "") {
    tagTextArea.classList.add("borda-vermelha")
    tagText[3].classList.remove("ocultar")
} 




