const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");

let seconds = 0;
let milliseconds = 0;
let interval;
let start = false;

function startTimer() {
  interval = setInterval(() => {
    if (!start) {
      milliseconds += 10

      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0
      }

      if (seconds === 10) {
        advertencia = "Acabou o tempo!"
      }

      secondsEl.textContent = seconds
      millisecondsEl.textContent = milliseconds
    }
  }, 10)
}
