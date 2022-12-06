const obj= {
    element1:true,
    check(){
        return true
    }
}
console.log(obj.element1,obj.check());

obj.add= function newelement(){
    return 1
}
var obj2=Object.create(null)
var obj3=Object.create({name:'Aspire'})
console.log(obj2,obj3,obj3.name);

const person={
    name:['Santhosh', 'Sanjai' , 'Sathya'],
    age:[22,22,22],
    listPerson(){
        this.name.forEach((nam,i)=>{
            console.log(`${i+1}) ${nam} age:${this.age[i]}`);
        })
    },
    addPerson(name,age){
        this.name.push(name)
        this.age.push(age)
    }
}
// person.listPerson()
person.addPerson('sathish',22)
person.listPerson()

function personObj(name,place){
    this.name=name
    this.place=place
    this.introduceYourself=()=>{
        console.log(`Hi! this is ${this.name} from ${this.place} and age of ${this.age}`);
        return `Hi! this is ${this.name} from ${this.place} and age of ${this.age}`
    }
}

var newpreson=new personObj("Dhanush",'siruseri')
newpreson.age=22
console.log(newpreson.introduceYourself())
