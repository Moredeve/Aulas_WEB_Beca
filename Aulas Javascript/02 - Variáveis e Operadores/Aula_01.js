function onOpen() {
    // Comentário de uma linha
    /* Comentário de várias linhas */

    // O que é uma Variável?     

    // Indentificação de algo
    // Objeto que o resultado varia
    // Guardar algo

    /* Variáveis são pedaços de memória
    onde se armazena dados que podem variar
    */

    /* Regras para nome de variáveis:
      - Não começar com números;
      - Não conter acentos;
      - Segunda palavra começar com letra maúiscula; 
     */
  
    // Números
    var n_01 = 1      // inteiros - number
    var n_02 = 2      // float - number
    var n_03 = 1/2    // float - number

    var string = "teste 01"               // string
    var objetos = {"chave":"valor"}       // object / dicionário 
    var vector = ["teste 01","Teste 02"]  // Arrays

    // bools --> Booleano --- 0 ou 1
    var x = true
    var y = false

    var nulo = null
    var indefinido = undefined

    // Diferenças entre Comparações 
    //Logger.log("A variável n_01 é do tipo number?\n".concat(typeof n_01 == 'number'))
    //Logger.log("A variável n_02 é do tipo number?\n".concat(typeof n_02 == 'number'))
    //Logger.log("A variável n_01 é igual e do mesmo tipo de x?\n".concat(typeof n_01 == x))
    //Logger.log("A variável n_02 é igual e do mesmo tipo de y?\n".concat(typeof n_02 == y))

    // = < Atribui valor

    // == < Compara Valor
    // === < Compara valor e tipo

    // Operadores Lógicos
    
    // Not --> !
    // Or  --> ||
    // And  --> &&

    // Operadores Relacionais

    // == < Compara Valor (É igual?)
    // === < Compara valor e tipo
    // !=  < Compara Valor (É diferente ?)
    // <   <  Menor Que
    // >   <  Maior Que
    // <=  <  Menor ou igual
    // >=  <  Maior ou igual    

    // Exemplo de usabilidade

    var numero = 30
    var numeroD = 0

    // Template string literals
    Logger.log(`É ${numero <= numeroD && numeroD + numero == 30} que o numero é menor ou igual a numeroD ou que numero + numeroD é igual a 30 \n`)
}


function numeroPrimo(numero){
  numero
  Logger.log(`O número ${numero} é primo`) 
  Logger.log(`O número ${numero} não é primo`) 

// - Usar conceitos que não foram vistos em aula
// - if, % etc
// - Números primos são aqueles divisíveis apenas por 1 e por eles mesmos

}
