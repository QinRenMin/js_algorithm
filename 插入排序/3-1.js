
/*
*
*那么就假定第一个就是最小值，然后取第二个值与第一个值比较产排序后的序列，
* 然后再取第三个值与排序后的序列进行比较插入到对应的位置，依次类推。
* */
let arr = [10,32,4,67,86,11,23];

function  insertionSort(arr) {
    for(let  i = 1; i < arr.length-1; i++){
        let key = arr[i]; //保留当前要比较的值
        let j = i - 1;
        while (arr[j] > key){
            arr[j+1] = arr[j]; //向后移动
            j--;
        }
        arr[j+1] = key;
        console.log(arr)
    }
    return arr;
}

console.log(insertionSort(arr));