function Mollapp() {


};
Mollapp.prototype = {
    constructor: Mollapp,
    setProgramadorTasques: function (programadordetasques) {
        funcion = programadordetasques;
    },
    enviarPeticio: function (persona) {
        funcion.executarTasques(persona);
    },

};

module.exports = {
    Mollapp
};