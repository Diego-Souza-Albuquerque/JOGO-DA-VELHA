const root = document.querySelector("button")
let jogadasX = []
let jogadasO = []
let jogadas = []
let playerOne
let playerTwo


// evento para começar o jogo: Clicando no botão 'Start'
document.getElementById('start').addEventListener('click', (ev) => {
  const button = ev.currentTarget
  playerOne = document.getElementById('input1').value
  playerTwo = document.getElementById('input2').value
  console.log(button)
  if (button.innerText === 'START') {
    button.innerText = 'COMEÇOU'
    document.getElementById('result').value = "É a vez de " + document.getElementById('input1').value
    button.classList.add('success')
    jogada = "X"
  }
})


document.querySelectorAll('.charKey').forEach( (charKeyBtn) => {
    charKeyBtn.addEventListener('click', function clicar()  {      
     charKeyBtn.textContent = jogada
     charKeyBtn.removeEventListener('click', clicar)

      if (jogada === "X"){
        jogadasX.push(charKeyBtn.dataset.value)
        jogadas.push(charKeyBtn.dataset.value)
        document.getElementById('result').value = "É a vez de " + document.getElementById('input2').value
        verificar()
        jogada = "O"
        
      } else{
        jogadasO.push(charKeyBtn.dataset.value)
        jogadas.push(charKeyBtn.dataset.value)
        document.getElementById('result').value = "É a vez de " + document.getElementById('input1').value
        console.log("Jogadas O: " + jogadasO)
        verificar()
        jogada = "X"
      }
    })
})

// Após cada rodada é verificado se ocorreu um empate ou vitória:
function verificar(){
 if ( jogadasX.includes("a1") && jogadasX.includes("a2") && jogadasX.includes("a3")){gameOver(1)}
 if ( jogadasO.includes("a1") && jogadasO.includes("a2") && jogadasO.includes("a3")){gameOver(2)}

 if ( jogadasX.includes("b1") && jogadasX.includes("b2") && jogadasX.includes("b3") ){gameOver(1)}
 if ( jogadasO.includes("b1") && jogadasO.includes("b2") && jogadasO.includes("b3") ){gameOver(2)}

 if ( jogadasX.includes("c1") && jogadasX.includes("c2") && jogadasX.includes("c3") ){gameOver(1)}
 if ( jogadasO.includes("c1") && jogadasO.includes("c2") && jogadasO.includes("c3") ){gameOver(2)}

 if ( jogadasX.includes("a1") && jogadasX.includes("b2") && jogadasX.includes("c3") ){gameOver(1)}
 if ( jogadasO.includes("a1") && jogadasO.includes("b2") && jogadasO.includes("c3") ){gameOver(2)}

 if ( jogadasX.includes("c1") && jogadasX.includes("b2") && jogadasX.includes("a3") ){gameOver(1)}
 if ( jogadasO.includes("c1") && jogadasO.includes("b2") && jogadasO.includes("a3") ){gameOver(2)}

 if ( jogadasX.includes("a1") && jogadasX.includes("b1") && jogadasX.includes("c1") ){gameOver(1)}
 if ( jogadasO.includes("a1") && jogadasO.includes("b1") && jogadasO.includes("c1") ){gameOver(2)}

 if ( jogadasX.includes("a2") && jogadasX.includes("b2") && jogadasX.includes("c2") ){gameOver(1)}
 if ( jogadasO.includes("a2") && jogadasO.includes("b2") && jogadasO.includes("c2") ){gameOver(2)}

 if ( jogadasX.includes("a3") && jogadasX.includes("b3") && jogadasX.includes("c3") ){gameOver(1)}
 if ( jogadasO.includes("a3") && jogadasO.includes("b3") && jogadasO.includes("c3") ){gameOver(2)}

 if (jogadas.includes("a1") && jogadas.includes("a2") && jogadas.includes("a3") &&
     jogadas.includes("b1") && jogadas.includes("b2") && jogadas.includes("b3") &&
     jogadas.includes("c1") && jogadas.includes("c2") && jogadas.includes("c3") ){empate()}
}

function gameOver(vencedor){
  x = vencedor
  if (vencedor === 1){
    document.getElementById('result').value = playerOne + " Venceu!!!"  
  } else{
    document.getElementById('result').value = playerTwo + " Venceu!!!"  
  }
}

function empate(){
    document.getElementById('result').value = "OCORREU UM EMPATE!" }