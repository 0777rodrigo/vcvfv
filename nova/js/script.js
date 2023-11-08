const chave = '4fbc1cb3c000c402217a42536b258322'
const cidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const titulo = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')

botao.addEventListener('click',buscarCidade)

async function buscarCidade(){

let ncidade = cidade.value

const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ncidade}&appid=${chave}`)
.then(resposta=>resposta.json())

titulo.textContent = "Tempo em" + dados.name
temperatura.textContent = Math.cell(dados.main.temp)+"°C"
previsao.textContent = dados.weather(0).description
console.log(dados)


}


