
import { maxAge } from "../../../Version/V1/exercise4";

describe("test del archivo exercise4.js", ()=>(
    test('La función retorna correctamente el nombre de la persona más vieja', ()=>{
        let app = maxAge(["pedro", "pepito", "david"], [23, 50, 22]);
        expect(app.mayor).toBe("pepito");
    }),
    test('La función retorna correctamente la edad de la persona más vieja', ()=>{
        let app = maxAge(["pedro", "pepito", "david"], [23, 50, 22]);
        expect(app.años).toBe(50);
    }),
    test('La función retorna un mensaje si no se ingresan exactamente 3 registros de nombres', ()=>{
        let app = maxAge(["pedro", "pepito"], [23, 50, 22]);
        expect(app).toBe("Debes ingresar 3 registros de personas");
    }),
    test('La función retorna un mensaje si no se ingresan exactamente 3 registros de nombres', ()=>{
        let app = maxAge(["pedro", "pepito", "david" ,"david"], [23, 50, 22]);
        expect(app).toBe("Debes ingresar 3 registros de personas");
    }),
    test('La función retorna un mensaje si no se ingresan exactamente 3 registros de edades', ()=>{
        let app = maxAge(["pedro", "pepito", "david"], [23, 50]);
        expect(app).toBe("Debes ingresar 3 registros de edades");
    }),
    test('La función retorna un mensaje si no se envían edades numericas', ()=>{
        let app = maxAge(["pedro", "pepito", "david"], ["cincuenta", 20, 21]);
        expect(app).toBe("El valor de edad debe ser un número entero");
    })
))