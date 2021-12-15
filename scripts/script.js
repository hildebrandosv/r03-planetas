//╔════════════════════════════════════════════════╗
//║             MAIN JAVASCRIPT SCRIPT             ║
//╚════════════════════════════════════════════════╝
// Importar el archivo de datos
//
// Functions import
//
// *** Constant definition ***
const tamagno = []
//
// *** Variables definition ***
let nombrePlanetas = Array('Tierra', 'Marte')
let distancia = [6, 3, '67']
//
// *********************************************
// ***           BEGIN MAIN MODULE           ***
// *********************************************
//
console.log(nombrePlanetas)
console.log(distancia)
console.log(tamagno)
console.log('Tipos de formas de recorrer un array')
console.log('1. Con ciclo while')
let i = 0
while (i <= nombrePlanetas.length - 1) {
   console.log(i + " --- " + nombrePlanetas[i])
   i += 1
}
console.log('2. Ciclo for')
for (let index = 0; index < nombrePlanetas.length; index++) {
   console.log(index + " --- " + nombrePlanetas[index])
}
console.log('3. Ciclo for In')
for (const key in nombrePlanetas) {
   console.log(nombrePlanetas[key])
}
console.log('4. Ciclo for Of')
for (const planeta of nombrePlanetas) {
   console.log(planeta)
}
console.log('Buscar distancia con ==')
distancia = [5, 3, '67']
for (const key in distancia) {
   if (distancia[key] ==  '5') {
      console.log('Se encontró')
   } else {
      console.log('No se encontró')
   }
}
console.log('Buscar distancia con operador estricto ===')
distancia = [5, 3, '67']
for (const key in distancia) {
   if (distancia[key] ===  '5') {
      console.log('Se encontró')
   } else {
      console.log('No se encontró')
   }
}
console.log('forEach')
nombrePlanetas.forEach((value, index, array) => {
   console.log(index + " --- " + value)
})
console.log('map: con salida directa a la consola')
nombrePlanetas.map((planetas, index) => {
   return(
   console.log(`El planeta ${planetas} tiene ${tamagno[index]}`)
   )
})
console.log('map: con salida primero a otro arreglo')
let resultadoMap= nombrePlanetas.map((planetas, index) => {
   return(`El planeta ${planetas} tiene ${tamagno[index]}`)
})
console.log(resultadoMap)



//
// *********************************************
// ***            END MAIN MODULE            ***
// *********************************************
//╔════════════════════════════════════════════════╗
//║             FUNCTION DEFINITION                ║
//╚════════════════════════════════════════════════╝
function al(aa) { alert("Aquí voy... ", aa); }
function cl(aa) { console.log("Aquí voy... ", aa); }
