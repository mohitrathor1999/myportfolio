


var cur = document.querySelector('.cursur');

document.addEventListener('mousemove', function(e){
   cur.style.left =  e.clientX + 'px';
   cur.style.top =  e.clientY + 'px';
})




var show = document.getElementsByClassName('fa-bars')[0];
var hide = document.getElementsByClassName('fa-times')[0];

 show.addEventListener('click', function(){
    document.getElementsByTagName('nav')[0].style.top='100%'
    var show = document.getElementsByClassName('fa-bars')[0].style.display='none';
    var show = document.getElementsByClassName('fa-times')[0].style.display='block';
 })

 hide.addEventListener('click', function(){
    document.getElementsByTagName('nav')[0].style.top='-220%'
    var show = document.getElementsByClassName('fa-bars')[0].style.display='block';
    var show = document.getElementsByClassName('fa-times')[0].style.display='none';
 })




 const swiper = new Swiper('.swiper', {
   // Optional parameters
   autoplay:{
      delay: 18000,
      disableOnInteraction: false
  },
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',   
     clickable: true
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
 });




//  const slider = new slider('.slider', {
//    // Optional parameters
//    // direction: 'vertical',
//    loop: true,
 
//    // If we need pagination
//    pagination: {
//      el: '.swiper-pagination',
//    },
 
//    // Navigation arrows
//    navigation: {
//      nextEl: '.swiper-button-next',
//      prevEl: '.swiper-button-prev',
//    },
//  });