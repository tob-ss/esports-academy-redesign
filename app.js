const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const valMenu = document.querySelector('#valorant-page')
    const coursesMenu = document.querySelector('#courses-page')
    let scrollPos = window.scrollY

    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        valMenu.classList.remove('highlight')
        return  
    }   else if (window.innerWidth > 960 && scrollPos < 1400) {
        valMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        coursesMenu.classList.remove('highlight')
        return
    } 
        else if (window.innerWidth > 960 && scrollPos < 2345) {
        coursesMenu.classList.add('highlight')
        valMenu.classList.remove('highlight')
        return
    }    

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)