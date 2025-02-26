$(document).ready(function(){
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function logic(){

        seconds++

        if(seconds / 60 === 1){
            seconds = 0;
            minutes++

            if(minutes / 60 === 1){
                minutes = 0;
                hours++
            }
        }
    }
})