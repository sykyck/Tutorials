// eventloop.ts

console.log("🟢 Start of script");

// process.nextTick → microtask (runs before Promises)
process.nextTick(() => {
  console.log("🟡 process.nextTick callback");
});

// Promise → microtask (runs after nextTick)
Promise.resolve().then(() => {
  console.log("🔵 Promise.then callback");
});

// setTimeout → macrotask (timer phase)
setTimeout(() => {
  console.log("⏰ setTimeout callback");
}, 0);

// setImmediate → macrotask (check phase, runs after timers)
setImmediate(() => {
  console.log("🚀 setImmediate callback");
});

console.log("🔴 End of script");
