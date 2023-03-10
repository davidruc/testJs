// 5. Construir el algoritmo que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario, informar el producto y la división del primero respecto al segundo.

let num1 = parseFloat(prompt(`Ingrese un número`));
let num2 = parseFloat(prompt(`Ingrese otro número`));

const operaciones = () =>{
    if (num1 > num2) return console.log(`Como ${num1} es mayor que ${num2}: Su suma es ${num1 + num2} y la diferencia ${num1 - num2}`);
    else console.log(`Como ${num1} es menor que ${num2}: El producto es ${num1*num2} y la división es ${num1/num2}`);
};
operaciones()