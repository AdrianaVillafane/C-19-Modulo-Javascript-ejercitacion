//- Declarar variables con datos de un usuario (user, age, email)
//- Mostrar estos datos por consola
//- Mostrar el tipo de dato de cada variable por consola

let userName="Cata"
let age= 18
let email= "cata@gmail.com"

console.log (userName)
console.log(typeof(userName))

console.log (age)
console.log(typeof(age))

console.log (email)
console.log (typeof(email))

//### Ejercicio 2:

//- Pedir al usuario sus datos personales (nombre, edad, pais, profesion)
//- Mostrar esos datos por consola usando concatenacion
//- Mostrar por consola la edad + 10

let nameUser = prompt("Ingrese su nombre:")
let ageUser =Number( prompt("Ingrese su edad:"))
let country = prompt("Ingrese su pais:")
let profession = prompt("Ingrese su profesion:")

console.log(`${nameUser} ${ageUser} ${country} ${profession}`)
console.log(ageUser+10)

//### Ejercicio 3:

//- Tomar las variables del ejercicio 1 y mostrar un texto por consola, por el documento y por un alert (hagan de a uno por vez, comentando y probando) y utilizar template literals.
//Recordar: document.write() y alert()


console.log(userName)
document.write(`Su nombre de usuario es: ${userName}`)
alert(`Su nombre de usuario es: ${userName}`)

console.log(age)
document.write(`Su edad es de: ${age}`)
alert(`Su edad es de: ${age}`)

console.log(email)
document.write(`Su e-mail es: ${email}`)
alert(`Su e-mail es: ${email}`)

//### Ejercicio 4:
//- Pedir al usuario dos numeros y mostrar por el documento los resultados de cada calculo aritmetico.
//Ejemplo:
//El resultado de la suma es: ${resultado}

let num1= Number(prompt('Ingrese un numero:'))
let num2= Number(prompt('Ingrese otro numero:'))

const resultSuma = num1 + num2
document.write(`El resultado de la suma es: ${resultSuma}`)

const resultResta = num1 - num2
document.write(`El resultado de la resta es: ${resultResta}`)

const resultMultiplicacion = num1 * num2
document.write(`El resultado de la multiplicacion es: ${resultMultiplicacion}`)

const resultDivision = num1 / num2
document.write(`El resultado de la division es: ${resultDivision}`)

//### Bonus:
//- A lo que hiciste en el ejercicio 4, sumale un tercer numero a cada calculo. Mostrar por consola y analizar que paso en cada caso.
//Obtuviste los resultados esperados?

let num3= Number(prompt(`Ingrese otro numero:`))

const suma= num1 + num2 + num3
document.write(`El resultado de la suma es: ${suma}`)

const resta =num1 - num2 - num3
document.write(`El resultado de la resta es: ${resta}`)

const multiplicacion = num1 * num2 * num3
document.write(`Elresultado de la multiplicacion es: ${multiplicacion}`)

const division = num1 / num2 / num3
document.write(`El resultado de la division es: ${division}`)



