
function calculate(){
    const dobMiliSeconds = document.getElementById('dob').value;
    const atDateMiliSeconds = document.getElementById('atDate').value;
    const betweenMiliSeconds = (new Date(atDateMiliSeconds)).getTime() - (new Date(dobMiliSeconds).getTime());
    const days = betweenMiliSeconds/1000/60/60/24;
    if(atDateMiliSeconds > dobMiliSeconds){
        document.getElementById('year').innerHTML = (days/365).toFixed(2);
        document.getElementById('month').innerHTML = (days/30).toFixed(2);
        document.getElementById('week').innerHTML = (days/7).toFixed(2);
        document.getElementById('day').innerHTML = (days).toFixed(2);
    }
}

function reset(){
    document.getElementById('dob').value = "";
    document.getElementById('atDate').value = "";
    document.getElementById('year').innerHTML = "";
    document.getElementById('month').innerHTML = "";
    document.getElementById('week').innerHTML = "";
    document.getElementById('day').innerHTML = "";
}
