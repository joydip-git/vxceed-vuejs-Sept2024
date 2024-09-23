//1. object-literal syntax
var anilObj = {
    //value properties
    id: 1,
    name: 'anil',
    salary: 1000,

    //functional property
    show: function () {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}


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