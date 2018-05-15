function setClock() {
    const now = new Date(); //pobiera aktualną datę
    //seconds
    let seconds = now.getSeconds();
    const secondsDegrees = (seconds*6)+90;
    const secondsHand = document.querySelector(".seconds");
    if(secondsDegrees===90) {
       secondsHand.style.transition = "all 0s";
    }
    secondsHand.style.transform=`rotate(${secondsDegrees}deg)`;
    secondsHand.style.WebkitTransform=`rotate(${secondsDegrees}deg)`;
    secondsHand.style.msTransform=`rotate(${secondsDegrees}deg)`;
    
    //minutes
    let minutes = now.getMinutes();
    const minutesDegrees = (minutes*6)+90;
    const minutesHand = document.querySelector(".minutes");
    if(minutesDegrees===90) {
        minutesHand.style.transition = "all 0s";
    }
    minutesHand.style.transform=`rotate(${minutesDegrees}deg)`;
    minutesHand.style.WebkitTransform=`rotate(${minutesDegrees}deg)`;
    minutesHand.style.msTransform=`rotate(${minutesDegrees}deg)`;

    //hours
    let hours = now.getHours();
    let hoursDegrees='';
    const hoursHand = document.querySelector(".hours");
    if(minutesDegrees<270) {
        hoursDegrees = (hours*30)+90;
        if(hoursDegrees===90 || hoursDegrees===450) {
            hoursHand.style.transition = "all 0s";
        }
    } else if(minutesDegrees<360) {  
        hoursDegrees = (hours*30)+105;           
    } else {
        hoursDegrees = (hours*30)+115;
    }
    hoursHand.style.transform=`rotate(${hoursDegrees}deg)`;
    hoursHand.style.WebkitTransform=`rotate(${hoursDegrees}deg)`;
    hoursHand.style.msTransform=`rotate(${hoursDegrees}deg)`;
    
    //electornic clock
    const electronicClock = document.querySelector("#electronic-clock");
    if(hours<10) {
        hours=`0${hours}`;
    }
    if(minutes<10) {
        minutes=`0${minutes}`;
    }
    if(seconds<10) {
        seconds=`0${seconds}`;
    }
    electronicClock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(setClock, 1000);
