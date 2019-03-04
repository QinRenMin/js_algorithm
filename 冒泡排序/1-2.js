/*
* 也就是说每一层排完序之后，
* 就记录排到最大的哪一位在什么位置，
* 因为每一层最大的数就是它所在数组的倒数的位数，
* 因此下一次就没必要再循环一遍，相对于第一种就少进行了很多计算。
* */
let arr = [10,32,4,67,86,11,23];
let i = arr.length-1;
function bubbleSort2(arr) {

    while (i > 0) {
        let pos = 0; //每一趟开始时无须交换位置
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]){
                pos = j;//记录交换的位置
                console.log(j+',');
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
            }
        }
        i = pos;//为下一趟排序做准备

        console.log(i);
    }

    return arr;
}
console.log(bubbleSort2(arr));