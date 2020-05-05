
var header = document.getElementsByClassName("header")[0];
var search = document.getElementsByClassName("top-search")[0];
var pos = 0;
var showBack = document.getElementsByClassName("back")[0];
var up = document.getElementById("up");
var key = false;

window.addEventListener("scroll", function (e) {
  pos = window.scrollY;
  console.log(pos);
  if (pos >= 160 && !key) {
    header.classList.add("scrolledDown");
    search.style.display = 'block';
    showBack.style.display = 'block';
    key = true;
  }
  if (pos < 160 && key) {
    header.classList.remove("scrolledDown");
    search.style.display = 'none';
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




var sortBookTitle = document.getElementsByClassName("sortBook");
var sortBookItem = document.getElementsByClassName("item");

for( var i=0 ;i < sortBookTitle.length; i++){
  (function(i){
    sortBookTitle[i].onclick = function (j){
      classRemove(sortBookTitle,"sortBook-active");
      this.classList.add("sortBook-active");
      classRemove(sortBookItem,"active");      
      sortBookItem[i].classList.add("active");
    }
  })(i)
}
function classRemove(arry,className){
  for(var i = 0; i < arry.length; i++ ){
    arry[i].classList.remove(className);
  }
}




