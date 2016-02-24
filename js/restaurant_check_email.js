$(document).ready(function(){
        $('#B1').attr('disabled','');
        var emailok = false;
        var boxes = $(".input_s1_normal");
        var myForm = $("#restaurant"), username = $("#username"), email = $("#emailr"), emailInfo = $("#emailInfo");

        //give some effect on focus
        boxes.focus(function(){
                $(this).addClass("input_s1_focus");
        });
        //reset on blur
        boxes.blur(function(){
                $(this).removeClass("input_s1_focus");
        });

        //Form Validation
        myForm.submit(function(){
                if(username.attr("value") == "")
                {
                        alert("Enter Username");
                        username.focus();
                        return false;
                }
                if(email.attr("value") == "")
                {
                        alert("Enter Email");
                        email.focus();
                        return false;
                }
                if(!emailok)
                {
                        alert("Check Email");
                        email.attr("value","");
                        email.focus();
                        return false;
                }
        });

        //send ajax request to check email
        email.blur(function(){
                $.ajax({
                        type: "POST",
                        data: "email="+$(this).attr("value"),
                        url: "register_restaurant_check.php",
                        beforeSend: function(){
                                emailInfo.html("<font color='blue'>Checking Email...</font>");
                        },
                        success: function(data){
                                if(data == "invalid")
                                {
                                        emailok = false;
                                        emailInfo.html("<font color='red'>Inavlid Email</font>");
                                }
                                else if(data != "0")
                                {
                                        emailok = false;
                                        emailInfo.html("<font color='red'>Email Already Exist</font>");
                                }
                                else
                                {
                                        emailok = true;
                                        emailInfo.html("<font color='green'>Email OK</font>");
                                }
                        }
                });
        });
});

