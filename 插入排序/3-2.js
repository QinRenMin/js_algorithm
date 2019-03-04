/*
* 二分法插入排序
* */
let arr = [10,32,4,67,86,11,23];
function binaryInsertionSort(arr) {
    for(let i = 1; i < arr.length-1; i++) {
        let left = 0;
        let right = arr.length-1;
        let key  = arr[i];
        while (left <= right) {
            let middle = parseInt((left + right) / 2);
            if (key < arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        for (let j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }
        arr[left] = key;
        console.log(arr)
    }
    return arr;
}
console.log(binaryInsertionSort(arr));