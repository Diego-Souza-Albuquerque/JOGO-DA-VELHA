
const root = document.querySelector("button")
let jogadasX = []
let jogadasO = []
let playerOne
let playerTwo

document.querySelectorAll('.charKey').forEach( (charKeyBtn) => {
    charKeyBtn.addEventListener('click', () => {
      
      charKeyBtn.textContent = jogada
      

      if (jogada === "X"){
        jogadasX.push(charKeyBtn.dataset.value)
        console.log("Jogadas X: " + jogadasX )
        verificar()
        jogada = "O"
      } else{
        jogadasO.push(charKeyBtn.dataset.value)
        console.log("Jogadas O: " + jogadasO )
        verificar()
        jogada = "X"
      }
    })
})


document.getElementById('copyToClipboard').addEventListener('click', (ev) => {
    const button = ev.currentTarget
    playerOne = document.getElementById('input1').value
    playerTwo = document.getElementById('input2').value
    console.log(playerOne)
    console.log(playerTwo)
    if (button.innerText === 'START') {
      button.innerText = 'COMEÇOU'
      button.classList.add('success')
      jogada = "X"
    }
})

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
}

function gameOver(vencedor){
  x = vencedor
  if (vencedor === 1){
    document.getElementById('result').value = playerOne + " Venceu!!!"  
  } else{
    document.getElementById('result').value = playerTwo + " Venceu!!!"  
  }
}