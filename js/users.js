var url = window.location.host + subFolder;  

function clear_all(id)
{
    $('#'+id+' option:selected').each( function (index){         
        $(this).attr('selected', false); 
        /*var checked = $(this).attr('selected');
        if(checked){ 
            $(this).attr('selected', false);
        } */
    })
}
function choose_all(id)
{
    $('#'+id+' option').each(function(i){
         $(this).attr("selected","selected");
    });
}

function choose_all_ret(id)
{
    var str = new Array();
    /*continents[0] = "Europe";
    continents[1] = "Asia";
    continents[2] = "Australia";
    continents[3] = "Antarctica";
    continents[4] = "North America";
    continents[5] = "South America";
    continents[6] = "Africa"; */
    $('#'+id+' option').each(function(i){
         $(this).attr("selected","selected");
         str[i] = $(this).val();         
    });
    return str;
}
function to_left(id_from,id_to)
{
    $('#'+id_from+' option:selected').each( function (index){         
        //$("#"+id_to).append( $('<option value="'+$(this).val()+'">'+$(this).val()+'</option>'));
        $("#"+id_to).prepend( $('<option value="'+$(this).val()+'">'+$(this).val()+'</option>'));
        $(this).remove(); 
    })
}
function delete_empty_options(id)
{
    $('#'+id+' option').each(function(i){
         if ($(this).val() == '')
         {
            $(this).remove();  
         }      
    });
    return false;
}

