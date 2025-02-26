$(document).ready(function(){
    minutes = 0;
    seconds = 0;
    ms = 0;
    let running = false;

    $("#start").on('click', function(){
        if(running){
            clearInterval(interval)
            $(this).html("Start")
            $("#lapClear").html("Clear")
            running = false;
        }else{
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
                $("#lapClear").html("Lap")
            },10)
            $(this).html("Stop")
            running = true;
        }
        
    $("#lapClear").on('click', function(){
        if(running){
            $("#lapdisplay").html(minutes + ":" + seconds + ":" + ms)
        }else{
            clearInterval(interval)
            $("#timer").html("00:00:00")
            minutes = 0;
            seconds = 0;
            ms = 0;
        }
    })

})

})
