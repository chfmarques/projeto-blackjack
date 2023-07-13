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

let cartasUsuario = []
let cartasComputador = []

if (confirm("Boas vindas ao jogo de BlackJack! \nQuer iniciar uma nova rodada?")) {
   let condition = true
   while (condition) {
      cartasUsuario = []
      cartasComputador = []
      cartasUsuario.push(comprarCarta())
      cartasUsuario.push(comprarCarta())
      cartasComputador.push(comprarCarta())
      cartasComputador.push(comprarCarta())

      const usuarioTem2As = cartasUsuario.filter((value) => value.value === 11).length === 2
      const computadorTem2As = cartasComputador.filter((value) => value.value === 11).length === 2

      if (!usuarioTem2As && !computadorTem2As) {
         condition = false
      }
   }
   console.log("Antes da pontuação", cartasUsuario)
   // Cartas e pontuação do Usuário

   let comprarNovamente = true
   let pontosUsuario = 0
   let textoUsuario = ""

   // Rodada Usuário

   while (comprarNovamente) {
      pontosUsuario = 0
      textoUsuario = ""
      for (let carta of cartasUsuario) {
         textoUsuario = textoUsuario + carta.texto + " "
         pontosUsuario = pontosUsuario + carta.valor

      }
      if (pontosUsuario > 21) {
         comprarNovamente = false
      }
      else {
         if (confirm(`Suas cartas são ${textoUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}. \nDeseja comprar mais uma carta?`)) {
            cartasUsuario.push(comprarCarta())
         }
         else {
            comprarNovamente = false
         }
      }
   }
   console.log("Depois da pontuação", cartasUsuario)
   // Cartas e pontuação do Computador

   let pontosComputador = 0
   let textoComputador = ""
   for (let carta of cartasComputador) {
      textoComputador = textoComputador + carta.texto + " "
      pontosComputador = pontosComputador + carta.valor
   }

   // Rodada do computador

   if (pontosUsuario <= 21) {
      while (pontosComputador < pontosUsuario) {
         pontosComputador = 0
         textoComputador = ""
         cartasComputador.push(comprarCarta())
         for (let carta of cartasComputador) {
            textoComputador = textoComputador + carta.texto + " "
            pontosComputador = pontosComputador + carta.valor
         }

      }
   }

   let resultado = ""

   if (pontosUsuario === pontosComputador) {
      resultado = "Empate!"
   } else if ((pontosUsuario > pontosComputador && pontosUsuario <= 21) || pontosComputador > 21) {
      resultado = "O usuário ganhou!"
   } else {
      resultado = "O computador ganhou!"
   }

   alert(`
      Usuário - Cartas: ${textoUsuario} - Pontuação: ${pontosUsuario} \n
      Computador - Cartas: ${textoComputador} - Pontuação: ${pontosComputador} \n
      ${resultado}
    
  `)


} else {
   alert("O jogo acabou.")
}

