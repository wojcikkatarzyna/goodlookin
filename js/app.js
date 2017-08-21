document.addEventListener("DOMContentLoaded", function() {
    const btnBuyItem = document.querySelectorAll('.buyItem');
    const basket = document.querySelector('.fa-shopping-cart').firstChild.nextElementSibling;
    let totalPrice = 0;
    let itemCounter = 0;

    for (let i=0; i<btnBuyItem.length; i++) {
        btnBuyItem[i].addEventListener('click', function() {
            let span = this.parentNode.firstChild.nextElementSibling;
            let price = Number(span.dataset.price);
            totalPrice += price;
            itemCounter++;
            basket.innerText = totalPrice.toFixed(2)+"zł, prod.( "+itemCounter+" )";
        })
    }

  });
