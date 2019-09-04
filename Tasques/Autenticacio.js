function Autenticacio(){

}

Autenticacio.prototype = {
    constructor: Autenticacio,
    nombre:"Autoritzacio",
    execucio: function(persona){
        console.log (
            this.nombre + " OK para"+ persona
            );
    },
};

module.exports = {
    Autenticacio
};