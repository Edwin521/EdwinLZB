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



//将源栈同学姓名装入数组，再根据该数组输出所有同学，

//var students = ['阿博', '王胖子', '阿泰', '啊平'];
//for (var i = 0; i < students.length; i++) {
//    console.log(students[i]);
//}


//alert(students);




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





//输入三角形的边长，判断这三角形能否构成三角形。
//var a = 1;
//var b = 2;
//var c = 3;
//if ((a + b > c) && (a + c > b) && (b + c > a)) {
//    alert('是三角形');
//} else {
//    alert('不是三角形');
//}


//根据用户输入的月份输出季节
//var month = prompt('');
//switch (month) {
//    case '3':
//    case '4':
//    case '5':
//        alert('春季');
//        break;
//    case '6':
//    case '7':
//    case '8':
//        alert('夏季');
//        break;
//    case '9':
//    case '10':
//    case '11':
//        alert('秋季');
//        break;
//    case '12':
//    case '1':
//    case '2':
//        alert('冬季');
//        break;
//    default:
//        alert('0o0');
//        break;
//}
//用户输入工资后，工资大于1000的部分收0.05%的税，计算输出税后工资
//var num = prompt('请输入公资');
//var s ;
//if (num > 1000) {
//    s = (num - 1000) * 0.05;
//} else {
//    s=0
//}
//var money = num - s;
//alert('税后工资为：' + money);

// 请编写程序完成个人所得税计算。个税免征额3500元（工资薪金所得适用）
//级数 全月应纳税所得额全月 税率(%) 速算扣除数
//1 不超过1, 500元 3 0
//2 超过1, 500元至4, 500元的部分 10 105
//3 超过4, 500元至9, 000元的部分 20 555
//4 超过9, 000元至35, 000元的部分 25 1, 005
//5 超过35, 000元至55, 000元的部分 30 2, 755
//6 超过55, 000元至80, 000元的部分 35 5, 505
//7 超过80, 000元的部分 45 13, 505
//例如：某人某月工资减去社保个人缴纳金额和住房公积金个人缴纳金额后为5500元，
//个税计算：(5500 - 3500) * 10 % -105=95元
//计算个税和到手工资

//var num = prompt('请输入工资：');
//var s;//个人税费
//var money;//到手工资
//if (num > 3500) {
//    var m1 = num - 3500;//应该缴税的工资部分
//    if (m1 > 80000) {
//        s = m1 * 0.45 - 13505;
//    } else if (m1 > 55000) {
//        s = m1 * 0.35 - 5050;
//    } else if (m1 > 35000) {
//        s = m1 * 0.3 - 2755;
//    } else if (m1 > 9000) {
//        s = m1 * 0.25 - 1055;
//    } else if (m1 > 4500) {
//        s = m1 * m1 * 0.2 - 555;
//    } else if (m1 > 1500) {
//        s = m1 * 0.1 - 105;
//    } else if (m1 > 0) {
//        s = m1 * 0.03 - 30;
//    } else {
//        a = 0
//    }

//}
//money = num - s;
//alert('个税为；' + s);
//alert('税后工资为' + money);


/////

//////声明一个数组odds，利用循环把100以内的奇数按从小到大的顺序存入其中 
var odds = [];
for (var i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        odds[i] = i;
    }
}
console.log(odds);
////计算从odds数组中所有元素的和
//var sum = 0;
////sum=




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

////找到数组中的最小值
//var min = numbers[i];
//for (var i = 0; i < numbers.length; i++) {
//    if (min < numbers[i]) {
//        min = numbers[i];
//    }
//}
//console.log(min);