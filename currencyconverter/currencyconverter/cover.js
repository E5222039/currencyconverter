function convertCurrency() {
    const inr = parseFloat(document.getElementById("inrAmount").value);
    const currency = document.getElementById("currencySelect").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(inr) || inr <= 0) {
        resultDiv.textContent = "Please enter a valid INR amount.";
        return;
    }

    let rate = 0;
    let symbol = "";

    switch (currency) {
        case "USD":
            rate = 83;
            symbol = "$";
            break;
        case "EUR":
            rate = 89;
            symbol = "€";
            break;
        case "GBP":
            rate = 104;
            symbol = "£";
            break;
    }

    const converted = (inr / rate).toFixed(2);
    resultDiv.textContent = `${symbol} ${converted}`;
}