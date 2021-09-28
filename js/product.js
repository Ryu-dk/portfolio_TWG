$(document).ready(function(){

  
/* ---------- scrollmotion fx ----------- */  
  function scrollOn(pa,ch,px){  
    if($(window).scrollTop() + $(window).height() > $(pa).offset().top + $(pa).width()*px){
      $(pa).find(ch).addClass('scrollOn');
    }else{
      $(pa).find(ch).removeClass('scrollOn');
    }
  };
  
/* s w i p e r */  
  
  
  var swiper = new Swiper('.TbagWrap .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 5,
      loop: true,
      pagination: {
        clickable: true,
      },
      navigation: {
        nextEl: '.TbagWrap .next',
        prevEl: '.TbagWrap .prev',
      },
  });
  
  var swiper = new Swiper('.HC .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 5,
      loop: true,
      pagination: {
        clickable: true,
      },
      navigation: {
        nextEl: '.HC .next',
        prevEl: '.HC .prev',
      },
  });
  
  var swiper = new Swiper('.Ttable .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 5,
      loop: true,
      pagination: {
        clickable: true,
      },
      navigation: {
        nextEl: '.Ttable .next',
        prevEl: '.Ttable .prev',
      },
  });
  
	
/*
  
	$('.next').click(function(){
    var sliderWrap = $(this).parent().siblings('.sliderWrap');
    var firstbox = sliderWrap.find('.slidebox').first()
    sliderWrap.append(firstbox);
    firstbox.addClass('slideEffect');
	});
  
  $('.prev').click(function(){
    var sliderWrap = $(this).parent().siblings('.sliderWrap');
    var lastbox = sliderWrap.find('.slidebox').last()
    sliderWrap.prepend(lastbox);
	});
	
*/
	
	
	
	
	
	
	
  
  
});