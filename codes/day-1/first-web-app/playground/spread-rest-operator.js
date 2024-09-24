var obj = {
    id: 1,
    name: 'anil',
    salary: 1000
}
//... -> spread operator
var copy = { ...obj }
const numbers = [1, 2, 3]
const copyArr = [...numbers]
// var copy = {}
// for (const propName in obj) {
//     const propValue = obj[propName]
//     copy[propName] = propValue
// }
// console.log(obj);
// console.log(copy);

//... -> rest operator
//rest operator is used to declare an array which will accept unknown number of arguments, after the fixed arguments
//the array is known as parameter array
//you can declare only ONE such array in the function's argument list
//this array should be the last one in the function's argument list
function calculateAverage(name, ...marks) {
    let sum;
    marks.forEach(
        mark => sum += mark
    )
    return sum / marks.length;
}

calculateAverage('anil', 50, 40)
calculateAverage('sunil', 50)
calculateAverage('vinod', 50, 40, 60)