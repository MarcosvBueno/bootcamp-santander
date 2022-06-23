const btnIncrementar = document.getElementById('incrementar')
const span = document.getElementById('contador')
const btnDecrementar = document.getElementById('decrementar')

var contador = 0

span.innerHTML = contador

btnIncrementar.addEventListener('click', function incrementar() {
  contador = contador + 1
  span.innerHTML = contador
  if (contador >= 10) {
    btnIncrementar.removeEventListener('click', incrementar)
  }
  if (contador >= 0) {
    span.style.color = 'black'
  }
})

btnDecrementar.addEventListener('click', function decrementar() {
  contador = contador - 1
  span.innerHTML = contador
  if (contador < 0) {
    span.style.color = 'red'
  }
})
