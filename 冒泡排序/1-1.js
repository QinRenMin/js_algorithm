/*
*相邻元素两两对比
* */
let arr = [10,32,4,67,86,11,23];
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-1; j++){
                if(arr[j] > arr[j+1]){
                    [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
                    console.log(i,j);
                    console.log(arr);
                }
        }
    }
    return arr;
}
console.log(bubbleSort(arr));