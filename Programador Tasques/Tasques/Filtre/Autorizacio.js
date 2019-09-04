function Autoritzacio() {

}

Autoritzacio.prototype = {
    constructor: Autoritzacio,
    nombre: "Autoritzación",
    execucio: function (persona) {
        console.log(
            this.nombre + " OK para " + persona
        );
    }
};

module.exports = {
    Autoritzacio
};