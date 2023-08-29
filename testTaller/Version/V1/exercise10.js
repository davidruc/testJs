/* 10. Desarrolle un programa cíclico que capture un datonumérico cada vez, y los vaya acumulando. El programa sedetiene cuando el usuario digita un cero. El programa debe mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR VALOR Y MENOR VALOR. */

/* let numero = [];
let i = 1;
while(i != 0){
    valor = parseFloat(prompt(`Ingrese un número (para dejar de ingresar valores ingrese 0)` ));
    if(valor == 0){
        i = 0;
        continue
    };
    numero.unshift(valor);
} */

export const sumatoria = (numero) =>{
    if(numero.length === 0) {
        let sumatoria = "ningun elemento enviado";
        return sumatoria
    }
    let sumatoria = numero.reduce(function(a, b){ return a + b; });
    let elementos = [...numero].length
    if(sumatoria == 0 && elementos == 0){
        let promedio = 0
        return promedio
    } 
    let promedio  = sumatoria/elementos
    let maximo = Math.max(...numero)
    let minimo = Math.min(...numero)
    const result = {
        "sumatoria": sumatoria,
        "total_elementos": elementos,
        "promedio": promedio,
        "maximo": maximo,
        "minimo": minimo
    }
    return result;
}
