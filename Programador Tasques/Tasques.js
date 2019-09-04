function Tasca(product) {
    this.tasca = product;
}

Tasca.prototype = {
    constructor: Tasca,
    nombre: function() {
        return this.tasca.nombre;
    },
    execucio: function(persona) {
        return this.tasca.execucio(persona);
    },
};

module.exports = {
    Tasca
};