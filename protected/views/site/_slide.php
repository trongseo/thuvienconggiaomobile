<style>
    /*.sidebar-nav {*/
        /*padding: 9px 0;*/
    /*}*/

    /*.dropdown-menu .sub-menu {*/
        /*left: 100%;*/
        /*position: absolute;*/
        /*top: 0;*/
        /*visibility: hidden;*/
        /*margin-top: -1px;*/
    /*}*/

    /*.dropdown-menu li:hover .sub-menu {*/
        /*visibility: visible;*/
    /*}*/

    /*.dropdown:hover .dropdown-menu {*/
        /*display: block;*/
    /*}*/

    /*.nav-tabs .dropdown-menu, .nav-pills .dropdown-menu, .navbar .dropdown-menu {*/
        /*margin-top: 0;*/
    /*}*/

    /*.navbar .sub-menu:before {*/
        /*border-bottom: 7px solid transparent;*/
        /*border-left: none;*/
        /*border-right: 7px solid rgba(0, 0, 0, 0.2);*/
        /*border-top: 7px solid transparent;*/
        /*left: -7px;*/
        /*top: 10px;*/
    /*}*/
    /*.navbar .sub-menu:after {*/
        /*border-top: 6px solid transparent;*/
        /*border-left: none;*/
        /*border-right: 6px solid #fff;*/
        /*border-bottom: 6px solid transparent;*/
        /*left: 10px;*/
        /*top: 11px;*/
        /*left: -6px;*/
    /*}*/


    .dropdown-submenu {
        position: relative;
    }

    .dropdown-submenu>.dropdown-menu {
        top: 0;
        left: 100%;
        margin-top: -6px;
        margin-left: -1px;
        -webkit-border-radius: 0 6px 6px 6px;
        -moz-border-radius: 0 6px 6px;
        border-radius: 0 6px 6px 6px;
    }

    .dropdown-submenu:hover>.dropdown-menu {
        display: block;
    }

    .dropdown-submenu>a:after {
        display: block;
        content: " ";
        float: left;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
        border-width: 5px 0 5px 5px;
        border-left-color: #ccc;
        margin-top: 5px;
        margin-right: -10px;

    }
    .dropdown-submenu>a.changed:after {
        border-color: transparent;
        border-right: 5px solid #999;
        border-style: solid;
        border-width: 5px 5px 5px 0;
        content: " ";
        display: block;
        float: left;
        height: 0;
        margin-left: -15px;
        margin-right: -10px;
        margin-top: -15px;
        width: 0;


    }


    .dropdown-submenu:hover>a:after {
        border-left-color: #fff;
    }

    .dropdown-submenu.pull-left {
        float: none;
    }

    .dropdown-submenu.pull-left>.dropdown-menu {
        left: -100%;
        margin-left: 10px;
        -webkit-border-radius: 6px 0 6px 6px;
        -moz-border-radius: 6px 0 6px 6px;
        border-radius: 6px 0 6px 6px;
    }
    .dropdown-submenu{position:relative;}
    .dropdown-submenu>.dropdown-menu{
        top:0;left:-100%;min-width:280px;
        margin-top:-6px;margin-right:-1px;-webkit-border-radius:6px 6px 6px 6px;
        -moz-border-radius:6px 6px 6px 6px;
        border-radius:6px 6px 6px 6px;}
    .dropdown-submenu:hover>.dropdown-menu{display:block;}
    .dropdown-submenu>a:after
    {display:block;content:" ";float:left;width:0;height:0;border-color:transparent;border-style:solid;
        border-width:5px 5px 5px 0;border-right-color:#999;margin-top:5px;margin-right:10px;}
    .dropdown-submenu:hover>a:after{border-left-color:#ffffff;}
    .dropdown-submenu.pull-left{float:none;}.dropdown-submenu.pull-left>.dropdown-menu{left:-100%;margin-left:10px;-webkit-border-radius:6px 6px 6px 6px;-moz-border-radius:6px 6px 6px 6px;border-radius:6px 6px 6px 6px;}
    .dropdown-menu-right {margin-left:0;min-width: 280px}
    #amenuid:hover .dropdown-menu-right {
        display: block;
        margin-top: 0; // remove the gap so it doesn't close
    }
    .imageright{
cursor: hand;
    }
</style>
<div class="row">
    <div class="slider-home-container">
        <div class="col-md-8 slide-left-container">
            <div id="slider1_container" style="display: none; position: relative; margin: 0 auto;
								top: 0px; left: 0px; width: 674px; height: 253px; overflow: hidden;">
                <div u="loading" style="position: absolute; top: 0px; left: 0px;">
                    <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block;
										top: 0px; left: 0px; width: 100%; height: 100%;">
                    </div>
                    <div style="position: absolute; display: block; background: url(img/loading.gif) no-repeat center center;
										top: 0px; left: 0px; width: 100%; height: 100%;">
                    </div>
                </div>
                <div u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 673px; height: 253px; overflow: hidden;">
                    <?php

                    $datatbl_slide = CommonDB::GetAll("SELECT  * FROM `tbl_slide` WHERE active=1 ORDER BY show_order",[]);

                    ?>
                    <?php foreach($datatbl_slide as $value):?>

                        <div>

                         <a href="<?php echo  $value["link_ref"] ?>" target="_blank">
                             <img u="image" src="<?php echo PATH_IMAGE_slideImage. $value["image_name"] ?>" />
                         </a>
                        </div>


                    <?php endforeach?>
                    <!--                    <img u="image" src="img/slide/01.jpg" />-->
                    <!--                    <div>-->
                    <!--                        <img u="image" src="img/slide/01.jpg" />-->
                    <!--                    </div>-->
                    <!--                    <div>-->
                    <!--                        <img u="image" src="img/slide/02.jpg" />-->
                    <!--                    </div>-->
                    <!--                    <div>-->
                    <!--                        <img u="image" src="img/slide/03.jpg" />-->
                    <!--                    </div>-->
                    <!--                    <div>-->
                    <!--                        <img u="image" src="img/slide/04.jpg" />-->
                    <!--                    </div>-->
                </div>
                <div u="navigator" class="jssorb21" style="position: absolute; bottom: 26px; left: 6px;">
                    <div u="prototype" style="POSITION: absolute; WIDTH: 19px; HEIGHT: 19px; text-align:center; line-height:19px; color:White; font-size:12px;"></div>
                </div>
									<span u="arrowleft" class="jssora21l" style="width: 55px; height: 55px;  left: 8px;">
									</span>
									<span u="arrowright" class="jssora21r" style="width: 55px; height: 55px; right: 8px">
									</span>
            </div>

        </div>
        <div class="col-md-4 " style="width:345px;align:left;padding-left:0px;margin-left:-4px">
            <img u="image" src="images/thuvien.jpg" style="width: 336px;height:253px;" class="imageright" title="Vào thư viện" alt="Vào thư viện" />
            <!--        <div class="slide-right-content box" style="background-color: #DEE3F1;opacity:0.8;z-index: 1000;border:1px solid #be7338">        -->

            <div class="slide-right-content " style="height: 62px">


                <div class="nav nav-pills">
<!--                    <a href="#" id="amenuid" data-toggle="dropdown" class="dropdown-toggle" style="padding:0px">-->
<!--                        <span style="font-size:17px;font-weight: bold;" class="colorvietnam">Nhấn</span>-->
<!--                        <span style="font-size:14px;font-weight: bold;"  class="colorconggiao" >vào đây để vào</span>-->
<!--                        <span style="font-size:17px;font-weight: bold;" class="colorvietnam">Thư viện</span>-->
<!--                    </a>-->
                    <a href="#" id="amenuid" data-toggle="dropdown" class="dropdown-toggle" style="padding:0px">
                        <img src="/img/Capture2.png" style="margin-left:-2px">
                    </a>
                    <ul class="dropdown-menu multi-level dropdown-menu-right" role="menu" aria-labelledby="dropdownMenu">

                        <?php require "leftmenutop.php" ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    jQuery(document).ready(function ($) {
        var options = {
            $FillMode: 2,                                       //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
            $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
            $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
            $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

            $ArrowKeyNavigation: true,                          //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
            $SlideEasing: $JssorEasing$.$EaseOutQuint,          //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
            $SlideDuration: 800,                               //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
            $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
            //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
            //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
            $SlideSpacing: 0,                                   //[Optional] Space between each slide in pixels, default value is 0
            $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
            $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
            $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
            $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
            $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

            $BulletNavigatorOptions: {                          //[Optional] Options to specify and enable navigator or not
                $Class: $JssorBulletNavigator$,                 //[Required] Class to create navigator instance
                $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                $SpacingX: 8,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                $SpacingY: 8,                                   //[Optional] Vertical space between each item in pixel, default value is 0
                $Orientation: 1,                                //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
                $Scale: false,                                  //Scales bullets navigator or not while slider scale
            },

            $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
                $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
                $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
            }
        };
        $("#slider1_container").css("display", "block");
        var jssor_slider1 = new $JssorSlider$("slider1_container", options);
        function ScaleSlider() {
            var bodyWidth = document.body.clientWidth - 30;
            if (bodyWidth)
                jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 673));
            else
                window.setTimeout(ScaleSlider, 30);
        }
        ScaleSlider();
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
    });
