// 7. Programa que pida el ingreso del nombre y precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador en su factura.

let facturatotal = 0;
do{
    let producto = prompt(`Ingrese el nombre del artículo`);
    let precio = parseFloat(prompt(`Ingrese el precio del artículo`));
    let cantidad = parseInt(prompt(`Ingrese la cantidad de artículos que desea llevar`));    
    let total = precio*cantidad;
    facturatotal += total;
    console.log(`Debes pagar ${total} por llevar ${cantidad} ${producto}.`);
}
while(confirm(`¿Deseas guardar otro artículo?`));
console.log(`Debes pagar ${facturatotal} en total.`);