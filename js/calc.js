function somar() {
  const primeiroNumero = document.getElementById('primeiroNumero')
  const segundoNumero = document.getElementById('segundoNumero')

  document.getElementById('resultado').value =
    Number(primeiroNumero.value) + Number(segundoNumero.value)

  primeiroNumero.value = ''
  segundoNumero.value = ''
}

function subtrair() {
  document.getElementById('resultado').value =
    Number(primeiroNumero.value) - Number(segundoNumero.value)
  primeiroNumero.value = ''
  segundoNumero.value = ''
}

function multiplicar() {
  document.getElementById('resultado').value =
    Number(primeiroNumero.value) * Number(segundoNumero.value)
  primeiroNumero.value = ''
  segundoNumero.value = ''
}

function dividir() {
  document.getElementById('resultado').value =
    Number(primeiroNumero.value) / Number(segundoNumero.value)
  primeiroNumero.value = ''
  segundoNumero.value = ''
}
