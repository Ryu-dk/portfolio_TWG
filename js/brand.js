$(document).ready(function(){
  
  $(window).scroll(function(){
    
    scrollOn('.box1','.topimg',0);
    scrollOn('.box2','.topimg',0.3);
    scrollOn('.box2','.bg',.3);
    scrollOn('.box3','.topimg',0.1);
    scrollOn('.box3','.bg',.1);
    
  });
  
/* -------- main svg --------- */
  new Vivus('bgsvg1');
  new Vivus('bgsvg2');

  new Vivus('brand1');
  new Vivus('brand2');
  new Vivus('brand3');
  
/* ---------- scrollmotion fx ----------- */  
  function scrollOn(pa,ch,px){  
    if($(window).scrollTop() + $(window).height() > $(pa).offset().top + $(pa).height()*px){
      $(pa).find(ch).addClass('scrollOn');
    }else{
      $(pa).find(ch).removeClass('scrollOn');
    }
  }
	
  
});