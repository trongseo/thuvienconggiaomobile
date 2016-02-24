<?php

// 0:sắp phát hành; 1: mới phát hành; 2: là bình thuờng
//SELECT * FROM tbl_book WHERE book_type=1 AND delete_logic_flg=0
//        good_book_flg
$idBook = Common::getSession(ID_BOOK);
$queryS="SELECT * FROM tbl_book WHERE delete_logic_flg=0 AND id IN(
    SELECT relate_book_id FROM `tbl_relate_book` WHERE book_id=$idBook
  UNION
    SELECT book_id AS relate_book_id FROM `tbl_relate_book` WHERE relate_book_id=$idBook )
    ORDER BY book_name
    LIMIT 30 ";

$dataRelateBook = CommonDB::GetAll($queryS,[]);

?>
<script type="text/javascript" src="scroll/assets/73ff6cfc/jquery.slides.min.js"></script>
<script type="text/javascript" src="scroll/assets/73ff6cfc/main.min.js"></script>


<style>
* {
    margin:0;
    padding:0
}
ul, li {
    list-style:none
}
fieldset, img {
    border:0
}
.content-box {
    z-index:1
}
.content-box {
    width:1010px;
    padding-bottom: 15px;

}
.floatRight {
    font-family:Arial, Helvetica, sans-serif;
}
div.container-box-book-preview {
    height:240px;
    background:url('/images/bg_layer_1.jpg') repeat-x top #eceeef;
    background-color: #f1f1f1;
}
.box {
    /*position:relative;*/
    /*border:1px solid #9BA1A5;*/
    /*-webkit-border-radius: 8px;*/
    /*-moz-border-radius: 8px;*/
    /*border-radius: 8px;*/
    /*margin:0 0 8px 0;*/
    /*padding: 5px 0;*/
    padding: 9px;
    background: url(../images/bg-slider.png);
    border-radius: 5px;
    box-shadow: 1px 1px 8px 1px #333;

}
.box .corner, .box .corner-featured, .box .corner-featured-typeWhite {
    position:absolute;
    width:8px;
    height:8px
}
.box .tl {
    top:-1px;
    left:-1px;
    background-position:top left!important
}
.box .tr {
    top:-1px;
    right:-1px;
    background-position:top right!important
}
.box .br {
    bottom:-1px;
    right:-1px;
    background-position:bottom right!important
}
.box .bl {
    bottom:-1px;
    left:-1px;
    background-position:bottom left!important
}
.box .w_tl {
    top:-1px;
    left:-1px;
    background-position:0 -16px!important
}
.box .w_tr {
    top:-1px;
    right:-1px;
    background-position:-8px -16px!important
}
.box .w_br {
    bottom:-1px;
    right:-1px;
    background-position:-8px -24px!important
}
.box .w_bl {
    bottom:-1px;
    left:-1px;
    background-position:0 -24px!important
}
.box .l {
    left:0;
    background-position:top left!important
}
.box .r {
    right:0;
    background-position:top right!important
}
div.container-box-book-preview .corner {
    background:url(http://www.ybook.vn/themes/newclassic/images/light-blue-container-preview.png) no-repeat
}
div.container-box-book-preview h3.title{
    font-size:16px;
    color:#4c575f;
    font-weight:normal;
    padding:0 18px 8px;
    /*	line-height:29px;*/
    /*	background:url(images/container-box-title-shadow.png) no-repeat bottom left*/
}
div.container-box-book-preview h3.title a {
    font-size:16px;
    color:#4c575f;
    font-weight:normal;
}
div.container-box-book-preview .preview-box {
    float:left;
    padding:7px 10px 0 18px;
    width:335px
}
div.container-box-book-preview .preview-box span {
    display:block;
    font-size:13px;
    padding:0 0 0 10px;
    line-height:18px;
    color:#444343
}
div.container-box-book-preview .preview-box span.preview {
    max-height:none;
    padding-bottom:0
}
div.container-box-book-preview .preview-box span.dots {
    line-height:1px;
    float:left
}
div.container-box-book-preview .preview-box .preview-img {
    float:left;
    width:100px;
    /*height: 150px;*/
    height: auto;
    /*position: absolute;*/
    bottom: 0;
}
div.container-box-book-preview .preview-box .preview-img-a {
    float:left;
    width:100px;
    /*height: 150px;*/
    height: auto;
    position: absolute;
    bottom: 0;
}
div.container-box-book-preview .preview-box .preview-img img {
    /*height:146px;*/
    padding:0 2px 4px;
    width:96px;
}
div.container-box-book-preview .preview-box .preview-text {
    float:left;
    width:215px;
    height:144px;
    overflow:hidden
}
div.container-box-book-preview .preview-box .book-title {
    font-weight:bold
}
div.container-box-book-preview .preview-box .author a {
    font-size:13px;
    color:#015279
}
div.container-box-book-preview .preview-box .author {
    font-size:13px;
    color:#015279
}
div.container-box-book-preview .preview-box div.slider {
    padding:0;
    height:160px
}
div.container-box-book-preview .preview-box div.slider ul li {
    width:545px
}
.slider ul {
    position:relative;
    list-style-type:none;
    z-index:1;
    width:10000px
}
.slider ul li {
    float:left
}
.slider .slider-item {
    cursor:pointer;
    position:relative;
    display:block;
    width:145px
}
.slider span {
    display:block;
    font-size:13px
}
.slider .slider-item img {
    /*position:absolute*/
}
.slider .slider-item div {
    position:relative;
    background:#fff
}
.slider .slider-item .link {
    line-height:20px;
    font-size:20px;
    display:block;
    color:#015279;
    font-weight:bold;
    margin:0 0 1px
}
.slider .preview {
    padding-left:23px;
    padding-right:23px;
    color:#444343;
    display:block;
    line-height:16px;
    overflow:hidden;
    max-height:32px
}
.slider .author {
    padding:0 23px;
    overflow:hidden;
    color:#444343;
    display:block;
    line-height:13px;
    max-height:32px
}
.slider .author a {
    color:#015279;
    text-decoration:none;
    font-size:13px;
    line-height:16px
}
.slider .price {
    padding:0 23px;
    color:#3a6d0f;
    display:block;
    line-height:13px;
    height:13px
}
.tab-box .slider .book-css3-shadow, .book-container-box .slider .slider-item .book-css3-shadow, .books-list .slider-item .book-css3-shadow, .two-column-box .right .img-link .book-css3-shadow, div.container-box-book-preview .preview-box .preview-img .book-css3-shadow, #results li.search-row .img .book-css3-shadow, .rightSide .adv .book-css3-shadow {
    /*    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.9);
        -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.9);
        box-shadow:0 1px 4px rgba(0, 0, 0, 0.9);
        -webkit-box-shadow:0 8px 12px -8px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 0, 0, 0.4) inset;
        -moz-box-shadow:0 8px 12px -8px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 0, 0, 0.4) inset;
        box-shadow:0 8px 12px -8px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 0, 0, 0.4) inset*/

    -moz-box-shadow: 0px 3px 3px 0px #5f5f5f,0px 3px 8px #ababab;
    -webkit-box-shadow: 0px 3px 3px 0px #5f5f5f,0px 3px 8px #ababab;
    box-shadow: 0px 3px 3px 0px #5f5f5f,0px 3px 8px #ababab;
}
.more-box li .img .book-css3-shadow, .book-shadow .book-css3-shadow {
    /*    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.9);
        -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.9);
        box-shadow:0 1px 4px rgba(0, 0, 0, 0.9);
        -webkit-box-shadow:0 6px 8px -6px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.4) inset;
        -moz-box-shadow:0 6px 8px -6px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.4) inset;
        box-shadow:0 6px 8px -6px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.4) inset*/

    -moz-box-shadow: 0px 3px 3px 0px #5f5f5f,0px 3px 8px #ababab;
    -webkit-box-shadow: 0px 3px 3px 0px #5f5f5f,0px 3px 8px #ababab;
    box-shadow: 0px 3px 3px 0px #5f5f5f,0px 3px 8px #ababab;
}

