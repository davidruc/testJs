
import { operaciones } from "../../../Version/V1/exercise5";

describe("test del archivo exercise5.js", ()=>(
    test('La función retorna la  suma correctamente cuando le primero es mayor que segundo', ()=>{
        let app = operaciones(2, 1);
        expect(app.suma).toBe(3);
    }),
    test('La función retorna la resta correctamente cuando le primero es mayor que segundo', ()=>{
        let app = operaciones(2, 1);
        expect(app.resta).toBe(1);
    }),
    test('La función retorna la multiplicacion correctamente cuando le primero es menor que segundo', ()=>{
        let app = operaciones(2, 10);
        expect(app.producto).toBe(20);
    }),
    test('La función retorna la división correctamente cuando le primero es menor que segundo', ()=>{
        let app = operaciones(2, 10);
        expect(app.division).toBe(0.2);
    }),
    test('funciona correctamente así se envíen los datos por medio de string', ()=>{
        let app = operaciones("2", 1);
        expect(app.suma).toBe(3);
    }),
    test('funciona correctamente así se envíen los datos por medio de string', ()=>{
        let app = operaciones("2", "1");
        expect(app.suma).toBe(3);
    }),
    test('si el primero es menor que el segundo y el segundo es 0 retorna infinito', ()=>{
        let app = operaciones(-10, 0);
        expect(app.division).toBe("infinito");
    })
))