function to_right(id_from,id_to)
{
    $('#'+id_from+' option:selected').each( function (index){         
        $("#"+id_to).prepend( $('<option value="'+$(this).val()+'">'+$(this).val()+'</option>'));
        //$("#"+id_to).append( $('<option value="'+$(this).val()+'">'+$(this).val()+'</option>'));
        $(this).remove();
        
        //to delete emply option 
        delete_empty_options(id_to);
    })
}
function edit_prof()
{
    $("div.view_profile").fadeOut(0);
    $("div.edit_profile").fadeIn(0).css('display','block');

    return false;
}
function add_prof()
{
    /*var url_for_operation = $("#url_for_operation").val();
    var tel_service_numb = $("#tel_service_numb").val();
    var live_chat = $("#live_chat").val();
    var mobile_platform = $("#mobile_platform").val();
    var loyalty_program = $("#loyalty_program").val();
    var live_betting = $("#live_betting").val();
    var phone_wagering = $("#phone_wagering").val();
    var casino = $("#casino").val();
    var live_dealer = $("#live_dealer").val();
    var bingo = $("#bingo").val();
    var poker = $("#poker").val();
    var sportsbook = $("#sportsbook").val();
    var langs = $("#langs").val();
    var langs_service = $("#langs_service").val();
    var currencies = $("#currencies").val();*/

    //$('form').submit(function() {
    // alert($(this).serialize());
    // var k = $(this).serialize();
    /* if ($("#articleForm").validate().form())
    {
    $("#articleForm").submit();
    }
    else
    {
    $("#errors").html(translates['fill_correctly']);
    } */
    
    //to delete emply option 
    delete_empty_options("languages");
    delete_empty_options("languages_service");
    delete_empty_options("currencies");
    
    var langs = choose_all_ret("languages");
    var langs_service = choose_all_ret("languages_service");
    var currencies = choose_all_ret("currencies");
    //myObject = $('#languages :selected');
    //alert(langs);
    //alert(langs_service);


    var jsonText_langs = JSON.stringify(langs);
    var jsonText_langs_service = JSON.stringify(langs_service);
    var jsonText_currencies = JSON.stringify(currencies);
    //alert(jsonText_langs);
    //alert(jsonText_langs_service);

    //var myJSONText = JSON.stringify(myObject, replacer);
    //var myJSONText = JSON.stringify(myObject);
    //alert(myJSONText);
    $(document).ready(function(){
        if ($("form").validate().form())
        {
            var str = $("form").serialize();
            //alert(str);
            $.post(
                "http://"+url+"/index.php",
                {
                    s:     "ajax", 
                    ajax:  "login", 
                    func:  "editUserProfile",
                    str: str,
                    langs : jsonText_langs,
                    langs_service : jsonText_langs_service,
                    currencies : jsonText_currencies
                },
                function( data2 )
                {
                    if( data2 )
                    {
                        $('div.view_profile').html(data2);
                        return false;
                        //alert(data2);
                        /*data_arr = JSON.parse(data2);
                        $.each(data_arr, function(i, item) {
                            alert(i +" : "+item);
                            if (item == 0)
                            {
                                $("div.div_"+i).html('No');
                            }
                            else if (item == 1)
                            {
                                $("div.div_"+i).html('Yes' + item);
                            }
                            else
                            {
                                $("div.div_"+i).html(item);
                            }
                        });
                        return false;
                        
                        $('div.ulogin_new').fadeOut(0);
                        $('div.ulogin').html(ulogin).fadeIn(0);
                        $('a.un_save').fadeOut(0);
                        $('a.un_change').fadeIn(0);
                        alert('saved'); */
                    }
                    else
                    {
                        error = error + "<font color='red'> Didn't save'" + translates['didnt_save'] + "</font><br />"; 
                        $("#errors").html(error);
                    }
                }
            );
            $("div.edit_profile").fadeOut(0);
            $("div.view_profile").fadeIn(0);
        };  
        return false;
    });
}
function openLogin()
{
    var error = '';
    /* $('div.ulogin').fadeOut(0);
    $('div.ulogin_new').fadeIn(0);
    $('a.un_change').fadeOut(0);
    $('a.un_save').fadeIn(0); */
    
    /* $( "#open_login" )
            .click(function() {
                $( "#dialog-form" ).dialog( "open" );
            }); */
    $( "#autoriz" ).dialog( "open" );           
    $( "#autoriz" ).dialog({
        autoOpen: true,
        height: 220,
        width: 450,
        modal: true,
        buttons: {
            /* "Log in": function() {
                var bValid = true;
                allFields.removeClass( "ui-state-error" );

                bValid = bValid && checkLength( name, "username", 3, 16 );
                bValid = bValid && checkLength( email, "email", 6, 80 );
                bValid = bValid && checkLength( password, "password", 5, 16 );

                bValid = bValid && checkRegexp( name, /^[a-z]([0-9a-z_])+$/i, "Username may consist of a-z, 0-9, underscores, begin with a letter." );
                // From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
                bValid = bValid && checkRegexp( email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "eg. ui@jquery.com" );
                bValid = bValid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );

                if ( bValid ) {
                    $( "#users tbody" ).append( "<tr>" +
                        "<td>" + name.val() + "</td>" + 
                        "<td>" + email.val() + "</td>" + 
                        "<td>" + password.val() + "</td>" +
                    "</tr>" ); 
                    $( this ).dialog( "close" );
                }
            }, */
            Cancel: function() {
                $( this ).dialog( "close" );
        }},
        open: function(event, ui) {
            $.post(
                "http://"+url+"/index.php",
                {
                    s:     "ajax", 
                    ajax:  "login", 
                    func:  "bl_authorize"//,
                    //login: $("#login").val(),
                    //email: $("#password").val()
                },
                function( data1 )
                {
                    /*alert('openLogin');
                    alert(data1);*/
                    if( data1 == '1')
                    {      
                        //$("#form_login").submit();    
                        alert('Welcome');
                        return false; 
                    }
                    else if ( data1 == '2' )
                    {
                        error = error + "<font color='red'>" + translates['no_such_account'] + "</font><br />"; 
                        $("#errors").html(error);
                         return false; 
                    }
                    else if ( data1 == '3' )
                    {

                        error = error + "<font color='red'>" + translates['you_are_just_login'] + "</font><br />"; 
                        $("div.resp_div").html(error);
                         return false; 
                    }
                    else
                    {
                        $('div.dialog_login_form').html(data1);
                         return false; 
                    }
                }
            );
        },
        /*buttons: {
            "Create an account": function() {
                var bValid = true;
                allFields.removeClass( "ui-state-error" );

                bValid = bValid && checkLength( name, "username", 3, 16 );
                bValid = bValid && checkLength( email, "email", 6, 80 );
                bValid = bValid && checkLength( password, "password", 5, 16 );

                bValid = bValid && checkRegexp( name, /^[a-z]([0-9a-z_])+$/i, "Username may consist of a-z, 0-9, underscores, begin with a letter." );
                // From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
                bValid = bValid && checkRegexp( email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "eg. ui@jquery.com" );
                bValid = bValid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );

                if ( bValid ) {
                    $( "#users tbody" ).append( "<tr>" +
                        "<td>" + name.val() + "</td>" + 
                        "<td>" + email.val() + "</td>" + 
                        "<td>" + password.val() + "</td>" +
                    "</tr>" ); 
                    $( this ).dialog( "close" );
                }
            },
            Cancel: function() {
                $( this ).dialog( "close" );
            }
        },*/
        close: function() {
            allFields.val( "" ).removeClass( "ui-state-error" );
        }
    });
    
    return false;
}