.book-shadow {
    background:url(http://i1.ebkimg.com/images/book_shadow.png) no-repeat left bottom
}
div.container-box-book-preview .preview-box .preview-img img {
    padding:0
}
div.container-box-book-preview .preview-box .preview-img {
    /*padding:0 0 9px 4px;*/
    margin-bottom: 2px;
}
.slider {
    position:relative;
    padding:0 29px;
    overflow:hidden
}
.slider-box {
    position:relative;
    overflow:hidden;
    margin-top:21px;
}
div.slider-box div.slider {
    padding:0 40px;
    background:url(http://www.ybook.vn/themes/newclassic/images/slider-box-bg.png);
    height:125px
}
/*div.slider-box div.slider .slider-item a.book-picture-shadow-ff-sf{*/
/*background:url(../images/slider-item-sm-new.png) no-repeat left bottom;*/
/*}*/

/*div.slider-box div.slider .slider-item a.book-picture-shadow{*/
/*background:url(../images/slider-item-sm-new.png) no-repeat left bottom;*/
/*}*/
/*div.slider-box div.slider .slider-item a {*/
/*display:block;*/
/*width:75px;*/
/*height:105px;*/
/*    margin-left:6px;*/
/*margin-top:7px*/
/*position: absolute;*/
/*bottom: 0;*/
/*left: 4px;*/
/*}*/
.slider-button {
    cursor:pointer;
    z-index:3;
    position:absolute;
    display:block;
    width:21px;
    height:21px;
    background:url(/img/slider-arrow1.png) no-repeat
}
.slider-button-left {
    left:8px;
    top:50%;
    margin-top:-10px;
    background-position:left top;
    z-index: 1;
}
.slider-button-right {
    right:8px;
    top:50%;
    margin-top:-10px;
    background-position:right top
}
.book-container-box .slider-item {
    height:175px
}
.book-container-box .slider .slider-item img {
    /*    top:14px;
        left:26px;
        height:146px;*/
    width:96px
}
.book-container-box li {
    height:auto;
    float:left;
    background:0;
    width:145px;
    display:block;
    position: relative;
}
.book-container-box li img.watermark{
    width: 55px !important;
    height: 55px !important;
    position: absolute;
    /*top: 95px;*/
    bottom:0;
    right: 45px;
    box-shadow: none !important;
}
.book-container-box li img.ratingmark{
    width: 43px !important;
    height: 39px !important;
    position: absolute;
    top: -6px;
    right: -5px;
    box-shadow: none !important;
}
.book-container-box li span.ratingmark-span{
    width: 43px !important;
    text-align: center;
    font-size: 12px;
    font-weight: bolder;
    color: #FFF;
    position: absolute;
    top: 2px;
    left: 53px;
}
.book-container-box li .cmtmark-all{
    position: absolute;
    bottom: -9px;
    right: -2px;
    display: block !important;
}
.book-container-box li .cmtmark-all .cmtmark-left{
    background: url(http://www.ybook.vn/themes/newclassic/images/cmtmark-left.png) no-repeat;
    width: 8px; height: 19px;
    float: left;
}
.book-container-box li .cmtmark-all .cmtmark-loop{
    background: url(http://www.ybook.vn/themes/newclassic/images/cmtmark-loop.png) repeat-x;
    height: 19px;
    float: left;
}
.book-container-box li .cmtmark-all .cmtmark-right{
    background: url(http://www.ybook.vn/themes/newclassic/images/cmtmark-right.png) no-repeat;
    width: 8px; height: 19px;
    float: left;
}
/*.book-container-box li img.cmtmark{
    width: 27px !important;
    height: 19px !important;
    position: absolute;
    bottom: 10px;
    right: 240px;
} */
.book-container-box li span.cmtmark-span{
    /*width: 27px !important;*/
    text-align: center;
    font-size: 11px;
    font-weight: bolder;
    color: #354E75;
    padding: 0;
    /*    position: absolute;
        bottom: 11px;
        left: 68px;*/
}
div.container-box-book-preview .slider .slider-item img.discountmark-mini {
    position: absolute;
    left: 42px;
    top: -5px;
    width: 32px !important;
    height: 30px !important;
    box-shadow: none !important;
}

div.container-box-book-preview .slider .slider-item span.discountmark-mini-span{
    width: 30px !important;
    text-align: center;
    font-size: 9px;
    font-weight: bolder;
    color: #FFF;
    position: absolute;
    top: 4px;
    left: 44px;
}
div.container-box-book-preview .slider .slider-item img.cmtmark-mini{
    /*position: absolute;*/
    width: 20px !important;
    height: 13px !important;
    /*top: 104px;*/
    /*left: 62px;*/
}
div.container-box-book-preview .slider .slider-item span.cmtmark-mini-span{
    width: 20px !important;
    text-align: center;
    font-size: 9px;
    font-weight: bolder;
    color: #354E75;
    position: absolute;
    top: 105px;
    left: 61px;
}

.book-container-box li.slider-item img.watermark{
    width: 38px !important;
    height: 38px !important;
    position: absolute;
    /*top: 91px;*/
    /*right: 286px;*/
}
div.container-box-book-preview .slider-item {
    width:84px;
}
div.container-box-book-preview .slider .slider-item img {
    /*    left:4px;
        top:4px;
        height:101px;*/
    width:67px;
    box-shadow: 0 3px 3px 0 #5F5F5F, 0 3px 8px #ABABAB;
}

div.container-box-book-preview .slider .slider-item img.watermark {
    position: absolute;
    left: 0;
    bottom:0;
    /*top: 67px;*/
    box-shadow: none !important;
}

div.container-box-book-preview .slider-box .corner {
    background:url() no-repeat scroll 0 0 transparent;
    height:100%;
    width:3px
}
div.container-box-book-preview .preview-box a.preview-img.book-picture-shadow-ff-sf {
    /*background:url(../images/preview-img-new.png) no-repeat left bottom;*/
}
div.container-box-book-preview .preview-box .preview-img img {
    display:block;
    box-shadow: 0 3px 3px 0 #5F5F5F, 0 3px 8px #ABABAB;
}
div.container-box-book-preview .preview-box a.preview-img.book-picture-shadow {
    /*background:url(../images/preview-img-new2.png) no-repeat left bottom*/
}
.Border-BottomH3 {
    background: url(/images/line_shadow.png) no-repeat scroll 80% 100% transparent;
    clear: both;
    height: 11px;
    margin: 0 auto;

}
#sliderNewYorkTimes{
    left: 34px !important;
    width: 600px !important;
}
.slider-shadow {
    background: transparent url("scroll/images/shadow.png") no-repeat scroll center bottom;

    width: 100%;
    margin-bottom: -20px;
}
</style>

<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10" />
<script>
    jssor_slider1_starter = function (containerId,childId) {
        var options = {
            $AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
            $AutoPlaySteps: 4,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
            $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
            $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

            $ArrowKeyNavigation: false,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
            $SlideDuration: 160,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
            $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
            $SlideWidth: 150,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
            //$SlideHeight: 150,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
            $SlideSpacing: 3, 					                //[Optional] Space between each slide in pixels, default value is 0
            $DisplayPieces: 4,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
            $ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
            $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
            $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
            $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

            $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
                $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
                $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 0,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                $SpacingX: 0,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                $SpacingY: 0,                                   //[Optional] Vertical space between each item in pixel, default value is 0
                $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
            },

            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 2,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
            }
        };

        var jssor_slider1 = new $JssorSlider$(containerId, options);
        function ScaleSlider() {
            var bodyWidth = document.body.clientWidth - 20;
            if (bodyWidth)
                jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 600));
            else
                window.setTimeout(ScaleSlider, 30);
        }
		var options1 = {
			$AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
			$AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
			$AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
			$PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

			$ArrowKeyNavigation: false,                          //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
			$SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
			$MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
			//$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
			//$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
			$SlideSpacing: 0,                                   //[Optional] Space between each slide in pixels, default value is 0
			$DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
			$ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
			$UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
			$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
			$DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
			$StartIndex : -1,
			$DisableDrag:false,
			$BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
				$Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
				$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
				$AutoCenter: 0,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
				$Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
				$Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
				$SpacingX: 10,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
				$SpacingY: 10,                                   //[Optional] Vertical space between each item in pixel, default value is 0
				$Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
			},

			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
				$ChanceToShow: 2                                //[Required] 0 Never, 1 Mouse Over, 2 Always
			}
		};
        ScaleSlider();
        $Jssor$.$AddEvent(window, "load", ScaleSlider);

        $Jssor$.$AddEvent(window, "resize", $Jssor$.$WindowResizeFilter(window, ScaleSlider));
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
		
		var child_jssor_slider1 = new $JssorSlider$(childId, options1);
		function ScaleSlider1() {
			var parentWidth = child_jssor_slider1.$Elmt.parentNode.clientWidth;
			if (parentWidth)
				child_jssor_slider1.$ScaleWidth(Math.min(parentWidth, 390));
			else
				window.setTimeout(ScaleSlider1, 30);
		}
		ScaleSlider1();
		$(window).bind("load", ScaleSlider1);
		$(window).bind("resize", ScaleSlider1);
		$(window).bind("orientationchange", ScaleSlider1);
		jssor_slider1.$On($JssorSlider$.$EVT_PARK, function(slideIndex, fromIndex){
			child_jssor_slider1.$PlayTo(slideIndex - 1);
		});
    };
