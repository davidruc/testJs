// 4. Construir el algoritmo que solicite el nombre y edad de 3 personas y determine el nombre de la persona con mayor edad.

export const maxAge = (nombre, edad)=>{
    if(isNaN(parseInt(edad))) return "El valor de edad debe ser un número entero";
    if(nombre.length != 3) return "Debes ingresar 3 registros de personas";
    if(edad.length != 3) return "Debes ingresar 3 registros de edades";
    const mayor = nombre[edad.indexOf(Math.max(...edad))];
    const años = Math.max(...edad);
    return { "mayor": mayor, "años": años };
}