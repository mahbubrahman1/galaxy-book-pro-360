// declare variable
const memoryPrice = document.getElementById('memory-price');
const storagePrice = document.getElementById('storage-price');
const deliveryCost = document.getElementById('delivery-cost');
const totalPrice = document.getElementById('total-price');
const productPrice = document.getElementById('product-price')

// addeed event handler
function buttonWork() {
    const allButton = document.getElementsByClassName('click-button');
    for (const button of allButton) {
        button.addEventListener('click', function (event) {
            if (event.target.innerText == '16GB RAM') {
                memoryPrice.innerText = 180;
            } else if (event.target.innerText == '8GB RAM') {
                memoryPrice.innerText = 0;
            } else if (event.target.innerText == '256GB M.2 SSD') {
                storagePrice.innerText = 0;
            } else if (event.target.innerText == '512GB M.2 SSD') {
                storagePrice.innerText = 100;
            } else if (event.target.innerText == '1TB M.2 SSD') {
                storagePrice.innerText = 180;
            } else if (event.target.innerText == 'Friday, Mar 15 FREE Prime Delivery') {
                deliveryCost.innerText = 0;
            } else if (event.target.innerText == 'Friday, Mar 10 Delivery charge $20') {
                deliveryCost.innerText = 20;
            }
            updatePrice();
        })
    }
}

// calculation 
function updatePrice() {
    totalPrice.innerText = parseInt(memoryPrice.innerText) + parseInt(productPrice.innerText) + parseInt(storagePrice.innerText) + parseInt(deliveryCost.innerText);
}

buttonWork();
