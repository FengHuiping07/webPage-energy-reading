window.onload = function () {

    var oWrap = document.getElementsByClassName("wrap")[0];
    var oTextarea = document.getElementsByTagName("textarea")[0];
    var oBtn = document.getElementsByClassName("setout")[0];
    var oUl = document.getElementsByClassName("comment")[0];
    var errMsg = document.getElementsByClassName("errmsg")[0];
    var oA = document.getElementsByClassName("delete");

    oBtn.onclick = function () {
        var t = new Date();
        var Year = t.getFullYear();
        var Month = t.getMonth() + 1;
        var Day = t.getDate();
        var Hours = t.getHours();
        var Minutes = t.getMinutes();
        var Scondes = t.getSeconds();
        var timers = toString(Year) + "年" + toString(Month) + "月" + toString(Day) + "日" + toString(Hours) + ":" + toString(Minutes) + ":" + toString(Scondes);//将获取到的日期对象拼接。
        //console.log(timers);

        function toString(n)//数字转字符串
        {
            if (n < 9) {
                n = "0" + n;
            }
            else {
                n = "" + n;
            }
            return n;
        };

        startMove(errMsg, { opacity: 0 });
        if (oTextarea.value == "") {
            startMove(errMsg, { opacity: 100 });
            //console.log(errMsg.style.opacity)
            oTextarea.select();
        }
        else {
            var aLi = document.createElement("li");
            var aSpan = document.createElement("span");
            //console.log(aLi);
            //console.log(aSpan);
            //oUl.appendChild(aLi);
            //aLi.appendChild(aSpan);
            aLi.innerHTML = oTextarea.value;
            aSpan.innerHTML = timers + "<a href='javascript:;'class='delete' title='删除这条信息'>删除</a>";
            //aSpan.innerHTML="<a href='javascript:;'>删除</a>"
            if (oUl.children.length > 0) {
                oUl.insertBefore(aLi, oUl.children[0]);
                aLi.appendChild(aSpan);
                oTextarea.value = "";
            }
            else {
                oUl.appendChild(aLi);
                aLi.appendChild(aSpan);
                oTextarea.value = "";
            };
            var aLiHeight = parseInt(getStyle(aLi, "height"));
            //console.log(aLiHeight);
            aLi.style.height = "0";
            startMove(aLi, { height: aLiHeight }, function () {
                startMove(aLi, { opacity: 100 });
            });
            delLi();//添加数据后加载删除模块	
        }
    };

    function delLi() {
        for (var i = 0; i < oA.length; i++) {
            oA[i].onclick = function () {
                liNode = this.parentNode.parentNode//获取到当前A标签的父节点，也就是LI
                var aLiHeight = parseInt(getStyle(liNode, "height")) + 1;
                //console.log(aLiHeight);
                //链式运动操作：先进行透明化，再进行高度变小，最后删除DOM元素
                startMove(liNode, { opacity: 0 }, function () {
                    startMove(liNode, { height: 0 }, function () {
                        oUl.removeChild(liNode);
                    });
                });
            }
        }
    }
    waterFall('floatBox', 'item');//调用函数
};

//运动框架
function startMove(obj, json, endFn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(
        function () {
            var iStop = true;
            for (var curr in json) {
                var oNumber = 0;
                if (curr == "opacity") {
                    oNumber = Math.round(parseFloat(getStyle(obj, curr)) * 100);
                }
                else {
                    oNumber = parseInt(getStyle(obj, curr));
                }
                var speed = (json[curr] - oNumber) / 6;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (oNumber != json[curr])
                    iStop = false;
                if (curr == "opacity") {
                    obj.style.filter = "alpha(opacity:" + (oNumber + speed) + ")";
                    obj.style.opacity = (oNumber + speed) / 100;
                }
                else {
                    obj.style[curr] = oNumber + speed + "px";
                }
            };
            if (iStop) {
                clearInterval(obj.timer);
                if (endFn) endFn();
            }
        }, 30);
};

//获取非行间样式
function getStyle(obj, name) {
    if (obj.currentStyle) {
        obj = currentStyle[name];
    }
    else {
        obj = getComputedStyle(obj, false)[name];
    }
    return obj;
};


// window.onload = function () {
//     waterFall('main', 'item');//调用函数
// }

//网页大小改变时同样调用函数
window.onresize = function () {
    waterFall('floatBox', 'item');
}

