//function关键字 greeting标识符 （）{}标点符号 return关键字 "Hi"字符串  Token词法单元(令牌(安全问题))
/*
从网络、浏览器缓存或service worker加载脚本为UTF-16编码的字节流
通过字节流的解码器解码成Token
解析器根据Token生成节点，创建语法抽象树(Abstract Syntax Tree,AST)  
解释器遍历AST，并生成字节码
(可能)字节码和类型反馈被发送到优化编译器，生成高度优化的机器码。
*/
//Javascript代码类型：全局代码 函数代码 eval代码 模块代码
//执行上下文(Execution Context)：抽象概念，表示Javascript的执行环境
/*
执行上下文的类型：
 全局执行上下文：默认或者基础的执行上下文，
 函数执行上下文：
 eval执行上下文：
 模块执行上下文：
 */
//执行上下文的两个阶段： 创建阶段（只扫描，不执行) //执行阶段（赋值，再完成执行）
//创建阶段：词法环境（环境记录、对外层的环境的引用、this绑定）和变量环境
//---两者区别:前者用于存储函数声明以及let和const,后者存储var）
let a = 'Hello world!';

function first(){
    console.log('在 first 函数内');
    Second();
    console.log('再次在 first 函数内');
}
function Second(){
    console.log('在 Second 函数内');
}
first();
console.log('全局执行上下文');

let a =1;
console.log(a);

console.log(global);

function foo(){
    b =1;//全局变量
    return 'hi'
}
foo();
console.log(b);

function foo(){
    b =1;
    return 'hi' + c
}
foo();
console.log(b);

console.log(this);

const person ={
    name:'peter',
    birthYear:1994,
    calcAge:function(){
        console.log(2020 - this.birthYear)
    },
};


person 
//函数执行上下文中，this取决于函数的调用方式：
//    如果函数是通过函数引用来调用的，那么该函数的对象就是该对象。
//    如果函数是通过，那么该函数的对象就是全局变量或（严格模式下）undefined


//函数的定义可以放在函数的调用后面 

//在代码执行之前，将函数和变量存储以用于执行上下文，这叫变量提升

function foo(p1,p2){
    console.log(p1+p2);
    console.log(this);//this为空，则为全局对象
}

foo(1,2);
foo.call(null,1,2);