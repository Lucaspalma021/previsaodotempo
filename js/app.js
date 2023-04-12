//Declarando variáveis DOM

var imagem = document.getElementById('img')
var ssa = document.getElementById('ssa')
var rc = document.getElementById('rc')
var sp = document.getElementById('sp')
var spa = document.getElementById('btn')

//Pegando o funcionamento do mouse

ssa.addEventListener('click', salvador)

function salvador(){
    imagem.src="images/chuva.png"
    spa.textContent='Chuvas ensoladas - 23°'
}

rc.addEventListener('click', recife)

function recife(){
    imagem.src="images/nublado.png"
    spa.textContent='Tempo nublado - 24°'
}

sp.addEventListener('click', saopaulo)

function saopaulo(){
    imagem.src="images/ensolarado.png"
    spa.textContent='Sol com nuvens isolados - 26°'
}


