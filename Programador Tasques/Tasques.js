function Tasca(product) {
    this.tasca = product;
}

Tasca.prototype = {
    constructor: Tasca,
    nombre: function() {
        return this.tasca.nombre;
    },
    execucio: function() {
        return this.tasca.execucio;
    },
};

module.exports = {
    Tasca
};