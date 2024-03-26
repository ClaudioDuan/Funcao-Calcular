function somar(){
    var num1 = document.getElementById('tn1')
    var num2 = document.getElementById('tn2')
    var res = document.getElementById('res')
    var n1 = parseFloat(num1.value)
    var n2 = parseFloat(num2.value)
    var soma = n1 + n2
   res.innerHTML = ` A soma entre ${n1} + ${n2} = ${soma}`
   
  }

  function diminuir(){
    var num1 = document.getElementById('tn1')
    var num2 = document.getElementById('tn2')
    var res = document.getElementById('res')
    var n1 = parseFloat(num1.value)
    var n2 = parseFloat(num2.value)
    var diminuir = n1 - n2
   res.innerHTML = ` A Subtração entre ${n1} - ${n2} = ${diminuir}`
  }

  function multiplicar(){
    var num1 = document.getElementById('tn1')
    var num2 = document.getElementById('tn2')
    var res = document.getElementById('res')
    var n1 = parseFloat(num1.value)
    var n2 = parseFloat(num2.value)
    var multiplicar = n1 * n2
   res.innerHTML = ` A Multiplicação entre ${n1} x ${n2} = ${multiplicar}`
  }

  function dividir(){
    var num1 = document.getElementById('tn1')
    var num2 = document.getElementById('tn2')
    var res = document.getElementById('res')
    var n1 = parseFloat(num1.value)
    var n2 = parseFloat(num2.value)
    var dividir = n1 / n2
   res.innerHTML = ` A Divisão entre ${n1} / ${n2} = ${dividir}`
  }

  function limpar(){
    location.reload()
  }