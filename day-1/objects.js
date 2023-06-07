const obj1 = {
    name : 'Michael bechuana',
    age : 21,
    school : 'jkuat',
    joined : 2021
}

const target = {
    a : 1,
    b:2
}

const source ={
    d:3,
    e : 4
}

var keys = Object.keys(obj1);

console.log(keys);


var full = Object.assign(target,source);
console.log(full);


var entries =   Object.entries(obj1);
console.log(entries);


var property =  obj1.hasOwnProperty('nam');
console.log(property);

const person = {
    name : 'michael',
    age : 21
}

Object.freeze(person);

person.age = 12;
console.log(person);

const seal = {
    name : 'micahel',
    age : 16
}

Object.seal(seal);

seal.name = "Michael";
seal.age = 12;
seal.gender = 'male';   // This addition will be ignored
delete seal.name;  

console.log(seal);

//output {name: 'Michael', age: 12}
age : 12
name : "Michael"
