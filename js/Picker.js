class Picker {
    // 构造函数
    constructor(param) {
        this.config = param;
        this.rootNode = null;
        this.ul = null;
        this.ulHeight = undefined;
        this.lis = null;
        this.liHeight = undefined;
        this.spaceHeight = undefined;
        this.init();
    }

    // 初始化函数
    init() {
        // 获取相关的DOM元素
        this.rootNode = document.getElementById(this.config.rootContainer);
        this.ul = document.getElementById(this.config.root_ul);
        this.ulHeight = this.rootNode.style.height;
        // console.log(this.ulHeight);
        this.lis = document.querySelectorAll("#" + this.config.root_ul + " .scroll_li");
        this.liHeight = this.lis[0].clientHeight; // 获取不了li的高度
        this.spaceHeight = document.querySelectorAll("#" + this.config.root_ul + " .scroll_space")[0].clientHeight; 
        console.log(this.spaceHeight);//高度都获得不了
        // 默认选中第一个li
        this.changeStyle(1);
    }



    //scrollheight
    //scrolltop
    //ul的属性
    //li的属性
    //可通过ul和li知道留空的高度 也可以直接通过ul获取留空的属性
    //scrolltop 在相邻元素一半的距离为分界线，改变相应的样式
    //// 去掉顶部的留白,元素高做商 和 余数 决定序号余数大于一半 额外加一

    // 在滑动过程当中修改样式
    changeStyle(index) {
        var lis = document.querySelectorAll("#" + this.config.root_ul + " li");
        // console.log(lis.length);
        if (lis[index]) {
            lis[index].style.opacity = "1";
        }
        if (lis[index - 1]) {
            lis[index - 1].style.opacity = "0.6";
        }
        if (lis[index - 2]) {
            lis[index - 2].style.opacity = "0.6";
        }
        if (lis[index - 3]) {
            lis[index - 3].style.opacity = "0.6";
        }
        if (lis[index + 1]) {
            lis[index + 1].style.opacity = "0.6";
        }
        if (lis[index + 2]) {
            lis[index + 2].style.opacity = "0.6";
        }
        if (lis[index + 3]) {
            lis[index + 3].style.opacity = "0.6";
        }
    }

    // 获取当前选择的li的内容
    getLiIndex() {
        let ulScrollTop = this.ul.scrollTop; // 获取ul元素的scrollTop
        console.log(ulScrollTop);
        let num = (ulScrollTop - this.spaceHeight) / this.liHeight +
            (ulScrollTop - this.spaceHeight) % this.liHeight > 0.5 * this.liHeight ?
            1 : 0;
        num = num + 1;//spaceli
        
        return num
    }
    // 监听ul的停止滑动事件
    end() {
        this.changeStyle(this.getLiIndex());
    }

    // 监听ul的滑动事件
    move() {
        this.changeStyle(this.getLiIndex());
    }
}