//Desestructuracion
// Asignacion de desetructuracion

const persona = {
    nombre: 'Edwin',
    edad: 23,
    clave: 'zzz',
    //rango: 'soldado'
}

// const {nombre,edad,clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);
//se pueden establecer keys con valores con defecto como rango='capitan' 
//aunque arriba si esta tomara el valor que este dentro del objeto 
// const retornarPersona = ({nombre,edad,clave, rango='capitan'})=>{
//      console.log(nombre, edad, clave, rango)
// }

const useContext = ({nombre,edad,clave, rango='capitan'}) =>{
  return {
      nombreClave: clave,
      anios: edad,
      latlng: {
          lat: 14.3,
          lng: -12.434

      }
  }
}

const {nombreClave,anios, latlng} = useContext(persona);
const {lat,lng} = latlng;
console.log(nombreClave, anios);
console.log(lat,lng)



