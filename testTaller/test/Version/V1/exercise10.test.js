
import { sumatoria } from "../../../Version/V1/exercise10";

describe("test del archivo exercise10.js", ()=>(
    test('La funcion devuelve un objeto', ()=>{
        let app = sumatoria([2,5,2,5,2]);
        expect(app).toEqual({"maximo": 5, "minimo": 2, "promedio": 3.2, "sumatoria": 16, "total_elementos": 5})
    }),
    test('La funcion devuelve un objeto', ()=>{
        let app = sumatoria([0,0,0,0,0]);
        expect(app).toEqual({"maximo": 0, "minimo": 0, "promedio": 0, "sumatoria": 0, "total_elementos": 5})
    }),
    test('Si la funcion no tiene ningun parámetro devuelve un string', ()=>{
        let app = sumatoria([]);
        expect(typeof app).toBe("string")
    }) 
))