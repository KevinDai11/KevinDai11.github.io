const navToggle = document.querySelector('.nav_toggle');
const navLinks = document.querySelectorAll('.nav_link');
const navLinkF = document.querySelector('.nav_link2');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav_open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav_open');
    })
});

navLinkF.addEventListener('click', () =>{
    document.body.classList.remove('nav_open');
});
