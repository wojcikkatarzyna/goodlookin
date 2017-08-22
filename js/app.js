document.addEventListener("DOMContentLoaded", function() {

    // add price and number of chosen product to basket
    const btnBuyItem = document.querySelectorAll('.buyItem');
    const basket = document.querySelector('.fa-shopping-cart').firstChild.nextElementSibling;
    let totalPrice = 0;
    let itemCounter = 0;

    for (let i=0; i<btnBuyItem.length; i++) {
        btnBuyItem[i].addEventListener('click', function(e) {
            e.preventDefault();
            let span = this.parentNode.firstChild.nextElementSibling;
            let price = Number(span.dataset.price);
            totalPrice += price;
            itemCounter++;
            basket.innerText = totalPrice.toFixed(2)+" zł, prod. ( "+itemCounter+" )";
        })
    }

    //mobile menu
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        nav.classList.toggle('showMobileMenu');
    })

    //searchBox
    const search = document.querySelector('.search');
    const magnifier = search.querySelector('div.magnifier');
    const searchBox = search.querySelector('input');

    document.querySelector('div.fa').addEventListener('click', function(e) {
        e.preventDefault();
        magnifier.classList.toggle('hideSearchBox');
        searchBox.classList.toggle('hideSearchBox');
    })

});
