// 4. Construir el algoritmo que solicite el nombre y edad de 3 personas y determine el nombre de la persona con mayor edad.

let nombres = [];
let edades = [];

for(i = 0; i < 3; i++ ){
    let nombre = prompt(`Ingrese el nombre: `);
    let edad = parseInt(prompt(`Ingrese la edad`));
    nombres.push(nombre);
    edades.push(edad);
};
// Este ciclo for se encarga de solicitar los 3 valores de edad de las personas y de almacenar su edad

console.log(nombres);
console.log(edades);

let posicionMax = edades.indexOf(Math.max(...edades));
console.log(`${nombres[posicionMax]} es la persona mayor (Tiene ${edades[posicionMax]} años).`);
// posicionMax me retorna el valor de la edad mayor, y indexOf un entero con la posición. Como el nombre y la edad tienen la misma posición puedo usar este valor para encontrar el nombre de la persona con la edad mayor. Sé que esto se puede solucionar con objetos (creo) pero aún no veo ese tema.