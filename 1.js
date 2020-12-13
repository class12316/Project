// function getStudent(name,gender){
//     return `${name},${gender}`;
// }
// console.log(getStudent.name);

// const getStudent = function (name,gender){
//     return `${name},${gender}`;
// }
// console.log(getStudent.name);
// console.log(getStudent.prototype);

const getStudent = function (name,...gender){
    return `${name},${gender}`;
}
console.log(getStudent.length); //剩余参数不计算到name里
console.log(getStudent.name);
console.log(getStudent.prototype);

//函数的方法
//call()  apply() 都允许显式地为调用指定this值，还允许为调用参数
//组合比继承好用
//上下文context=>this
function add(c,d){
    console.log(this.a + this.b + c +d);
}
add(3,4); //NaN why? this.a/this.b都是undefined
let num = { a:1,b:2}; 
add.call(num,3,4); //10

add.call(num.add(3,4)); //10 通过add借用，方法借用模式.

const person = {
    name:"yangrucheng",
    say:function (){
        return '你好','我是'$
    }
}

var lastName = "global_name";//定义一个全局变量

const func = function (firstName) {
    return firstName + " " + this.lastName;//this 的值根据如何调用函
    
};

var person = {
    //该对象作为第一个参数传给call()
    lastName:"person_name",
};
let a = func.call(person,"yangrucheng");
console.log(a);
let b = func.call();
console.log(b);
let c = func.call();
console.log(c);

//严格模式


//apply（）
let array = ['a','b'];
let elements = [0,1,2];

let a = [...array,...elements];
console.log(a);//['a','b',0,1,2]

array.push.apply(array,elements);
console.log(array); //['a','b',0,1,2]

let obj = {
    a:1,
    b:2,
    set: function(a,b){
        this.a = a;
        this.b = b;
    }
};
obj.set(3,7); //常规语法
obj.set.call(obj,3, 7); //等于上面的语法
obj.set.apply(obj, [3,7]); // 同上，不过参数是数组
console.log(obj); // {a:3,b:5, set:[function:set]}
let myObj = {};
//
obj.set.call(myObj,5,4);
obj.set.apply(myObj,[5,4]); 
console.log(myObj); //{a:5, b:4}

//借用方法模式
function f(){
    let args = [].slice.call(arguments,1,3);
    return args;
}
let a = f(1,21,13,4,5,6);
console.log(a); //[21,13]

//bind()
var small = {
    a:1,
    go: function (b,c,d){
        console.log(this.a + b + c + d);
    },
};
var large = {
    a:100,
};
small.go(2,3,4); //10   go.call(small,2,3,4)
small.go.call(large,2,3,4) //100
let bindTest1 = small.go.bind(large,2,3,4);
bindTest1();//109
let bindTest2 = small.go.bind(large,2,3);
bindTest2(4); // 109
let bindTest3 =  small.go.bind(large,2);
bindTest3(3,4); //109

const person = {
    age:21,
    getNameAndAge: function (name){
        return name + " " + this.age;
    },
};
//直接在person对象上调用方法
person.getNameAndAge("yangrucheng");//yangrucheng 21
//将方法的引用赋值给变量 nameAndAge  调用赋值给它的函数
const nameAndAge = person.getNameAndAge; 
//
nameAndAge("yangrucheng");//
const boundNameAndAge = nameAndAge.bind(person,"yangrucheng");
boundNameAndAge();//
//
const boundNameAndAge = nameAndAge.bind();
boundNameAndAge("yangrucheng"); //
//
const boundNameAndAge = nameAndAge.bind(undefined,"yangrucheng");
boundNameAndAge();
const boundNameAndAge = nameAndAge.bind(null,"yangrucheng");
boundNameAndAge();

//toString
function getName(){
    return "yang";
}
console.log(getName.toString());
console.log(Math);

function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]){
        square.cache[x] = x*x;
    }
    return square.cache[x]
}
square(3);
square(11);
console.log(square.cache);

//memoization 斐波那契数组
console.time();
const fina = function(n) {
    // return n < 2 ? n :arguments.callee(n -1) + arguments.callee(n - 2);
    return n < 2 ? n: fina(n-1) + fina(n-2); //递归调用
};
console.log(fina(40));
console.timeEnd();

//memoization版本
console.time();
const fina = function(n) {
    fina.cache = fina.cache || {};
    if (!fina.cache[n]) {
        fina.cache[n] = n < 2 ? n : fina(n-1) + fina(n-2);
    }
    return fina.cache;
};
console.log(fina(40));
console.timeEnd();
console.time();
console.log(fina(40));
console.timeEnd();

//立即运行的函数表达式 IIFE
(function (){
    const temp = "world";
    console.log(`hello ${temp}`);
})();
console.log(temp); //undefined

//严格模式
var myModule  = (function (foo) {
    var myPrivateVar, myPrivateMethod
})


return {
    myPrivateVar
}

function multiplier(x,y){
    if (y === undefined) {
        return function (z) {
            return x * x;
        };
    }else {
        return x * y;
    }
}
