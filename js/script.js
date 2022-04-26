"use strict";

let other = document.querySelector('#other');
let nb = document.querySelector('#autre');

function isChecked(){
    if(other.checked == true){
        console.log('ok')
        nb.style.display = 'block';
    } else {
        nb.style.display = 'none';
    }
}
