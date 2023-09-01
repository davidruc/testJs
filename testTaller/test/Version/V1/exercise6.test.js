
import { definitivas } from "../../../Version/V1/exercise6";

describe("test del archivo exercise7.js", ()=>(
    test('La función retorna el nombre del mejor estudiante', ()=>{
        let app = definitivas(["camila", "david", "andres"], [4, 3, 5], ["F", "M", "M"]);
        expect(app.BestNote).toBe("andres")
    }),
    test('La función retorna el total de mujeres', ()=>{
        let app = definitivas(["camila", "david", "andres"], [4, 3, 5], ["F", "M", "M"]);
        expect(app.CountWomans).toBe(1)
    }),
    test('La función retorna el total de hombres', ()=>{
        let app = definitivas(["camila", "david", "andres"], [4, 3, 5], ["F", "M", "M"]);
        expect(app.CountMens).toBe(2)
    }),
    test('La función retorna el nombre del peor estudiante', ()=>{
        let app = definitivas(["camila", "david", "andres"], [4, 3, 5], ["F", "M", "M"]);
        expect(app.WorseNote).toBe("david")
    }),
    test('Si se envía algun genero con un formato incorrecto retorna un error', ()=>{
        let app = definitivas(["camila", "david", "andres"], [4, 3, 5], ["Female", "M", "Male"]);
        expect(app).toBe("Ingresaste un valor para generos incorrecto. Sólo puedes ingresar M o F")
    }),
    test('Si se envía algun usuario sin su respectivo genero retorna un error', ()=>{
        let app = definitivas(["camila", "david", "andres"], [4, 3, 5], ["F", "M"]);
        expect(app).toBe("Enviaste algún usuario sin sus respectivos datos requeridos, o hay algún dato sin un nombre relacionado.")
    }),
    test('Si se envía algun usuario sin su respectiva nota retorna un error', ()=>{
        let app = definitivas(["camila", "david", "andres"], [4, 3, 5], ["F", "M"]);
        expect(app).toBe("Enviaste algún usuario sin sus respectivos datos requeridos, o hay algún dato sin un nombre relacionado.")
    })
))