function Vehicle(){

}

Vehicle.prototype = {
    constructor: Vehicle,
    autoritzacio: true,
    nombre: "Vehiculo",
};

module.exports = {
    Vehicle
};