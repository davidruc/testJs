// 6. Construir el algoritmo en Javascript para un programa para cualquier cantidad de estudiantes que lea el nombre, el sexo y la nota definitiva y halle al estudiante con la mayor nota y al estudiante con la menor nota y cuantos eran hombres y cuantos mujeres.

export const definitivas = (nombre, definitivas, genero)=>{
    if(genero.length != nombre.length || definitivas.length != nombre.length) return "Enviaste algún usuario sin sus respectivos datos requeridos, o hay algún dato sin un nombre relacionado.";
    const bestNote =  nombre[definitivas.indexOf(Math.max(...definitivas))];
    const worseNote = nombre[definitivas.indexOf(Math.min(...definitivas))];
    let mens = 0;
    let womans = 0;
    genero.map((val)=>{if(val === "M") { mens++ } else if(val === "F") { womans++ }})
    if(genero.length != (mens+womans)) return "Ingresaste un valor para generos incorrecto. Sólo puedes ingresar M o F"; 
  
    let result = {
        "BestNote": bestNote,
        "WorseNote": worseNote,
        "CountMens": mens,
        "CountWomans": womans,
    }
    return result;
}