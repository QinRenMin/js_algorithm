let arr = [10,32,4,67,86,11,23];

function shellSort(arr) {
    let len = arr.length,
        temp,
        gap = 1;

    while(gap < len/5) { //动态定义间隔序列
        gap =gap*5+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/5)) {
        for (let i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }

    return arr;
}
console.log(shellSort(arr));