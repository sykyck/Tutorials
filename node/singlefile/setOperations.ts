const s = new Set([1,2,2,3]);
console.log(s.size);   // 3 (duplicates removed)
s.add(4).add(2);       // adding existing value has no effect
console.log(s.has(3)); // true

// iterate
for (const v of s) console.log(v);

// dedupe array
const arr = [1,2,2,3,3,4];
const unique = [...new Set(arr)]; // [1,2,3,4]
