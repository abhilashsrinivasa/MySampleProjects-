 var r,b,g,y,x,y,mydiv,x1,y1,res1,res2,selected,player;
selected=0;
x=0;
y=0;
r=0;
b=0;
g=0;
y=0;
$(document).ready(
   animate);
function keypressed(event)
{
    if(event.which=='37')
    {
          $('.guti').each(function()
                    {
                       $(this).css('width',20).css('height',20);
                       selected=0;
                         mydiv='';
                    }
                    );
                    res1=Math.floor(Math.random()*6)+1;
                    res=res1;
                    $("#player1dice").html("&nbsp;&nbsp; &nbsp;&nbsp;"+res1);
                    $("#player2dice").html("");
                    if(res!=6)
                    {
                         $('#button2').removeProp('disabled');
                        $('#button1').attr('disabled','');
                        $("#player2dice").html("");
                    }
                    player='player1';
    }
    if(event.which=='39')
    {
         $('.guti').each(function()
                    {
                       $(this).css('width',20).css('height',20);
                        selected=0;
                        mydiv='';
    
                    }
                    );
                    var res2=Math.floor(Math.random()*6)+1;
                    res=res2;
                    $("#player2dice").html("&nbsp;&nbsp; &nbsp;&nbsp;"+res2);
                    $("#player1dice").html("");
                    if(res!=6)
                    {
                         $('#button1').removeProp('disabled');
                        $('#button2').attr('disabled','');
                        $("#player1dice").html("");
                    }
                    player='player2';
    }
}
 function animate(event)
        {
            $('#bluescore').html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+b);
            $('#redscore').html(r+"&nbsp");
            $('#yellowscore').html(y+"&nbsp;");
            $('#greenscore').html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+g);
            $('#startpopup').css('width',$(window).width()).css('height',$(window).height()).fadeOut(4500);
                        
            
            $("#start").click(
                function()
                    {
                        $('#button1').css('display','block');
                        $('#button2').css('display','block');
                        $('#start').attr('value','Stop').attr('id','stop');
                        $('#button2').attr('disabled','');
                       // $('#home').html('HOME');
                        
                        $('#stop').click(
                        function()
                            {
                                location.reload();
                            });
                        
                        
                        $("#rg1").css('position','fixed').css('z-index','10').animate({left: '510px', top: '120px'},2000);
                        $("#rg2").css('position','fixed').css('z-index','10').animate({left: '589px', top: '120px'},2000);
                        $("#rg3").css('position','fixed').css('z-index','10').animate({left: '510px', top: '214px'},2000);
                        $("#rg4").css('position','fixed').css('z-index','10').animate({left: '587px', top: '218px'},2000);
                        
                        
                        
                        $("#gg1").css('position','fixed').css('z-index','10').animate({left: '730px', top: '111px'},2000);
                        $("#gg2").css('position','fixed').css('z-index','10').animate({left: '826px', top: '121px'},2000);
                        $("#gg3").css('position','fixed').css('z-index','10').animate({left: '736px', top: '215px'},2000);
                        $("#gg4").css('position','fixed').css('z-index','10').animate({left: '827px', top: '217px'},2000);
                        
                        
                        $("#bg1").css('position','fixed').css('z-index','10').animate({left: '507px', top: '414px'},2000);
                        $("#bg2").css('position','fixed').css('z-index','10').animate({left: '589px', top: '409px'},2000);
                        $("#bg3").css('position','fixed').css('z-index','10').animate({left: '509px', top: '507px'},2000);
                        $("#bg4").css('position','fixed').css('z-index','10').animate({left: '592px', top: '508px'},2000);
                        
                        
                        $("#yg1").css('position','fixed').css('z-index','10').animate({left: '738px', top: '420px'},2000);
                        $("#yg2").css('position','fixed').css('z-index','10').animate({left: '820px', top: '420px'},2000);
                        $("#yg3").css('position','fixed').css('z-index','10').animate({left: '733px', top: '510px'},2000);
                        $("#yg4").css('position','fixed').css('z-index','10').animate({left: '818px', top: '503px'},2000);
                        
                           
                        
                        
                        
                        
                       
                        
                        
                        
                        
                      {  
                          
                        $('#rg1').click(function(event)
                            {   //alert(selected);
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                                $(this).css('width','30').css('height','30');
                                mydiv='#rg1';
                                    selected=1;
                                }
                                
                            });
                        $('#rg2').click(function(event)
                            { 
                                
                               // alert(selected);
                               if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                                $(this).css('width','30').css('height','30');
                                mydiv='#rg2'; 
                                   selected=1;
                               }
                                
                            });
                        $('#rg3').click(function(event)
                            { 
                               // alert(selected);
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                                $(this).css('width','30').css('height','30');
                                mydiv='#rg3';
                                selected=1;
                                }
                    
                            });
                        $('#rg4').click(function(event)
                            { 
                                //alert(selected);
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                             
                                $(this).css('width','30').css('height','30');
                                mydiv='#rg4';
                                    selected=1;
                                }
                        
                            });
                        
                        
                        
                        
                        
                        $('#bg1').click(function(event)
                            { 
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                             
                                $(this).css('width','30').css('height','30');
                                mydiv='#bg1'; 
                                    selected=1;
                                }
                                
                            });
                        $('#bg2').click(function(event)
                            { 
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                             
                                $(this).css('width','30').css('height','30');
                                mydiv='#bg2';
                                    selected=1;
                                }
            
                            });
                        $('#bg3').click(function(event)
                            { 
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                             
                                $(this).css('width','30').css('height','30');
                                mydiv='#bg3'; 
                                    selected=1;
                                }
                        
                            });
                        $('#bg4').click(function(event)
                            { 
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                             
                                $(this).css('width','30').css('height','30');
                                mydiv='#bg4'; 
                                    selected=1;
                                }
                        
                            });
                        
                        
                        
                        
                        $('#gg1').click(function(event)
                            { 
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                             
                                $(this).css('width','30').css('height','30');
                                mydiv='#gg1'; 
                                    selected=1;
                                }
        
                            });
                        $('#gg2').click(function(event)
                            { 
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                                $(this).css('width','30').css('height','30');  
                                mydiv='#gg2';
                                    selected=1;
                                }
                        
                            });
                        $('#gg3').click(function(event)
                            { 
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                             
                                $(this).css('width','30').css('height','30');
                                mydiv='#gg3'; 
                                    selected=1;
                                }
                            
                            });
                        $('#gg4').click(function(event)
                            { 
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                                $(this).css('width','30').css('height','30');  
                                mydiv='#gg4'; 
                                    selected=1;
                                }
                    
                            });
                        
                        
                        
                        
                        $('#yg1').click(function(event)
                            { 
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                                $(this).css('width','30').css('height','30');   
                                mydiv='#yg1'; 
                                    selected=1;
                                }
            
                            });
                        $('#yg2').click(function(event)
                            { 
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                                $(this).css('width','30').css('height','30');   
                                mydiv='#yg2';
                                    selected=1;
                                }
                            
                            });
                        $('#yg3').click(function(event)
                            { 
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                                $(this).css('width','30').css('height','30');  
                                mydiv='#yg3';
                                    selected=1;
                                }
                        
                            });
                        $('#yg4').click(function(event)
                            { 
                                if(selected==0){
                                x1=event.clientX;
                                y1=event.clientY;
                                $(this).css('width','30').css('height','30');   
                                mydiv='#yg4';
                                    selected=1;
                                }
            
                            });
                      }
                        
                        
                        
                        
                        
                        if(mydiv!='')
                        {$('#ludo').click(
                        function(event)
                            {
                              
                                        
                                if((x1>=475 && x1<=626 )&& (y1>=78 && y1<=263))
                                {
                                    if(res==6)
                                    {
                                     $(mydiv).css('width','20').css('height','20');
                                    $(mydiv).animate({left:507,top:272},300);
                                    selected=0;
                                   // alert('red');
                                    mydiv='';
                                    }
                                }
                                else if((x1>=711 && x1<=862 )&& (y1>=77 && y1<=263))
                                {
                                    if(res==6)
                                    {
                                     $(mydiv).css('width','20').css('height','20');
                                    $(mydiv).animate({left:692,top:118},300);
                                    selected=0;
                                    mydiv='';
                                    }
                                }
                                else if((x1>=477 && x1<=628 )&& (y1>=364 && y1<=550))
                                {
                                    if(res==6)
                                    {
                                     $(mydiv).css('width','20').css('height','20');
                                    $(mydiv).animate({left:639,top:497},300);
                                    selected=0;
                                    mydiv='';
                                    }
                                }
                                else if((x1>=710 && x1<=861 )&& (y1>=365 && y1<=551))
                                {
                                    if(res==6)
                                    {
                                     $(mydiv).css('width','20').css('height','20');
                                    $(mydiv).animate({left:818,top:342},300);
                                    selected=0;
                                    mydiv='';
                                    }
                                }
                                
                            else{
                                
                                  //alert('3');
                                
                                
                                 x=event.clientX-10;
                                y=event.clientY-8;
                                
                                if(((x>=475 && x<=626 )&& (y>=78 && y<=263))||
                                   ((x>=711 && x<=862 )&& (y>=77 && y<=263)) ||
                                   ((x>=477 && x<=628 )&& (y>=364 && y<=550)) ||
                                   ((x>=710 && x<=861 )&& (y>=365 && y<=551))||res==0 )
                                {
                                   // alert('1');
                                    $('#xycoordinate').html("<h4>Notifications/Warnings</h4><br>Inaccessible area to click on");
                                }
                                
                                
                                
                                
                                else{
                                
                                    
                                    
                                    
                                    //guti katakuti
                                   $('.guti').each(
                                    function()
                                    {
                                        var pos=$(this).position();
                                        var x2=pos.left;
                                        var y2=pos.top;
                                        
                                        var dist=Math.abs(x2-x)+Math.abs(y2-y);
                                        if(dist<24)
                                            {
                                                if(($(this).hasClass("redguti")==true)&&($(mydiv).hasClass("blueguti")||$(mydiv).hasClass("greenguti"))&&(x2>=501  && x2<=523  && y2>=269  && y2<=297 ))
                                                {   
                                                    $(this).animate({left:538,top:149},500);
                                                }
                                                else if(($(this).hasClass("blueguti")==true)&&($(mydiv).hasClass("redguti")||$(mydiv).hasClass("yellowguti"))&& !(x2>=630  && x2<=653  && y2>=493  && y2<=519 ))
                                                {   
                                                    $(this).animate({left:548,top:453},500);
                                                }
                                                else if(($(this).hasClass("greenguti")==true)&&($(mydiv).hasClass("redguti")||$(mydiv).hasClass("yellowguti"))&& !(x2>=682  && x2<=706  && y2>=108  && y2<=137 ))
                                                {   
                                                    $(this).animate({left:781,top:161},500);
                                                }
                                                else if(($(this).hasClass("yellowguti")==true)&&($(mydiv).hasClass("blueguti")||$(mydiv).hasClass("greenguti"))&& !(x2>=814  && x2<=835  && y2>=334  && y2<=360 ))
                                                {   
                                                    $(this).animate({left:793,top:450},500);
                                                }
                                            }
                                    });
                        
                                    
                                    
                                    
                                $(mydiv).css('width','20').css('height','20');
                                var dist=(Math.abs(x-x1)+Math.abs(y-y1));
                                var dis=33*res;
                               // alert(x1+','+y1+' '+x+','+y+'  '+dist+' '+dis+' diss is '+(dist-dis)+' error '+(13));
                                if(dist<=(dis+(30)))
                                {   $(mydiv).animate({left:x,top:y},300);
                                    if((x>=652 && x<=682 )&&(y>=300 &&y<=340 ))$(mydiv).hide();
                                    mydiv='';
                                 selected=0;
                                 res=0;
                                }
                                else $('#xycoordinate').html("<h4>Notifications/Warnings</h4><br> Impossible "+dist+","+dis);
                                }
                                
                                
                                
                                }
                            });
                        }
                       
                    });
            
            
            
            keypresse;
            
            
            
            $('#button1').click(
            function()
                {
                     $('.guti').each(function()
                    {
                       $(this).css('width',20).css('height',20);
                       selected=0;
                         mydiv='';
                    }
                    );
                    res1=Math.floor(Math.random()*6)+1;
                    res=res1;
                    $("#player1dice").html("&nbsp;&nbsp; &nbsp;&nbsp;"+res1);
                    $("#player2dice").html("");
                    if(res!=6)
                    {
                         $('#button2').removeProp('disabled');
                        $('#button1').attr('disabled','');
                        $("#player2dice").html("");
                    }
                    player='player1';
                   
                });
            
            
           
            $('#button2').click(
            function()
              {
                    $('.guti').each(function()
                    {
                       $(this).css('width',20).css('height',20);
                        selected=0;
                        mydiv='';
    
                    }
                    );
                    var res2=Math.floor(Math.random()*6)+1;
                    res=res2;
                    $("#player2dice").html("&nbsp;&nbsp; &nbsp;&nbsp;"+res2);
                    $("#player1dice").html("");
                    if(res!=6)
                    {
                         $('#button1').removeProp('disabled');
                        $('#button2').attr('disabled','');
                        $("#player1dice").html("");
                    }
                    player='player2';
                });
           
            
            
            $("#scrollup").click(
                function()
                {
                    $('#rules').slideToggle(1000);
                     $("#scrollup").attr('value','Show/Hide Rules');
                });
            
            
          
        }
     function showCoords(event) {
                var coords;
                switch(event.which)
                {
                        case 1:cords="Left Click";
                                break;
                        case 2:cords="Center Click";break;
                        case 3:cords="Right Click";break;
                }
                x = event.clientX;
                 y = event.clientY;
                 coords =cords+ " left: '" + x + "px', top: '" + y+"px "+event.which;
               $('#xycoordinate').html("<h4>Notifications/Warnings</h4><br>"+coords);
            }
            