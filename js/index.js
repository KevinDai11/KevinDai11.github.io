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


if(document.getElementById("test")!=null){
    document.documentElement.style.setProperty('--fall','100vh');
}


const animationToggle = document.querySelector('switch');

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            document.documentElement.style.setProperty('--aTail','None');
            document.documentElement.style.setProperty('--aFalling','None');
            document.documentElement.style.setProperty('--aShining','None');
            document.documentElement.style.setProperty('--height1','0px');
            document.documentElement.style.setProperty('--height2','0px');
        }
        else {
            document.documentElement.style.setProperty('--aTail','tail 3s ease-in-out infinite');
            document.documentElement.style.setProperty('--aFalling','falling 3s ease-in-out infinite');
            document.documentElement.style.setProperty('--aShining','shining 3s ease-in-out infinite');
            document.documentElement.style.setProperty('--height1','100px');
            document.documentElement.style.setProperty('--height2','25px');

        }
    });
  });

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  } 
