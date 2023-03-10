/* 10. Desarrolle un programa cíclico que capture un datonumérico cada vez, y los vaya acumulando. El programa sedetiene cuando el usuario digita un cero. El programa debe mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR VALOR Y MENOR VALOR. */

let numero = [];
let i = 1;
while(i != 0){
    valor = parseFloat(prompt(`Ingrese un número (para dejar de ingresar valores ingrese 0)` ));
    if(valor == 0){
        i = 0;
        continue
    };
    numero.unshift(valor);
}
console.log(`Estos son todos los valores que ingresaste: ${numero}`);
let sumatoria = numero.reduce(function(a, b){ return a + b; })
console.log(`La suma de todos los datos es ${sumatoria}`);
let elementos = [...numero].length
console.log(`Haz ingresado ${elementos} valores`);
console.log(`El promedio de datos fue ${sumatoria/elementos}`);
console.log(`El valor máximo fue ${Math.max(...numero)}`);
console.log(`El valor mínimo fue ${Math.min(...numero)}`);