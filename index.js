
//variáveis do jogo
const playerOne = document.getElementById('input1').value
const playerTwo = document.getElementById('input2').value

let jogadasX = []
let jogadasO = []
let jogadas = []
let jogada = ""
let placar = [0, 0]
let firstplay = ""

//variáveis para o cronometro
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
let seconds = 5;
let milliseconds = 0;
let interval;
let start = false;

// evento para começar o jogo pela primeira vez clicando no botão 'Start'
document.getElementById('start').addEventListener('click', (ev) => {
  const button = ev.currentTarget

  if (button.innerText === 'START') {
    jogar()
    button.innerText = 'RESTART'
    document.getElementById('result').value = "É a vez de " + document.getElementById('input1').value
    button.classList.add('success')
    jogada = "X"
    firstplay = jogada

  } else {
    clearKeys()

    if (firstplay === "X") {
      firstplay = "O"
      jogadasX = []
      jogadasO = []
      jogadas = []
      jogada = "O"
      document.getElementById('result').value = "É a vez de " + document.getElementById('input2').value
      jogar()

    } else {
      firstplay = "O"
      jogadasX = []
      jogadasO = []
      jogadas = []
      jogada = "O"
      document.getElementById('result').value = "É a vez de " + document.getElementById('input1').value
      jogar()
    }
  }
})

//evento de clicar em cada campo para realizar as jogadas
function jogar() {
  document.querySelectorAll('.charKey').forEach((keyBtn) => {
    keyBtn.addEventListener('click', function clicar() {
      seconds = 5;
      milliseconds = 0;
      stopTimer(interval);
      startTimer();

      switch (jogada) {

        case "X":
          keyBtn.removeEventListener('click', clicar)
          keyBtn.textContent = jogada
          jogadasX.push(keyBtn.dataset.value)
          jogadas.push(keyBtn.dataset.value)
          document.getElementById('result').value = "É a vez de " + document.getElementById('input2').value
          if (verificar() === true) { jogada = "" }
          else { jogada = "O" }
          break

        case "O":
          keyBtn.removeEventListener('click', clicar)
          keyBtn.textContent = jogada
          jogadasO.push(keyBtn.dataset.value)
          jogadas.push(keyBtn.dataset.value)
          document.getElementById('result').value = "É a vez de " + document.getElementById('input1').value
          if (verificar() === true) { jogada = "" }
          else { jogada = "X" }
          break

        case "":
          document.getElementById('result').value = "Clique no botão Start"
          break

        default:
          keyBtn.textContent = ""

      }
    })
  })
}

