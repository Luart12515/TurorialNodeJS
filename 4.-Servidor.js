// Esta es la libreria en la cual 
const http = require('http');
/* Creamos el servidor con el comando createServer. 
   usamos el comando (" function ") para que sea un comando asincrono 
   en la funcion tenemos 2 parametros para poder analizar:
   1.- Requiere [peticion] req
   2.- Response [respuesta] res
   El servidor recibe una peticion y te arroja una respuesta   
   */
http.createServer(function(requiere, res){
    res.writeHead
    res.write('<h1> Hola a todos </h1> ');
    res.end();//una vez que respondemos, hay que terminar la respuesta para continuar las peticiones
}).listen(3000); // el metodo (" liset ") es para indicar el servidor 
