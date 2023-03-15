

document.querySelectorAll('.charKey').forEach( (charKeyBtn) => {
    charKeyBtn.addEventListener('click', () => {
        charKeyBtn.textContent = jogada
        const value = charKeyBtn.dataset.value

        if (jogada === "X"){
             jogada = "O"
        } else{
          jogada = "X"
        }}
    )
})


document.getElementById('copyToClipboard').addEventListener('click', (ev) => {
    const button = ev.currentTarget
    if (button.innerText === 'START') {
      button.innerText = 'COMEÇOU'
      button.classList.add('success')
      jogada = "X"
    }
})