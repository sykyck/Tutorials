// eventloop.ts
console.log("🟢 [1] Start of script");

// ====================
// process.nextTick (Microtask)
// ====================
process.nextTick(() => {
  console.log("🟡 [2] process.nextTick (first level)");

  process.nextTick(() => {
    console.log("🟡 [3] Nested process.nextTick inside process.nextTick");
  });

  Promise.resolve().then(() => {
    console.log("🔵 [4] Promise inside process.nextTick");
  });
});

// ====================
// Promise (Microtask)
// ====================
Promise.resolve().then(() => {
  console.log("🔵 [5] Promise.then (first level)");

  process.nextTick(() => {
    console.log("🟡 [6] process.nextTick inside Promise.then");
  });

  Promise.resolve().then(() => {
    console.log("🔵 [7] Nested Promise.then inside Promise.then");
  });
});

// ====================
// setTimeout (Macrotask - Timers Phase)
// ====================
setTimeout(() => {
  console.log("⏰ [8] setTimeout callback (timer phase)");

  process.nextTick(() => {
    console.log("🟡 [9] process.nextTick inside setTimeout");
  });

  Promise.resolve().then(() => {
    console.log("🔵 [10] Promise.then inside setTimeout");
  });

  setTimeout(() => {
    console.log("⏰ [11] Nested setTimeout inside setTimeout");
  }, 0);
}, 0);

// ====================
// setImmediate (Macrotask - Check Phase)
// ====================
setImmediate(() => {
  console.log("🚀 [12] setImmediate callback (check phase)");

  process.nextTick(() => {
    console.log("🟡 [13] process.nextTick inside setImmediate");
  });

  Promise.resolve().then(() => {
    console.log("🔵 [14] Promise.then inside setImmediate");
  });
});

console.log("🔴 [15] End of script");
