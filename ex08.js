setInterval(funcao, 1000);


function funcao(){
    let d = new Date();
    document.getElementById("teste").innerHTML = 
    d.getHours() + ':' +
    d.getMinutes()  + ':' +
    d.getSeconds();
};
