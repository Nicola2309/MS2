// Sliding Navbar functions
const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-els')
    const navLinks = document.querySelectorAll('.nav-els li')

   
    burger.addEventListener('click', () => {
         //Toggle Nav
        nav.classList.toggle('nav-active');

            //Animate Links
    navLinks.forEach((link, index) =>{
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`
        }
    });

    //Burger Xing
    burger.classList.toggle('toggle')
    });

}

navSlide();