</script>
<div class="container-wp row boxproduct">
    <div class="content-box" style="float: right;">
        <div class="book-container-box container-box-book-preview box clearfix">
            <div class="arrow-home" style="margin-left: 5px">
                <h4>Sách liên quan</h4>
            </div>
            <div class="arrow-slide-right">(Có <?php echo count($dataRelateBook) ?> quyển sách)</div>
            <div class="clear"></div>
            <div class="Border-BottomH3"></div>
            <div class="preview-box clearfix">
                <div class="slider clearfix slider-init slider-init-1" id="sliderNewYorkTimesPreview">
                    <ul>
                        <?php foreach($dataRelateBook as $value):?>
                            <li>
                                <div id="img-block">
                                    <a href="<?php echo $value["id"]?>" class="preview-img">
                                        <div class="main-imgintro">
                                            <img alt="Cung bậc tình yêu" src="scroll/uploads/books/img-6599-1429254522.jpg" class="img-hover-action book-css3-shadow" />

                                        </div>

                                    </a>
                                </div>
                                <div class="preview-text">
                                    <span class="book-title"><?php echo $value["book_name"]?></span> <span class="author"><?php echo $value["author"]?></span> <span class="preview">
                    <?php echo $value["introduction"]?>
                </span>
                                </div>
                                <span class="dots">...</span>

                            </li>
                        <?php endforeach?>
                    </ul>
                </div>
            </div>
            <div class="slider-box">
                <a class="slider-button slider-button-left" id="sliderNewYorkTimes_bl"></a> <a class="slider-button slider-button-right" id="sliderNewYorkTimes_br"></a>
                <div class="slider clearfix  slider-hover-action slider-init slider-init-1" id="sliderNewYorkTimes" >
                    <ul>
                        <?php foreach($dataRelateBook as $value):?>
                            <li class="slider-item">
                                <div id="img-block">
                                    <a class="book-picture-shadow" href="goi-sach-in/6595/nhung-y-tuong-kinh-doanh-tuyet-hay.html">
                                        <div class="imgintro">
                                            <img alt="<?php echo $value["book_name"]?>" src="scroll/uploads/books/img-6595-1429253696.jpg" class="img-hover-action book-css3-shadow" />
                                        </div>

                                    </a>
                                </div>
                            </li>
                        <?php endforeach?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="clear1"></div>
<script>
	jssor_slider1_starter('slider2_container','child_slider2_container');
	
</script>