
import { calculador } from "../../../Version/V1/exercise2";

describe("test del archivo exercise2.js", ()=>(
    test('La función retorna correctamente el resultado', ()=>{
        let app = calculador(2);
        expect(app.par).toBe(true);
    }),
    test('La función retorna correctamente el resultado', ()=>{
        let app = calculador(2);
        expect(app.impar).toBe(false);
    }),
    test('La función retorna correctamente el resultado', ()=>{
        let app = calculador(2);
        expect(app.mayor).toBe(false);
    }),
    test('La función retorna correctamente el resultado', ()=>{
        let app = calculador(11);
        expect(app.par).toBe(false);
    }),
    test('La función retorna correctamente el resultado', ()=>{
        let app = calculador("11");
        expect(app.impar).toBe(true);
    }),
    test('La función retorna correctamente el resultado', ()=>{
        let app = calculador(11);
        expect(app.mayor).toBe(true);
    }),
    test('La función retorna un error si se ingresa un valor no numerico', ()=>{
        let app = calculador("once");
        expect(app).toBe("ingresa un dato correcto");
    })
))