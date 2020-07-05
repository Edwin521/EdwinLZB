//alert("if you think you can .then you can.");

////声明一个变量sname，表示同学的姓名；通过更改变量值，弹出至少3个同学的姓名 
//var sname = "李智博";
//alert(sname);
//sname = "王胖子";
//alert(sname);
//sname = "阿泰";
//alert(sname);
//sname = "啊平";
//alert(sname);


//设置一个常量password，保存你的密码
//const password = "4936512";

//设计一段代码，实现以下逻辑
//某用户有一定数量的帮帮豆（sum）
//每点赞一次就会消耗若干帮帮豆（consume）
//现在用户点赞若干次（count）
//计算用户剩余了多少帮帮豆（banlance）并用bool值显示他是否还有帮帮豆（isAvailable）


//var sum = 100,
//    consume = 10,
//    count = 2,
//    banlance = sum - (consume * count),
//    isAvailable = banlance > 0;
//console.log(isAvailable);




//观察“一起帮”的求助，定义一个problem对象，其中包含title、body、reward、needRemote等属性

//var problem = {
//    title: "我的JavaScript实例",
//    body: "源栈真好，飞哥真牛逼。",
//    reward: "11",
//    needRemont: "true",


//利用循环，计算出100以内奇数的和。

//var i = 1, sum = 0;
//do {
//    console.log(i);
//    sum = i + sum;
//    i = i + 2
//} while (i <= 100);
//console.log(sum);

/////利用循环，计算出100以内偶数的和。

//var i = 0, sum = 0;
//do {
//    console.log(i);
//    sum = i + sum;
//    i = i + 2;
//} while (i <= 100);
//console.log(sum);



////用js判断一个数是不是质数

//var num = 77;
//    for (var i = 2; i < num / 2 + 1; i++) {
//        if (num % i == 0) {
//            console.log(false);
//      break;
//        }
//     }




////用switch...case将代号转化成文字
//var code = 3;
//switch (code) {
//    case 0:
//        console.log("访客");
//        break;
//    case 1:
//        console.log("注册用户");
//        break;
//    case 2:
//        
//    case 3:
//        console.log("s管理者");
//        break;
//    default:
//        console.log("出错啦！");
//        break;
//}

////写一段代码，能根据一起帮用户的帮帮点（bCredit）输出他对应的等级
//var bCredit = 0;
//bCredit >= 0;
//if (bCredit > 30) {
//    console.log('入门');
//} else if (bCredit > 100) {
//    console.log('聚气');
//} else if (bCredit > 200) {
//    console.log('凝水');

//}

/////////////////////////////////////////////////////

//将源栈同学姓名装入数组，再根据该数组输出所有同学，以及共有多少位同学

//var array= ['阿博', '王胖子', '阿泰', '啊平'];
//alert(array);
//console.log(array.length);


///////////////////////////////////////




//实现冒泡排序法
//var numbers = [1, 3, 45, 5, 7, 61, 5, 4, 32, 65, 81];
//for (var i = 0; i < numbers.length; i++) {
//    for (var j = 0; j < numbers.length - i; j++) {
//        if (numbers[j] > numbers[j+1]) {
//            var temp = numbers[j];
//            numbers[j] = numbers[j + 1];
//            numbers[j + 1] = temp;


//        }
//    }
//}








//////////////////////////////////////////

//////声明一个数组odds，利用循环把100以内的奇数按从小到大的顺序存入其中 
//var odds = [];
//var j = 0;
//for (var i = 1; i < 100; i++) {
//    if (i % 2 !== 0) {
//        odds[j] = i;
//        j++;
//    }
//}
//console.log(odds);


//////////////////////////////////////////
//////计算从odds数组中所有元素的和
//var sum = 0;
//for (var i = 1; i < odds.length; i++) {
//    sum += odds[i];
//}
////////////////////////////////

///////////找到数组中的最小值
//////假设当前数组中的第一个值是最大值，然后拿这个最大值和后面的项逐一比较，如果后面的某一个值比假设的值还大，说明假设错了，我们把假设的值进行替换
//var min = odds[0];
//for (var i = 0; i < odds.length; i++) {
//    var cute = odds[i];
//    cute < min ? min = cute : null;
//}
//console.log(min);

//var min = odds[0];
//for (var i = 1; i < odds.length; i++) {
//    if (min > odds[i]) {
//        min = odds[i];
//    }
//}
//console.log(min);


////////////去除一个数组中重复的值
///////(网上看的利用ES6的Set数据结构去重，Set类似数组，但里面的元素不重复)
var arr = [1, 3, 2, 3, 4, 6, 6, 77, 55, 43, 2, 1, 3, 44, 5];
var arrs = [...new Set(arr)];
console.log(arrs, arrs instanceof Array);


////输出1000以内的所有“素数
//var i, j, m;
//for (i = 0; i <1000; i++) {
//    for (m = 1, j = 2; j < i; j++)
//        if (i % j == 0) {
//            m = 0; break;
//        }
//    if (m == 1) {
//        console.log(i);

//    }

//}

