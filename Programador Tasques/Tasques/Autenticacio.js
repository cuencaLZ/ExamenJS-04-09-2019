function Autenticacio() {

}

Autenticacio.prototype = {
    constructor: Autenticacio,
    nombre: "Autenticación",
    execucio: function (persona) {
        console.log(
            this.nombre + " OK para " + persona
        );
    }
};

module.exports = {
    Autenticacio
};