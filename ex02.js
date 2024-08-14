function soma(a,b){
    return a + b
}

function joganosite(texto){
    document.getElementById("teste").innerHTML = texto
}

function primeira(texto){
    joganosite(texto)
}

function segunda(texto){
    joganosite(texto)
}


primeira(soma(3,4));
segunda(soma(2,3));

