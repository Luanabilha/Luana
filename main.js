const botoes = document.querySelectorAll(".botao");
console.log(botoes)
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