const bars = document.querySelector('.barss');
const navMenu = document.querySelector('.nav-menu');
const change = document.querySelector('.fa-bars');

bars.addEventListener("click", ()  => {
    bars.classList.toggle('active');
    navMenu.classList.toggle('active');
    

})

