//Estos son modulos se instalan automaticmente cuando instalamos node 
//para mayor informacion de estos modulos revice https://nodejs.org/dist/latest-v10.x/docs/api/

const os = require('os');

//nos dira que sistema operativo tenemos 
console.log('Tu plataforma en la cual trabajas es ',os.platform);

//memoria libre 
console.log('Tienes un total de '+ os.freemem + ' bytes memoria libre de un total de '+ os.totalmem);

//Modulo para crear y leer documentos FILE SYSTEM 
const fs = require('fs');

//primero se le indica en donde quieres guardar el archivo, despues el nombre al ultimo ingresa el texto del archivo 
// {colvac} cuando termina el de hacer su trabajo cotinua con el siguiente procedimiento  
/*  Investigar  
    (" fs ") es un codigo asincrono [delega su trabajo]
    Codigo bloqueante   
*/
fs.writeFile('./PruebaTex.txt', 'Hola a todos, esto solo es una prueba. Esto es creado a travez del sistema operativo dejando a node js haciendo otros trabajos.',function(err){
    if (err){
        console.log(err);
    }
    console.log('Archivo creado ');
    console.log('Lo creo el sistema operativo y no node js');
    console.log('En referencia a tiempo esto tardaria mas ya que esta interveniendo el OS ');
    
});     
console.log('Ejemplo de delegar el trabajo ya que esto es inferior a la funcion de crear el archivo');