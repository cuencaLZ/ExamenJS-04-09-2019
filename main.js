//Ulizamos una modulación del proyecto
const AutenticacioModule = require('./Programador Tasques/Tasques/Filtre/Autenticacio')
const AutoritzacioModule = require('./Programador Tasques/Tasques/Filtre/Autorizacio')
const TasquesModule = require('./Programador Tasques/Tasques/Tasques')
const vehicleModule = require('./Programador Tasques/Tasques/Target/vehicle')
const ProgramadorTasModule = require('./Programador Tasques/ProgramadorTasques')
const MollappModule = require('./Mollapp')


/**
 * Configuració del programador de tasques
 * del sistema amb el tipus de target triat:
 * des de vehicles a qualsevol cosa que admiteix
 * la recepció d'un missatge.
 */
let vehicleTarget = new TasquesModule.Target(new vehicleModule.Vehicle());
let ProgramadorTasques = new ProgramadorTasModule.programadorTasques(vehicleTarget);
/**
 * Afegir al sistema les tasques que volem que el sistema
 * executi al rebre la petició del client.
 */
let AutoritzacioTasca = new TasquesModule.Tasca(new AutoritzacioModule.Autoritzacio());
let AutenticacioTasca = new TasquesModule.Tasca(new AutenticacioModule.Autenticacio());
ProgramadorTasques.setTasca(AutenticacioTasca);
ProgramadorTasques.setTasca(AutoritzacioTasca);
/**
 * Configuració de l'app client per a que
 * executi les tasques programades i
 * enviï el misstage al sistema.
 */
let Mollapp = new MollappModule.Mollapp();
Mollapp.setProgramadorTasques(ProgramadorTasques);
Mollapp.enviarPeticio("Francesc")