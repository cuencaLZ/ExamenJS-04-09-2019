const AutenticacioModule = require('./Programador Tasques/Tasques/Autenticacio')
const AutoritzacioModule = require('./Programador Tasques/Tasques/Autorizacio')
const TasquesModule = require('./Programador Tasques/Tasques')
const vehicleModule = require('./Programador Tasques/Tasques/vehicle')
let AutoritzacioTasca = TasquesModule.Tasca(new AutoritzacioModule.Autoritzacio());
let AutenticacioTasca = TasquesModule.Tasca(new AutenticacioModule.Autenticacio());