function changeUserName(u_login)
{
    $('div.ulogin').fadeOut(0);
    $('div.ulogin_new').fadeIn(0);
    $('a.un_change').fadeOut(0);
    $('a.un_save').fadeIn(0);
    
    return false;
}

function saveUserName()
{
    var error = '';
    var ulogin = $("#login").val();
    
    $.post(
        "http://"+url+"/index.php",
        {
            s:     "ajax", 
            ajax:  "login", 
            func:  "editUser",
            login: ulogin
        },
        function( data2 )
        {
            if( data2 )
            {
                $('div.ulogin_new').fadeOut(0);
                $('div.ulogin').html(ulogin).fadeIn(0);
                $('a.un_save').fadeOut(0);
                $('a.un_change').fadeIn(0);
                 alert('saved');
            }
            else
            {
                error = error + "<font color='red'> Didn't save'" + translates['didnt_save'] + "</font><br />"; 
                $("#errors").html(error);
            }
        }
    );
    
    return false;
}

function changeUserCountry()
{
    $('div.ucountry').fadeOut(0);
    $('div.ucountry_new').fadeIn(0);
    $('a.uc_change').fadeOut(0);
    $('a.uc_save').fadeIn(0);
    
    return false;
}

function saveUserProfilePhoto()
{
   $.post(
        "http://"+url+"/index.php",
        {
            s:     "ajax", 
            ajax:  "login", 
            func:  "saveUserProfilePhoto"
        },
        function( data )
        {
            if( data )
            {
                alert('ok!');
            }
            else
            {
                alert('not ok!');  
            }                                                          
        }
    );

    return false;
}

function saveUserCountry()
{
    var error = '';
    var country_name = '';
    var ucountry = $("#country").val();
    
    $.post(
        "http://"+url+"/index.php",
        {
            s:     "ajax", 
            ajax:  "login", 
            func:  "editUser",
            country: ucountry
        },
        function( data2 )
        {
            if( data2 )
            {
                data_arr = JSON.parse(data2);
                $.each(data_arr, function(i, item) {
                    if (item.code === ucountry)
                    {
                        country_name = item.name;
                    }
                });
                $('div.ucountry_new').fadeOut(0);
                $('div.ucountry').html(country_name).fadeIn(0);
                $('a.uc_save').fadeOut(0);
                $('a.uc_change').fadeIn(0);
            }
            else
            {
                error = error + "<font color='red'>new country dont save " + translates['choose_another_email'] + "</font><br />";
                $("label.label_country").html(error);
            }                                                          
        }
    );
    
    return false;
}

function changeUserEmail(u_login)
{
    $('div.uemail').fadeOut(0);
    $('div.uemail_new').fadeIn(0);
    $('a.ue_change').fadeOut(0);
    $('a.ue_save').fadeIn(0);
    
    return false;
}

function saveUserEmail()
{
    var error = '';
    var uemail = $("#email").val();
    
    $.post(
        "http://"+url+"/index.php",
        {
            s:     "ajax", 
            ajax:  "login", 
            func:  "checkUserEmailUnique",
            email: uemail
        },
        function( data2 )
        {
            if( data2 )
            {
                $.post(
                    "http://"+url+"/index.php",
                    {
                        s:     "ajax", 
                        ajax:  "login", 
                        func:  "editUser",
                        email: uemail
                    },
                    function( data2 )
                    {
                        if( data2 )
                        {
                            $('div.uemail_new').fadeOut(0);
                            $('div.uemail').html(uemail).fadeIn(0);
                            $('a.ue_save').fadeOut(0);
                            $('a.ue_change').fadeIn(0);
                            //alert('saved');
                        }
                        else
                        {
                            error = error + "<font color='red'> Didn't save" + translates['didnt_save'] + "</font><br />"; 
                            $("label.label_email").html(error);
                        }
                    }
                );
            }
            else
            {
                error = error + "<font color='red'>" + translates['choose_another_email'] + "</font><br />"; 
               $("label.label_email").html(error); 
            }
        }
    );
    
    return false;
}

