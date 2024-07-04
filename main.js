const botoes = document.querySelectorAll(".botao");
const conteudo =document.querySelectorAll(".aba-conteudo")
const tempo=  document.querySelectorAll(".contador")
console.log(botoes)
const tempoObjetivo1=new Date(2024,11,08);
const tempoObjetivo2=new Date(2025,0,10);
const tempoObjetivo3=new Date(2024,8,10);
const tempoObjetivo4=new Date(2024,9,19);
const tempoObjetivo5=new Date(2025,11,09);
const agora=new Date();
let segundos;
let minutos;
let horas;
let dias;
segundos = (tempoObjetivo1 - agora)/1000
minutos = segundos/60
horas = minutos/60
dias = horas/24
segundos=Math.floor(segundos)
minutos=Math.floor(minutos)
horas=Math.floor(horas)
dias=Math.floor(dias)
segundos = segundos%60
minutos=minutos%60
horas = horas%24

tempo[0].textContent= `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`   
for(let i=0; i <botoes.length; i++) {
 botoes[i].onclick = function(){
   for(j=0; j<botoes.length; j++){
      botoes[j].classList.remove("ativo");
      conteudo[j].classList.remove("ativo");
   }
botoes[i].classList.add("ativo");
conteudo[i].classList.add("ativo");
 }

}