
// const getImagePromea = () =>{
//     const promesa = new Promise((res,err)=>{
//         res('https://hrgurhsfg.com')
//     })
//     return promesa
// }

// getImagePromea()

// const getImagePromesa = () => new Promise(res=>{res('https://youtube.com')})
// getImagePromesa().then( console.log )


const getImagenPersona = async ()=>{
  try {
    const apikey = 'yO5ZunrYZIB5No0tBTKo2sICnTHKoQUp';

    const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
 
    const {data} = await peticion.json();
 
    const {url} = data.images.downsized_medium;
 
    console.log(url);
    const img = document.createElement('img');
        img.src = url;
    
        document.body.append( img );
  } catch (error) {
      console.warn(error);
  }



}

getImagenPersona()


// const apikey = 'yO5ZunrYZIB5No0tBTKo2sICnTHKoQUp';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=yO5ZunrYZIB5No0tBTKo2sICnTHKoQUp`);


// peticion
// .then( resp => resp.json())
// .then(({data}) =>{
//     // console.log(data.images.downsized_medium.url);
//     const {url} = data.images.downsized_medium;
//     console.log(url);


//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append( img );
// })
// .catch(console.warn);


