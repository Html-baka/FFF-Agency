$(document).on("click", "nav a", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 1500); // плавно переходим к блоку
});
// var config = document.querySelector('.products-photo');
const $menu = $('.mobile-nav');
const $menuIcon = $('.menu-icon');
$(document).mouseup(e => {
   if (!$menu.is(e.target) // if the target of the click isn't the container...
   && $menu.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $menu.removeClass('mobile-nav--active');
     $menuIcon.removeClass('menu-icon-active');
  }
 });

var mixer = mixitup('.products-photo');

const menuToggle = document.querySelector('#menu-togle'); 
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}

//govnocode menu start

const home = document.querySelector('#home'); 
home.onclick = function(){
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
}
const portfolio = document.querySelector('#portfolio'); 
portfolio.onclick = function(){
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
}
const about = document.querySelector('#about'); 
about.onclick = function(){
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
}
const contact = document.querySelector('#contact'); 
contact.onclick = function(){
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
}
//govnocode menu ends


