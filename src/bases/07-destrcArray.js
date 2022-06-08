
const personajes = ['Vegeta','Goku','Trunks'];

const [, , p3] = personajes;


console.log(p3);


const retornarArray = () =>{
    return ['ABC',123];
}

const [numeros, letras] = retornarArray();

console.log(letras, numeros)


//Tarea
//1. el primer valor del arr se llamra nombre
//2. el segundo valor del arr se llamra setNombre

const useState = (valor) =>{
    return [valor, ()=>{console.log('Hola mundo')}]
}

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();
