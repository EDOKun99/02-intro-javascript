import { getHeroesById } from "./bases/08-imp-exp";


// const promesa = new Promise((res , err)=>{

//     setTimeout(() => {
//         //Tarea
//         //Importar
//         const heroe = getHeroesById(2);
//         //res(heroe);
//         err('no se pudo encontrar el heroe')
//     }, 1000);

// });

// promesa.then((heroe)=>{
//     console.log('erue',heroe)
// })
// .catch(err => console.warn(err));

const getHeroesByIdAsync = (id) =>{

    const promesa = new Promise((res , err)=>{

            setTimeout(() => {
                //Tarea
                //Importar
                const heroe = getHeroesById(id);
                if(heroe){

                   res(heroe);

                }else{
                    err('No se pudo encontrar al heroe')
                }
                
               
            }, 1000);
        
        });
    return promesa;

}

getHeroesByIdAsync(3)
.then( console.log)
.catch(console.warn)