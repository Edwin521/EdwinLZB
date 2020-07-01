alert("if you think you can .then you can.");

//声明一个变量sname，表示同学的姓名；通过更改变量值，弹出至少3个同学的姓名 
var sname = "李智博";
alert(sname);
sname = "王胖子";
alert(sname);
sname = "阿泰";


//设置一个常量password，保存你的密码
const password = "4936512";

//设计一段代码，实现以下逻辑
//某用户有一定数量的帮帮豆（sum）
//每点赞一次就会消耗若干帮帮豆（consume）
//现在用户点赞若干次（count）
//计算用户剩余了多少帮帮豆（banlance）并用bool值显示他是否还有帮帮豆（isAvailable）



//var sum = x;
//consume = y;
//count = z;
//banlance = x -(y*z);
//if (banlance > 0) {
//    console.log(true);
//} else {
//    console.log(false);
//}

var sum = 100,
    consume = 10,
    count = 2,
    banlance = sum - (consume * count),
    isAvailable;
//sum = x;
//consume = y;
//count = z;
//banlance = x-(y*z);
if (banlance > 0) {
    isAvailable = true
    console.log(isAvailable);
} else {
    isAvailable = false
    console.log(isAvailable);
}
//观察“一起帮”的求助，定义一个problem对象，其中包含title、body、reward、needRemote等属性

var problem = {
    title: "我的JavaScript实例",
    body: "源栈真好，飞哥真牛逼。",
    reward: "奖励你一个帮帮币",
    needRemont:"需要远程协助",


}

