function funcao(some){
    document.getElementById("teste").innerHTML = some;
}

let promessa = new Promise(function(deubom, deuruim){
    let x = 1;
    if(x ==0){
        deubom("bom")
    }else{
        deuruim("ruim")
    }
})

promessa.then(
    function(value) {funcao(value)},
    function(error) {funcao(error)}
)


