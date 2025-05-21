let btn = document.getElementById("toggleBtn");
let bulb = document.getElementById("bulb");

btn.addEventListener("click",toggleBulb);

function toggleBulb(e){
    if(btn.textContent.includes("ON")){
        bulb.src = "./bulb-on.jpg";
        btn.textContent = "Turn OFF";
    }
    else{
        bulb.src = "./bulb-off.jpg";
        btn.textContent = "Turn ON";
    }

}