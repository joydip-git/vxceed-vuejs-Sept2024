//3. class, constructor keywords
class Person {
    constructor(pId, pName, pSalary) {
        this.id = pId
        this.name = pName
        this.salary = pSalary
    }
    show() {
        return `${this.id}, ${this.name},${this.salary}`
    }
}
var anilObj = new Person(1, 'anil', 1000)

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