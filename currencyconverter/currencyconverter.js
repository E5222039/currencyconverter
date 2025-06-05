async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("currencyFrom").value;
    const toCurrency = document.getElementById("currencyTo").value;

    if (!amount || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const url = `https://v6.exchangerate-api.com/v6/c94b03bfa9b1b62323a23dc5/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "error") {
            alert("Error fetching exchange rates.");
            return;
        }

        const exchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount * exchangeRate).toFixed(2);

        document.getElementById("result").innerText = `Result: ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again later.");
    }
}





















