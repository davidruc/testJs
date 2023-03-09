// 1. Construir el algoritmo para un programa que ingrese tres notas de un alumno, si el promedio es menor o igual a 3.9 mostrar un mensaje "Estudie“, de lo contrario un mensaje que diga "becado"


let nombres = [];
let promedios = [];
const mensaje = () => {
    
    let notas = 0;  
    let nombre = prompt(`Ingrese el nombre del alumno`);
    nombres.push(nombre);
    for(let i = 0; i < 3; i++){
        notas += parseInt(prompt(`Ingrese la nota`));
        // console.log(notas);
    };
    let promedio = notas / 3; 
    promedios.push(promedio);
    console.log(promedio);
};

mensaje();
mensaje();
console.log(nombres);
let posicion = promedios.indexOf(Math.max(...promedios));


console.log(`${nombres[posicion]} fue el que tuvo el mayor puntaje con ${promedios[posicion]}`);
console.log(promedios);