function form_reg_subm()
{
    validateFormWithRules("reg_form", {
        rules: {
            code: {
                remote: "http://"+url+"/check_captcha.php"
            },
            login: { 
                remote: {
                    url: "http://"+url+"/index.php",
                    type: "post",
                    data: {
                       s:     "ajax", 
                       ajax:  "login",  
                       func:  "checkUserUnique"
                    },
                    async: "false"
                }
            },
            password2: { 
                equalTo:  "#password"
            }
        },
        messages: {
            code: {
                remote: translates['security_code_incorrect']   
            },
            login: { 
                remote: translates['notunique_login']
            },
            password2: { 
                equalTo: translates['notequel_passwords']
            }      
        }
    });
    
    return false;
    
    var error = '';
    var check_captcha = false; 
    var check_unique = false;

    $("#check_captcha").html("<font color='red'>" + translates['verification'] + "</font>");
    
    if ( $("#login").val() == '' )
    {
        error = error + "<font color='red'>" + translates['required_login'] + "</font><br />";
    }

    if ( $("#password").val() == '' )
    {
        error = error + "<font color='red'>" + translates['required_password'] + "</font><br />";
    }
    if ( $("#password2").val() == '' )
    {
        error = error + "<font color='red'>" + translates['duplicate_password'] + "</font><br />";
    }
    if (( $("#password").val() != '' ) && ( $("#password2").val() != '' ) && ($("#password").val() != $("#password2").val()))
    {
        error = error + "<font color='red'>" + translates['notequel_passwords'] + "</font><br />";   
    }

    if ( $("#name").val() == '' )
    {
        error = error + "<font color='red'>" + translates['required_firstname'] + "</font><br />";
    }
    
    if ( $("#lastname").val() == '' )
    {
        error = error + "<font color='red'>" + translates['required_lastname'] + "</font><br />";
    }
    
    if( $("#email").val() == '' ) 
    {
        error = error + "<font color='red'>" + translates['required_email'] + "</font><br />";
    }
    else
    {   
        if (!validateEmail($("#email").val()))
        {
            error = error + "<font color='red'>" + translates['incorrect_email'] + "</font><br />"; 
        }
    }
    
    /*    
    if (!$("#agree").attr('checked'))
    {
        error = error + "<font color='red'>" + translates['required_agree'] + "</font><br />";         
    }
    */
    
    if( $("#imgcode").val() == '' ) 
    {
        error = error + "<font color='red'>" + translates['required_security_code'] + "</font><br />";
        $("#check_captcha").html("");
    }
    else
    {
        $.post(
            "http://"+url+"/check_captcha.php",
            { 
                code: $("#imgcode").val() 
            },
            function( data )
            {        
                if( data == '0' )
                {
                    $("#check_captcha").html("<font color='red'>" + translates['security_code_incorrect'] + "</font>");
                    check_captcha = false;
                }
                if (data == '1')
                {
                    $("#check_captcha").html("<font color='red'>" + translates['correct'] + "</font>");
                    check_captcha = true;
                    if ( error == '' )
                    {
                        $.post(
                            "http://"+url+"/index.php",
                            {
                                s:     "ajax", 
                                ajax:  "login", 
                                func:  "checkUserUnique",
                                login: $("#login").val(),
                                email: $("#email").val()
                            },
                            function( data1 )
                            {
                                if( data1 == 1)
                                {      
                                    check_unique = true;
                                    $("#reg_form").submit();    
                                }
                                else
                                {
                                    error = error + "<font color='red'>" + translates['notunique_login'] + "</font><br />"; 
                                    $("#errors").html(error);
                                }
                            }
                        );
                        
                    } 
                }
            }
        );
    }
  
    if (( error == '' ) && (check_captcha == true) && (check_unique == true))
    {
        $("#reg_form").submit();
    }
    else
    {
        $("#errors").html(error);
    }
    return false;   
}