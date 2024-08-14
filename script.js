setTimeout(() => {
   console.log("1ª função assincrona: eu acho que serei o primeiro");
});

setTimeout(() => {
    console.log("2ª função assincrona: eu acho que sou o segundo");
}, 100);


console.log("1ª função Sincrona: sou prioridade")

setTimeout(() => {
   console.log("3ª função assincrona: serei o terceiro ou quarto") ;
}, 50);

console.log("2ª função sincrona: serei o ultimo?")