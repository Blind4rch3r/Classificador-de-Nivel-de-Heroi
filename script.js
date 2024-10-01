//Desafio classificador de nível de herói

const prompt = require("prompt-sync")({sigint: true})


let heroName = prompt("What is your name? ")
let heroExperience = parseInt(prompt("What is your XP amount? "))
let heroLevelName = ""


if (heroExperience <= 1000) {           // Se XP for menor do que 1.000 = Ferro
    heroLevelName = "Ferro"
} else if(heroExperience <= 2000){      // Se XP for entre 1.001 e 2.000 = Bronze
    heroLevelName = "Bronze"
} else if(heroExperience <= 5000){      // Se XP for entre 2.001 e 5.000 = Prata
    heroLevelName = "Prata"
} else if(heroExperience <= 7000){      // Se XP for entre 5.001 e 7.000 = Ouro
    heroLevelName = "Ouro"              
} else if(heroExperience <= 8000){      // Se XP for entre 7.001 e 8.000 = Platina
    heroLevelName = "Platina"
} else if(heroExperience <= 9000){      // Se XP for entre 8.001 e 9.000 = Ascendente
    heroLevelName = "Ascendente"
} else if(heroExperience <= 10000){     // Se XP for entre 9.001 e 10.000= Imortal
    heroLevelName = "Imortal"
} else {                                // Se XP for maior ou igual a 10.001 = Radiante
    heroLevelName = "Radiante"
}

console.log(`O Herói de nome ${heroName} está no nível de ${heroLevelName}`)







