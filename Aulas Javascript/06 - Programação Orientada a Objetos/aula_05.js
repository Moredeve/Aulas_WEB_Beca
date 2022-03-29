class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeASound() {
      return `${this.name} says: ${this.sound}`
    }
  }
  
  
  function myFunction() {
  
    const animais = {
      "Cavalo":"irururur",
      "Cachorro": "AUAU",
      "Gato": "Miau",
      "Papagaio": "Cacáu",
      "Porco": "Oinc",
      "Cabra": "Béééé",
      "Ovelha": "Méééé",
      "Boi": "Muuuu",
      "Pintinho": "piu",
      "Galinha": "Cocó"
    }
  
    var animaisChaves = Object.keys(animais)
    Logger.log(animaisChaves)
  
    var animaisValores = Object.values(animais)
    Logger.log(animaisValores)
  
    for (i in animaisChaves){
      let objeto = new Animal(animaisChaves[i],animaisValores[i])
      Logger.log(objeto.makeASound())
    }
  
  }
  