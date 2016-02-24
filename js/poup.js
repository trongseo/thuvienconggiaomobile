$(document).ready(function() {
    $('a.login-window').click(function() {
           callLoginPoup();		
            return false;
    });
    
    $('a.registry-window').click(function(){
        callRegistryPoup();		
        return false;
    });
    
    // When clicking on the button close or the mask layer the popup closed
    $('a.close, #mask').live('click', function() { 
        $('#mask , .login-popup').fadeOut(300 , function() {
            $('#mask').remove();  
        }); 
        return false;
    });
    
    $('a.r-close, #mask').live('click', function() { 
        $('#mask , .registry-popup').fadeOut(300 , function() {
            $('#mask').remove();  
        }); 
        return false;
    });
    
    
    $('.loginbt').click(function(){
        actionLogin();
    });
   $('.registrybt').click(function(){
        actionRegistry();
    });
    
});
function callLoginPoup()
{
    //Fade in the Popup and add close button
    $('.login-popup').fadeIn(300);	
    //Set the center alignment padding + border
    var popMargTop = ($('.login-popup').height() + 24) / 2; 
    var popMargLeft = ($('.login-popup').width() + 24) / 2; 		
    $('.login-popup').css({ 
            'margin-top' : -popMargTop,
            'margin-left' : -popMargLeft
    });		
    // Add the mask to body
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);
}
function callRegistryPoup()
{
    //Fade in the Popup and add close button
    $('.registry-popup').fadeIn(300);	
    //Set the center alignment padding + border
    var popMargTop = ($('.registry-popup').height() + 24) / 2; 
    var popMargLeft = ($('.registry-popup').width() + 24) / 2; 		
    $('.registry-popup').css({ 
            'margin-top' : -popMargTop,
            'margin-left' : -popMargLeft
    });		
    // Add the mask to body
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);
}
function validate_login(){
    if($('#username').val() ==''||$('#username').val() =='Email')
        {	
            alert('Please fill Email');           
            return false;
        }
     else
	{
            if($('#password').val()=='')
                {
                    alert('Please fill Password');
                    return false;	
                }
                else
                {	
                    return true;
                    
                }
        }
}
function validate_registry(){
    if($('#email').val() ==''||$('#email').val() =='Email')
    {	
        alert('Please fill Email');           
        return false;
    }
    if(!isEmail($('#email').val()))
    {
        alert('Email incorrect  format');           
        return false;
    }
    if($('#pass').val()=='')
    {
        alert('Please fill Password');
        return false;	
    }
    if($('#pass').val()!=$('#re-pass').val())
    {
        alert('Password not match');
        return false;	
    }
    return true;
}
function isEmail(email)
{
     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}