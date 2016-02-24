<style>
    @charset "utf-8";
    *{ margin:0px; padding:0px; line-height:18px; text-decoration:none; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#5a2e0b}
    img{ border:0px;}
    .left{ float:left}
    .right{ float:right}
    .clear{ clear:both; overflow:hidden}
    .col_left{ width:194px; padding-right:18px; float:left}
    .col_right{ width:740px;padding-left:18px; border-left:1px #be7338 solid ; float:left}
    .padding_bottom{ padding-bottom:18px; clear:both; overflow:hidden}
    .padding_right{ padding-right:10px; float:left}
    .padding_top{ padding-top:10px; clear:both; overflow:hidden}
    /*thuviendaimuc page*/
    /* menuleft */
    .title_menuleft{font-size:15px;font-weight:bold;padding:5px 5px 5px 10px;}
    .undertitle_menuleft{ background:url(images/underline_titlemenuleft.png) no-repeat; height:8px; width:194px}
    .menuleft_left{ background:url(images/menuleft_left.png) no-repeat; width:10px; height:37px; float:left }
    .menuleft_right{ background:url(images/menuleft_right.png) no-repeat; width:10px; height: 37px; float: right }
    .menuleft_bg{ background:url(images/menuleft_bg.jpg) repeat-x; height: 27px; width:174px; float: left; font-size:15px; font-weight:bold; padding-top:10px}
    /*sub menuleft*/
    .open_menuleft{ background:url(images/sub_menuleft.png); height:27px; font-size:15px;padding:10px 10px 0px 10px}
    /*link*/
    a.daimuclink:link, a.daimuclink:visited{ color:#5a2e0b; font-size:15px; font-weight:bold}
    a.daimuclink:hover, a.daimuclink:active{ color:#FFFFFF;font-size:15px; font-weight:bold }/**/
    .sub_menuleft{ background:url(images/sub_menuleft.png); height:27px; padding:10px 10px 0px 20px}
    .text_submenu{ color:#f4cc94; float:left}
    /*link*/
    a.trungmuclink:link, a.trungmuclink:visited{ color:#f4cc94; font-size:12px;}
    a.trungmuclink:hover, a.trungmuclink:active{ color:#FFFFFF;font-size:12px; }/**/
    .subcat_menuleft{ background:url(images/sub_menuleft.png); height:27px; font-size:15px;padding:10px 10px 0px 30px}
    .text_subcatmenu{ color:#FFFFFF; float:left}
    /*link*/
    a.tieumuclink:link, a.tieumuclink:visited{ color:#f4cc94; font-size:12px;}
    a.tieumuclink:hover, a.tieumuclink:active{ color:#FFFFFF;font-size:12px; }
    /*user login*/
    .nameuser{ padding:10px 5px 5px 10px; font-size:15px; float:left; font-weight:bold;}
    /*thuvientieumuc page*/
    /*main right*/
    .title_mainbold{font-size:20px;font-weight:bold; float:left; padding:18px 0px;}
    .title_mainitalic{font-size:15px; font-style:italic;float:left;  padding:18px 0px;}
    /*box select_main right*/
    .boxselect_titlemain_bg{ background:url(images/boxselect_titlemain_bg.png) repeat-x; height:31px; width:720px; padding-top:10px; float:left}
    .boxselect_titlemain_left{ background:url(images/boxselect_titlemain_left.png) no-repeat; height:41px; width:10px;  float:left}
    .boxselect_titlemain_right{ background:url(images/boxselect_titlemain_right.png) no-repeat; height:41px; width:10px;  float:left}
    select.tieumuc{ width:200px;}
    /*Main_tusachcuatoi page*/
    .titlemain_left{background:url(images/boxselect_url(images/titlemain_left.png) no-repeat; height:40px; width:10px;  float:left}
    .titlemain_right{background:url(images/boxselect_url(images/titlemain_right.png) no-repeat; height:40px; width:20px;  float:left}
    .titlemain_bg{background:url(images/boxselect_url(images/titlemain_left.png) repeat-x; height:40px; float:left}
    .titlemain_line{background:url(images/boxselect_url(images/titlemain_left.png) repeat-x; height:40px; clear:both
    }
    .tabmain_left{background:url(images/tabmain_left.png) no-repeat; height:41px; width:10px; float:left}
    .tabmain_right{background:url(images/tabmain_right.png) no-repeat; height:41px; width:10px; float:left}
    .tabmain_bg{background:url(images/tabmain_bg.png) repeat-x; height:41px; float:left}

    /*danh gia binh luan*/
    .main{width:970px; float:left}
    .menu_comment{ width:970px; clear:both; overflow:hidden}
    .line_menu_comment{border-left:1px #be7338 solid;color:#be7338; padding:15px 15px; height:20px; float:left}
    a.menu_commentlink:link, a.menu_commentlink:visited{ color:#be7338; font-weight:bold}
    a.menu_commentlink:hover, a.menu_commentlink:active{ color:#5a2e0b; font-weight:bold}
    .iconbookcomment{padding:10px 30px;float:left;}
    .linebot_menucomment{ background:url(images/underline_menucomment.png) no-repeat; height:6px; padding-bottom:15px; clear:both; overflow:hidden}
    .bgcomment{background-color:#FFFFFF; width:865px; padding:10px 18px; float:left}
    .icon_useron_comment{ background:url(images/icon/img_useron.png) no-repeat; width:50px; height:50px; padding-right:18px; float:left}
    .icon_useroff_comment{ background:url(images/icon/img_useroff.png) no-repeat; width:50px; height:50px; padding-right:18px; float:left}
    .name_usercomment{ font-weight:bold; float:left; padding-right:15px}
    input.writecomment{ width:750px; height:30px}
</style>
<div class="row">
<?php
require('leftmenu.php');
?>

    <div class="col-md-10" id="divcontent">

    </div>
</div>

<script>
var FROM_TIEUMUC='tieumuc';
    $(document).ready(function() {
            <?php if(isset($arrSearch)): ?>
       var daiMuc ='<?php echo $arrSearch[0]; ?>';
        var keySearch ='<?php echo $arrSearch[1]; ?>';
            <?php else: ?>
        var daiMuc ='';

        <?php endif; ?>
        if(daiMuc!=''){
            FROM_TIEUMUC ='tim';
            LoadContentSearch(daiMuc,keySearch);
        }else
        LoadContent(0,0);
    });
function LoadContentSearch(daimuc,keysearch){


   var  urlGet = '/Site/SubLibaryTieuMucSearch?daimuc='+daimuc+'&keysearch='+keysearch;
    if(keysearch=="sachhaynendoc"){
        urlGet = '/Site/SubLibaryTieuMucSearchFlg?daimuc='+daimuc+'&keysearch='+keysearch;
    }
    $.ajax({
        type:"POST",
        url:urlGet,
        data:{},
        success:function(result){
            $("#divcontent").empty().append(result);
        }
    });

}
    function LoadContent(myid,mylevel){


        if(mylevel==2){
            $.ajax({
                type:"POST",
                url:'/Site/SubLibaryTieuMuc?mylevel='+mylevel+'&myid='+myid,
                data:{},
                success:function(result){
                    $("#divcontent").empty().append(result);
                }
            });
        }else //SubLibaryTieuMuc
        $.ajax({
            type:"POST",
            url:'/Site/SubLibary?mylevel='+mylevel+'&myid='+myid,
            data:{},
            success:function(result){
                $("#divcontent").empty().append(result);
            }
        });
    }

</script>