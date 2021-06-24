class TimePicker {
    // 构造函数
    constructor(param) {
        this.config = param;
        this.rootNode = null;
        this.ul = null;
        this.ulHeight = undefined;
        this.lis = null;
        this.liHeight = undefined;
        this.spaceli = undefined;
        this.spaceHeight
        this.init();
    }

    // 初始化函数
    init() {
        // 获取相关的DOM元素
        this.rootNode = document.getElementById(this.config.rootContainer);
        this.ul = document.getElementById(this.config.root_ul);
        this.ulHeight = this.ul.style.height;
        this.lis = document.querySelectorAll("#" + this.config.root_ul + " .scroll_li");
        console.log(this.lis.length);
        this.liHeight = this.lis[0].clientHeight; // 获取一个li的高度
        // 默认选中第一个li
        this.changeStyle(1);
        this.spaceli = document.querySelector('#' + this.config.root_ul + ' .scroll_space')
        this.spaceHeight = this.spaceli.style.height;
    }

    // 监听ul的停止滑动事件
    end() {
        let ulScrollTop = this.ul.scrollTop; // 获取ul元素的scrollTop
        let num = (ulScrollTop - this.spaceHeight) / this.liHeight +  
            (ulScrollTop - this.spaceHeight) % this.liHeight > 0.5 * this.liHeight ?
            1 : 0;
        let nowNum = num + 1;//spaceli
        this.changeStyle(nowNum);
    }

    // 监听ul的滑动事件
    move() {
        let ulScrollTop = this.ul.scrollTop; // 获取ul元素的scrollTop
        let num = (ulScrollTop - this.spaceHeight) / this.liHeight +  
            (ulScrollTop - this.spaceHeight) % this.liHeight > 0.5 * this.liHeight ?
            1 : 0;
        let nowNum = num + 1;//spaceli
        this.changeStyle(nowNum); // 改变当前li，以及li上下两个li的样式
    }

    //scrollheight
    //scrolltop
    //ul的属性
    //li的属性
    //可通过ul和li知道留空的高度 也可以直接通过ul获取留空的属性
    //scrolltop 在相邻元素一半的距离为分界线，改变相应的样式
    //// 去掉顶部的留白,元素高做商 和 余数 决定序号余数大于一半 额外加一
    
    // 在滑动过程当中修改样式
    changeStyle(nowNum) {
        var lis = this.ul.getElementsByTagName("li");
        // console.log(lis.length);
        if (lis[nowNum]) {
            lis[nowNum].style.opacity = "1";
        }
        if (lis[nowNum - 1]) {
            lis[nowNum - 1].style.opacity = "0.6";
        }
        if (lis[nowNum - 2]) {
            lis[nowNum - 2].style.opacity = "0.6";
        }
        if (lis[nowNum - 3]) {
            lis[nowNum - 3].style.opacity = "0.6";
        }
        if (lis[nowNum + 1]) {
            lis[nowNum + 1].style.opacity = "0.6";
        }
        if (lis[nowNum + 2]) {
            lis[nowNum + 2].style.opacity = "0.6";
        }
        if (lis[nowNum + 3]) {
            lis[nowNum + 3].style.opacity = "0.6";
        }
    }

    // 获取当前选择的li的内容
    getData() {
        let ulScrollTop = this.ul.scrollTop; // 获取ul元素的scrollTop
        let newHeght = ; // 获取到目前的滚动高度，计算出当前的li
        let nowNum = newHeght / this.liHeight + 1;
        return nowNum
    }
}