var mobileMenu = document.querySelector("nav > span");
var closeBtn = document.getElementById("close-offcanvas");

mobileMenu.addEventListener( "click", function() {
    document.getElementById("offcanvas").classList.toggle("show");
    document.body.classList.toggle("sho");
})
closeBtn.addEventListener( "click", function() {
    document.getElementById("offcanvas").classList.toggle("show");
    document.body.classList.toggle("sho");
})