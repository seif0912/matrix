let burger = document.querySelector('.hero nav .burger')
let nav = document.querySelector('.hero nav')

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})

window.addEventListener("resize", function () {
    const winWidth = window.innerWidth;
    if (winWidth >= 790 && burger.classList.contains("active")) {
        burger.classList.remove("active");
        nav.classList.remove("active");
    }
});

window.addEventListener('scroll', ()=>{
    let nav = document.querySelector('.hero nav')
    nav.classList.toggle('sticky', window.scrollY > 0)
})