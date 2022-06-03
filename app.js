// Taking input field
let razerOneInput = document.getElementById('razer-one');
let razerTwoInput = document.getElementById('razer-two');
let targealInput = document.getElementById('targeal');

//taking total fields
let subtotalPeice  = document.getElementById('subtotal');
let taxPrice = document.getElementById('tax');
let totalPrice = document.getElementById('total');


// Taking Buttons
let razerOnePlus = document.getElementById('razer-one-plus');
let razerOneMinus = document.getElementById('razer-one-minus');

let razerTwoPlus = document.getElementById('razer-two-plus');
let razerTwoMinus = document.getElementById('razer-two-minus');

let targealPlus = document.getElementById('targeal-plus');
let targealMinus = document.getElementById('targeal-minus');

//proceed checkout button
let checkoutButton = document.getElementById('check-out');

// getting price
let razerOnePrice = 259;
let razerTwoPrice = 85;
let targealPrice = 159;


// Razer one adding event Listeners
razerOnePlus.addEventListener("click", ()=> {
    itemQuantityCount(razerOneInput, true);
})
razerOneMinus.addEventListener("click", ()=> {
    itemQuantityCount(razerOneInput, false);
})

// Razer two adding event Listeners
razerTwoPlus.addEventListener("click", ()=> {
    itemQuantityCount(razerTwoInput, true);
})
razerTwoMinus.addEventListener("click", ()=> {
    itemQuantityCount(razerTwoInput, false);
})

// Targeal adding event Listeners
targealPlus.addEventListener("click", ()=> {
    itemQuantityCount(targealInput, true);
})
targealMinus.addEventListener("click", ()=> {
    itemQuantityCount(targealInput, false);
})

// Increase Decrease Function 
function itemQuantityCount(item, istrue){
    let itemCount = parseInt(item.value);
    if(istrue === true) {
        itemCount += 1;
        item.value = itemCount;
    } else {
        itemCount -= 1;
        if (itemCount < 0){
            item.value = 0;
        }else {
            item.value = itemCount;
        }
    }
    total();
}


//totoal count
function total() {
    // console.log(totalPrice, subtotalPeice, taxPrice)
    let subtotal = razerOneInput.value * razerOnePrice + razerTwoInput.value * razerTwoPrice + targealInput.value * targealPrice;
    subtotalPeice.textContent = "$" + subtotal;

    let tax = subtotal * 15 / 100;
    taxPrice.textContent = "$" + tax;

    let grandTotal = subtotal + tax;
    totalPrice.textContent = "$" + grandTotal;
}

checkoutButton.addEventListener("click", function(){
    document.getElementById('cart').style.display = "none";
    document.getElementById('message').style.display = "block";

})