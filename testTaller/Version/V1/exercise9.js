
/* 
let nombre = [];
let marcas = [];

do{
    nombre.unshift(prompt(`Ingrese el nombre de la atleta: `));
    marcas.unshift(parseFloat(prompt(`Ingrese la marca en metros`)));
}
while(confirm(`¿Deseas agregar otra deportista?`)); */
/* 9. N atletas han pasado a finales en salto triple en los juegos olímpicos femenino de 2022. Diseñe un programa que pida por teclado los nombres de cada atleta finalista y a su vez, sus marcas del salto en metros. Informar el nombre de la atleta campeona que se quede con la medalla de oro y si rompió récord, reportar el pago que será de 500 millones. El récord esta en 15,50 metros. */

export const solution = (nombre, marcas)=>{
    let marcaMax = Math.max(...marcas)
    let posicionMax = marcas.indexOf(marcaMax);
    const result = {
        marca_maxima: marcaMax,
        atleta: nombre[posicionMax],
        message: `${nombre[posicionMax]} fue la atleta con la mejor marca (Marca: ${marcaMax} m).`
    }
    if(nombre.length === 0 && marcas.length === 0) return "la competencia no ha iniciado, no se encontraron registros."
    if(nombre[posicionMax] === undefined) return "hubo en problema en las mediciones, no se encontró una deportista asignada al record";
    if(marcaMax === 0) return "La competencia no se llevó a cabo"
    if(marcaMax <= 15.5) return result;
    return {...result, congratulations: `Además ${nombre[posicionMax]} rompió el anterior record (15.50 metros) y recibirá un pago de 500 millones`}
    
}


