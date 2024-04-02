var hr = 0
var min = 0
var seg = 0
var intervalo

function play() {
  intervalo = setInterval(contar, 100)
}
function pausar() {
  clearInterval(intervalo)
}
function stop() {
  clearInterval(intervalo)
  hr = 0
  min = 0
  seg = 0

  var hora = (window.document.querySelector("p.hora").innerHTML = "00")
  var minutos = (window.document.querySelector("p.min").innerHTML = "00")
  var segundos = (window.document.querySelector("p.seg").innerHTML = "00")
}

function contar() {
  seg++
  if (seg == 60) {
    seg = 0
    min++
    if (min == 60) {
      min = 0
      hr++
    }
  }

  var hora = (window.document.querySelector("p.hora").innerHTML = verificar(hr))
  var minutos = (window.document.querySelector("p.min").innerHTML =
    verificar(min))
  var segundos = (window.document.querySelector("p.seg").innerHTML =
    verificar(seg))
}

function verificar(numero) {
  if (numero < 10) {
    return "0" + numero
  } else {
    return numero
  }
}
