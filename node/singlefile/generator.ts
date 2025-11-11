function* simpleGenerator(): Generator<number, void, unknown> {
    yield 1;
    yield 2;
    yield 3;
}

// Usage
const generator = simpleGenerator();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }