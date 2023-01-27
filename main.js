const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector('.product-detail'); 

navbarEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed) { //si esta abierto
    aside.classList.add('inactive'); }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {//si abrimos el menu cerramos el carrito
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed) { //si esta abierto
        
        aside.classList.add('inactive'); }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() { //si le damos click cerramos el menuMobile 
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');/*abierto */
    //const isAsideClosed = aside.classList.contains('inactive'); /*si esta cerrado el carrito */
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    /* aside.classList.toggle('inactive'); *//*Clase inactive para que no aparezca por defecto */

    if(!isMobileMenuClosed) { //si esta abierto
        //vamos a cerrarlo
        mobileMenu.classList.add('inactive');
    }
        aside.classList.toggle('inactive');
    /* if(isAsideClosed) { //si esta cerrado
        //abrir el aside
        }
        //si el mobileMenu está open, hay que cerrarlo
    }else { 
        aside.classList.add('inactive');//ponerle la clase inactive 
    }
    // if(mobileMenu.classList.contains('inactive')) { //Significa q movil esta cerrado */
    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
} 


