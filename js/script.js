{
    const welcome = () => {
        console.log("Witam wszystkich developerów!");
    };

    const calculateResult = (input, currency) => {
        const rateEUR = 4.7469;
        const rateUSD = 4.4524;
        const rateGBP = 3.0671;

        switch (currency) {
            case "EUR":
                return input / rateEUR;

            case "USD":
                return input / rateUSD;

            case "GBP":
                return input / rateGBP;
        }
    };

    const updateResultText = (input, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${input.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const inputElement = document.querySelector(".js-input");
        const currencyElement = document.querySelector(".js-currency");

        const input = +inputElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(input, currency);

        updateResultText(input, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
