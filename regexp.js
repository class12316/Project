//正则表达式
const pattern = /javascript/;
let a = pattern.test('javascript');
console.log(a);

const pattern1 = new RegExp('javascript');
let b = pattern1.test('javascript');
console.log(b);

const pattern1 = new RegExp('[a-zA-Z]+ing');
console.log(pattern.test('joke'));
console.log(pattern.test('joking'));
console.log(pattern.test('joking'));

/dog/.test('hot dog');//true

/d.g/.test('dog');//true

/^dog/.test('adog');//false

/^dog$/.test("dog"); //true


