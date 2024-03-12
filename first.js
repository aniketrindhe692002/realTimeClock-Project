let date = new Date();

let hourTime = document.getElementById("hour");
let minTime = document.getElementById("minute");
let secTime = document.getElementById("second");
let spanTime = document.getElementById("flag");

spanTime.innerHTML="AM";

function setFlag(){
    if(date.getHours()>=12){
        spanTime.innerHTML="PM";
    }    
}

function setHours(){
    if( date.getHours() < 10){
        hourTime.innerHTML = "0" + date.getHours();
    }else{
        hourTime.innerHTML = date.getHours();
    }    
}

function setMinutes(){
    if( date.getMinutes() < 10){
        minTime.innerHTML = "0" + date.getMinutes();
    } else{
        minTime.innerHTML = date.getMinutes();
    }
}

function setSeconds(){
    if(date.getSeconds() <10){
        secTime.innerHTML = "0" + date.getSeconds();
    } else{
        secTime.innerHTML = date.getSeconds();
    }    
}

setHours();
setMinutes();
setSeconds();
setFlag();

setInterval( ()=> {
    if(secTime.innerHTML< 59){
        if(secTime.innerHTML<9){
            secTime.innerHTML = "0" + ++secTime.innerHTML;
        } else{
            secTime.innerHTML++;
        }
    } else{
        if(minTime.innerHTML<59){
            if(minTime.innerHTML<9){
                minTime.innerHTML = "0" + ++minTime.innerHTML;
                secTime.innerHTML="0"+0;
            }else{
                minTime.innerHTML++;
                secTime.innerHTML="0"+0;
            }
        }else{
            if(hourTime.innerHTML <24){
                hourTime.innerHTML++;
                minTime.innerHTML="0"+0;
                secTime.innerHTML="0"+0;
            }else{
                hourTime.innerHTML = "0"+0;
            }
        }
    }
},1000);
