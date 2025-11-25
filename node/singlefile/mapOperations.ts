// create
const m = new Map();

// set/get
const objKey = {id: 1};
m.set('name', 'Vaibhav');
m.set(objKey, {role: 'dev'});

console.log(m.get('name'));      // "Vaibhav"
console.log(m.get(objKey));      // { role: 'dev' }
console.log(m.has('missing'));   // false

// iteration
for (const [k, v] of m) {
  console.log(k, v);
}

// convert to array or object
const entriesArr = [...m.entries()];      // [['name','Vaibhav'], [{id:1}, {role:'dev'}]]
const keysArr = [...m.keys()];
const valuesArr = [...m.values()];

// initialize from array
const m2 = new Map([ ['a',1], ['b',2] ]);


