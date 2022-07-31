const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegree = (seconds * 6) +90;
    secondHand.style.transform =`rotate(${secondsDegree}deg)`;

    const mins = now.getMinutes();
    const minsDegree = (mins * 6) +90;
    minsHand.style.transform =`rotate(${minsDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours/12) *360) + ((mins/60) *30) +90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`

}

setInterval(setDate, 1000);

setDate();