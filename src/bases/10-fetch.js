

const apikey = 'yO5ZunrYZIB5No0tBTKo2sICnTHKoQUp';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=yO5ZunrYZIB5No0tBTKo2sICnTHKoQUp`);


peticion
.then( resp => resp.json())
.then(({data}) =>{
    // console.log(data.images.downsized_medium.url);
    const {url} = data.images.downsized_medium;
    console.log(url);


    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );
})
.catch(console.warn);