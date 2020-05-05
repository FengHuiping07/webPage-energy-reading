
var per = 0;
var bar = document.getElementsByClassName('bar')[0];
var pageLoading = document.getElementsByClassName('pageLoading')[0];
var textPage = document.getElementsByClassName('textPage')[0];
// var timers = 0;
var timer = setTimeout(addHtml, 30);
function addHtml(){
    bar.style.width = per + '%';
    per += 3;
    if (per > 100 && per <150) {
        pageLoading.classList.add('complete');
        setTimeout(function () {
            console.log('1111')
            textPage.innerHTML = "再也不用担心起晚了偷不了别人的能量,自己的能量反而被别人偷走了,只要坚持阅读,保证能量满满,你的大树将会茁壮成长";
            setTimeout(function () {
                console.log('222')
                textPage.innerHTML = " <h2 class='monsterText'>除此之外<br>在这里</h2>你还可以记录下你每天的遇到的人和事,让能量阅读记录下你生活中的点点滴滴,回馈给你生活满满的能量!"
            }, 3000);  
        }, 4000);
    }else{
       setTimeout(addHtml,30) 
    }
}