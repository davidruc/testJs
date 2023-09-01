// 5. Construir el algoritmo que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario, informar el producto y la división del primero respecto al segundo.


export const operaciones = (num1, num2) =>{
    if(isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) return "El programa solo recibe números";
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let division = 0;
    division = num1 / num2;
    if(num2 === 0) division = "infinito"
    let operaciones = {
        "suma": num1 + num2,
        "resta": num1 - num2,
        "producto": num1 * num2, 
        "division": division,
    }
    if (num1 > num2) return {"suma": operaciones.suma, "resta": operaciones.resta};
    return {"producto": operaciones.producto, "division": operaciones.division};
};
