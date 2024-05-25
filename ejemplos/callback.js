function dos () {
    console.log("dos")
}

function uno () {
    console.log("uno")
    setTimeout(dos,1000);
}

// setTimeout( () => {
//     uno()
// },1000);