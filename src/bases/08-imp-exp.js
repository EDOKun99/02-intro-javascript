// import {} from './data/Heroes'

// const getHeroesById = (id) =>{
//     return heroes.find(element => {
//         if(element.id === id){
//             return true;
//         }
//         else{
//             return false;
//         }

import heroes , {owners} from '../data/Heroes'

//exportacion individual default , {individual}console.log(owners)

export const getHeroesById = (id) => heroes.find(element => element.id === id)

//console.log(getHeroesById(2));

// console.log(getHeroesById(2));
// console.log(getHeroesById(3));
// console.log(getHeroesById(4));
// console.log(getHeroesById(5));
// console.log(getHeroesById(6));

export const getHeroesByOwner = (owner) => heroes.filter(element => element.owner === owner)

//console.log(getHeroesByOwner('Marvel'))

// export default getHeroesById;