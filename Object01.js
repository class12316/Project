//对象字面量
const dog = {
    name:'豆豆',
    breed:'泰迪',
    color:'棕色',
    bark(){
        return '汪汪!';
    },
};

console.log(dog.toString());    //对象有个隐藏属性_proto_
console.log(dog.constructor);   //constructor对象的属性
console.log(dog.constructor.prototype); //prototype构造函数的原型  //const emply = {}等同于


//ES5 构造函数
function Dog(name,breed,color){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.bark = function(){
        return '汪汪!';
    }
}
let dog = new  Dog('豆豆','泰迪','棕色');
dog.bark();
console.log(dog.constructor);
console.log(dog.constructor.prototype);

//Object.create(); 指定性原型
const dog = {
    name:'豆豆',
    breed:'泰迪',
    color:'棕色',
    bark(){
        return '汪汪!';
    },
};
let dog1 = Object.create(dog);
let a = dog1.bark();
console.log(a);
console.log(dog1.constructor);
console.log(dog1.constructor.prototype);


//ES6
class Dog{
    constructor(name,breed,color) {
        this.name = name;
        this.breed = breed;
        this.color = color;
    }
    bark(){
        return '汪汪!';
    }
}
let dog2 = new  Dog('豆豆','泰迪','棕色');
console.log(dog2.constructor);
console.log(dog2.constructor.prototype);


//ES5的原型  叫实例方法
function Dog(name,breed,color){
    this.name = name;
    this.breed = breed;
    this.color = color;
}
Dog.prototype.bark = function(){
    return '汪汪!';
}
let dog1 = new  Dog('豆豆','泰迪','棕色');
dog1.bark();


class Dog{
    constructor(name) {
        this.name = name;
    }

    bark(){
        return '汪汪!';
    }
}
class Chiwawa extends Dog{
    constructor(name) {
        super(name);
    }

    smallBark(){
        return '汪汪!';
    }
}
let myPet = new Chiwawa('小狗');
myPet.smallBark();
myPet.bark();
console.log(myPet.name);
console.log(myPet.a); 
