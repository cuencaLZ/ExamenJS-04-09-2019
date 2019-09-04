const AutenticacioModule = require('./Programador Tasques/Tasques/Autenticacio')
const AutoritzacioModule = require('./Programador Tasques/Tasques/Autorizacio')
const TasquesModule = require('./Programador Tasques/Tasques')
const vehicleModule = require('./Programador Tasques/Tasques/vehicle')
const ProgramadorTasModule = require('./Programador Tasques/ProgramadorTasques')
const MollapModule = require('./Mollap')

let vehicleTarget = new TasquesModule.Target(new vehicleModule.Vehicle());
/**
         * Configuració del programador de tasques
         * del sistema amb el tipus de target triat:
         * des de vehicles a qualsevol cosa que admiteix
         * la recepció d'un missatge.
         */
let ProgramadorTasques = new ProgramadorTasModule.programadorTasques(vehicleTarget);
/**
         * Afegir al sistema les tasques que volem que el sistema
         * executi al rebre la petició del client.
         */
let AutoritzacioTasca = new TasquesModule.Tasca(new AutoritzacioModule.Autoritzacio());
let AutenticacioTasca = new TasquesModule.Tasca(new AutenticacioModule.Autenticacio());
ProgramadorTasques.setTasca(AutenticacioTasca);
ProgramadorTasques.setTasca(AutoritzacioTasca);
/**Peticion de prueba */
ProgramadorTasques.enviarPeticio("lazaro")