// myPicker.getTime()函数会返回当前选择的小时
// let btn = document.getElementById("btn");
// btn.onclick = function(){
//     //myPicker.getData();
// };

const yearPicker = new Picker({
    rootContainer: "yearContainer", // 最外层容器的id
    root_ul: "year_ul", // 滑动ul的id
    spaceHeight: "10"
});

// 为ul绑定ontouchend和ontouchmove事件
let year_ul = document.getElementById("year_ul");
year_ul.ontouchend = function () {
    yearPicker.end();
};
year_ul.ontouchmove = function () {
    yearPicker.move();
};

// 创建对象,传入所需的参数
const monthPicker = new Picker({
    rootContainer: "monthContainer", // 最外层容器的id
    root_ul: "month_ul", // 滑动ul的id
    spaceHeight: "10"
});

// 为ul绑定ontouchend和ontouchmove事件
let month_ul = document.getElementById("month_ul");
month_ul.ontouchend = function () {
    monthPicker.end();
};
month_ul.ontouchmove = function () {
    monthPicker.move();
};


const dayPicker = new Picker({
    rootContainer: "dayContainer", // 最外层容器的id
    root_ul: "day_ul", // 滑动ul的id
    spaceHeight: "10"
});

// 为ul绑定ontouchend和ontouchmove事件
let day_ul = document.getElementById("day_ul");
day_ul.ontouchend = function () {
    dayPicker.end();
};
day_ul.ontouchmove = function () {
    dayPicker.move();
};

const marryPicker = new Picker({
    rootContainer: "marryContainer", // 最外层容器的id
    root_ul: "marry_ul", // 滑动ul的id
    spaceHeight: "10"
});

// 为ul绑定ontouchend和ontouchmove事件
let marry_ul = document.getElementById("marry_ul");
marry_ul.ontouchend = function () {
    marryPicker.end();
};
marry_ul.ontouchmove = function () {
    marryPicker.move();
};

