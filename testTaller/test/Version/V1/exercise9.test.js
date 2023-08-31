
import { solution } from "../../../Version/V1/exercise9";

describe("test del archivo exercise10.js", ()=>(
    test('La funcion devuelve el nombre de la atleta con la mejor marca', ()=>{
        let app = solution(["camila", "andrea", "katherine", "anny", "Konny"], [12, 15, 11, 13.2, 14.4]);
        expect(app.atleta).toBe("andrea")
    }),
    test('La funcion devuelve el nombre de primera atleta en conseguir la mejor marca', ()=>{
        let app = solution(["camila", "andrea", "katherine", "anny", "Konny"], [12, 15, 15, 13.2, 14.4]);
        expect(app.atleta).toBe("andrea")
    }),
    test('Si se envía un array de 0 en las marcas significa que la competencia no se llevó a cabo', ()=>{
        let app = solution(["camila", "andrea", "katherine", "anny", "Konny"], [0, 0, 0, 0, 0]);
        expect(app).toBe("La competencia no se llevó a cabo")
    }),
    test('Si se envía un array de 0 en las marcas significa que la competencia no se llevó a cabo', ()=>{
        let app = solution(["camila", "andrea", "katherine", "anny", "Konny"], [12, 17, 15, 13.2, 14.4]);
        expect(app.congratulations).toBe("Además andrea rompió el anterior record (15.50 metros) y recibirá un pago de 500 millones")
    }),
    test('Si se envía un array con dos atletas que rompieron el record toma a la mayor', ()=>{
        let app = solution(["camila", "andrea", "katherine", "anny", "Konny"], [12, 17, 15, 18, 14.4]);
        expect(app.congratulations).toBe("Además anny rompió el anterior record (15.50 metros) y recibirá un pago de 500 millones")
    }),
    test('Si se envía la marca mayor sin una deportista asignada retorna que hubo un error en los registros', ()=>{
        let app = solution(["camila", "andrea", "katherine", "anny"], [12, 17, 15, 18, 19]);
        expect(app).toBe("hubo en problema en las mediciones, no se encontró una deportista asignada al record")
    }),
    test('Si se envía un array vacio en las marcas significa que hubo un problema en las mediciones', ()=>{
        let app = solution(["camila", "andrea", "katherine", "anny", "Konny"], []);
        expect(app).toBe("hubo en problema en las mediciones, no se encontró una deportista asignada al record")
    }),
    test('Si se envía un array vacio en las marcas y atletas significa que la competencia no ha iniciado', ()=>{
        let app = solution([], []);
        expect(app).toBe("la competencia no ha iniciado, no se encontraron registros.")
    })
))