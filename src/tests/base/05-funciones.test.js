import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones',()=>{

    test('debe de retornar un objeto',()=>{

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect( user ).toEqual(userTest);
    })

    //getUsuarioActivo debe de retornar un objeto
    test('debe de retornar usuario activo', () => {
        const nombre = 'Maxi'
        const userActive = getUsuarioActivo(nombre);

        expect( userActive ).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
    
})