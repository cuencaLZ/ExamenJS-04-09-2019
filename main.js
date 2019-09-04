const AutenticacioModule = require('./Programador Tasques/Tasques/Autenticacio')
const AutoritzacioModule = require('./Programador Tasques/Tasques/Autorizacio')
const TasquesModule = require('./Programador Tasques/Tasques')
const vehicleModule = require('./Programador Tasques/Tasques/vehicle')
const ProgramadorTasModule = require('./Programador Tasques/ProgramadorTasques')
let AutoritzacioTasca = new TasquesModule.Tasca(new AutoritzacioModule.Autoritzacio());
let AutenticacioTasca = new TasquesModule.Tasca(new AutenticacioModule.Autenticacio());

let ProgramadorTasques = new ProgramadorTasModule.programadorTasques(vehicleModule.Vehicle);
ProgramadorTasques.setTasca(AutenticacioTasca);
ProgramadorTasques.setTasca(AutoritzacioTasca);
ProgramadorTasques.enviarPeticio("lazaro")