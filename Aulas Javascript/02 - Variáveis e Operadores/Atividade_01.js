function ehPrimo(n){
    /* Pegar o numero e verificar se o resto é 0 caso:
     ele for divisivel APENAS por um e ele mesmo.
    */

    // Verifiquei todos os numero a partir de dois até o indice elevado
    // Ao quadrado ser menor ou igual ao numero.
    // Enquanto isso, soma-se um ao i 

    // i * i = i^2 é menor ou igual a n, que é o numero
    // Que desejamos saber se eh primo.

    for(let i = 2; i * i <= n; i++){
        if(n % i === 0){
            return false
        }
      Logger.log(i * i)
    }
    return n > 1
}

function onOpen2(){

}

