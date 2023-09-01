// 1. Construir el algoritmo para un programa que ingrese tres notas de un alumno, si el promedio es menor o igual a 3.9 mostrar un mensaje "Estudie“, de lo contrario un mensaje que diga "becado"

export const notas = (alumno, notas)=>{
    let mensaje = "Estudie";
    const promedio = parseFloat((notas.reduce((a, b) => parseFloat(a) + parseFloat(b)) / notas.length).toFixed(1));
    if(isNaN(promedio))return "Ingrese notas correctas"
    if(promedio >= 3.9) mensaje = "Becado";
    const result = {
        "nombre": alumno,
        "promedio": promedio,
        "mensaje": mensaje
    };
    return result;
}




