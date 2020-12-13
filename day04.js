//字面量
let a = 'yang',b = 'yang1',c = 'ruch' //字符串字面量

const oArray = []; //数组字面量

const oObject = {}; //对象字面量

const oReg = \abc\; //正则表达式字面量
// 字面量
let a = "",
  b = " ",
  c = ` `; // 字符串字面量
let oArray = [1, 2, 3];
const oStudent = {};


// 声明函数
function hello(){
    console.log('Hello,function');
} //function后面花括号不能加分号，其他必须加
console.log(hello);
hello();

/*
 定义函数的四种方式
 
---函数声明
function sayHello() {
  console.log("Hello, JavaScript");
} //  定义了一个函数字面量
// 函数表达式
const sayHello = function () {
  console.log("hello,javascript!");
}; // 匿名函数表达式
console.log(sayHello);
sayHello();

const sayHello = function sayHi() {
  console.log("hello, js");
}; // 命名的函数表达式

// Function 构造函数，不建议使用
const sayHello = new Function("console.log('hello,js!')");

// ES6 新增的语法，箭头函数
const sayHello = () => {
  console.log("hello,js");
};
sayHello();
*/
//定义一个函数表达式
//匿名函数 
const hello = function(){
    console.log('hello,javascript!');
};

//命名函数
const hello = function sayHello(){
    console.log('hello,js!');
};
hello();
console.log(typeof hello);


//返回值 如果没有return，或者return后面为空，函数的返回值就为undefined
let sayHello= function(){
    return;
};
console.log(sayHello());

let sayHello2 = function(){
    let a = 1;
    return a;
};

// sum1(1, 2);
// sum2(1, 2, 3);
// sum3(1, 2, 3, 4);

// function sum1(a, b) {
//     return a + b;
// }

// function sum2(a, b, c) {
//     return a + b + c;
// }

// function sum3(a, b, c, d) {
//     return a + b + c + d;
// }
sum1(1, 2);

function sum1(a,b){
    sayHello();
    return a + b;
}
function sayHello(){
    let a = 1;
    let b = 2;
    return `a= $(a),b =$(b)`;
}

const sayHello = function () {
  let a = 1,
    b = 2;
  let c = a + b;
  return;
};
console.log(sayHello()); // undefined;

const sayHello = function () {
  let a = 1,
    b = 2;
  let c = a + b;
  return c;
};
console.log(sayHello()); // 3;

// 函数参数
const add = function (a, b) {
  return a + b;
};

let a = add(2, 3);
console.log(a); // 5

const add1 = function (a, b) {
  return a + b;
};
const sayHello = function () {
    let a = 1,
      b = 2;
    let c = a + b;
    return;
  };
  console.log(sayHello()); // undefined;
  
  const sayHello = function () {
    let a = 1,
      b = 2;
    let c = a + b;
    return c;
  };
  console.log(sayHello()); // 3;
  
  // 函数参数
  const add = function (a, b) {
    return a + b;
  };
  
  let a = add(2, 3);
  console.log(a); // 5
  
  const add1 = function (a, b) {
    return a + b;
  };
  
//如果调用的时候，不提供实际的参数，那么形参就会被赋值为undefined
let add = function(a,b){
    return a+b;
};
console.log(add()); 

let a = Infinity;
let b = -Infinity;

console.log(1 + null);

const add = function(a,b){
    return a+b;
};
console.log(add(1,2,3,4,5)); 

const add1 = function(){
    if(arguments.length == 0){
        return 0;
    } else if (arguments.length ==1){
        return arguments[1];
    } else if (arguments.length == 2) {
        return arguments[0] +arguments[1];
    }
};
console.log(add1(1,8));


const add2 = function(...numbers){
    let sum = 0;
    console.log(typeof numbers)
    console.log(numbers instanceof Array)
    for (const num of numbers){
        sum = sum + num;
    }
    return sum;
}
a = add2(1,1,2,2,2,2,2);
console.log(a);


const add3 = function(){
    let sum = 0;
    console.log(typeof arguments);
    {
        sum = num + sum;
    }
    return sum;
};
b = add3();
console.log(b);

const myName = function(b,a = 'yang'){
    return b + a;
}
console.log(myName('hello'));


let b1 = add1();
console.log(b); // NaN = not a number, undefined + undefined

let b2 = add1(1); // 只传递一个参数
console.log(b2); // NaN

let b3 = add1(1, 2, 3, 4);
console.log(b3); // 3

const add2 = function (a, b) {
  let a1 = arguments.length;
  console.log(a1);
  console.log(arguments[5]);
  return a + b;
};

let b4 = add2(1, 2, 2, 2, 3, 4);
console.log(b4);

const add3 = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
};
let b5 = add3(1, 2, 4, 5, 6, 7, 8);
console.log(b5);

const add = function (...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum = sum + num;
  }
  return sum;
};
let a1 = add(1, 2, 2);
console.log(a1);



//箭头函数  如果只有一个参数，可以省略括号，如果只有一条语句，大括号可省略（一旦有大括号，return必写）
//箭头函数不能使用arguments,super,new target,也不能用于构造函数，
const sayHello1 = () => {
    return 'hello,Javascript';     
}

const sayHello1 = () => 'hello,Javascript';
console.log(sayHello1());

const sayHello2 = a => {
    return 'hello' + a;
}

const sayHello2 = (a,b) => a + b;

//回调函数 callback
const dance = function(){
    console.log('我在跳舞！');
};
// const dance = () => {
//     console.log('我在跳舞！');
// };
const sing = function(song,callback){
    console.log('我在唱'+ song);
    if ((typeof callback) == 'function'){
        callback();
    }
};
sing('国歌', dance);
// const sing = (song,callback) => {
//     console.log('我在唱' + song);
//     callback();
// };
// sing('生日快乐歌',() => {console.log('我在跳舞！')});

//回调函数的应用
//   Array.sort() 数组排序
const a1 = [1,3,2,10,22,8];
const a2 = a1.sort()
console.log(a2);
const num = (a,b) => a - b; //回调
const a3 = a1.sort(num);
console.log(a3); 


//Array.foreach() 其间所有中括号都可省略
const oArray1 = [1,2,2,4];
for (let i = 0; i < oArray1.length; i++){
    oArray2[i] = oArray1([i]);
}
console.log(oArray2);


const oArray2 = [1,2,2,4];
for (const i of oArray2){
    console.log(i);
}

const oArray3 = [1,2,2,4];
oArray3.forEach((arr1) => {console.log(arr1)});

const colors = ["Red", "Green", "Blue"];
for (let i = 0, max = colors.length; i < max; i++) {
  console.log(`位置${i}处的颜色为${colors[i]}`);
}

const colors = ["Red", "Green", "Blue"];
colors.forEach((color, index) =>
  console.log(`位置${index}处的颜色为 ${color}`)
);

const oArray1 = [1, 2, 3, 4];
oArray1.forEach((color) => console.log(`${color}`));

//Array.map()  把一个数组的元素映射到另外一个数组
const oArray4 = [1,2,2,4];
const sum = (a) => a + 2;
const oArray5 = oArray4.map(sum);
console.log(oArray5);
//平方
const oArray4 = [1,2,2,4];
const sum = (a) => a * a;
const oArray5 = oArray4.map(sum);
console.log(oArray5);

//reduce 
const oArray1 = [1,2,2,4].reduce((acc,val) => acc +val);
console.log(oArray1);

const oArray1 = [1,2,3,4,5];
const oArray2 = oArray1.reduce(
    (acc,curVal) => acc + curVal
)
console.log(oArray2);

const oArray3 = [1,2,2,4].reduce((acc,val) => acc +val,10);
console.log(oArray3);

const sentence = 'The quick brown fox jumped over the lazy dog';
const words = sentence.split(" ");
console.log(words);
const total  = words.reduce((acc,words) => acc + words.length,0);
console.log(total);

//filter
const a1 = [1,2,3,12,8];
const a2 = a1.filter((x) => x%2 ===0);
console.log(a2);

const sentence = "The quick brown fox jumped over the lazy dog";
const words = sentence.split(" ");
console.log(words);
const words1 = words.filter((val) => val.length > 4);
console.log(words1);

console.log([1,2,3].map( x => x*x ).reduce((acc,x) => acc + x ));
console.log(a);