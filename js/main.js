

const infoComic = async() => {
    try {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character");

        console.log(respuesta);      


    if (respuesta.status === 200) {
        const datos = await respuesta.json();

        let nombreC = '';
        let estado = '';
        let especies = '';
        let episodio = '';
        let img = '';
        let creado = '';
        datos.results.forEach(informacion => {
            nombreC = nombreC + informacion.name + "<br><br>";
            estado = estado + informacion.status + "<br><br>";
            especies = especies + informacion.species + "<br><br>";
            episodio = episodio + informacion.id + " Cap" + "<br><br>";
            //img = img + informacion.image + "<br><br>";
            //creado = creado + informacion.created + "<br><br>";
            
        });
      
        document.getElementById('titulo').innerHTML = nombreC;
        document.getElementById('estado').innerHTML = estado;
        document.getElementById('especies').innerHTML = especies;
        document.getElementById('episodio').innerHTML = episodio;
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