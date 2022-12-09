class Person {
    
    constructor(name, age) {
        this.name = name
        this.age=age
    }
    about(){
        return `Hi, I am ${this.name} of age ${this.age}`
    }
    toString(){
        return `[name:${this.name}][age:${this.age}]`
    }
}
class Employee extends Person{
     #project
    constructor(name,age,id,domain){
        super(name,age)
        this.id=id
        this.domain=domain
    }
    about(){
        return `Hi, I am ${this.name} of age ${this.age} working in the domain ${this.domain}`
    }
    static company(){
        return 'Aspire System'
    }
    set project(project){
        this.#project=project
    }
    get project(){
        return this.#project
    }
    toString(){
        return `[name:${this.name}][domain:${this.domain}][Project:${this.project}]`
    }
}
const emp1=new Employee('santhosh',22,123,'Lamp')
console.log(emp1.about());
emp1.project='Training'
console.log(emp1.toString());

console.log(Employee.company());