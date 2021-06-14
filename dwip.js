let bulb=document.getElementById("bulb")



let but=document.getElementById("but");
function switc()
{
    if (bulb.src=="http://127.0.0.1:5500/img/bulb-off.png") {
        bulb.src="/img/bulb-on.png";
        } 
        else {
        bulb.src="/img/bulb-off.png";
    }
}
but.addEventListener("click",switc);



