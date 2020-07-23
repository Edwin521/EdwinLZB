

///倒计时的运用 时间戳转化为时分秒
//function conuDown(time) {
//    var nowTime = +new Date();//获得当前的时间总的毫秒数
//    var inputTime = +new Date(time);//用户输入的时间总的毫秒数
//    var times = (inputTime - nowTime) / 1000;//times是当前的总的秒数
//    var d = parseInt(times / 60 / 60 / 24);
//    d = d < 10 ? '0' + d : d;
//    var h = parseInt(times / 60 / 60 % 24);
//    h = h < 10 ? '0' + h : h;
//    var m = parseInt(times / 60 % 60);
//    m = m< 10 ? '0' + m : m;//时间位数变为两位
//    var s = parseInt(times % 60);
//    s = s < 10 ? '0' + s : s;
//    return d + '天' + h + '时' + m + '分' + s + '秒';
//}
//console.log(conuDown('2020-7-13 21:10'));
//var date = new Date();
//console.log(date);

//////利用今天新学的添加数组元素的方法重新写筛除数组元素的方法、、假如找出2000以下的数组
//var arr = [1300, 1600, 2000, 3400, 2600, 2100];
//var newArr = [];
//for (var i = 0; i < arr.length; i++) {
//    if (arr[i] < 2000) {
//        newArr.push(arr[i]);
//    }
//}
//console.log(newArr);

//function unique(arr) {
//    var newArr = [];
//    for (var i = 0; i < arr.length; i++) {
//        if (newArr.indexOf(arr[i]) === -1) {
//            newArr.push(arr[i]);
//        }
//    }
//    return newArr;
//}
//var demo = unique(['blue','green','black','white','blue','black']);
//console.log(demo);

//var arr = ['red', 'blue', 'red', 'green', 'pink', 'red'];
//var index = arr.indexOf('red');
//var num = 0;
//while (index!==-1) {
//    console.log(index);
//    num++;
//    index = arr.indexOf('red', index + 1);

//}
//console.log('red出现的次数是：' + num);

//var str = 'abcdefgaccdgfeda';
//var o = {};
//for (var i = 0; i < str.length; i++) {
//    var chars = str.charAt(i);
//    if (o[chars]) {
//        o[chars]++;
//    } else {
//        o[chars] = 1;
//    }
//}
//console.log(o);
//var max = 0;
//var ch = '';
//for(var k in o) {
//    if (o[k] > max) {
//        max = o[k];
//        ch = k;
//    }
//}
//console.log(max);
//console.log('最多的字符是：' + ch);    

//var str = 'andyanywhereanything';
//while (str.indexOf('a') !== -1) {
//    str = str.replace('a', 'b');
//}
//console.log(str);


