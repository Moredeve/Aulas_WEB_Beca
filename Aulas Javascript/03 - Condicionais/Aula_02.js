function onOpen() {
  // Condição IF = SE

  // Lista
  // Listas começam com o index 0 
  // [0,1,2,3,4,...]
  var paises = ["Brasil","EUA"]
  
  //Logger.log(paises[2])

  var idade_gabriel = 15

  for(pais in paises){
    if (pais == 0){
      // Vericando maioridade com condicional SE - IF
      // Se idade do gabriel for maior ou igual a 18 anos,
      if(idade_gabriel >= 18){
        // Irei printar na tela isso
        Logger.log("Gabriel é maior de idade no Brasil")
      }
      // Senão,
      else{
        Logger.log("Gabriel é menor de idade no Brasil")
      }
    }
    else{
      if(idade_gabriel >= 21){
        // Irei printar na tela isso
        Logger.log("Gabriel é maior de idade Nos EUA")
      }
      // Senão,
      else{
        Logger.log("Gabriel é menor de idade Nos EUA")
      }
    }
  }

}

function func2(){

  // Lista de especies
  // Listas - index [0,1,2,3]
  var especies = ["Macaco","Zebra","Cachorro","Humano"]
  
  // variável booleana 
  var ehBipede = false

  // Quero saber se a especie é bipede ou não

  for(index in especies) {
    // nomeLista[index] <-- os valores no index referenciado 
    especie = especies[index]

    // Caso especie for humano e macaco, ehBipede será true
    // Caso especie for Zebra e Cachorro,ehBipede será false
    
    switch(especie){
      case "Macaco":
      case "Humano":
        ehBipede = true
        Logger.log(especie)
        Logger.log(ehBipede)
        break
      case "Zebra":
      case "Cachorro":
        ehBipede = false
        Logger.log(especie)
        Logger.log(ehBipede)
        break
    }
  }

}

function func3(){
  var lista_meses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul",
  "Ago","Set","Out","Nov","Dez"]
  var numero_mes = 0
  var lista_emails = ["joao@moredeve.com","pedrinho@moredeve.com","gabriel@moredeve.com"]
  var email = "" 

  for (index in lista_meses){
    var mes = lista_meses[index]
    
    switch(mes){
      case "Jan":
        numero_mes = 1
        email = lista_emails[1]
        Logger.log(numero_mes + " " + email)
        break
      
      case "Fev":
        numero_mes = 2
        email = lista_emails[0]
        Logger.log(numero_mes + " " + email)
        break

      
      case "Mar":
        numero_mes = 3
        email = lista_emails[1]
        Logger.log(numero_mes + " " + email)
        break
      
      case "Abr": 
        numero_mes = 4
        email = lista_emails[0]
        Logger.log(numero_mes + " " + email)
        break

      case "Mai":
        numero_mes = 5
        email = lista_emails[0]
        Logger.log(numero_mes + " " + email)
        break

      case "Jun":
        numero_mes = 6
        email = lista_emails[1]
        Logger.log(numero_mes + " " + email)
        break

      case "Jul":
        numero_mes = 7
        email = lista_emails[0]
        Logger.log(numero_mes + " " + email)
        break

      case "Ago":
        numero_mes = 8
        email = lista_emails[0]
        Logger.log(numero_mes + " " + email)
        break

      case "Set":
        numero_mes = 9
        email = lista_emails[0]
        Logger.log(numero_mes + " " + email)
        break

      case "Out":
        numero_mes = 10
        email = lista_emails[0]
        Logger.log(numero_mes + " " + email)
        break

      case "Nov":
        numero_mes = 11
        email = lista_emails[0]
        Logger.log(numero_mes + " " + email)
        break

      case "Dez":
        numero_mes = 12
        email = lista_emails[2]
        Logger.log(numero_mes + " " + email)
        break

    }
  }

}
