// 8. Programa que Ingrese por teclado:
/* a. el valor del lado de un cuadrado para mostrar por pantalla el perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del mismo */

let lado = parseFloat(prompt(`Ingrese el lado del cuadrado en cm`));
let perimetro = lado*4;
console.log(`El perimetro del cuadrado es de ${perimetro} cm`);

let base = parseFloat(prompt(`Ingrese la base del rectángulo en cm`));
let altura = parseFloat(prompt(`Ingrese la altura del rectángulo en cm`));
let area = base*altura;
console.log(`El área del rectángulo es de ${area} cm^2`);