function suma(x1, x2){
    return x1 + x2;
}

function resta(x1, x2){
    return x1 - x2;
}

function multi(x1, x2){
    return x1 * x2;
}

function divi(x1, x2){
    if(x2==0){
        console.log('La divicion no es factible para poder trabajar en ella');
    } 
    else{
        return x1 / x2;
    }
}
exports.suma=suma;