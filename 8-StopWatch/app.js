let [miliseconds,seconds,minutes,hours] =[0,0,0,0];
let timeRef = document.querySelector('.timerDisplay');
let int = null;

function startTimer()
{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
}

function stopTimer()
{
    clearInterval(int);
}

function resetTimer()
{
    clearInterval(int);

    [miliseconds,seconds,minutes,hours] = [0,0,0,0];

    timeRef.innerHTML ='<p> 00 : 00 : 00 : 000 </p>';
}

function displayTimer(){
    miliseconds+=10;
    if(miliseconds ==1000){
        miliseconds =0;
        seconds++;
    }
    if(seconds ==60){
        seconds =0;
        minutes++;
    }
    if(minutes ==1000){
        minutes =0;
        hours++;
    }

    let h = hours<10? "0" + hours:hours;
    let m = minutes<10? "0" +minutes:minutes;
    let s = seconds<10? "0" +seconds:seconds;
    let ms = miliseconds<100? "0"+ miliseconds:miliseconds;

timeRef.innerHTML =`<p>${h} : ${m} : ${s} : ${ms}</p>`
}