var Typed= new Typed(".text", {
    strings:["2nd Year BSIT student" , "...from Tarlac Agricultural University."],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop:true
});
window.onload = function(){


    const menu_btn = document.querySelectorAll('.hamburger');
    const mobile_menu = document.querySelectorAll('.mobile-nav');

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is=active');
        mobile_menu.classList.toggle('is=active');
    });
}