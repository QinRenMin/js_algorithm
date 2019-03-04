/*

* 既然每次记录位置可以减少计算，两头算双管齐下也能减少计算，
* 那么思考，如果每次记录位置而且还两头算是不是会更加省事呢？
*
* */

let arr = [10,32,4,67,86,11,23];
let low = 0;
let high = arr.length - 1;
function bubbleSort3(arr) {
    let posHigh = 0;
    let posLow = 0;
    while (low < high) {
        for(let j = 0; j < high; j++){
            if(arr[j] > arr[j+1]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
                posHigh = j;
            }
        }
        high  = posHigh; //high值向前移动一位
        for (let i = high; i > low; i--){
            if(arr[i] < arr[i-1]){
                [arr[i-1],arr[i]] = [arr[i],arr[i-1]];
                posLow = i;
            }
        }
        low = posLow; //low值向前移动一位
        // console.log(arr);
    }
    return arr;

}
console.log(bubbleSort3(arr));