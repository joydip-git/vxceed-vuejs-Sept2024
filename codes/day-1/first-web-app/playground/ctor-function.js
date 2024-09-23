//2. constructor function syntax
function person(pId, pName, pSalary) {
    this.id = pId
    this.name = pName
    this.salary = pSalary
    this.show = function () {
        return `${this.id}, ${this.name},${this.salary}`
    }
}
var anilObj = new person(1, 'anil', 1000)

//dot operator
console.log(anilObj.name);
console.log(anilObj.show());
//indexer
console.log(anilObj['salary']);
console.log(anilObj['show']());

anilObj.sayHello = function () {
    return `Hello ${this.name}`
}
anilObj['location'] = 'bangalore'
console.log(anilObj.sayHello());
console.log(anilObj);

for (const propName in anilObj) {
    console.log(`${propName}: ${anilObj[propName]}`);
}