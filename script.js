let allTotal = 0;

function addToCart(element) {
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quntity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    if(parseInt(quntity) > 0) {

        price = price.substring(1);
        price = parseInt(price);
        let total = price * parseInt(quntity);

        allTotal += total;

        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3>${name}</h3>
                                    <p>$${price} x ${quntity} = $<span>${total}</span></p>
                                    <button onclick="removeFromCart(this)" class="remove-item">Remove</button>
                                </div>`;

        document.querySelector('.total').innerText = `Total: $${allTotal}`

        element.innerText = 'Add';
        element.setAttribute('disabled', 'true');

    } else {
        alert('Odaberi kolicinu!');
    }
}

function removeFromCart(element) {
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');
    price = parseInt(price);

    allTotal -= price;

    document.querySelector('.total').innerHTML = `Total: $${allTotal}`;

    mainEl.remove();

    vegetables.forEach(function (vege) {
        let itemName = vege.querySelector('.si-content h3').innerText;

        if(itemName == name) {
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerText = 'Add';
        }
    })
}