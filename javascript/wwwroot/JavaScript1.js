//console.log('javascript');


//function getMax(num1, num2) {

//    return num1 > num2 ? num1 : num2;
//}

//console.log(getMax(2, 10));

//求数组中最大值
function getArrMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max= arr[i];
        }
    } return max;
}
//getArrMax([1, 45, 76, 89, 44, 21]);
var re = getArrMax([1, 45, 76, 99, 44, 21]);
console.log(re);