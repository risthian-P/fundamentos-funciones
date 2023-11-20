// Comentarios

// Este es un comentario con el nombre del estudiante
//Cristhian Pañora

/* Este es un comentario
donde se especifica la carrera Esfot del estudiante */

// Variables
var NombreCliente = "Carlos"
let TipoTrabajo = "Técnico electrónico"
const Ruc = "0909123456001"
console.log(`El usuario ${NombreCliente} con número de RUC ${Ruc} con título en ${TipoTrabajo}`)

// String
let ProductoComprado = "Soldadura industrial"
let codUnico = 20230112095430
let medioPago = "en efectivo"
console.log(`El señor ${NombreCliente.toUpperCase()} a comprado ${ProductoComprado} y realizo su pago ${medioPago}`)

// Numeros
const poder_Personaje = "250"
let nivel_Personaje = 10
console.log(`El personaje actual esta en el nivel ${nivel_Personaje} con el poder de ataque ${poder_Personaje}`)
console.log("ataque magico es" ,`${Math.random()*20 + nivel_Personaje + +poder_Personaje}`)

// Booleanos
let personaje1atk = 152
let personaje2atk = 156
let personaje3atk = 132
    //de comparación
console.log(personaje1atk > personaje2atk)
console.log(personaje2atk > personaje3atk)
    // asgnacion de adicion
personaje3atk += 20
console.log(personaje3atk)
    // evaluacion de tipo de dato
console.log(personaje1atk === personaje3atk)
console.log(personaje2atk === personaje3atk)
    // operadores lógicos y contenido
console.log(personaje1atk != poder_Personaje)
console.log(personaje1atk != NombreCliente)

// Condicionales
let jugador1 = {
    nombre: "Lionel Messi",
    edad: 34,
    tieneLesion: false, 
    jugador: true
  }
  
let jugador2 = {
    nombre: "Cristiano Ronaldo",
    edad: 36,
    tieneLesion: true,
    jugador: true
}

    // simple
if (jugador1.jugador == true){
    console.log("Es un jugador")
}
    // doble
if (jugador1.edad < 30) {
    console.log(jugador1.nombre + " es un jugador joven.")
    } 
else {
    console.log(jugador1.nombre + " es un jugador experimentado.")
    }
    // anidada
    let nombre = jugador2.nombre.toUpperCase()
if (nombre === "CRISTIANO RONALDO") {
    console.log(jugador2.nombre + " juega profesionalmente")
    } else if (jugador2.nombre === "Messi") {
    console.log(jugador2.nombre + " es otro jugador")
    } else {
    console.log(jugador2.nombre + " no está actualmente en un equipo conocido.")
    }
    // multiple
if(jugador1.jugador === jugador2.jugador){
    if(jugador1){
        console.log(jugador1)
    }else if(jugador2){
        console.log(jugador2)
    } else {
        console.log(jugador1 , jugador2)
    }
}

// Bucles
let contador = 1
    // while
while (contador <= 3) {
  console.log("cambios de jugadores " + contador)
  contador++
}
    // for
let alimentos = ["Manzana", "Plátano", "Zanahoria", "Arroz", "Pescado"]
for (let i = 0; i < alimentos.length; i++) {
    console.log("Alimento: " + alimentos[i])
  }
    // do-while
let iterador = 0
do {
    console.log("Alimento: " + alimentos[iterador])
    iterador++
} while ( iterador < alimentos.length)

    //forEach
let marcasDeCarros = ["Toyota", "Ford", "Honda", "Chevrolet", "BMW"]
marcasDeCarros.forEach(function(marca) {
    console.log("Marca de carro: " + marca)
  })
    // for of
let calificaciones1 = [95, 80, 75, 92, 88]
for (let calificacion of calificaciones1) {
    console.log("Calificación del estudiante: " + calificacion)
  }
    // for in
let calificaciones = {
    estudiante1: 95,
    estudiante2: 80,
    estudiante3: 75,
    estudiante4: 92,
    estudiante5: 50
    }
for (let estudiante in calificaciones) {
    if (calificaciones.hasOwnProperty(estudiante)) {
        console.log("Calificación de " + estudiante + ": " + calificaciones[estudiante]);
    }
    }
    // map
let comidas = ["Pizza", "Ensalada", "Hamburguesa", "Sushi", "Pasta"]
let descripciones = comidas.map(function(comida) {
    return "Me encanta " + comida + "!";
    })
console.log(descripciones);