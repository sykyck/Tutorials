const used = {};

function main(n) {
    if (n in used) {
        used[n].count++;
        return used[n].value;
    } else {
        used[n] = {count:0, value:0};
    }
    
    if(n <= 2){
        return used[n].value =1;
    }
     
    return used[n].value = (main(n-1) + main(n-2)); 
}

const testCases = [
    [6, 8]
];
//1 1 2 3 5 8 
for (const [input, output] of testCases) {
    console.log(main(input) === output);
    console.dir(used, { depth: null });
}