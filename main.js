const AutenticacioModule = require('./Programador Tasques/Tasques/Autenticacio')
const AutoritzacioModule = require('./Programador Tasques/Tasques/Autorizacio')
const TasquesModule = require('./Programador Tasques/Tasques')
const vehicleModule = require('./Programador Tasques/Tasques/vehicle')

let Autorizacio = new AutoritzacioModule.Autoritzacio();
let Autenticacio = new AutenticacioModule.Autenticacio();
let AutoritzacioTasca = TasquesModule.Tasca(Autorizacio);
let AutenticacioTasca = TasquesModule.Tasca(Autenticacio);


