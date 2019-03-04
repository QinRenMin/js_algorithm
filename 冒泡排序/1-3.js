/*
* 双向寻找
* 正向冒泡，找到最大的
* 反向冒泡，找到最小的
*
* */
let arr = [10,32,4,67,86,11,23];
let low = 0;
let high = arr.length - 1;
function bubbleSort3(arr) {
    while (low < high) {
        for(let j = 0; j < high; j++){
            if(arr[j] > arr[j+1]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
            }
        }
        high--; //high值向前移动一位
        for (let i = high; i > low; i--){
            if(arr[i] < arr[i-1]){
                [arr[i-1],arr[i]] = [arr[i],arr[i-1]];
            }
        }
        low++; //low值向前移动一位
        console.log(arr);
    }
    return arr;

}
console.log(bubbleSort3(arr));