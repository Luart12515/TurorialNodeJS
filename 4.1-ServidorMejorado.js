const http = require ('http');
const colors = require('colors/safe');
const administradorServer = function(req, res){
    //El (" writeHead ") es una ayuda para el desarrollador indicando informacion al momento de habilitar las herramientas del desarrollador en el buscador 
    res.writeHead(200, {'Content-type': 'text/html'}); 
    res.write ('<h1> Seccion del servidor mejorado dandole mayor profesionalismo </h1>');
    res.end();
}
//creamos el servidor a traves de una constante 
const servidor = http.createServer(administradorServer);

servidor.listen(3000, function(){
    console.log(colors.green('Servidor activado en el puerto 3000'));
});

/*
Para poder exportar nuestro proyecto con todos los modulos que descargemos es necesario usar el comando  [" npm init " ]
el cual creara una lista de informacion de nuestro proyecto 
Crea un json  en donde tiene toda la informacion de nuestro proyecto donde lo mas importante son las dependencias donde se puede
*/