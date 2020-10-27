document.querySelector(".header-burger").addEventListener("click", function() {
    document.querySelector(".menu-nav").classList.add("menu-nav--active")
});

document.querySelector(".menu-nav-close").addEventListener("click", function() {
    document.querySelector(".menu-nav").classList.remove("menu-nav--active")
});



document.querySelector(".menu-icon-btn").addEventListener("click", function() {
    document.querySelector(".menu-icon").classList.toggle("menu-icon--active")
});
