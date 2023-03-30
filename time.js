const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
let seconds = 10;
let milliseconds = 0;
let interval;
let start = false;

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