//La calculadora es el main y extra toodo el documeno de operaciones
// el " ./ " en la parte del requiere es para indicar que el documento esta en la misma carpeta 

const operacion= require('./operaciones.js');
console.log(operacion);
console.log('El resulotado de la operacion es: '+ operacion.suma(5,17));