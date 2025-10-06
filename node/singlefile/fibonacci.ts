const used = new Map<number, { count: number; value: number }>();

const findValueAtPosition = (n: number): number => {
    const entry = used.get(n);
    if (entry) {
        entry.count++;
        return entry.value;
    }

    if (n <= 2) {
        used.set(n, { count: 1, value: 1 });
        return 1;
    }

    const value = findValueAtPosition(n - 1) + findValueAtPosition(n - 2);
    used.set(n, { count: 1, value });
    return value;
};

const samples = [[6, 8]];

for (const [input, output] of samples) {
    console.log(findValueAtPosition(input as number) === output);
    console.dir([...used.entries()], { depth: null });
}
