// const student = {
//     studentName:'yangrucheng',
//     age:21,
//     learn(){ //:function可省略
//         console.log('hello,JavaScript!');
//     }
// };//任何语句都有返回值
// student['studentName']
// student.learn();
// const oStudent = new Object();
// oStudent.studentName = 'yang';
// oStudent.age = '21';
// oStudent.learn = function() {
//        console.learn('hello!');
// };

// delete oStudent.studentName;
// console.log(oStudent.studentName); //undefined

// let studentName = 'yangrucheng',age = 21;
// const oStudent1 = {
//     studentName:studentName,
//     age:age,
//     learn(){
//         console.log('hello,learn me');
//     }
// };

// oStudent1.learn();
// oStudent2.learn();

// console.log(oStudent1.age)
// const oStudent2 = {studentName,age};
// console.log(oStudent2,studentName);

// let a = 'catch',b = 'Phrase';//凡是牵扯到计算属性，用中括号
// const hulk = {
//     name:'',
//     age:''
// }

// const name = Symbol('name');
// const superGirl = {[name]:'superGirl'};

//  console.log(superGirl[name]); // -> "superGirl"

// const realName = Symbol('real name');
// superGirl[realName] = 'kara Danvers'; //添加新属性

// console.log(superGirl[realName]); // -> "kara Danvers"
// console.log(superGirl); //undefined

// const daredevil = {
//     [name]:'',
//     [realName]:''
// }
// console.log('daredevil');

const student = {
    studentName:'yangrucheng',
    age:21,
    learn(){ //:function可省略
        console.log('hello,JavaScript!');
    }
};
console.log('studentName' in student);
console.log('learn' in student);

if(student.studentName !== undefined){
    console.log('studentName属性存在!');
}

for (let p in student){
    console.log(p);
};

console.clear();

for (let key of Object.keys(student)){
    console.log(key);
}

for ( let value of Object.values(student)) {
    console.log(value);
}
for (let [key,value] of Object.entries(student)){
    console.log(`key:${key},value:${value}`);
}

const jia = {

}

const myMaths = {
    square(x) {
        return x * x;
    },
    mean(array,callback){
        if(callback){
            array.map(callback);
        }
        const total = array.reduce((a,b) => a + b);
        const total 
    }
}