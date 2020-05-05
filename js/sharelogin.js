var oShareWapper = document.getElementsByClassName("share-wrapper")[0];
var personal = document.getElementsByClassName("personal")[0];
personal.onclick = function(){
  oShareWapper.innerHTML = "<div class='shareBox'><h3>扫码登录即可同步蚂蚁森林能量呦~</h3>\
<div class='demo'>\
  <div class='box'>\
      <div class='shareContent-top'>\
          <span>打开支付宝扫一扫</span>\
          <a href='#' id='close'></a></div>\
      <div class='loginBox'></div>\
      <div class='shareContent'>\
      <span>继续点我即可分享继续获取你的能量</span>\
      <ul>\
              <li title='分享到QQ空间'>\
                  <a href='javascript:void(0)' class='share1'></a>\
                  <span></span></li>\
              <li title='分享到新浪微博'>\
                  <a href='javascript:void(0)' class='share2'></a>\
                  <span></span></li>\
              <li title='分享到人人网'>\
                  <a href='javascript:void(0)' class='share3'></a>\
                  <span></span></li>\
              <li title='分享到朋友圈'>\
                  <a href='javascript:void(0)' class='share4'></a>\
                  <span></span></li>\
              <li title='分享到腾讯微博'>\
                  <a href='javascript:void(0)' class='share5'></a>\
                  <span></span></li>\
              <li title='分享到github'>\
                  <a href='javascript:void(0)' class='share6'></a>\
                  <span></span></li>\
          </ul>\
      </div>\
  </div>\
</div>\
</div>";
oShareWapper.style.display = 'block';

var close = document.getElementById("close");
console.log(close);
  close.onclick = function(){
      console.log("Yes");
//    oShareWapper.style.display = 'none';
oShareWapper.style.visibility = 'hidden';

     
  }
  
}