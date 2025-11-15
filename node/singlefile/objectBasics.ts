const a={x:1, name:'SK', addresses: [{pincode:'67362',street:''}] };
const b={name:'S', y:23, };
const ab = {...a,...b} // created shallow copy
const dc = structuredClone(a); // created deep copy
//Key Points:
//1. Spread operator creates shallow copies - nested objects/arrays are shared by reference
//2. Property merging order - properties from b override same-named properties from a
//3. Primitives vs References - name (string) is copied by value, addresses (array) is copied by reference
ab.addresses.push({pincode:'99999',street:''})   
a.addresses.push({pincode:'8888',street:''})   
a.name = 'S Jain'
b.name = 'Vaishali J'
//output ??
console.log(ab); 
console.log(dc); 
console.log(a)
console.log(b)
