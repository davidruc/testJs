// 2. Dado un número indicar si es par o impar y si es mayor de 10.

export const calculador = (num) => {
    if(isNaN(parseFloat(num))) return "ingresa un dato correcto";
    let pariedad = true;
    let mayor = false;
    if (num % 2 === 0) pariedad = true;
    if (num % 2 !== 0) pariedad = false;
    if (num > 10) mayor = true;
    const result = {
        "impar": !pariedad,
        "par": pariedad,
        "mayor": mayor,
    }
    return result;
};

