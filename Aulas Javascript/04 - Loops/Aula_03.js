// while
function func() {
  
  // executar ações enquanto alguma coisa acontece

  var number = 0

  // Enquanto numero for menor ou igual a 10, some um ao numero
  // Bem intuitivo 

  var lista = ["Gabriel","Paulo","Maicon"]

  // Muuuito utilizada
  while(number <=2){
    Logger.log(lista[number])
    number++;
  }

}

//for
  function func2() {

   var lista = ["Gabriel","Paulo","Maicon"]


  /* Para index inciando em 0, enquanto index for menor
   ou igual a 2, soma-se um ao index */

  // Forma "tradicional"
  for(let i = 0; i<=2; i++) {
    //Logger.log(lista[i])
  }

  // Forma Bem interessante de usar
  for (nome of lista){
    //Logger.log(nome)
  }

  //Mais intuitivo que a primeira e menos que a segunda 
  for (index in lista){
    //Logger.log(lista[index])
  }

  lista.forEach(function(e,i){
    Logger.log(e)
     Logger.log(i)
  })
  

}
