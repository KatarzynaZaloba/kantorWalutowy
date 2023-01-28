let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let currencyRateElement = document.querySelector(".js-currency");


let currencyEUR = 4.7076;
let currencyUSD = 4.3252;
let currencyGBP = 5.3505;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyRateElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "EUR":
            result = amount * currencyEUR;
            break;
        case "USD":
            result = amount * currencyUSD;
            break;
        case "GBP":
            result = amount * currencyGBP;
            break;
    }

    resultElement.value = result.toFixed(2)

});