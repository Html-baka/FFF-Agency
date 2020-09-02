$(document).on("click", "nav a", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 1500); // плавно переходим к блоку
});
// var config = document.querySelector('.products-photo');
var mixer = mixitup('.products-photo');

const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}