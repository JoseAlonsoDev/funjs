fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((res) => {
        return (res.json())
            .then(data => {
                //console.log(data.results);
                data.results.forEach(element => {
                    //console.log(`Nombre del pokemon: ${element.name}`);
                });

            })
    })
    .catch(error => console.log(error));

//async await
const obtenerPokemones = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await res.json();
        const arrayNombres = data.results.filter(poke => poke.name === 'bulbasaur')
        console.log(arrayNombres);
        /*data.results.forEach(element => {
            console.log(`Nombre del pokemon: ${element.name}`);
        });*/
    } catch (error){
        console.log(error);
    }
}

obtenerPokemones();