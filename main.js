const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const tempo = document.querySelectorAll(".contador")
console.log(botoes)
const tempoObjetivo1 = new Date(2023, 11, 08);
const tempoObjetivo2 = new Date(2025, 0, 10);
const tempoObjetivo3 = new Date(2024, 8, 10);
const tempoObjetivo4 = new Date(2024, 9, 19);
function calculaTempo(tempoObjetivo) {
   const agora = new Date();
   let segundos;
   let minutos;
   let horas;
   let dias;
   segundos = (tempoObjetivo - agora) / 1000
   minutos = segundos / 60
   horas = minutos / 60
   dias = horas / 24
   segundos = Math.floor(segundos)
   minutos = Math.floor(minutos)
   horas = Math.floor(horas)
   dias = Math.floor(dias)
   segundos = segundos % 60
   minutos = minutos % 60
   horas = horas % 24
  if (segundos >= 0){
   return `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
  }
    else {
     return "Prazo Finalizado!"
  }
   
}
tempo[0].textContent = calculaTempo(tempoObjetivo1);
tempo[1].textContent = calculaTempo(tempoObjetivo2);
tempo[2].textContent = calculaTempo(tempoObjetivo3);
tempo[3].textContent = calculaTempo(tempoObjetivo4);
for (let i = 0; i < botoes.length; i++) {
   botoes[i].onclick = function () {
      for (j = 0; j < botoes.length; j++) {
         botoes[j].classList.remove("ativo");
         conteudo[j].classList.remove("ativo");
      }
      botoes[i].classList.add("ativo");
      conteudo[i].classList.add("ativo");
   }

}