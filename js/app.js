document.addEventListener("DOMContentLoaded", function() {

    // add price and number of chosen product to basket
    var btnBuyItem = document.querySelectorAll('.buyItem');
    var basket = document.querySelector('.basket span');
    var mobileBasket = document.querySelector('.basket p');
    var totalPrice = 0;
    var itemCounter = 0;

    for (var i=0; i<btnBuyItem.length; i++) {
        btnBuyItem[i].addEventListener('click', function(e) {
            e.preventDefault();
            var span = this.parentNode.firstChild.nextElementSibling;
            var price = Number(span.dataset.price);
            totalPrice += price;
            itemCounter++;
            basket.innerText = totalPrice.toFixed(2)+" zł, prod. ( "+itemCounter+" )";
            mobileBasket.innerText = "( "+itemCounter+" )";
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
