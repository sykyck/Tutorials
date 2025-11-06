const indexValueMap = new Map<number, number>();
const sumValuesMap = new Map<number, number[]>();

const samples:number[][] = [[7, 8, 9, 10, 11, 12]];

function setSumValuesMap(arr:number[], fixedIndexValue: number, variableIndexValue:number) {
    if(variableIndexValue> fixedIndexValue){
        sumValuesMap.set(arr[fixedIndexValue] as number + (arr[variableIndexValue] as number), [arr[fixedIndexValue] as number, arr[variableIndexValue] as number]);
    }
}

for (const arr of samples) {
    for (let i = 0; i < arr.length; i++) {
        indexValueMap.set(i, arr[i] as number);
        setSumValuesMap(arr, 0, i);
    }
}