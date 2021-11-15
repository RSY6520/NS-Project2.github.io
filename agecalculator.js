function lpyear(dobyear, atyear){
    let lpcnt=0;
    for(let i=dobyear;i<=atyear;i++){
        if((i%400==0) || (i%4==0 && i%100!=0)){
            lpcnt++;
        }
    }
    return lpcnt;
}

function calculateAge(){
    var dobday=parseInt(document.getElementById("dobday").value);
    var dobmonth=parseInt(document.getElementById("dobmonth").value)+1;
    var dobyear=parseInt(document.getElementById("dobyear").value);

    var atday=parseInt(document.getElementById("atday").value);
    var atmonth=parseInt(document.getElementById("atmonth").value)+1;
    var atyear=parseInt(document.getElementById("atyear").value);
    
    var month = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    if(dobday > atday){
        atday = atday + month[atmonth-1];
        atmonth = atmonth-1;
    }
    if(dobmonth > atmonth){
        atmonth = atmonth + 12;
        atyear = atyear - 1;
    }
    
    var d = atday - dobday;
    var m = atmonth - dobmonth;
    var y = atyear - dobyear;
    var w = ((y*365 + lpyear(dobyear,atyear) + m*30 + d)/7).toFixed(2);
    var hr = (y*365 + lpyear(dobyear,atyear) + m*30 + d)*24;
    var min = (y*365 + lpyear(dobyear,atyear) + m*30 + d)*24*60;
    var sec = (y*365 + lpyear(dobyear,atyear) + m*30 + d)*24*60*60;
    document.getElementById("years").innerHTML= y;
    document.getElementById("months").innerHTML= m;
    document.getElementById("days").innerHTML= d;
    document.getElementById("weeks").innerHTML= w;
    document.getElementById("hours").innerHTML= hr;
    document.getElementById("minutes").innerHTML= min;
    document.getElementById("seconds").innerHTML= sec;
}
function toHide(){
    document.getElementById("years").style.display= "none";
    document.getElementById("months").style.display= "none";
    document.getElementById("days").style.display= "none";
    document.getElementById("weeks").style.display= "none";
    document.getElementById("hours").style.display= "none";
    document.getElementById("minutes").style.display= "none";
    document.getElementById("seconds").style.display= "none";
}