// 6. Construir el algoritmo en Javascript para un programa para cualquier cantidad de estudiantes que lea el nombre, el sexo y la nota definitiva y halle al estudiante con la mayor nota y al estudiante con la menor nota y cuantos eran hombres y cuantos mujeres.

let nombres = [];
let definitivas = [];
let hombres = 0;
let mujeres = 0;
let numeroDeEstudiantes = parseInt(prompt(`Ingrese el número de estudiantes que desea agregar.`));
for (let i = 0; i < numeroDeEstudiantes; i++){
    let nombre = prompt(`Ingrese el nombre del alumno`);
    nombres.unshift(nombre);
    let promedio = parseFloat(prompt(`Ingrese el promedio del alumno`)); 
    definitivas.unshift(promedio);
    let sexo = prompt(`Ingrese el sexo del alumno`); 
    if (sexo == `m` || sexo == `M`){
        hombres++;
    }
    else if (sexo == `F` || sexo == `f`){
        mujeres++;
    }
    else{
        console.log(`Ingrese un dato válido.`);
    };

}
// Esta función (mensaje()) se encarga de pedir los datos de los nombres de los estudiantes, almarcenar sus notas y sexos
let posicionMax = definitivas.indexOf(Math.max(...definitivas));
console.log(`${nombres[posicionMax]} fue el estudiante que tuvo el mayor puntaje con ${definitivas[posicionMax]}`);
let posicionMin = definitivas.indexOf(Math.min(...definitivas));
console.log(`${nombres[posicionMin]} fue el estudiante que tuvo el mayor puntaje con ${definitivas[posicionMin]}`);

const genero = (mujeres, hombres) => {
    if (mujeres > hombres) return console.log(`Hay ${mujeres} mujeres y sólo ${hombres} hombres. Por lo que hay más mujeres que hombres `);
    else if (mujeres < hombres) return console.log(`Hay ${hombres} hombres y sólo ${mujeres} mujeres. Por lo que hay más hombres que mujeres `);
    else console.log(`Hay la misma cantidad de hombres y mujeres (${mujeres})`);
};
genero(mujeres, hombres);
