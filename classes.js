class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    introduceYourself() {
        console.log(`This is ${this.name} of age ${this.age}`);
    }
}
Person.prototype.demo=()=>{
    console.log("demo");
}

const person= new Person('santhosh',22)
console.log(person);
person.introduceYourself()
person.demo()

class Student extends Person{
     #price
    constructor(name,age,clg){
        super(name,age)
        this.clg=clg
        this.selfIntro=()=>{
            console.log(`This is ${this.name} of age ${this.age} studying at ${this.clg}`);
            this.#privateMethod()
        }
    }
    #privateMethod(){
        console.log('Private methord');
    }
    price(price){
      return this.#price= price
    }

    
}
const student=new Student('sanjai',22,'MNMJEC')
console.log(student.price('1234'));

student.selfIntro()