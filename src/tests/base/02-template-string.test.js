import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en 02-template-string.js', ()=>{
    test('prueba en el metodo getSaludo',() =>{
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    })

    //getSaludo debe de retornar Hola Carlos! si no hay argumento nombre
    test('getSaludo retorna Hola Carlos! si no tiene argumentos', ()=>{
        const saludo = getSaludo();
        expect(saludo).toBe(`Hola ${'Carlos'}`);
    })
})