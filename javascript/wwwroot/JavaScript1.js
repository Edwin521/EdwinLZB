//console.log('javascript');


//function getMax(num1, num2) {

//    return num1 > num2 ? num1 : num2;
//}

//console.log(getMax(2, 10));

//求数组中最大值
//function getArrMax(arr) {
//    var max = arr[0];
//    for (var i = 1; i < arr.length; i++) {
//        if (arr[i] > max) {
//            max= arr[i];
//        }
//    } return max;
//}
////getArrMax([1, 45, 76, 89, 44, 21]);
//var re = getArrMax([1, 45, 76, 99, 44, 21]);
//console.log(re);

/////用函数求任意个数的最大值
//function getMax() {
//    var max = arguments[0];
//    for (var i = 1; i < arguments.length; i++) {
//        if (arguments[i] > max) {
//            max = arguments[i];
//        }
//    }
//    return max;
//}
//console.log(getMax(1, 2, 3));
/////////利用函数封装封装翻转数组
//function reverse(arr) {
//    var newArr = [];
//    for (var i = arr.length - 1; i >= 0; i--) {
//        newArr[newArr.length] = arr[i];
//    }
//    return newArr;
//} var arr = reverse([1, 2, 3, 4, 5, 6]);
//console.log(arr);
//////函数封装冒泡排序法

//function sort(arr) {
//    for (var i = 0; i < arr.length - 1; i++) {
//        for (var j = 0; j < arr.length - 1 - i; j++) {
//            if (arr[j]>arr[j+1]) {
//                var temp = arr[j];
//                arr[j] = arr[j + 1];
//                arr[j + 1] = temp;
//            }
//        }
//    }
//    return arr;
//}
//var arr1 = sort([1, 4, 5, 7, 65, 78, 78, 90]);
//console.log(arr1);
////函数判断用户输入的年份是平年还是闰年
//function isRunYear(year) {
//    var flag = false;
//    if (year % 4 == 0 && year%100!==0) {
//        flag = true;
//    }
//    return flag;
//}
////console.log(isRunYear(2004));

//function backDay() {
//    var year = prompt('请你输入年份：');
//    if (isRunYear(year)) {
//        alert('当前的年份是闰年有29天');
//    } else {
//        alert('当前的年份是平年有28天');
//    }

//}
//backDay();
//function Star(uname, age, sex) {//构造函数 范指的某一大类
//    this.uname = uname;
//    this.age = age;
//    this.sex = sex;
//}
//var ldh = new Star('刘德华', 18, '男');
//console.log(ldh);

//var obj = {
//    name: '老师',
//    age: 14,
//    sex:'男',
//}
//console.log(obj);

////
//var myMath = {
//    PI: 3.141592653,
//   max: function() {
//        var max = arguments[0];
//        for (var i = 1; i < arguments.length; i++) {
//            if (arguments[i] > max) {
//                max = arguments[i];
//            }
//        }
//        return max;
//    }
//}
//min:function() {
//    var min = arguments[0];
//    for (var i = 1; i < arguments.length; i++) {
//        if (arguments[i] < min) {
//            min= arguments[i];
//        }
//    }
//    return min;
//}
//console.log(myMath.max(9, 8, 6));
//console.log(myMath.PI);
/////////////////////////////////////////////////


//function getRandom(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}//俩数之间的随机整数并且包括这俩数


///////随机点名调用上面函数
//var arr = ['张三', '李智博', '陈雅', '刘雪霞'];
//console.log(arr[getRandom(0, 3)]);

/////////猜数字游戏 1-1000
//function getRandom(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}
//var random = getRandom(1, 1000);
//while (true) {
//    var num = prompt('你来猜？1~1000之间的数');
//    if (num > random) {
//        alert('你猜大了')
//    } else if (num < random) {
//        alert('你猜小了');
//    } else {
//        alert('你好棒哦，你猜中了');
//        break;

//    }
//}

/////////////
//生成一个函数toChinese() ，可将传入的日期参数（如：new Date() ）转换成中文日期格式（如：2019年10月4日 16点54分） 



//弹出游戏玩法说明，等待用户点击“确认”，开始游戏；
//浏览器生成一个不大于1000的随机正整数；（Math.floor(Math.random() * 1000) ）
//用户输入猜测；
//如果用户没有猜对，浏览器比较后告知结果：“大了”或者“小了”。如果用户：

//只用了不到6次就猜到，弹出：碉堡了！
//只用了不到8次就猜到，弹出：666！
//用了8 - 10次猜到，弹出：猜到了。
//用了10次都还没猜对，弹出：^ (*￣(oo) ￣

var randomSum = Math.floor(Math.random() * 1000);
alert('随机数参考' + randomSum);

for (var i = 1; i <= 10; i++) {
    var input = '';


    alert('第' + i + '次猜测');
    input = prompt('请输入正整数');
    if (!isNaN(input)) {
        if (input != randomSum) {
            alert(input > randomSum ? '大了' : '小了');
        }
        if (input === randomSum) {
            if (i < 6) {
                alert('碉堡了');
            } else if (i < 8) {
                alert('666')
            } else if (i < 10) {
                alert('猜到了')
            } else {
                alert('你是猪吗')
            }
            break;
        }
    }
    else {
        alert('请输入正整数');
    }
}