function quickSort(array, left, right) {

    if (left < right) {
        let x = array[right], i = left - 1, temp;
        for (let j = left; j <= right; j++) {
            if (array[j] <= x) {
                i++;
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        console.log(array) ;
        console.log('left ' +left,i) ;
        quickSort(array, left, i - 1);
        console.log(array);
        console.log("right "+i,right);
        quickSort(array, i + 1, right);
    }

    console.log(array);
    return array;
}
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort(arr,0,arr.length-1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];