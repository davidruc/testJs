// 7. Programa que pida el ingreso del nombre y precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador en su factura.


export const factura = ( precio, cantidad, nombre)=>{
    let total = parseFloat(precio*cantidad);
    if(isNaN(total)) return "los datos ingresados para precio o cantidad no son validos";
    if(nombre == undefined) return "no ingresaste el nombre del producto";
    if(cantidad <= 0) return "no se puede generar un total ya que la cantidad de productos es 0"
    return `Debes pagar ${total} por llevar ${cantidad} ${nombre}.`
}