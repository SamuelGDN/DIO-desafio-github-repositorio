var CurrentNumberwrapper = document.getElementById('currentNumber')
var btn1 = document.getElementById('btn-')
var btn2 = document.getElementById('btn+')
var Currentnumber = 0;
var count = 0;

function disable() {
    btn2.classList.add('disabled')
}

function increment(){
    if(Currentnumber<10){
        Currentnumber = Currentnumber + 1;
    CurrentNumberwrapper.innerHTML = Currentnumber;
    } else{
        disable();
    }
    
}

function decrement(){
    Currentnumber = Currentnumber - 1;
    CurrentNumberwrapper.innerHTML = Currentnumber;
}

btn1.addEventListener('click',decrement);
btn2.addEventListener('click',increment);
