function suma(a, b) {
    return a + b;
  }
  function resta(a, b) {
    return a - b;
  }
  function multiplicacion(a, b) {
    return a * b;
  }
  function division(a, b) {
    return a / b;
  }
   
  //console.log(suma(5, 7));
  //console.log(resta(5, 7));
  //console.log(multiplicacion(5, 7));
  //console.log(division(5, 7));
   
  function main() {
    let num1 = parseInt(prompt("Digite primer numero: "));
    let num2 = parseInt(prompt("Digite segundo numero: "));
    let ope = prompt("Digite operador arigmetico: ");
   
    if (num1 == NaN || num2 == NaN){
      alert("Valores ingresados no son números")
      return;
    }
   
    console.log(calculadora(num1, num2, ope));
  }
   
  function calculadora(a, b, operador) {
    switch (operador) {
      case "+":
        return suma(a, b);
      case "-":
        return resta(a, b);
      case "*":
        return multiplicacion(a, b);
      case "/":
        return division(a, b);
      default:
        alert("Digite operador arigmetico valido (+,*,-,/)");
    }
  }
  main();