// 2. Dado un número indicar si es par o impar y si es mayor de 10.

let numero = (prompt(`Ingrese un número`));
const parOImpar = () => {
    if (numero % 2 == 0) console.log(`Su número es par`);
    else console.log(`Su número es impar`);
    if (numero > 10) console.log(`y es mayor a 10`);
};
parOImpar();