</script>
<style>
    .slide-left-container {
        margin: 0px 0px 0px 0px;
    }
    .slide-right-container {


        position: relative;
    }
    .slider-home-container {
        background: url('');
        height: 265px;
    }

    .slide-right-container {
        margin: 1px -12px;
        position: relative;
        margin-top:-1px;
    }

</style>
<script>
    var clickiii = 0;
    $('#amenuid').hover(function () {
      // $('#amenuid').click();

            $('.dropdown-menu-right').show();

    });
    $(document).click(function () {
        $('.dropdown-menu-right').hide();
    });
    $('.imageright').click(function () {
       window.location ='/thu-vien';
    });

    function checkBrowser(){
        c=navigator.userAgent.search("Chrome");
        f=navigator.userAgent.search("Firefox");
        m8=navigator.userAgent.search("MSIE 8.0");
        m9=navigator.userAgent.search("MSIE 9.0");
        if (c>-1){
            brwsr = "Chrome";
        }
        else if(f>-1){
            brwsr = "Firefox";
        }else if (m9>-1){
            brwsr ="MSIE 9.0";
        }else if (m8>-1){
            brwsr ="MSIE 8.0";
        }
        return brwsr;
    }

    if (checkBrowser()=="Firefox") {
      //  alert('s');
       // $('.dropdown-submenu > a::after').css('margin-top',-15+"px");

        $('.dropdown-submenu>a').toggleClass('changed');
    }
</script>