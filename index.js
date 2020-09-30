const infos = require("./informations.js")
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `My name is ${infos.name} and my campus is ${infos.campus}`,
    e: 'oO',
    T:'U '
}));