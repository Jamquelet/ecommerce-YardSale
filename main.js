const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector('.product-detail'); 
const cardsContainer = document.querySelector('.cards-container');

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

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Bike Torn',
    price: 340,
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
    name: 'Nake',
    price: 140,
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600",
});
/*
    <div class="product-card">
        <img src="https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
        <div class="product-info">
            <div>
            <p>$120,00</p>
            <p>Bike</p>
            </div>
        <figure>
            <img src="./Assets/icons/bt_add_to_cart.svg" alt="">
        </figure>
        </div>
    </div>
*/
function renderProducts(arr) {
    //recorrer array
for(product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product={name, price,image} --> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './Assets/icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
}
renderProducts(productList);//le digo cual es el array con el cual quiero trabajar
