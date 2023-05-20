

const infoComic = async() => {
    try {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character");

        //console.log(respuesta);      


    if (respuesta.status === 200) {
        const { results } = await respuesta.json();

        let nombreC = '';
        let estado = '';
        let especies = '';
        const episodio = [];
        let id = '';
        let img = '';
        let creado = '';


        // iteración con el foreach
        results.forEach((informacion) =>  {
            nombreC = nombreC + `<div>${informacion.name}</div> <br>`;
            estado = estado + `<div>${informacion.status} </div> <br>`;
            especies = especies + `<div>${informacion.species} </div> <br>`;
            episodio.push(`<div>${informacion.episode.length}</div>`);
        });


         // iteración con un for in
         //for (let i in results) {
            // console.log(results[i].name);
            //nombreC = nombreC + results[i].name + '<br>';
            //estado = estado + results[i].status + '<br><br>';
            //especies = especies + results[i].species + '<br><br>';
            //episodios.push(results[i].episode.length);
        //}


        
        document.getElementById('titulo').innerHTML = nombreC;
        document.getElementById('estado').innerHTML = estado;
        document.getElementById(`episodio`).innerHTML = episodio.join('<br>');
        
        document.getElementById('especies').innerHTML = especies;
        //document.getElementById('imagen').innerHTML = img;
        //document.getElementById('creado').innerHTML = creado;
        
    
    } else if (respuesta.status === 401) {
        console.log('Llave errada');
    } else if (respuesta === 404) {
        console.log('Pelicula no encontrada');
    } else {
        console.log('Hubo un error que no tenemos registrado');
    }
    } catch (error) {
        console.log(error);        
    }
}

infoComic();

/**let animales = ["gato", "perro", "vaca"];

for (animal in animales){
    console.log(animal);
}*/