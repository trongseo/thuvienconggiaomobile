$(document).ready(function() 
{	 
  
    
        var index = 0;
        var interid = 0;
        var images = $("#gallery img");
        var imgHeight = $(images).attr("height");
        for (i=0; i<images.length; i++)
        {
                $(images[i]).addClass("image-"+i);
        }
        shownext(index);
        interid=setInterval(next, 10000);			
        $("#next").click(function(){	
                clearInterval(interid);
                if(index<(images.length-1))
                {
                        index++;
                        shownext(index);					
                }
                else
                {
                        shownext(0);
                }
                interid=setInterval(next,10000);
        });
        $("#pre").click(function(){		
                clearInterval(interid);
                if(index>0)
                {
                        index--;
                        showpre(index);					
                }
                else
                {
                        showpre(images.length-1);
                }
                interid=setInterval(next,10000);	
        });			

        function next()
        {
                if (index<(images.length-1)){index+=1 ;}
                else {index=0}
                shownext(index);
        }
        function pre()
        {
                if (index>0){index-=1 ;}
                else {index=images.length-1}
                showpre(index);
        }
        function shownext(num)
        {
                $(images).animate({opacity: 0},1500);
                $(images).animate({left: 0});			
                $(".image-"+num).stop().animate({opacity: 1,left: '-=4'}, 1000);			
        }
        function showpre(num)
        {
                $(images).animate({opacity: 0},1500);
                $(images).animate({left: 0});				
                $(".image-"+num).stop().animate({opacity: 1,left: '+=4'}, 1000);			
        }
        
});


