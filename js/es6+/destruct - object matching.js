// basic
let obj = { x: 1, y: 2 };
let { x, z } = obj; // same as:
let x = obj.x;
let z = obj.z;
//------------------------------------------------
// after declaration (parens are required)
let a, b;
({a, b} = {a: 1, b: 2});
a // 1
b // 2

// var/let/const can't be omitted
var person = {name: 'foo', age: 12};
{name, age} = person; // Uncaught SyntaxError: Unexpected token '='
({name, age} = person);
name // 'foo'
age  // 12
//------------------------------------------------
// new names
let obj = { x: 1, y: 2 };
let { x: foo, y: bar} = obj; // same as:
let foo = obj.x;
let bar = obj.y;
//------------------------------------------------
// default values
let { a = 10, b = 5 } = { a: 3 };
a // 3
b // 5
//------------------------------------------------
// new names and default values
let { a: aa = 10, b: bb = 5 } = { a: 3 };
aa // 3
bb // 5
//------------------------------------------------
// deep matching
let obj = {
	user: 'asal',
	level: { name: 'dominator', num: 46 },
	champion: 'darius'
};
let { user: a, level: { name: b }, champion: c } = obj; // same as:
let a = obj.user;
let b = obj.level.num;
let c = obj.champion;

// another example
var obj = { foo: 28, bar: {x:2,y:4} };
var { bar: {y} } = obj; // y = obj.bar.y
//------------------------------------------------
// combined array and object
let props = [
  { id: 1, name: 'Fizz'},
  { id: 2, name: 'Buzz'},
  { id: 3, name: 'FizzBuzz'}
];
let [,, { name }] = props;
name // 'FizzBuzz'

var foo = { bars: [1,2], cars: [3,4] };
var { bars: [one] } = foo;
var { cars: [,four] } = foo;
one  // 1
four // 4

// another example
var o = { a: [{foo:5}, {bar:7}] };
var { a: [{foo}, {bar}] } = o;
foo // 5
bar // 7
//------------------------------------------------
// with rest operator (stage 4 proposal)
let { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 }
a    // 1 
b    // 2
rest // { c: 3, d: 4 }
//------------------------------------------------
// prototype chain lookup
let obj = { self: 12 };
obj.__proto__.prot = 24;
let { self, prot } = obj;
self // 12
prot // 24
//------------------------------------------------
// computed property names
let key = 'z';
let {[key]: foo} = {z: 'bar'};
foo // 'bar'
//------------------------------------------------