//暂时使用本地数据
var dataInt = {
    "data": [{ "src": "img/picture.jpg" }, { "src": "img/picture10.jpg" }, { "src": "img/picture01.jpg" }, { "src": "img/picture02.jpg" }, { "src": "img/picture03.jpg" }, { "src": "img/picture04.jpg" }, { "src": "img/picture05.jpg" }, { "src": "img/picture06.jpg" }, { "src": "img/picture07.jpg" }, { "src": "img/picture01.jpg" }, { "src": "img/picture09.jpg" }, { "src": "img/picture10.jpg" }, { "src": "img/picture12.jpg" },
    { "src": "img/picture13.jpg" }, { "src": "img/picture14.jpg" }, { "src": "img/picture15.jpg" }, { "src": "img/picture.jpg" }, { "src": "img/picture05.jpg" }, { "src": "img/picture03.jpg" },
    ],
    "descripition": ["hahahaha", "hahhahahah", "哈哈哈", "哈哈哈", "hahahaha", "hahhahahah", "哈哈哈", "哈哈哈", "hahahaha", "hahhahahah", "哈哈哈", "哈哈哈", "哈哈哈", "哈哈哈", "hahahaha", "hahhahahah", "哈哈哈", "哈哈哈",]
}
function creDom(fn) {
    var cache;
    return function () {
        //对于动态创建的元素如果不为空则返回cache，否则返回原来的已经创建好的
        return cache || (cache = fn.apply(this, arguments))
    }
}
var dom = creDom(btn)
//创建按钮
function btn(html) {
    this.html = html
    this.btn = document.createElement('button')
    this.btn.innerText = this.html
    document.body.appendChild(this.btn)
    return this
}
window.onscroll = function () {//滚动事件
    if (fnScroll()) {//当满足条件时触发
        dom('加载更多');
        btn.onclick = function () {
            var oParent = document.getElementById('floatBox');
            for (var i = 0; i < dataInt.data.length; i++) {
                var aChild = document.createElement('div');
                aChild.className = 'item';
                oParent.appendChild(aChild);
                var oBox = document.createElement('div');
                oBox.className = 'pic';
                aChild.appendChild(oBox);
                var oImg = document.createElement('img');
                oImg.src = dataInt.data[i].src;
                oBox.appendChild(oImg)
                var aText = document.createElement('p');
                aText.className = 'desc';
                aChild.appendChild(aText);
                aText.innerText = dataInt.descripition[i];

            }
            //待图片加载完成之后再调用函数
            oImg.onload = function () {
                waterFall('floatBox', 'item')
            }

        }

    }
}

function waterFall(parent, child) {
    console.log(1111)
    //父级
    var oParent = document.getElementById(parent),
        //子集（IE9以下不支持getElementsByClassName）
        aChild = oParent.getElementsByClassName(child),
        //原生offsetWidth,包括padding。
        oneWidth = aChild[0].offsetWidth,
        // 网页宽度/一个元素宽度=列数，Math.floor()表示向下取整。
        cols = Math.floor((document.documentElement.clientWidth || document.body.clientWidth) / oneWidth),
        //声明一个空数组来存储每一列的高度
        aHeight = [];
    console.log(oParent);

    for (var i = 0; i < aChild.length; i++) {
        //i < cols表示是第一行的元素
        if (i < cols) {
            // 第一行top为0
            aChild[i].style.top = 0;
            // 第一行left=下标*一个元素的宽度
            aChild[i].style.left = i * oneWidth + 'px';
            // 把第一行每个的高度存进aHeight数组中
            aHeight[i] = aChild[i].offsetHeight;
        } else {
            // 使用Math.min.apply()得到数组中的最小数，即第一行高度最矮的
            var minHeight = Math.min.apply(null, aHeight),
                // 获取对应的下标（IE8以上）
                minIdx = aHeight.indexOf(minHeight);
            console.log(minIdx);
            // 定位，top为上一行最小的高度值
            aChild[i].style.top = minHeight + 'px';
            // left为对应下标*一个元素宽度
            aChild[i].style.left = minIdx * oneWidth + 'px';
            //更新数组，总是最小高度的一列加上后面的元素的高度。
            aHeight[minIdx] += aChild[i].offsetHeight;
        }//样式布局完成
    }
    var maxHeight = Math.max.apply(null, aHeight);
    //因为是绝对定位absolute，所以父级没有高度，需要取最高的一列的高度给父级
    oParent.style.height = maxHeight + 'px';
    //设置父级宽度
    oParent.style.width = cols * oneWidth + 'px';
}

function fnScroll() {
    var oParent = document.getElementById('floatBox'),//父级
        aChild = oParent.getElementsByClassName('item');
    //兼容写法，获取scrollTop
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
        //视窗高度（即看到的一屏的高度）
        viewHeight = document.documentElement.clientHeight,
        //最后一个子元素距离网页顶部+自身高度的一半，实现未滚动到底就开始加载
        lastTop = aChild[aChild.length - 1].offsetTop + Math.floor(aChild[aChild.length - 1].offsetHeight / 2);
    //到达指定高度后 返回true，触发waterfall()函数 //如果满足条件返回true，否则返回false
    return (lastTop < scrollTop + viewHeight) ? true : false;
}

