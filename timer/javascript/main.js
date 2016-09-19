
    var time_global=(new Date()).getTime();
    var time_paused,time_resumed,time_difference=0;
    var start=1;
$(document).ready(
		function()
		{
            start_timer();
            start_stop();
		});


    function start_timer()
    {
        var hr,min,sec,msec,timer_string;
        var time=(new Date()).getTime();
        var hr=0,min=0,sec=0;
        
        if(start==0)
        {
            //detect is there a stop timer request
            $("#start_stop").removeClass("btn-danger");
            $("#start_stop").addClass("btn-success");;
                $("#start_timer_text").text("Stop Timer");
            
            time_paused=time;
            return;
        }
        
        var diff=(time-time_global)/1000;
        
        sec=Math.floor(diff%60);
        min=Math.floor(diff/60);
            
        if(min>60)
            {
                min=Math.floor(min%60);
                hr=Math.floor(min/60);
            }
        if(sec<=9) sec="0"+sec;
        if(min<=9) min="0"+min;
        if(hr<=9) hr="0"+hr;
        time_timer=hr+":"+min+":"+sec;
        $("#timer").html(time_timer);
        setTimeout(start_timer,1000);
    }
   function start_stop()
    {
        $("#start_stop").click(
        function()
        {
            if(start==1)
                {
                    //stop timer
                    start=0;
                }
            else{
                start=1;
                //start timer
                
                $("#start_stop").addClass("btn-danger");
                $("#start_stop").removeClass("btn-success");
                $("#start_timer_text").text("Start Timer");
                
                time_resumed=(new Date()).getTime();
                time_difference=(time_resumed-time_paused);
                time_global=time_global+time_difference;
                start_timer();
            }
        });
    }