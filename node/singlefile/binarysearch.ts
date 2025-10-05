const findItemAtIndex = (arr:number[], start:number, end:number, search:number) => {
    const middle = parseInt(String((start+end)/2));

    console.log(`Middle Value:${middle}`);

     if(arr[middle] == search){
         return middle;
     }

     if(arr[middle] && arr[middle] > search){
        return findItemAtIndex(arr, start, middle-1, search);
     }

     if(arr[middle] && arr[middle] < search) {
        return findItemAtIndex(arr, middle+1, end, search);
     }

}

const samples : Array<{array:number[], search:number, index:number}>= [
    {
        array: [1,3, 5, 7, 11, 12, 15, 18], 
        search: 12, 
        index: 5
    }
];
//1 1 2 3 5 8 
for (const {array: list,search,index} of samples) {
    console.log(findItemAtIndex(list, 0, list.length-1, search) === index);
}

