
var dots = document.getElementsByClassName("dots")[0];
var timer =0;
var back = document.getElementsByTagName("a")[0];
     timer = setInterval(function(){
         dots.classList.remove("animate");
         setTimeout(function(){
             dots.classList.add("animate");
         },200)
     
},3750);

back.addEventListener('click',function(){
    clearInterval(timer);
    clearTimeout(timer);
})