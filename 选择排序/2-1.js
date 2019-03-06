/*
* 选择排序就是选择一个合适的数字，放到合适的空间里
* 找到符合要求的数字下标位置，然后和当前的位置进行交换
* */
let arr = [10,32,4,67,86,11,23];

function selectionSort(arr) {
    let minIndex = 0;
    for(let i = 0; i < arr.length - 1;i++){
            minIndex = i;
            for( let j = i+1; j < arr.length; j++){
                if(arr[minIndex] > arr[j]){
                    minIndex = j;
                }
            }
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];

    }
    return arr;
}
console.log(selectionSort(arr));