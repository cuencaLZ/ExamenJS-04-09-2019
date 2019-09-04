function Vehicle(){

}

Vehicle.prototype = {
    constructor: Vehicle,
    autoritzacio: true,
    nombre: "Vehiculo",
    tipo: "Target",
    execucio: function(persona){
        console.log (
            "Puerta abierta"+ persona
            );
    },
};

module.exports = {
    Vehicle
};