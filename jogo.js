const root = document.querySelector("button")
jogadasX = []
jogadasO = []

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
    if (button.innerText === 'START') {
      button.innerText = 'COMEÇOU'
      button.classList.add('success')
      jogada = "X"
    }
})

function verificar(){
if ( jogadasX.includes("a1") && jogadasX.includes("a2") && jogadasX.includes("a3"))
  {alert("X VENCEU")
  root.style.setProperty("--font-color", "#212529")
  console.log("fim")}
if ( jogadasO.includes("a1") && jogadasO.includes("a2") && jogadasO.includes("a3")){alert("O VENCEU")}

if ( jogadasX.includes("b1") && jogadasX.includes("b2") && jogadasX.includes("b3") ){alert("X VENCEU")}
if ( jogadasO.includes("b1") && jogadasO.includes("b2") && jogadasO.includes("b3") ){alert("O VENCEU")}

if ( jogadasX.includes("c1") && jogadasX.includes("c2") && jogadasX.includes("c3") ){alert("X VENCEU")}
if ( jogadasO.includes("c1") && jogadasO.includes("c2") && jogadasO.includes("c3") ){alert("O VENCEU")}

if ( jogadasX.includes("a1") && jogadasX.includes("b2") && jogadasX.includes("c3") ){alert("X VENCEU")}
if ( jogadasO.includes("a1") && jogadasO.includes("b2") && jogadasO.includes("c3") ){alert("O VENCEU")}

if ( jogadasX.includes("c1") && jogadasX.includes("b2") && jogadasX.includes("a3") ){alert("X VENCEU")}
if ( jogadasO.includes("c1") && jogadasO.includes("b2") && jogadasO.includes("a3") ){alert("O VENCEU")}

if ( jogadasX.includes("a1") && jogadasX.includes("b1") && jogadasX.includes("c1") ){alert("X VENCEU")}
if ( jogadasO.includes("a1") && jogadasO.includes("b1") && jogadasO.includes("c1") ){alert("O VENCEU")}

if ( jogadasX.includes("a2") && jogadasX.includes("b2") && jogadasX.includes("c2") ){alert("X VENCEU")}
if ( jogadasO.includes("a2") && jogadasO.includes("b2") && jogadasO.includes("c2") ){alert("O VENCEU")}

if ( jogadasX.includes("a3") && jogadasX.includes("b3") && jogadasX.includes("c3") ){alert("X VENCEU")}
if ( jogadasO.includes("a3") && jogadasO.includes("b3") && jogadasO.includes("c3") ){alert("O VENCEU")}
}
