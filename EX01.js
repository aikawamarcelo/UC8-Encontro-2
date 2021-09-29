let readlineSync = require("readline-sync")
var valor

valor = readlineSync.question("Digite o valor correspondente a quantidade de alunos: ")
for( var i =0; i <=valor; i++){
   
    if(i == 0){

       console.log("O número é Zero")

    }

    else if(i%2==0){ // Se não for else if e for só if o valor zero par aparece.
   
    console.log("O número " + i + " é par")

   }else{

   console.log("O número " + i + " é ímpar")

   }


}
