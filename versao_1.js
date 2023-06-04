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
    

   console.log("Boas vindas ao jogo de BlackJack!")
    if(confirm("Quer iniciar uma nova rodada?")) { 
       const cartaUsuario = comprarCarta()
       console.log(`Usuário - cartas: ${cartaUsuario.texto} - pontuação: ${cartaUsuario.valor}`)
       const cartaComputador = comprarCarta()
       console.log(`Computador - cartas: ${cartaComputador.texto} - pontuação: ${cartaComputador.valor}`)
         if (cartaUsuario.valor > cartaComputador.valor) {
            console.log("O usuário ganhou!")            
         } else if (cartaUsuario.valor === cartaComputador.valor){
            console.log("Empate!")
         } else {
            console.log("O computador ganhou!")
         }
      
    } else { 
      console.log("O jogo acabou.") 
    } 

    