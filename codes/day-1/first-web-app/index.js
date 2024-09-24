//const { add, subtract } = require('./utility')
//console.log(add(12, 2))
//console.log(subtract(12, 2))

// import { add, subtract } from "./utility";
// console.log(add(12, 2))
// console.log(subtract(12, 2))

//functio global(){
var x = 10

function outer() {
    var y = 20
    function inner() {
        console.log(x + y);
    }
    return inner
}
const innerFnRef = outer()
innerFnRef()
//}
//new global()