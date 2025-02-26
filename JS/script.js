$(document).ready(function(){
    minutes = 0;
    seconds = 0;
    ms = 0;
    running = false;

    $("#start").on('click', function(){
        if(running == true){
            clearInterval(interval)
            running == false;
        }else if(running == false){
            interval = setInterval(function(){
                ms++
                if(ms / 100 === 1){
                    ms = 0;
                    seconds++
                }
                if(ms.toString().length < 2){
                    ms = "0" + ms
                }
                if(seconds / 60 === 1){
                    seconds = 0;
                    minutes++
                }
                if(seconds.toString().length < 2){
                    seconds = "0" + seconds
                }
                if(minutes.toString().length < 2){
                    minutes = "0" + minutes
                }
                
                $("#timer").html(minutes + ":" + seconds + ":" + ms)
            },10)
            running == true;
        }
        
    $("#lap").on('click', function(){
        $("#lapdisplay").html(minutes + ":" + seconds + ":" + ms)
    })

    $("#reset").on('click', function(){
        clearInterval(interval)
        $("#timer").html("00:00:00")
        minutes = 0;
        seconds = 0;
        ms = 0;
    })
})

})
