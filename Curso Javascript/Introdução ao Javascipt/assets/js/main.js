var CurrentNumberwrapper = document.getElementById('currentNumber')
var btn1 = document.getElementById('btn-')
var btn2 = document.getElementById('btn+')
var Currentnumber = 0;

function disable(btn) {
    btn.classList.add('disabled')
}

function removeDisable(btn) {
    btn.classList.remove('disabled')
}

function increment(){
    removeDisable(btn1);
    if(Currentnumber<10){
        Currentnumber = Currentnumber + 1;
        CurrentNumberwrapper.innerHTML = Currentnumber;
    } else{
        disable(btn2);
    }
    
}

function decrement(){
    removeDisable(btn2);
    if(Currentnumber>-10){
        Currentnumber = Currentnumber - 1;
        CurrentNumberwrapper.innerHTML = Currentnumber;
    } else{
        disable(btn1);
    }
}

btn1.addEventListener('click',decrement);
btn2.addEventListener('click',increment);

