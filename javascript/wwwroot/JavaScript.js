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
//    isAvailable;

//if (banlance > 0) {
//    isAvailable = true
//    console.log(isAvailable);
//} else {
//    isAvailable = false
//    console.log(isAvailable);
//}
//观察“一起帮”的求助，定义一个problem对象，其中包含title、body、reward、needRemote等属性

//var problem = {
//    title: "我的JavaScript实例",
//    body: "源栈真好，飞哥真牛逼。",
//    reward: "奖励你一个帮帮币",
//    needRemont: "需要远程协助",


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
//function isPrimeNum(num) {
//    for (var i = 2; i < num / 2 + 1; i++) {
//        if (num % i == 0) {
//            console.log(false);
//        }
//    }
//}
//console.log(true);

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
//        console.log("管理者");
//        break;
//    case 3:
//        console.log("超级管理者");
//        break;
//    default:
//        console.log("出错啦！");
//        break;
//}

////写一段代码，能根据一起帮用户的帮帮点（bCredit）输出他对应的等级
//var bCredit=0;

//switch (bCredit) {
//    case 30:
//        console.log('入门');
//        break;
//    case 100:
//        console.log('聚气');
//        break;
//    case 200:
//        console.log('凝水');
//        break;
//    case 700:
//        console.log('萌芽');
//        break;
//    case 1500:
//        console.log('单叶');
//        break; 
//    case 3000:
//        console.log('双叶');
//        break;
//    case 5000:
//        console.log('蓓蕾');
//        break;
//    case 10000:
//        console.log('花开');
//        break;
//    case 20000:
//        console.log('宝宝');
//        break;
//    case 50000:
//        console.log('金童/玉女');
//        break;
//    default:
//        console.log('输入有误');
//        break;
//}


//将源栈同学姓名装入数组，再根据该数组输出所有同学，
var students = ['阿博', '王胖子', '阿泰', '啊平'];
for (var i in students) {
    document.write(i + ':' + students[i] + '<br>');
   
}