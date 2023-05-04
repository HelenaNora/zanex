$(document).ready(function(){
    // Start nav Section
$(window).scroll(function(){
    let getscrolltop=$(this).scrollTop();
  //   console.log(getscrolltop);
  if(getscrolltop>=100){
      $('.header').addClass('nav');
      $('.logo').hide();
      $('.logo1').show();
      $('.scroll-btn').show().fladeIn(500);
  }else{
      $('.header').removeClass('nav');
      $('.logo1').hide();
      $('.logo').show();
      $('.scroll-btn').hide().fladeOut(500);
  };
  });
  // End nav Section
  
  // Start Theme Section
  $('.defbtn').click(function(){
    $('#def').show();
    $('#dark').hide();
});
$('.darkbtn').click(function(){
    $('#dark').show();
    $('#def').hide();
});
  // End Theme Section
  // Start Highlight Section
  $('.accordion').click(function(){
      $('.acccontent').toggle();
  });
  $('.accordion1').click(function(){
      $('.acccontent1').toggle();
  });
  $('.accordion2').click(function(){
      $('.acccontent2').toggle();
  });
  $('.accordion3').click(function(){
      $('.acccontent3').toggle();
  });
  $('.accordion4').click(function(){
      $('.acccontent4').toggle();
  });
  $('.accordion5').click(function(){
      $('.acccontent5').toggle();
  });
});
// End Highlight Section
// footer Section
const getyears=document.getElementById('year');

datayear=new Date().getUTCFullYear();
// console.log(datayear);
getyears.textContent=datayear;
// End footer Section