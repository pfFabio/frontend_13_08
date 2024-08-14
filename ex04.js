function display(texto){
    document.getElementById("teste").innerHTML = texto
}

function calculadora(a,b){
    let somou = a + b; 
    display(somou);
}

calculadora(327,783);