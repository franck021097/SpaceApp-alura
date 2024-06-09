const url = "https://api.nasa.gov/planetary/apod?api_key=qQQRCqpEpMWIAXC47shyoMVYV5oAtCL5LyBUThR9";

async function headerImage(){
    try{
        let headerImageAPI = await fetch(url);
        let respuestaAPI = await headerImageAPI.json();

        console.log(respuestaAPI);
        document.querySelector(".banner__image").src = respuestaAPI.url;
        listaImagenes();

    }
    catch(error){
        console.log(error);
    }
}

function listaImagenes (){
    fetch(url+"&count=1")
    .then( response => response.json())
    .then( datosImagenes => {
        console.log(datosImagenes);

        datosImagenes.forEach(element => {
            // console.log(element.url);

            const elementoHijo = `<li class="card">
            <img class="card__image" src="${element.url}" alt="imagen">
            <h3 class="card__title">${element.title}</h3>
            
        </li>`;

        document.querySelector("[data-ul]").innerHTML += elementoHijo;
        });
    })
    .catch(error => console.log(error))
} 

headerImage();