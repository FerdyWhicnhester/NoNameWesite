const hourelement = document.getElementById("hours");
const minuteelement = document.getElementById("minutes");
const secondelement = document.getElementById("seconds");
const ampmelement = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "PM"

    if(h > 12){
        h = h - 12
        ampm = "PM";
    }

    hourelement.innerText = h;
    minuteelement.innerText = m;
    secondelement.innerText = s;
    ampmelement.innerText = ampm;
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock()