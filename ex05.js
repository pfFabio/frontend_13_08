function display(texto){
    document.getElementById("teste").innerHTML = texto
}

function calculadora(a,b,funcao){
    let somou = a + b; 
    funcao(somou);
}

function helloworld(){
    console.log("hello world")
}

calculadora(55,500, display, helloworld());