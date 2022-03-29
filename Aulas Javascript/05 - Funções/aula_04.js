/* 
  Função Tradicional:
  Os parâmetros de uma função são separados por vírgula
  O escopo da função será delimitado pelas chaves { } 
  function nomeFuncao(parametros){  
    Escopo
  }
 */

  function ehPar(number){
    if (number % 2 == 0){
      return true
    }
    return false
  }
  
  function onOpen() {
    Logger.log(ehPar(10005))
  
    /* 
      Operador ternário:
      Podemos utilizar o operador ternário quando encontramos apenas
      duas condições para nosso problema, falso ou verdadeiro. No caso, 
      ou o numero é par, ou não é.
  
      A utilização do operador ternário é:
      condição ? valor se for verdareiro : valor se for falso
    
    */
  
  
    // Declarar função como variável
    var ehPar2 = function(number){return number % 2 == 0 ? true : false}
    Logger.log(ehPar2(10002))
    
    // Arrow Functions
  
    // Necessita explicitar return
    const ehParArrow1 = (number) => {return number % 2 == 0 ? true : false}
    Logger.log(ehParArrow1(2))
  
    // Não necessita escrever return
    const multiplicaArrow2 = (number,number2) => number * number2
    Logger.log(multiplicaArrow2(2,2))
  
    // Se tiver apenas um parâmetro não necessita utilizar parenteses
    const ehParArrow3 = number => number % 2 == 0 ? true : false
    Logger.log(ehParArrow3(10005))
  
  }
  
  const calculadoraDivisao = (number1,number2) => {
    return number1/number2
  }
  
  const calculadoraMultiplicacao = (number1,number2) => {
    return number1 * number2
  }
  
  const calculadoraSubtracao = (number1,number2) => {
    return number1 - number2
  }
  
  const calculadoraAdicao = (number1,number2) => {
    return number1 + number2
  }
  
  
  
  function calculadora(){
    Logger.log(calculadoraDivisao(40,10))
    Logger.log(calculadoraSubtracao(40,10))
    Logger.log(calculadoraAdicao(40,10))
    Logger.log(calculadoraMultiplicacao(40,10))
  }
  