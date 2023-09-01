
import { factura } from "../../../Version/V1/exercise7";

describe("test del archivo exercise7.js", ()=>(
    test('La función evalua correctamente el total', ()=>{
        let app = factura( 5, 2, "arroz");
        expect(app).toBe("Debes pagar 10 por llevar 2 arroz.")
    }),
    test('La función detecta cuando no se envía un dato de producto', ()=>{
        let app = factura(5, 2);
        expect(app).toBe("no ingresaste el nombre del producto")
    }),
    test('La función evalua correctamente cuando se le envían 0 productos o un valor negativo', ()=>{
        let app = factura( 5, 0, "arroz");
        expect(app).toBe("no se puede generar un total ya que la cantidad de productos es 0")
    })
))