// Após cada rodada é verificado se ocorreu um empate ou vitória:
function verificar() {
  let plays = []
  if (jogadasX.includes("a1") && jogadasX.includes("a2") && jogadasX.includes("a3")) {
    plays = ["a1", "a2", "a3"]
    return gameOver(1, plays)
  }

  if (jogadasO.includes("a1") && jogadasO.includes("a2") && jogadasO.includes("a3")) {
    plays = ["a1", "a2", "a3"]
    return gameOver(2, plays)
  }

  if (jogadasX.includes("b1") && jogadasX.includes("b2") && jogadasX.includes("b3")) {
    plays = ["b1", "b2", "b3"]
    return gameOver(1, plays)
  }

  if (jogadasO.includes("b1") && jogadasO.includes("b2") && jogadasO.includes("b3")) {
    plays = ["b1", "b2", "b3"]
    return gameOver(2, plays)
  }

  if (jogadasX.includes("c1") && jogadasX.includes("c2") && jogadasX.includes("c3")) {
    plays = ["c1", "c2", "c3"]
    return gameOver(1, plays)
  }

  if (jogadasO.includes("c1") && jogadasO.includes("c2") && jogadasO.includes("c3")) {
    plays = ["c1", "c2", "c3"]
    return gameOver(2, plays)
  }

  if (jogadasX.includes("a1") && jogadasX.includes("b2") && jogadasX.includes("c3")) {
    plays = ["a1", "b2", "c3"]
    return gameOver(1, plays)
  }

  if (jogadasO.includes("a1") && jogadasO.includes("b2") && jogadasO.includes("c3")) {
    plays = ["a1", "b2", "c3"]
    return gameOver(2, plays)
  }

  if (jogadasX.includes("c1") && jogadasX.includes("b2") && jogadasX.includes("a3")) {
    plays = ["c1", "b2", "a3"]
    return gameOver(1, plays)
  }

  if (jogadasO.includes("c1") && jogadasO.includes("b2") && jogadasO.includes("a3")) {
    plays = ["c1", "b2", "a3"]
    return gameOver(2, plays)
  }

  if (jogadasX.includes("a1") && jogadasX.includes("b1") && jogadasX.includes("c1")) {
    plays = ["a1", "b1", "c1"]
    return gameOver(1, plays)
  }

  if (jogadasO.includes("a1") && jogadasO.includes("b1") && jogadasO.includes("c1")) {
    plays = ["a1", "b1", "c1"]
    return gameOver(2, plays)
  }

  if (jogadasX.includes("a2") && jogadasX.includes("b2") && jogadasX.includes("c2")) {
    plays = ["a2", "b2", "c2"]
    return gameOver(1, plays)
  }

  if (jogadasO.includes("a2") && jogadasO.includes("b2") && jogadasO.includes("c2")) {
    plays = ["a2", "b2", "c2"]
    return gameOver(2, plays)
  }

  if (jogadasX.includes("a3") && jogadasX.includes("b3") && jogadasX.includes("c3")) {
    plays = ["a3", "b3", "c3"]
    return gameOver(1, plays)
  }

  if (jogadasO.includes("a3") && jogadasO.includes("b3") && jogadasO.includes("c3")) {
    plays = ["a3", "b3", "c3"]
    return gameOver(2, plays)
  }

  if (jogadas.includes("a1") && jogadas.includes("a2") && jogadas.includes("a3") &&
    jogadas.includes("b1") && jogadas.includes("b2") && jogadas.includes("b3") &&
    jogadas.includes("c1") && jogadas.includes("c2") && jogadas.includes("c3")) { empate() }
}

function gameOver(vencedor, plays) {

  if (vencedor === 1) {
    document.getElementById('result').value = playerOne + " Venceu!!!"
    document.querySelectorAll(`[data-value=${plays[0]}`).forEach((button) => {
      button.style.color = 'red'
    })
    document.querySelectorAll(`[data-value=${plays[1]}`).forEach((button) => {
      button.style.color = 'red'
    })
    document.querySelectorAll(`[data-value=${plays[2]}`).forEach((button) => {
      button.style.color = 'red'
    })
    placar = [+1,]
    document.getElementById('placar1').value = placar[0]

    return true

  } else {
    document.getElementById('result').value = playerTwo + " Venceu!!!"
    document.querySelectorAll(`[data-value=${plays[0]}`).forEach((button) => {
      button.style.color = 'red'
    })
    document.querySelectorAll(`[data-value=${plays[1]}`).forEach((button) => {
      button.style.color = 'red'
    })
    document.querySelectorAll(`[data-value=${plays[2]}`).forEach((button) => {
      button.style.color = 'red'
    })
    placar = [, +1]
    document.getElementById('placar2').value = placar[1]
  } true
}

function empate() {
  document.getElementById('result').value = "OCORREU UM EMPATE!"
}

export function startTimer() {
  document.getElementById("cronometro").style.display = "block";
  interval = setInterval(() => {
    if (!start) {
      milliseconds += 10

      if (milliseconds === 1000) {
        seconds--;
        milliseconds = 0
      }

      if (seconds === 0) {
        secondsEl.textContent = "Acabou!"
        stopTimer(interval)
      }

      secondsEl.textContent = seconds
      millisecondsEl.textContent = ""
    }
  }, 10)
}

export function stopTimer(interval) {
  clearInterval(interval)
}


function clearKeys() {
  document.querySelectorAll(".charKey").forEach(key => {
    key.innerText = "";
  });
  return console.log('limpou')
} 