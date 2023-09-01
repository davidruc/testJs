
import { omh } from "../../../Version/V1/exercise3";

describe("test del archivo exercise3.js", ()=>(
    test('La función retorna correctamente la operacion', ()=>{
        let app = omh(2, 4);
        expect(app).toBe(8);
    }),
    test('La función retorna correctamente la operacion así se envien en string los numeros', ()=>{
        let app = omh(2, "4");
        expect(app).toBe(8);
    }),
    test('La función retorna un mensaje de error si se envían datos no numericos', ()=>{
        let app = omh(2, "cinco");
        expect(app).toBe("Los valores ingresados no son numericos");
    }),
    test('La función retorna correctamente la operacion incluso cuando se manejan floats ', ()=>{
        let app = omh(2.2, 4);
        expect(app).toBe(8.8);
    })
))