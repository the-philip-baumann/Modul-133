const priceScrews = 20;
const priceNuts = 10;
const pricePlates = 5



function calculate() {
    let overallPrice = 0;

    const amountScrews = document.getElementById('input-screws').value;
    const amountNuts = document.getElementById('input-nuts').value;
    const amountPlates = document.getElementById('input-plates').value;

    overallPrice += ((amountScrews * priceScrews) +  (amountNuts * priceNuts) + (amountPlates * pricePlates)) / 100;

    document.getElementById('result').innerText = "Preis: " + overallPrice + ".-";
}

function resetForm() {
    document.getElementById('input-screws').value = 0;
    document.getElementById('input-nuts').value = 0;
    document.getElementById('input-plates').value = 0;
}