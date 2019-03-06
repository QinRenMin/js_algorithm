let arr = [10,32,4,67,86,11,23];


let quickSort2 = function(arr) {
    if (arr.length <= 1) { return arr; }
    let  pivotIndex = Math.floor(arr.length / 2);
    let  pivot = arr.splice(pivotIndex, 1)[0];
    console.log(pivot);
    let  left = [];
    let  right = [];
    for (let  i = 0; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort2(left).concat([pivot], quickSort2(right));
};
console.log(quickSort2(arr));