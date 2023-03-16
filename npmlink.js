function helloNpm(){
    return "hello NPM"
}
module.exports = helloNpm

const helloNpm = require('npmlink')

console.log(helloNpm())     