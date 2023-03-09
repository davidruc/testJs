// 1. Construir el algoritmo para un programa que ingrese tres notas de un alumno, si el promedio es menor o igual a 3.9 mostrar un mensaje "Estudie“, de lo contrario un mensaje que diga "becado"


let nombres = [];
let promedios = [];
let numeroDeEstudiantes = parseInt(prompt(`Ingrese el número de estudiantes que desea agregar.`));;
const mensaje = () => {
    let notas = 0;  
    let nombre = prompt(`Ingrese el nombre del alumno`);
    nombres.push(nombre);
    for(let i = 0; i < 3; i++){
        notas += parseInt(prompt(`Ingrese la nota`));
    };
    let promedio = notas / 3; 
    promedios.push(promedio);
};
// Esta función (mensaje()) se encarga de pedir los datos de los nombres de los estudiantes, almarcenar sus notas y calcular el promedio de cada uno
 
for(let y = 0; y < numeroDeEstudiantes; y++){
    mensaje()
    if (promedios[y] >= 0 && promedios[y] <= 3.9){
        console.log(`${nombres[y]} tu promedio fue de ${promedios[y]}. No fue lo suficientemente alto, te recomiendo estudiar`);
    }
    else if(promedios[y] > 3.9 && promedios[y] <= 5){
        console.log(`${nombres[y]} fuiste Becado por tu promedio de ${promedios[y]}, felicitaciones`);
    } 
    else{
        console.log(`Las notas ingresadas del estudiante ${nombres[y]} no están dentro del rango de 0 a 5.`);
    };
};
// En este ciclo for se busca mirar el resultado de cada estudiante y recompensarlo o recomendarle estudiar dependiendo del valor del promedio 

let posicion = promedios.indexOf(Math.max(...promedios));
console.log(`${nombres[posicion]} fue el estudiante que tuvo el mayor puntaje con ${promedios[posicion]}`);
//Esto último no tiene nada que ver con el ejercicio planteado, unicamente busca el valor de promedio máximo del array encuenta la posición y permite saber cuál fue el estudiante con el mejor promedio. 
