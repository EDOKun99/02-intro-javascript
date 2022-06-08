// Funciones en JS

 const saludar = (nombre)=> {
     return `Hola, ${nombre}`;
}
 const saludar2= (nombre)=> `Hola, ${nombre}`;

 const saludar3= ()=> `Hola Mundo`;


// saludar = 30;

// console.log(saludar('Goku'))

console.log(saludar('Vegeta'));
console.log(saludar2('Goku'));
console.log(saludar3());

// const getUser = () =>{
//     return {
//         uid: 'ajsjajs',
//         username: 'El_quelesabe'
//     }
// }
//envia un objeto implicito al colocar ({object})
const getUser = () =>({

        uid: 'ajsjajs',
        username: 'El_quelesabe'
    })

const user = getUser();
console.log(user)

//Tarea
//1. Transformen a una funcion de Flecha
//2. Tiene que retornar un objecto implicito
//3. Pruebas
// function getUsuarioActivo(nombre){
//     return{
//         uid: 'ABC567',
//         username: nombre
//     }
// };
 const getUsuarioActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre
    })

const UsuarioActivo = getUsuarioActivo('Edwin')
console.log(UsuarioActivo)