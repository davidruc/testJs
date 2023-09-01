// 3. Construir el algoritmo para determinar el voltaje de un circuito a partir de la resistencia y la intensidad de corriente.

export const omh = (r, i)=>{
    if(isNaN(parseFloat(r)) || isNaN(parseFloat(i))) return "Los valores ingresados no son numericos";
    const voltaje = parseFloat(r)*parseFloat(i);
    return voltaje;
};