const root = document.querySelector("button")
let jogadasX = []
let jogadasO = []
let jogadas = []
let playerOne
let playerTwo
let jogada = ""

// evento para começar o jogo: Clicando no botão 'Start'
document.getElementById('start').addEventListener('click', (ev) => {
  const button = ev.currentTarget
  playerOne = document.getElementById('input1').value
  playerTwo = document.getElementById('input2').value  
  button.innerText = 'COMEÇOU'
  document.getElementById('result').value = "É a vez de " + document.getElementById('input1').value
  button.classList.add('success')
  jogada = "X"  
})

document.querySelectorAll('.charKey').forEach( (charKeyBtn) => {
  charKeyBtn.addEventListener('click', function clicar()  {

    switch (jogada){

      case "X":
        charKeyBtn.removeEventListener('click', clicar)
        charKeyBtn.textContent = jogada
        jogadasX.push(charKeyBtn.dataset.value)
        jogadas.push(charKeyBtn.dataset.value)
        document.getElementById('result').value = "É a vez de " + document.getElementById('input2').value
        if (verificar() === true){jogada = ""}
        else {jogada = "O"}
        break

      case "O":
        charKeyBtn.removeEventListener('click', clicar)
        charKeyBtn.textContent = jogada
        jogadasO.push(charKeyBtn.dataset.value)
        jogadas.push(charKeyBtn.dataset.value)
        document.getElementById('result').value = "É a vez de " + document.getElementById('input1').value
        if (verificar() === true){jogada = ""}
        else {jogada = "X"}
        break

      case "":
        document.getElementById('result').value = "Clique nos botões Start ou Restart"  
        break

      default:      
      charKeyBtn.textContent = ""      
    }
  })
})

// Após cada rodada é verificado se ocorreu um empate ou vitória:
function verificar(){
 if ( jogadasX.includes("a1") && jogadasX.includes("a2") && jogadasX.includes("a3") ){return gameOver(1)}
 if ( jogadasO.includes("a1") && jogadasO.includes("a2") && jogadasO.includes("a3") ){return gameOver(2)}

 if ( jogadasX.includes("b1") && jogadasX.includes("b2") && jogadasX.includes("b3") ){return gameOver(1)}
 if ( jogadasO.includes("b1") && jogadasO.includes("b2") && jogadasO.includes("b3") ){return gameOver(2)}

 if ( jogadasX.includes("c1") && jogadasX.includes("c2") && jogadasX.includes("c3") ){return gameOver(1)}
 if ( jogadasO.includes("c1") && jogadasO.includes("c2") && jogadasO.includes("c3") ){return gameOver(2)}

 if ( jogadasX.includes("a1") && jogadasX.includes("b2") && jogadasX.includes("c3") ){return gameOver(1)}
 if ( jogadasO.includes("a1") && jogadasO.includes("b2") && jogadasO.includes("c3") ){return gameOver(2)}

 if ( jogadasX.includes("c1") && jogadasX.includes("b2") && jogadasX.includes("a3") ){return gameOver(1)}
 if ( jogadasO.includes("c1") && jogadasO.includes("b2") && jogadasO.includes("a3") ){return gameOver(2)}

 if ( jogadasX.includes("a1") && jogadasX.includes("b1") && jogadasX.includes("c1") ){return gameOver(1)}
 if ( jogadasO.includes("a1") && jogadasO.includes("b1") && jogadasO.includes("c1") ){return gameOver(2)}

 if ( jogadasX.includes("a2") && jogadasX.includes("b2") && jogadasX.includes("c2") ){return gameOver(1)}
 if ( jogadasO.includes("a2") && jogadasO.includes("b2") && jogadasO.includes("c2") ){return gameOver(2)}

 if ( jogadasX.includes("a3") && jogadasX.includes("b3") && jogadasX.includes("c3") ){return gameOver(1)}
 if ( jogadasO.includes("a3") && jogadasO.includes("b3") && jogadasO.includes("c3") ){return gameOver(2)}

 if (jogadas.includes("a1") && jogadas.includes("a2") && jogadas.includes("a3") &&
     jogadas.includes("b1") && jogadas.includes("b2") && jogadas.includes("b3") &&
     jogadas.includes("c1") && jogadas.includes("c2") && jogadas.includes("c3") ){empate()}
}

function gameOver(vencedor){
  x = vencedor
  if (vencedor === 1){
    document.getElementById('result').value = playerOne + " Venceu!!!"
    return true
  } else{
    document.getElementById('result').value = playerTwo + " Venceu!!!"
  } true
} 


function empate(){
  document.getElementById('result').value = "OCORREU UM EMPATE!"
}

