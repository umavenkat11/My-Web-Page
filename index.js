const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
    primaryNav.toggleAttribute("data-visible");
});

$(function(){
    $('#header').load('../source/header.html');
});

$(function(){
    $('#footer').load('../source/footer.html');
});
