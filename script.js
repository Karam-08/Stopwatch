$(document).ready(function(){
    minutes = 0; // Variables for stopwatch
    seconds = 0;
    ms = 0;
    let running = false; // Variable for toggling button functions

    $("#start").on('click', function(){
        if(running){ // If the stopwatch is running,
            clearInterval(interval) // Stops the stopwatch
            $(this).html("Continue").css({'background-image': 'linear-gradient(rgb(0, 125, 237), rgb(0, 50, 125))'}) // Style change
            $("#lapClear").html("Clear") // Style change
            running = false; // Changes running variable to switch the button function
        }else{ // If the stopwatch is not running,
            // Stopwatch start function
            interval = setInterval(function(){ // Done to loop until stopped
                ms++ // ms always increases by 1
                if(ms / 100 === 1){ // If the ms divided by 100 equals 1
                    ms = 0; // ms turns to 0,
                    seconds++ // Increase seconds value by 1
                }
                if(ms.toString().length < 2){ // If as a string, the string length is less than 2,
                    ms = "0" + ms // A 0 is added in front of the ms value
                } // Done to make it double digits 24/7 
                if(seconds / 60 === 1){ // Same thing but for 60 instead of 100
                    seconds = 0;
                    minutes++
                }
                if(seconds.toString().length < 2){
                    seconds = "0" + seconds
                }
                if(minutes.toString().length < 2){
                    minutes = "0" + minutes
                }
                
                $("#stopwatch").html(minutes + ":" + seconds + ":" + ms) // #stopwatch shows minutes then seconds then ms
                $("#lapClear").html("Lap") // Changes lapClear button so that it shows Lap when active
            },10)
            $(this).html("Pause").css({"background-image": "linear-gradient(rgb(0, 237, 0), rgb(0, 125, 0))"}) // CSS styling for when timer runs
            running = true;
        }
        
    $("#lapClear").on('click', function(){
        if(running){
            $("#lapdisplay").html(minutes + ":" + seconds + ":" + ms) // Shows the stopwatch exact time in the lapdisplay section
        }else{
            clearInterval(interval) // Stops the stopwatch
            $("#stopwatch").html("00:00:00") // Resets to beginning
            $("#start").html("Start").css({"background-image": "linear-gradient(rgb(0, 237, 0), rgb(0, 125, 0))"}) // Resets to beginning
        // Resets the actual variables
            minutes = 0; 
            seconds = 0;
            ms = 0;
        }
    })

})

})  