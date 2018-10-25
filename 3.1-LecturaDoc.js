const fs = require('fs');

fs.readFile('./PruebaTex.txt', function(err, data){
    if(err){
        console.log(err);
    }
    else{
        //El uso del .toString es para transformar el valor bruto por un string transformando
        console.log(data.toString());
    }
});