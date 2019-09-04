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
function Target(product) {
    this.target = product;
}

Target.prototype = {
    constructor: Target,
    nombre: function() {
        return this.target.nombre;
    },
    execucio: function(persona) {
        return this.target.execucio(persona);
    },
};

module.exports = {
    Tasca,
    Target
};