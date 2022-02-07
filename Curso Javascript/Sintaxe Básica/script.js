var num1;
var num2;
var resultado;

function calculadora() {
  const operacao = Number(
    prompt(
      "Informe uma opção: \n1 - soma\n2 - subtração\n3 - multiplicação\n4 - Divisão Real\n5 - Resto da Divisão\n6 - Potenciação"
    )
  );
  if (!operacao || operacao >= 7) {
    alert("Erro - opção Invalida");
    calculadora();
  } else {
    var num1 = Number(prompt("Informe o primeiro número:")); //O prompt retorna um valor como string
    var num2 = Number(prompt("Informe o segundo número:"));
    if(!num1 || !num2){
        alert("Erro - Parametros Inválidos");
        calculadora();
    }else{
        function soma(n1, n2) {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
          }
          function subtracao(n1, n2) {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
          }
          function multiplicacao(n1, n2) {
            resultado = n1 * n2;
            alert(`${n1} x ${n2} = ${resultado}`);
          }
          function divisaoReal(n1, n2) {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
          }
          function divisaoInteira(n1, n2) {
            resultado = n1 % n2;
            alert(`O resto da divisão entra ${n1} e ${n2} é igual à ${resultado}`);
          }
          function potenciacao(n1, n2) {
            resultado = n1 ** n2;
            alert(`${n1} elevado à ${n2} é igual a ${resultado}`);
          }
      
          switch (operacao) {
            case 1:
              soma(num1, num2);
              break;
            case 2:
              subtracao(num1, num2);
              break;
            case 3:
              multiplicacao(num1, num2);
              break;
            case 4:
              divisaoReal(num1, num2);
              break;
            case 5:
              divisaoInteira(num1, num2);
              break;
            case 6:
              potenciacao(num1, num2);
              break;
            default:
              break;
          }
      
          (confirm("Clique em 'OK' para um novo cálculo")) ? calculadora() : alert("Até mais")
          
    }
    
  }
}

calculadora();
