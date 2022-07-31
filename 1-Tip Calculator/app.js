

function calculateTip() {
    let billAmount = document.getElementById('billAmount').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let numPeople = document.getElementById('totalPeople').value;
    if (billAmount ==0|| serviceQuality == 0) {
        alert("Please enter some values");
    }
    let total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total*100)/100;

    total = total.toFixed(2);
document.getElementById('result').innerHTML = ` <p>Tip per person :- $${total}</p>`;
    
}
