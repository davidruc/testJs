
import { perimetroCuadrado, rectanguloArea } from "../../../Version/V1/exercise8";

describe("test del archivo exercise8.js", ()=>(
    test('La función evalua correctamente el perímetro', ()=>{
        let app = perimetroCuadrado(5);
        expect(app).toBe(20)
    }),
    test('La función retorna un mensaje cuando no se envía un número', ()=>{
        let app = perimetroCuadrado("cinco");
        expect(app).toBe("El valor ingresado no es válido")
    }),
    test('La función retorna la operación así esté enviando un string', ()=>{
        let app = perimetroCuadrado("5");
        expect(app).toBe(20)
    }),
    test('La función evalua correctamente el area', ()=>{
        let app = rectanguloArea(5, 3);
        expect(app).toBe(15)
    }),
    test('La función retorna un mensaje cuando no se envía un número', ()=>{
        let app = rectanguloArea("cinco", 3);
        expect(app).toBe("El valor ingresado no es válido")
    }),
    test('La función retorna la operación así esté enviando un string', ()=>{
        let app = rectanguloArea("5", "3");
        expect(app).toBe(15)
    }),
    test('si solo se envía un dato regresa que el valor no es valido', ()=>{
        let app = rectanguloArea("0");
        expect(app).toBe("El valor ingresado no es válido")
    })
))