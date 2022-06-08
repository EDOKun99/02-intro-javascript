//Objetos literales

const identidad = {
    nombre: 'Edwin',
    apellido: 'Lopez',
    edad: 23,
    direccion:{
        ciudad: 'new york',
        zip: 23234234,
        lat: 14.45345,
        lng: 34.43453,
    }
}

// console.table(identidad)

//clonar el objeto
const identidad2 = {
  ...identidad  
};

identidad2.nombre = 'Asly';


console.log(identidad)
console.log(identidad2)



