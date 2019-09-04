function Mollap(){

    
};
Mollap.prototype = {
    constructor: Mollap,
    setProgramadorTasques: function(programadordetasques){
        funcion = programadordetasques;
    },
    enviarPeticio: function(persona){
       funcion.enviarPeticio(persona);
    },

};

module.exports = {
    Mollap
}