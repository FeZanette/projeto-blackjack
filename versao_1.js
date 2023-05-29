/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//------------------------------------------------
   

// const carta = comprarCarta()
    
// console.log(carta.texto)
// console.log(carta.valor)


console.log("Boas vindas ao jogo BlackJack!")

const carta = comprarCarta()
const carta1 = comprarCarta()
   // console.log(carta1.texto)
const carta2 = comprarCarta()
   // console.log(carta2.texto);
const carta3 = comprarCarta()
   // console.log(carta3.texto);
const carta4 = comprarCarta()
   // console.log(carta4.texto);

const somaUsuario = carta1.valor + carta2.valor
   // console.log(somaUsuario)
const somaComputador = carta3.valor + carta4.valor
   // console.log(somaComputador)

const usuario = (`"Usuário - cartas: ${carta1.texto} ${carta2.texto} - pontuação: ${somaUsuario}"`)
const computador = (`"Computador - cartas: ${carta3.texto} ${carta4.texto} - pontuação: ${somaComputador}"`)

if(confirm("Quer iniciar uma nova rodada?")){
   if(somaUsuario === somaComputador ){
      console.log(usuario);
      console.log(computador);
      console.log("Empate!");
   }else if(somaUsuario > somaComputador){
      console.log(usuario);
      console.log(computador);
      console.log("O usuário ganhou!");
   }else if(somaUsuario < somaComputador){
      console.log(usuario);
      console.log(computador);
      console.log("O computador ganhou!");
   }
}else{
   console.log("o jogo acabou");
}