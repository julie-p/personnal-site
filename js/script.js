/* Cursor */
let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('a');
let home = document.querySelectorAll('.home');
let skills = document.querySelectorAll('.skills__box span');
let images = document.querySelectorAll('.about__img');
let portfolioLink = document.querySelectorAll('.portfolio__link');
let contactBtn = document.querySelectorAll('.contact__button');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
};

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
    });
});

home.forEach(home => {
    home.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-index');
    });
    home.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-index');
    });
});

skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-index');
    });
    skill.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-index');
    });
});

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-index');
    });
    image.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-index');
    });
});

portfolioLink.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-index');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-index');
    });
});

contactBtn.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        mouseCursor.classList.add('btn-bg');
    });
    btn.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('btn-bg');
    });
});

/* Loader */
let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function() {
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});

/* Show menu */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    };
};

showMenu('nav-toggle','nav-menu');

/* Remove menu mobile */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navManu = document.getElementById('nav-menu');
    navManu.classList.remove('show');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/* Scroll section active link */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        };
    });
};

/* Scroll reveal animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});

/* Scroll Home */
sr.reveal('.home__title', {origin:'bottom', delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400});

/* Scroll About */
sr.reveal('.about__img', {origin:'left', delay: 500});
sr.reveal('.about__subtitle', {origin:'right', delay: 300});
sr.reveal('.about__profession', {origin:'right', delay: 400});
sr.reveal('.left', {origin:'left', delay: 500});
sr.reveal('.right', {origin:'right', delay: 500});
sr.reveal('.about__social-icon', {origin:'right', delay: 600, interval: 200});

/* Scroll Skills */
sr.reveal('.skills__text', {delay:200});
sr.reveal('.skills__subtitle', {origin:'left'});
sr.reveal('.skills__name', {origin:'left', distance: '20px', delay: 50, interval: 100});
sr.reveal('.skills__img', {origin:'right', delay: 200});

/* Scroll Portfolio */
sr.reveal('.portfolio__img', {interval: 200});

/* Scroll Contact */
sr.reveal('.contact__subtitle', {});
sr.reveal('.contact__text', {interval: 200});
sr.reveal('.contact__button', {delay: 600});
