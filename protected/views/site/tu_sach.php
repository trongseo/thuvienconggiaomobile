
<style>
    .btnborderdiv {
        border: 2px solid rgb(89,46,11);
        padding: 5px 10px;
        background: rgb(89,46,11);
        width: 150px;
        height: 30;
        color: wheat;
        border-radius: 7px;
    }
    .colortext{
        color:  rgb(186,113,55);
    }
    .read-book {
        background: url('../images/ic_book.png') no-repeat scroll 0 0;
        /* margin-left: 5px; */
        /* padding-left: 31px; */
        /* padding-right: 56px; */
        cursor: pointer;
        color: #B27D47;
        display: inline;
    }
.deletebook{
    background: url('/img/ic_bin.PNG') no-repeat scroll 0 0;
    margin-left: 24px;
    padding-left: 19px;
    /* padding-right: 56px; */
    cursor: pointer;
    color: #B27D47;
    display: inline;
    background-size: 13px;
}
</style>

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

.mlayout
{
    text-align: center;
}
.ccentre
{
    text-align: left;
    /*width: 1000px;*/
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.boximg {
    padding: 3px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 1px 3px 3px #CAC6C6;
    margin: 2px;
}

.showsearch1:hover  .viewtextsearch1{
    display: block;
    /*position: absolute;*/
}
.viewtextsearch1{


    z-index: 10;
    color: #B73A3A;
    font-size: 14px;
    font-weight: bold;
    left: 5px;
    /* top: 177px; */
     display: none;
    background-color: #D7BD9E;
    /* opacity: 0.9; */
    width: 134px;
    opacity: 0.9;
    height: 30px;
    position: relative;
    margin-top: -34px;
    padding-top: 1px;
}
.readbooknewsearch1 {
    background: url('/images/ic_book.png') no-repeat scroll 0 0;
    padding-left: 29px;
    cursor: pointer;
    color: #311D05;
    clear: both;
     margin-left: 5px;
    margin-top: 5px;
    width: 48px;
    /* position: absolute; */
}


</style>
<div class='row'>
<div class="col-md-12">

    <?php
    $isLogin=0;
    $styleShow="display:none";
    if(Common::getSession(USER_ID)!=""){
        $isLogin=1; $styleShow="";
    }
    ?>
    <?php if($isLogin==1): ?>


<div class="row" style="<?php echo($styleShow) ?>">

<div class=" col-md-12 col-md-12_note" id="divcontent">

<div class="row">
   
	

    <?php $myTextPath="Tủ sách"; ?>
    <?php  require "template_path.php"  ?>
	
    <div class="clear" style="padding-top:2px"></div>
    <div class="col-md-12" style="background-color: #B8763A;height: 1px;"></div>
    <div class="clear1"></div>

</div>
    <?php $dataRelateBook=$dataPage["dataItem"]; ?>
    <div class="row ccentre " style="">
        <!--// `id`,`book_code`,`parent_id`,`,`book_name`,`introduction`,`bookimage_link`,`active`,`create_date`,`good_book_flg`,`book_type`,`content_link`,`viewer_count`,`reader_count`,`relate_book_id`,`download_flg`,`download_file_link`,`admin_id`,`delete_logic_flg`,`user_id_delete`,`date_delete`-->
        <?php foreach($dataRelateBook as $value):?>
            <div style="float:left;width: 140px;height: 175px; margin:5px 5px 80px 5px;" class="rev<?php echo $value["detailid"]?>">
                <div style="" class="showsearch1">
                    <img   onclick="openNewWindow('<?php echo $value["id"]?>')"  class="boximg" style="width: 140px;height: 180px;" u="image" src="<?php echo PATH_IMAGE.$value["bookimage_link"] ?>" />
                    <div class="viewtextsearch1" >
                        <div style="display: inline;" class="readbooknewsearch1" onclick="openNewWindow('<?php echo $value["id"]?>')" >
                            Đọc
                        </div>
                        <a target="_blank" href="javascript:DeleteRead('<?php echo $value["detailid"]?>');">
                            <div class="deletebook">
                                Xóa
                            </div>
                        </a>
                        <div style="display: inline">
                            <!--                    <a target="_blank" href="--><?php //echo Yii::app()->baseUrl.'/chi-tiet'?><!--/--><?php //echo $value["id"]?><!--">-->
                            <!--                        <div class="read-book">-->
                            <!--                            Đọc-->
                            <!--                        </div>-->
                            <!--                    </a>-->


                        </div>

                    </div>

                    <div style="font-size: 11px;font-weight: bold;line-height: 15px;padding-top: 5px;padding-bottom: 5px;"> <?php echo $value["book_name"]?></div>
<div style="display: inline">
<!--                    <a target="_blank" href="--><?php //echo Yii::app()->baseUrl.'/chi-tiet'?><!--/--><?php //echo $value["id"]?><!--">-->
<!--                        <div class="read-book">-->
<!--                            Đọc-->
<!--                        </div>-->
<!--                    </a>-->

<!--    <a target="_blank" href="javascript:DeleteRead('--><?php //echo $value["detailid"]?><!--');">-->
<!--        <div class="deletebook">-->
<!--            Xóa-->
<!--        </div>-->
<!--    </a>-->
</div>
                </div>
            </div>

        <?php endforeach?>
    </div>

</div>
</div>
    <?php endif; ?>
      </div>

	  </div>
	  <script>

    function DeleteRead(booid){
        BootstrapDialog.confirm({
            title: 'KHUYẾN CÁO',
            message: 'Bạn có chắc là muốn xóa ra khỏi tủ sách?',
            type: BootstrapDialog.TYPE_WARNING, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
            closable: true, // <-- Default value is false
            draggable: false, // <-- Default value is false
            btnCancelLabel: 'Hủy', // <-- Default value is 'Cancel',
            btnOKLabel: 'Đồng ý', // <-- Default value is 'OK',
            btnOKClass: 'btn-warning', // <-- If you didn't specify it, dialog type will be used,
            callback: function(result) {
                // result will be true if button was click, while it will be false if users close the dialog directly.
                if(result) {
                    $.ajax({
                    type:"POST",
                    url:'/Site/RemoveBook?ID_BOOK='+booid,
                    data:{},
                    success:function(result){
                        var keyV = '.rev'+booid;
                        $(keyV).remove();
                       // alert('Đã bỏ ra tủ sách của bạn thành công!');
                    }
                });
                }else {
                    //alert('Nope.');
                }
            }
        });
		 /*BootstrapDialog.confirm('Bạn có chắc là muốn xóa ra khỏi tủ sách?', function(result){
            if(result) {
                  $.ajax({
                    type:"POST",
                    url:'/Site/RemoveBook?ID_BOOK='+booid,
                    data:{},
                    success:function(result){
                        var keyV = '.rev'+booid;
                        $(keyV).remove();
                       // alert('Đã bỏ ra tủ sách của bạn thành công!');
                    }
                });
            }else {
                
            }
        });
		*/
        
    }
</script>