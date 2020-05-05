var key = false;

var headerNav = document.getElementById('firstPage-nav');
var smallBtn = document.getElementById('firstPage-btn');

  smallBtn.onclick = function(){
    
    if(!key){ 
      key = true;
      headerNav.style.display = 'block';
      headerNav.className = 'now-nav';
      headerNav.style.zIndex = 4000;
      console.log(headerNav);
    }
    else{
      headerNav.style.display = 'none';
      key = false;
      console.log(headerNav);
    }
  
}