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
//-----------------------------------------------------------

const carta = comprarCarta()  // Sorteia uma carta
//console.log(carta.texto)   // imprime o texto da carta
//console.log(carta.valor)   //imprime o valor da carta (um número)

let arrayCartaUsuario = []
let arrayCartaComputador = []
// console.log("Carta usuário:", cartaUsuario);
// console.log("Carta computador:", cartaComputador);
let fimDoJogo = false

// Variáveis que servem de contador para o for
let cartasUsuario = ""
let cartasCompurador = ""

let somaUsuario = 0
let somaComputador = 0


if (confirm("Bem-vindo ao jogo de BlackJack! \nQuer iniciar uma nova rodada?")) {
   comprarCarta()

   arrayCartaUsuario.push(comprarCarta())
   arrayCartaUsuario.push(comprarCarta())
   arrayCartaComputador.push(comprarCarta())
   arrayCartaComputador.push(comprarCarta())

   for (let i = 0; i < arrayCartaUsuario.length; i++) {
      cartasUsuario = cartasUsuario + arrayCartaUsuario[i].texto
      somaUsuario = somaUsuario + arrayCartaUsuario[i].valor
      // console.log("Linha 44):", cartasUsuario);
      // console.log("Linha 45):", somaUsuario);
   }
   
   for (let i = 0; i < arrayCartaUsuario.length; i++) {
      cartasCompurador = cartasCompurador + arrayCartaComputador[i].texto
      somaComputador = somaComputador + arrayCartaComputador[i].valor
      // console.log("Linha 51):", cartasCompurador);
      // console.log("Linha 52):", somaComputador);
   }

   
   // REGRA 1: se as duas cartas iniciais forem ases

   while ((arrayCartaUsuario[0].texto === "A" && arrayCartaUsuario[1].texto === "A") || (arrayCartaComputador[0].texto === "A" && arrayCartaComputador[1].texto === "A")) {
      // comprarCarta()
      arrayCartaUsuario = [comprarCarta(), comprarCarta()]
      arrayCartaComputador = [comprarCarta(), comprarCarta()]
   }


   // REGRA 2: Exibir as duas cartas do jogador e a primeira carta do computador e perguntar se usuário quer comprar mais cartas
   // A REGRA 2 está no início da REGRA 3 dentro da consição do while, dessa forma ela aparece inicialmente e continua aparecendo enquanto for confirmado se quiser continuar comprando carta.

    
   // REGRA 3: Usuário compra cartas até atingir 21 pontos ou até decidir parar

   while (somaUsuario <= 21 && confirm(`Suas cartas são ${cartasUsuario}. \nA carta revelada do computador é ${arrayCartaComputador[0].texto}. \nDeseja comprar mais uma carta?`)) {
      arrayCartaUsuario.push(comprarCarta())
      somaUsuario = somaUsuario + arrayCartaUsuario[arrayCartaUsuario.length - 1].valor
      cartasUsuario = cartasUsuario + arrayCartaUsuario[arrayCartaUsuario.length - 1].texto
   }

   
   // REGRA 4: Rodada do computador

   while (somaComputador < somaUsuario && somaComputador <= 21) {
      arrayCartaComputador.push(comprarCarta())
      somaComputador = somaComputador + arrayCartaComputador[arrayCartaComputador.length - 1].valor;
      cartasCompurador = cartasCompurador + arrayCartaComputador[arrayCartaComputador.length - 1].texto
   }
   

   // REGRA 5: Verificar quem ganhou:

   if (somaComputador > 21 && somaUsuario <= 21) {
      alert(`Usuário - Cartas: ${cartasUsuario} - Pontuação: ${somaUsuario} \nComputador - Cartas: ${cartasCompurador} - Pontuação: ${somaComputador} \n O usuário ganhou!`)
   } else if (somaUsuario > 21 && somaComputador <= 21) {
      alert(`Usuário - Cartas: ${cartasUsuario} - Pontuação: ${somaUsuario} \nComputador - Cartas: ${cartasCompurador} - Pontuação: ${somaComputador} \n O computador ganhou!`)
   } else if (somaComputador <= 21 && somaComputador > somaUsuario) {
      alert(`Usuário - Cartas: ${cartasUsuario} - Pontuação: ${somaUsuario} \nComputador - Cartas: ${cartasCompurador} - Pontuação: ${somaComputador} \n O computador ganhou!`)
   } else if (somaUsuario <= 21 && somaUsuario > somaComputador) {
      alert(`Usuário - Cartas: ${cartasUsuario} - Pontuação: ${somaUsuario} \nComputador - Cartas: ${cartasCompurador} - Pontuação: ${somaComputador} \n O usuário ganhou!`)
   } else {
      alert(`Usuário - Cartas: ${cartasUsuario} - Pontuação: ${somaUsuario} \nComputador - Cartas: ${cartasCompurador} - Pontuação: ${somaComputador} \n Empate!`)
   }

} else {
   alert("O jogo acabou");

}