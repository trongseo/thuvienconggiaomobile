<?php

// 0:sắp phát hành; 1: mới phát hành; 2: là bình thuờng
//SELECT * FROM tbl_book WHERE book_type=1 AND delete_logic_flg=0








$id111    = "dataNewBook";
$time  = 3600; // in seconds
$dataNewBook = Yii::app()->cache->get($id111);
$dataNewBook = CommonDB::GetAll("SELECT * FROM tbl_book WHERE book_type=1 and active=1 AND delete_logic_flg=0 limit ".NUMBER_LIMIT_BOOK_SCROLL ,[]);

if (!$dataNewBook){
    $dataNewBook = CommonDB::GetAll("SELECT * FROM tbl_book WHERE book_type=1 and active=1 AND delete_logic_flg=0 limit ".NUMBER_LIMIT_BOOK_SCROLL ,[]);
    Yii::app()->cache->set($id111, $dataNewBook, $time);

}

$id222    = "dataPrepareBook";
$time  = 3600; // in seconds
$dataPrepareBook = Yii::app()->cache->get($id222);
$dataPrepareBook = CommonDB::GetAll("SELECT * FROM tbl_book WHERE book_type=0 and active=1 AND delete_logic_flg=0 limit ".NUMBER_LIMIT_BOOK_SCROLL,[]);

if (!$dataPrepareBook){
    $dataPrepareBook = CommonDB::GetAll("SELECT * FROM tbl_book WHERE book_type=0 and active=1 AND delete_logic_flg=0 limit ".NUMBER_LIMIT_BOOK_SCROLL,[]);
    Yii::app()->cache->set($id222, $dataPrepareBook, $time);

}

$id333    = "dataGoodBook";
$time  = 3600; // in seconds
$dataGoodBook = Yii::app()->cache->get($id333);
$dataGoodBook = CommonDB::GetAll("SELECT * FROM tbl_book WHERE good_book_flg=1 and active=1 AND delete_logic_flg=0 limit ".NUMBER_LIMIT_BOOK_SCROLL,[]);

if (!$dataGoodBook){
    $dataGoodBook = CommonDB::GetAll("SELECT * FROM tbl_book WHERE good_book_flg=1 and active=1 AND delete_logic_flg=0 limit ".NUMBER_LIMIT_BOOK_SCROLL,[]);
    Yii::app()->cache->set($id333, $dataGoodBook, $time);

}


$id444    = "dataReference";
$time  = 3600; // in seconds
$dataReference = Yii::app()->cache->get($id444);
$dataReference = CommonDB::GetAll("SELECT  * FROM `tbl_reference` WHERE active=1 ORDER BY show_order",[]);

if (!$dataReference){
    $dataReference = CommonDB::GetAll("SELECT  * FROM `tbl_reference` WHERE active=1 ORDER BY show_order",[]);
    Yii::app()->cache->set($id444, $dataReference, $time);

}



$dataNewBookcount =count($dataNewBook);
$dataPrepareBookcount =count($dataPrepareBook);
$dataGoodBookcount =count($dataGoodBook);
$dataReferencecount =count($dataReference);

