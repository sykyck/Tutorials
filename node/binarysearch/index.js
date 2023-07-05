function main(arr, start, end, search){
    const middle = parseInt((start+end)/2);

    console.log(`Middle Value:${middle}`);

     if(arr[middle] == search){
         return middle;
     }

     if(arr[middle] > search){
        return main(arr, start, middle-1, search);
     }

     if(arr[middle] < search) {
        return main(arr, middle+1, end, search);
     }

}

const testCases = [
    {
        array: [1,3, 5, 7, 11, 12, 15, 18], 
        search: 12, 
        index: 5
    }
];
//1 1 2 3 5 8 
for (const {array: list,search,index} of testCases) {
    console.log(main(list, 0, list.length-1, search) === index);
}

