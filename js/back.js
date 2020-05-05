var pos = 0;
var showBack = document.getElementsByClassName("back")[0];

var up = document.getElementById("up");
var key = false;

window.addEventListener("scroll", function (e) {
  pos = window.scrollY;
  console.log(pos);
  if (pos >= 160 && !key) {
    showBack.style.display = 'block';
    key = true;
  }
  if (pos < 160 && key) {
    showBack.style.display = 'none';
    key = false; 
  }
  (function(){
    var timer = null;
    //绑定回到顶部按钮的点击事件
    up.onclick = function(){
      //动画效果，平滑回到顶部
      clearInterval(timer);
      timer = setInterval(function(){
        pos -= 50;
        pos <= 0 && clearInterval(timer) && (pos = 0);
        document.documentElement.scrollTop = pos;
      }, 1000/60)
    }
  })()
})