$dataNewBook =Common::doubleData($dataNewBook,7);
$dataPrepareBook =Common::doubleData($dataPrepareBook,7);
$dataGoodBook =Common::doubleData($dataGoodBook,7);
$dataReference =Common::doubleData($dataReference,7);
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
    padding-bottom: 5px;

}
.floatRight {
    font-family:Arial, Helvetica, sans-serif;
}
div.container-box-book-preview {
    height:240px;
    background:url('/images/bg_layer_1.jpg') repeat-x top #eceeef;
    background-color: #f1f1f1;
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
    height:190px
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
    /*background:#fff*/
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
div.slider-box div.slider {
    padding: 0 40px;
    background: rgb(216,190,158);
    height: 125px;
    padding-top: 10px;
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
    right:0px;
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
    background:url(http://www.ybook.vn/themes/newclassic/images/slider-box-bg-corner.png) no-repeat scroll 0 0 transparent;
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

.read-booknew {
       background: url('/images/ic_book.png') no-repeat scroll 0 0;
    padding-left: 30px;
    cursor: pointer;
    color: #B27D47;
    clear: both;
    margin-left: 24px;
    margin-top: 155;
    position: absolute;
}
.hrtext{
    margin-top:4;
    margin-bottom: 4;
    border: 0;
    border-top: 1px solid #D8BE9E;
}
.arrow-home h4 {
    color: #5a2e0b;
  
}
</style>

<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10" />


<div class="content-box" style="float: right;">
<div class="book-container-box container-box-book-preview box clearfix">
<div class="arrow-home" style="margin-left: 5px">
    <h4><b>Sách mới đưa vào Thư Viện</b></h4>
</div>
<div class="arrow-slide-right">(Có <?php echo ($dataNewBookcount) ?> quyển sách)</div>

    <?php if(($dataNewBookcount)>0): ?>
        <div class="topright"><a href="/thu-vien/0-sachmoiduavaothuvien">Xem hết <img src="/img/3_arrow.png"></a></div>
    <?php endif ?>
<div class="clear"></div>
<div class="Border-BottomH3"></div>
<div class="preview-box clearfix">
<div class="slider clearfix slider-init slider-init-1 sliderNewYorkTimesPreview" id="sliderNewYorkTimesPreview">
    <ul>
        <?php foreach($dataNewBook as $value):?>
        <li><?php require "_slide_product_item_template.php" ?></li>
        <?php endforeach?>
        </ul>
</div>
</div>
    <?php if(($dataNewBookcount)>0): ?>
<div class="slider-box">
<a class="slider-button slider-button-left" id="sliderNewYorkTimes_bl"></a> <a class="slider-button slider-button-right" id="sliderNewYorkTimes_br"></a>
<div class="slider clearfix  slider-hover-action slider-init slider-init-1" id="sliderNewYorkTimes" >
    <ul>
        <?php $ii=0;$kyniem="";?>
        <?php foreach($dataNewBook as $value):?>
            <?php if($ii==1): ?>
                <?php require "_sublibary_item_template_sub.php";?>
            <?php elsif: ?>
                <?php $kyniem=$value; ?>
            <?php endif ?>
            <?php $ii=1;?>
        <?php endforeach?>
<!--        --><?php //$value=$kyniem; ?>
<!--        --><?php //require "_sublibary_item_template_sub.php";?>
        </ul>
</div>
</div>
    <?php endif; ?>

</div>

</div>


<?php //var_dump($kyniem) ?>
<div class="content-box" style="float: right;">
    <div class="book-container-box container-box-book-preview box clearfix">
        <div class="arrow-home" style="margin-left: 5px">
            <h4><b> Sách sắp đưa vào thư viện</b></h4>
        </div>
        <div class="arrow-slide-right">(Có <?php echo ($dataPrepareBookcount) ?> quyển sách)</div>

        <?php if(($dataPrepareBookcount)>0): ?>
            <div class="topright"><a href="/thu-vien/0-sachhaynendoc">Xem hết <img src="/img/3_arrow.png"></a></div>
        <?php endif ?>


        <div class="clear"></div>
        <div class="Border-BottomH3"></div>
        <div class="preview-box clearfix">
            <div class="slider clearfix slider-init slider-init-1 sliderNewYorkTimesPreview" id="sliderNewYorkTimesPreview">
                <ul>
                    <?php foreach($dataPrepareBook as $value):?>

                        <li><?php require "_slide_product_item_template.php" ?></li>


                    <?php endforeach?>
                </ul>
            </div>
        </div>
        <?php if($dataPrepareBookcount>0): ?>

            <div class="slider-box">
                <a class="slider-button slider-button-left" id="sliderNewYorkTimes_bl"></a> <a class="slider-button slider-button-right" id="sliderNewYorkTimes_br"></a>
                <div class="slider clearfix  slider-hover-action slider-init slider-init-1" id="sliderNewYorkTimes" >
                    <ul>
                        <?php $ii=0;?>
                        <?php foreach($dataPrepareBook as $value):?>
                            <?php if($ii==1): ?>
                                <?php require "_sublibary_item_template_sub.php";?>
                            <?php endif ?>
                            <?php $ii=1;?>
                        <?php endforeach?>
                    </ul>
                </div>
            </div>
        <?php endif; ?>
    </div>
</div>



<div class="content-box" style="float: right;">
    <div class="book-container-box container-box-book-preview box clearfix">
        <div class="arrow-home" style="margin-left: 5px">
            <h4><b> Sách hay nên đọc</b></h4>
        </div>
        <div class="arrow-slide-right">(Có <?php echo ($dataGoodBookcount) ?> quyển sách)</div>

        <?php if(($dataGoodBookcount)>0): ?>
            <div class="topright"><a href="/thu-vien/0-sachhaynendoc">Xem hết <img src="/img/3_arrow.png"></a></div>
        <?php endif ?>


        <div class="clear"></div>
        <div class="Border-BottomH3"></div>
        <div class="preview-box clearfix">
            <div class="slider clearfix slider-init slider-init-1 sliderNewYorkTimesPreview" id="sliderNewYorkTimesPreview">
                <ul>
                    <?php foreach($dataGoodBook as $value):?>

                        <li><?php require "_slide_product_item_template.php" ?></li>


                    <?php endforeach?>
                </ul>
            </div>
        </div>
        <?php if(($dataGoodBookcount)>0): ?>

        <div class="slider-box">
            <a class="slider-button slider-button-left" id="sliderNewYorkTimes_bl"></a> <a class="slider-button slider-button-right" id="sliderNewYorkTimes_br"></a>
            <div class="slider clearfix  slider-hover-action slider-init slider-init-1" id="sliderNewYorkTimes" >
                <ul>
                    <?php $ii=0;?>
                    <?php foreach($dataGoodBook as $value):?>
                        <?php if($ii==1): ?>
                            <?php require "_sublibary_item_template_sub.php";?>
                        <?php endif ?>
                        <?php $ii=1;?>
                    <?php endforeach?>
                </ul>
            </div>
        </div>
        <?php endif; ?>
    </div>
</div>


<div class="content-box" style="float: right;">
    <div class="book-container-box container-box-book-preview box clearfix">
        <div class="arrow-home" style="margin-left: 5px">
            <h4><b> Tham khảo</b></h4>
        </div>
        <div class="arrow-slide-right">(Có <?php echo ($dataReferencecount) ?> quyển sách)</div>

        <?php if(count($dataGoodBookcount)>0): ?>
<!--            <div class="topright"><a href="/thu-vien/0-sachhaynendoc">Xem hết <img src="/img/3_arrow.png"></a></div>-->
        <?php endif ?>


        <div class="clear"></div>
        <div class="Border-BottomH3"></div>
        <div class="preview-box clearfix">
            <div class="slider clearfix slider-init slider-init-1 sliderNewYorkTimesPreview" id="sliderNewYorkTimesPreview">
                <ul>
                    <?php foreach($dataReference as $value):?>


                        <li>   <li><?php require "_slide_product_item_template_refer.php" ?></li>


                        </li>


                    <?php endforeach?>
                </ul>
            </div>
        </div>
        <?php if(($dataReferencecount)>0): ?>

            <div class="slider-box">
                <a class="slider-button slider-button-left" id="sliderNewYorkTimes_bl"></a> <a class="slider-button slider-button-right" id="sliderNewYorkTimes_br"></a>
                <div class="slider clearfix  slider-hover-action slider-init slider-init-1" id="sliderNewYorkTimes" >
                    <ul>
                        <?php $ii=0;?>
                        <?php foreach($dataReference as $value):?>
                            <?php if($ii==1): ?>
                            <li class="slider-item">
                                <div id="img-block">
                                    <a class="book-picture-shadow" onclick="openNewWindowURL('<?php echo $value["link_ref"]?>',<?php echo $value["flg_iframe"]?>,<?php echo $value["id"]?>)" >
                                        <div class="imgintro">
                                            <img  WIDTH="67" height="100" src="<?php echo PATH_IMAGE_REF.$value["image_name"] ?>" class="img-hover-action book-css3-shadow" />
                                        </div>

                                    </a>
                                </div>
                            </li>
                            <?php endif ?>
                            <?php $ii=1;?>
                        <?php endforeach?>
                    </ul>
                </div>
            </div>
        <?php endif; ?>
    </div>
</div>



<script type="text/javascript">
    function openNewWindowURL(url1,flgIframe,idIframe){
        if(flgIframe==1){
            window.open('/site/iframe?id='+idIframe,'_blank');
        }else{
            window.open(url1,'_blank');
        }

    }

    /*<![CDATA[*/
    (function() {
        var readyFunc = function() {
            if (window.ready) {
                window.ready();
            }
            else
                setTimeout(readyFunc, 10);
        };
        readyFunc();
    })();
    (function() {
        var readyFunc = function() {
            if (window.ready) {
                window.ready();
            }
            else
                setTimeout(readyFunc, 10);
        };
        readyFunc();
    })();
    $(document).ready(function(){

        $( ".sliderNewYorkTimesPreview >ul" ).each(function( index ) {
			     if( $(this).width()==0){
					$(this).width(5260);
							}
           
        });
    });

//    jQuery(function($) {
//        jQuery('#bookTab').tabs({'cache':true,'select':function(event, ui){var $panel = $(ui.panel); if($panel.is(":empty")){$("#ajax-loading").removeClass("hidden");}},'load':function(){$("#ajax-loading").addClass("hidden"); $(".tooltip").hide(); $(".atooltip[title]").tooltip({position: ['center', 'right']});}});
//        jQuery('#ebookTab').tabs({'cache':true,'select':function(event, ui){var $panel = $(ui.panel); if($panel.is(":empty")){$("#ajax-loading").removeClass("hidden");}},'load':function(){$("#ajax-loading").addClass("hidden"); $(".tooltip").hide(); $(".atooltip[title]").tooltip({position: ['center', 'right']});}});
//
//        $("#menu li .deadline, #menu li .deadline-span").hover(
//            function() {
//                var temp1 = $(this).parent().find("a");
//                temp1.addClass("menu-recuitment-hover");
//            },
//            function () {
//                var temp2 = $(this).parent().find("a");
//                temp2.removeClass("menu-recuitment-hover");
//            }
//        );
//
//
//    });
    /*]]>*/
</script>