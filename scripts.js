const form = document.querySelector('.Formulario')
const mascara = document.querySelector('.mascara-formulario')
const faleconosco = document.querySelector('.faleconosco')

function cliqueiNoBotao(){
    form.style.transform= 'translateX(-50%)'
    form.style.left='50%'
    mascara.style.visibility= 'visible'
    faleconosco.style.color= 'black'
}

function cliqueiNoBotao1(){
    form.style.top='30%'
    form.style.left='-290%'
    mascara.style.visibility= 'hidden'
    faleconosco.style.color= 'white'
}