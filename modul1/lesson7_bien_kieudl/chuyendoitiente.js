function convert() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;

    console.log(amount);
    console.log(from);
    console.log(to);

    const exchangeRate = 25.345;
    let result;

    if (from == 'VietNam' && to == 'USD') {
        result = amount / exchangeRate;
        alert("$" + result.toFixed(2));
    } else if (to == 'VietNam' && from == 'USD') {
        result = amount * exchangeRate;
        alert(result.toFixed(2) + " VND");
    } else {
        alert("Invalid currency combination.");
    }
}
