function programadorTasques(vehiculo){
    this.vehiculo=vehiculo;
    this.lista = [];
    
};
programadorTasques.prototype = {
    constructor: programadorTasques,
    setTasca: function(tasca){
        this.lista.push(tasca);
    },
    enviarPeticio: function(persona){
        for (let i in this.lista) {
               this.lista[i].execucio(persona);
        }
        this.vehiculo.execucio(persona);
    },

};

module.exports = {
    programadorTasques
}