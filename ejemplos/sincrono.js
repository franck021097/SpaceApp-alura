 function cuatro () {
    console.log("cuatro")
}

function tres () {
    console.log("tres")
    setTimeout(cuatro,2000);
}

function dos () {
    console.log("dos")
    setTimeout(tres,2000);
}

function uno () {
    console.log("uno")
    setTimeout(dos,2000);
}

setTimeout(uno,2000);



