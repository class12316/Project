//类声明
class User{

}
let myUser = new  User();

//函数表达式
const User = class {

}
let myUser1 = new User();
//无论声明还是对象，都不提升。   子类必须定义在父类之后

//constructor初始化
class User{
    constructor(name){
        this.name = name;
    }
}
let myUser = new  User('yang');
console.log(myUser.name); //yang

//显式定义一个公共字段
class User {
    name = 'unkown';
    constructor(){
        this.name = name;

    }
}
 
let myUser = new User();
myUser.name = 'yang';

//显式定义一个私有字段 注意：有些浏览器不支持
class User {
    #name;
    name = 'unkown';
    constructor(){
        this.#name = name;
    }
}

//静态的公有字段
class User{
    static TYPE_ADMIN = 'admin';
    static TYPE_REGULAR = 'regular';
    name;
    type;
    constructor(name,type){
        this.name = name;
        this.type = type;
    }

}

const admin = new  User('网站管理员')

//公有的静态方法
class User{
    static #MAX_INSTANCES = 2;
    static #instances = 0;
    name;
    constructor(name){
        User.#instances++;
        if(User.#instances > User.#MAX_INSTANCES){
            throw new Error("无法创建User实例");
        }
        this.name = name; 
    }

}
new User('Jon Snow');
new User('Arya Stark');
new User('');

//创建公有实例方法
class User{
    #name;
    constructor(name){
        this.#name = name;
    }
    #getName(){
        return this.#name;
    }
}
nameContains(str){
    return this.#getName()
}
user.#getName();//



//静态方法可以访问静态字段，不能访问实例字段。反过来，实例字段没有建立，也不能访问。

//
//
//
class User{
    static #takenNames = [];
    static isNameTaken(name){
        return User.#takenNames.includes(name);
    }
    name = "Unknown";
    constructor(name){
        this.name = name;
        User.#takenNames.push(name);
    }
}
const user = new User("Jon Snow");
User.isNameTaken("Jon Snow");
User.isNameTaken("Arya Stark");


//私有的静态方法
class User{
    static #takenNames = [];
    static #isNameTaken(name){
        return User.#takenNames.includes(name);
    }
    name = "Unknown";
    constructor(name){
        this.name = name;
        User.#takenNames.push(name);
    }
}
const user = new User("Jon Snow");
User.#isNameTaken("Jon Snow");
User.#isNameTaken("Arya Stark");


//getter/setter  //父类的私有成员无法被子类继承
class User{
    #nameValue;
    constructor(name){
        this.name = name;
        User.#takenNames.push(name);
    }
    get name(){
        return this.#nameValue;
    }
    set name(name){
        if(name == ""){
            throw new Error('User的');
        }
    }
}
