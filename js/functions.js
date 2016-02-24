var url = window.location.host + subFolder; 

var _editor_url  = subFolder + '/globals/wysiwyg/xinha/';
var _editor_lang = "en";
var Xinha;
var xinha_plugins;
var xinha_editors;  

function xinha_init()
{
    if(!Xinha.loadPlugins(xinha_plugins, xinha_init))
    {
        return;
    }  
    var xinha_config = new Xinha.Config();
//    xinha_config.width = '276px';
//    xinha_config.iframeWidth = '276px';
//    xinha_config.height = '276px';

    xinha_editors = Xinha.makeEditors(xinha_editors, xinha_config, xinha_plugins);
    
    Xinha.startEditors(xinha_editors);
}

function loadJs(id, editor_type)
{          
    if (typeof(editor_type) == "undefined")
    {
        editor_type = "xinha";
    }
    
    if (editor_type == "xinha")
    {
        xinha_plugins =
        [
            'Linker',
            'ImageManager'
        ];
        xinha_editors =
        [
            id
        ];
        xinha_init();
    }
    else if (editor_type == "tinymce")
    {
        tinyMCE.init({
            mode:"exact",
            elements: id,
            width:"100%",
            theme:"advanced",
            skin:"wp_theme",
            //language : "ru",
            theme_advanced_toolbar_location:"top",
            theme_advanced_toolbar_align:"left",theme_advanced_statusbar_location:"bottom",theme_advanced_resizing:true,
            theme_advanced_resize_horizontal:false,
            dialog_type:"modal",
            formats:{
                            alignleft : [
                                {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles : {textAlign : 'left'}},
                                {selector : 'img,table', classes : 'alignleft'}
                            ],
                            aligncenter : [
                                {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles : {textAlign : 'center'}},
                                {selector : 'img,table', classes : 'aligncenter'}
                            ],
                            alignright : [
                                {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li', styles : {textAlign : 'right'}},
                                {selector : 'img,table', classes : 'alignright'}
                            ],
                            strikethrough : {inline : 'del'}
                        },
            relative_urls:false,
            remove_script_host:false,
            convert_urls:false,
            remove_linebreaks:true,
            gecko_spellcheck:true,
            keep_styles:false,
            entities:"38,amp,60,lt,62,gt",
            accessibility_focus:true,
            tabfocus_elements:"major-publishing-actions",
            media_strict:false,
            paste_remove_styles:true,
            paste_remove_spans:true,
            paste_strip_class_attributes:"all",
            paste_text_use_dialog:true,
            extended_valid_elements:"article[*],aside[*],audio[*],canvas[*],command[*],datalist[*],details[*],embed[*],figcaption[*],figure[*],footer[*],header[*],hgroup[*],keygen[*],mark[*],meter[*],nav[*],output[*],progress[*],section[*],source[*],summary,time[*],video[*],wbr",
            wpeditimage_disable_captions:false,
            //wp_fullscreen_content_css:"http://localhost/wordpress/wp-includes/js/tinymce/plugins/wpfullscreen/css/wp-fullscreen.css",
            //plugins:"inlinepopups,spellchecker,tabfocus,paste,media,fullscreen,wordpress,wpeditimage,wpgallery,wplink,wpdialogs,wpfullscreen",
            plugins:"images",
            //content_css:"http://localhost/wordpress/wp-content/themes/twentyeleven/editor-style.css",
            
            wpautop:true,apply_source_formatting:false,
            theme_advanced_buttons1:"bold,italic,strikethrough,|,bullist,numlist,blockquote,|,justifyleft,justifycenter,justifyright,|,link,unlink,wp_more,|,spellchecker,wp_fullscreen,wp_adv",
            theme_advanced_buttons2:"formatselect,underline,justifyfull,forecolor,|,pastetext,pasteword,removeformat,|,charmap,|,outdent,indent,|,undo,redo,|,images,",
            theme_advanced_buttons3:"",
            theme_advanced_buttons4:""
                        
        });
    }
    
}

function loadJsBlog(id)
{
    document.getElementById(id).onclick=''; 
    xinha_plugins =
    [
        'Linker',
        'ImageManager'
    ];
    xinha_editors =
    [
        id
    ];
    xinha_init_blog();
}

function xinha_init_blog()
{
    if(!Xinha.loadPlugins(xinha_plugins, xinha_init_blog))
    {
        return;
    }
    var xinha_config = new Xinha.Config();
    xinha_config.hideSomeButtons(" htmlmode textindicator subscript superscript outdent indent inserthorizontalrule createlink insertimage inserttable linebreak undo redo selectall print cut copy paste overwrite saveas killword clearfonts removeformat toggleborders splitblock lefttoright righttoleft showhelp about ");
    xinha_editors = Xinha.makeEditors(xinha_editors, xinha_config, xinha_plugins);
    Xinha.startEditors(xinha_editors);
}

function loadJsSimple(id)
{          
    //Xinha = undefined;
    delete Xinha;
    //delete xinha_plugins;
    delete xinha_editors;
    //xinha_plugins = null;
    //xinha_editors = null;
    document.getElementById(id).onDblclick='';  
    xinha_plugins =
    [
        'Linker'
    ];
    xinha_editors =
    [
        id
    ];
    
    var xinha_config = new Xinha.Config();
    xinha_config.width = '550px';
    xinha_config.height = '400px';  
    xinha_config.iframeWidth = '550px';
    xinha_config.iframeHeight = '350px';
    xinha_config.hideSomeButtons(" htmlmode help ");
    xinha_config.toolbar =
 [
   ["separator","formatblock","bold","italic","underline"],
   ["separator","justifyleft","justifycenter","justifyright","justifyfull"],
   ["separator","undo","redo"] 
 ];

 xinha_config.formatblock =
  {
    "&mdash; format &mdash;": "",
    "Heading 1": "h1",
    "Heading 2": "h2",
    "Heading 3": "h3",
    "Heading 4": "h4",
    "Heading 5": "h5",
    "Normal": "p"
};

//xinha_config.pageStyle =
// 'p { color:black; padding: 5px; margin: 5px; font-family: Arial; font-size: 14px; text-align:left;}\n' +
// 'h4 {color: #f69404; font-family: Arial,sans-serif; font-size: 20px; font-weight: bold; text-align:center;}\n' +
// 'h5 {color: #4c4c4c; font-family: Arial,sans-serif; font-size: 18px; text-align:center;}\n' +
// 'a {text-decoration:none; }';



    xinha_editors = Xinha.makeEditors(xinha_editors, xinha_config, xinha_plugins);
    Xinha.startEditors(xinha_editors);

}

function validateString(str)
{
    var reg = /[^\d\s\w]/i;
    var result = reg.test(str);
    if (!result)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function validateStringSigns(str)
{
    var reg = /[^\d\s\w\?\!,;-]/i;
    var result = reg.test(str);
    if (!result)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function validateEmail(email)
{
    var reg = /(\w|\.+)@([a-z]|-|\d|_)+(\.[a-z]+){1,10}$/i;
 
    var result = reg.test(email);
 
    if(!result)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function confirmDelete()
{
    return confirm( translates['confirm_delete'] );
}


function updateCaptcha()
{
    //alert("==");
    //alert(document.getElementById("captcha_img").src);
    //document.getElementById("captcha_img").src ="http://"+url+"/globals/inc/captcha/CaptchaSecurityImages.php";
}


function validateForm(id)
{
    if( $("#"+id).validate().form() )
    {
        $("#"+id).submit();
    }
    else
    {
        $("#errors").html(translates['fill_correctly']);
    }
}

function validateFormWithRules(id, rules)
{
    if( $("#"+id).validate(rules).form() )
    {
        $("#"+id).submit();
    }
    else
    {
        $("#errors").html(translates['fill_correctly']);
    }
}

function validateFormExt(id, div_error_tmplt)
{
    if( $("#"+id).validate().form() )
    {
        $("#"+id).submit();
    }
    else
    {
        $(div_error_tmplt).html(translates['fill_correctly']);
    }
}

function ajaxAuthorization()
{
    $('#dialog_ajaxLogin').dialog({autoOpen: false, width: 390});
    $("#dialog_ajaxLogin").dialog("close");
    $("#dialog_ajaxLogin").dialog("open");
    $("#dialog_ajaxLogin").load("http://"+url+"/index.php?s=ajax&ajax=login&func=ajaxAuthorization");
}

function ajaxAuthorizationSubmit()
{
    if ($("#form_ajaxAuthorization").validate().form())
    {
        $.post(
            "http://"+url+"/index.php",
            {
                s:     "ajax", 
                ajax:  "login", 
                func:  "ajaxAuthorization",
                show_script:  1,
                login: $("#login_ajaxAuthorization").val(),
                password: $("#password_ajaxAuthorization").val()
            },
            function( data )
            {
                if( data == 1)
                {      
                    reloadWelcomeUserBlock();
                    //reloadMenuUserBlock();
                    $("#dialog_ajaxLogin").dialog("close");
                }
                else
                {
                    $("#errors").html(translates["wrong_login_passw"]);
                }
            }
        );
    }
}

function reloadWelcomeUserBlock()
{
    $.post(
            "http://"+url+"/index.php",
            {
                s:     "ajax", 
                ajax:  "login", 
                func:  "welcomeUserBlock"
            },
            function( data )
            {
                if (data)
                {      
                    $(".welcome").replaceWith(data);
                }
            }
        );   
}

function reloadMenuUserBlock()
{
    $.post(
        "http://"+url+"/index.php",
        {
            s:     "ajax", 
            ajax:  "login", 
            func:  "menuBlockForLiginedUsers"
        },
        function( data )
        {
            if (data)
            {      
                $(".top_menu").replaceWith(data);
            }
        }
    );   
}

