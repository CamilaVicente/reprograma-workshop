var inputValorHora = document.querySelector('#valor-hora')
var inputHorasProjeto = document.querySelector('#horas-projeto')
var resultado = document.querySelector('span')

function calcular(){

    var valorHora = inputValorHora.valueAsNumber
    var horasProjeto = inputHorasProjeto.valueAsNumber

    var valorTotal = (valorHora * horasProjeto).toFixed(2)

    resultado.textContent = "O valor total do projeto é R$ " + valorTotal




}

