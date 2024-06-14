const botoes = document.querySelectorAll(".botao");
const conteudo =document.querySelectorAll(".aba-conteudo")
const tempo=  document.querySelectorAll(".contador")
console.log(botoes)
tempo[O].textContent="Luana"
const tempoObjetivo1=new date(12/08/2024,13,08);
const tempoObjetivo2=new date(12/09/2024,20,10);
const tempoObjetivo3=new date(02/10/2024,15,07);
const tempoObjetivo4=new date(13/11/2024,08,19);
const tempoObjetivo5=new date(01/12/2024,12,09);
const agora=new date();
tempo[1].textContent=agora
for(let i=0; i <botoes.length; i++) {
 botoes[i].onclick = function(){
   for(j=0; j<botoes.length; j++){
      botoes[i].classList.remove("ativo");
      conteudo[j].classList.remove("ativo");
   }
botoes[i].classList.add("ativo");
conteudo[i].classList.add("ativo");
 }

}