const conteiner=document.getElementById("conteiner");

async function data(){
    try {
        const responsive=await fetch("http://localhost:3000/tracks");
        console.log(responsive)
        const data=await responsive.json();
        
        console.log(data)
        return data;
        
    } catch (error) {
        console.log(error)
    }
}
async function nombre(){
    try {
        const lista=await data();
        for(const cancion of lista){
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");

            const identificador = document.createElement("p");
            identificador.textContent = `ID: ${cancion.identificador}`;

            const titulo = document.createElement("p");
            titulo.textContent = `Título: ${cancion.titulo}`;

            const duracion = document.createElement("p");
            duracion.textContent = `Duración: ${cancion.duracion} segundos`;

            const interprete = document.createElement("p");
            interprete.textContent = `Intérprete: ${cancion.interprete}`;

            tarjeta.appendChild(identificador);
            tarjeta.appendChild(titulo);
            tarjeta.appendChild(duracion);
            tarjeta.appendChild(interprete);

            conteiner.appendChild(tarjeta);
            
        }
        
    } catch (error) {
        titulo.textContent= "No se encontro ninguna cancion...";
    }
}
 nombre();