
import { notas } from "../../../Version/V1/exercise1";

describe("test del archivo exercise1.js", ()=>(
    test('La función retorna correctamente el promedio', ()=>{
        let app = notas("Andrea", [3.5, 4.2, 5]);
        expect(app.promedio).toBe(4.2);
    }),
    test('La función retorna correctamente el mensaje', ()=>{
        let app = notas("Andrea", [3.5, 4.2, 5]);
        expect(app.mensaje).toBe("Becado");
    }),
    test('La función retorna correctamente el mensaje', ()=>{
        let app = notas("Andrea", [2.5, 1.2, 5]);
        expect(app.mensaje).toBe("Estudie");
    }),
    test('La función retorna correctamente el nombre', ()=>{
        let app = notas("Andrea", [3.5, 4.2, 5]);
        expect(app.nombre).toBe("Andrea");
    }),
    test('La función retorna un mensaje cuando no se ingresan correctament las notas', ()=>{
        let app = notas("Andrea", [3.5, "tre", 5]);
        expect(app).toBe("Ingrese notas correctas");
    }),
    test('La función retorna correctamente la función así se envíe como un string', ()=>{
        let app = notas("Andrea", [3.5, 4.2, "5"]);
        expect(app.promedio).toBe(4.2);
    })
))