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
class Trainer extends Person {
    constructor(pId, pName, pSalary, pSubject) {
        super(pId, pName, pSalary)
        this.subject = pSubject
    }
    show() {
        return `${super.show()}, ${this.subject}`
    }
}

const anilObj = new Trainer(1, 'anil', 1000, 'JavaScript')
console.log(anilObj.show());