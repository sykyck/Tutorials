let s1 = "hello";
let s2 = new String("hello");

console.log(typeof s1); // "string"
console.log(typeof s2); // "object"

console.log(s1 === s2); // false
console.log(s1 == s2); // true

console.log(reverseString("Vaibhav"));
console.log(areAnagram("silent", "listen"));

function reverseString(str: string): string {
    let reversed:string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function areAnagram(str1: string, str2: string): boolean {
    const countResult = new Map<string, number>();

    if (str1.length !== str2.length) return false;

    for (let i = str1.length - 1; i >= 0; i--) {
        countResult.set(str1[i] as string, (countResult.get(str1[i] as string) ?? 0) + 1);
        countResult.set(str2[i] as string, (countResult.get(str2[i] as string) ?? 0) - 1);
    }

    return [...countResult.values()].every(value => value === 0);
}
