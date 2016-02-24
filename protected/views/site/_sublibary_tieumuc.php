<style>
    .combopage{
            height: 30px;
    border: 1px solid #be682f;
    }
    .btnPre{
       border-radius: 10px 0px 0 10px;
    height: 33px;
    width: 30px;
    border: 1px solid #be682f;
    margin-top: -1px;
    background-color: #F8E2C6;
    }
    .btnNext{
        border-radius: 0px 10px 10px 0px;
         height: 33px;
    width: 30px;
    border: 1px solid #be682f;
    margin-top: -1px;
    background-color: #F8E2C6;
    }
    .borderpage{
        border-radius: 5px;

        border:1px solid #be682f;
        height: 37px;padding-top: 2px;
    }
    .keyword{

        font-style: italic;
        color: #000000 !important;
        font-weight: 400 !important;
        padding-top: 8px;
        padding-bottom: 4px;
        padding-left:0px;
    }
    .mybox {
        background: #FAE5C8 none repeat scroll 0 0;
        border-radius: 5px;
        padding: 15px;
        box-shadow: 1px 1px 8px 1px #333;
    }
    .center-block {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
	#comboPage{
		height:34px;border:0px;margin-top:-2px;background-color:rgb(248,227,198);
	}
	  .row h4{
margin-top: 13px;
}
</style>
<?php

$comboData =$dataItem;

?>
<div class="col-md-12">





    <div class="row">
        <div class="col-md-12" style="padding:0px 0px 0px 0px;display:inline;padding-top: 0px">
            <h4>
                <?php
                if(Common::getSession("parent_id")!="0")
                {
                    echo CommonDB::GetDataRow("tbl_index","id=".Common::getSession("parent_id"))["name"] ;
                }else{

                }
                $comboData =$dataItem;

                ?> <span style="display:inline;font-style: italic;;color:#5a2e0b" class="small">(Có <?php echo $arrDataPage['itemCount']; ?> cuốn sách)</span> </h4>

        </div>
        <div class="clear"></div><div class="clear1" style="height:11px"></div>
    </div>
    <?php if(1==2):?>

        <div class="row mybox" style="padding:0px;padding-left:5px;height:200px;margin-top:20px">
            <div class="row" style="padding-top:20px">
                <div class="span4"></div>
                <div class="span4"><img class="center-block" style="width:40px;" src="/img/sad.jpg"></div>
                <div class="span4"></div>
            </div>
            <div class="col-md-12" style=";height: 10px;padding-top: 10px;padding-bottom: 10px;">
                <div class="col-md-12" style="background-color: rgb(183,161,136);height: 1px;"></div>
            </div>
            <div class="col-md-12" style="text-align: center">Không tìm thấy sách nào phù hợp với từ khóa  <b>"<?php echo Common::getSession("book_name"); ?>"</b></div>
        </div>

    <?php else: ?>



        <div class="row">
            <div class="col-md-12 borderpage" style="background:rgb(248, 226, 198);" >
                <div class="row">


                    <?php $ORDER_BY_KEY = unserialize (ORDER_BY_KEY); ?>
                    <?php $ORDER_BY = unserialize (ORDER_BY); ?>


                    <div class="col-md-5 "  style="width:190px"> <div class=" form-inline" style="width:190px">Sắp xếp
                            <select id="comboOrderBy" class="form-control combopage"  >
                                <?php for($i = 0;$i<count($ORDER_BY);$i++):?>
                                    <?php
                                    $strselected1 ="";
                                    $keyShow = $ORDER_BY_KEY[$i];
                                    $valueShow = $ORDER_BY[$i];
                                    if($keyShow== $arrView['orderbyid']){
                                        $strselected1 ="selected";
                                    }
                                    ?>
                                    <option <?php echo $strselected1; ?>  value="<?php echo$keyShow; ?>">
                                        <?php echo $valueShow; ?></option>
                                <?php endfor;?>
                            </select></div>
                    </div>
                    <div class="col-md-3 "><div class=" form-inline"  >Hiển thị
                            <select id="comboPerPage" class="form-control combopage"  >

                                <?php $ITEM_PER_PAGE = unserialize (ITEM_PER_PAGE); ?>
                                <?php for($i = 0;$i<count($ITEM_PER_PAGE);$i++):?>

                                    <?php
                                    $strselected ="";
                                    if($ITEM_PER_PAGE[$i]==$arrView['perpageshow']){
                                        $strselected ="selected";
                                    } ?>
                                    <option <?php echo $strselected; ?>  value="<?php echo $ITEM_PER_PAGE[$i]; ?>">
                                        <?php echo $ITEM_PER_PAGE[$i]; ?></option>
                                <?php endfor;?>
                            </select>
                        </div> </div>
                    <div class="col-md-6 form-inline " style="text-align:right;padding:0 0 0 0">
                        <input type="button" class="btnPre" style="" value="<" />
                        <?php
                        // $dataPage =array('totalPage'=>$totalPage,'pageSize'=>$pageSize,'itemCount'=>$itemCount,'page'=>$page);

                        $totalPage= $arrDataPage['totalPage'];

                        $pageSize= $arrDataPage['pageSize'];
                        $page= $arrDataPage['page'];
                        $itemCount= $arrDataPage['itemCount'];
                        // var_dump($arrDataPage);
                        echo(   Common::getPagging($totalPage,$pageSize,$page,$itemCount));
                        ?>
                        <input type="button" class="btnNext" style="" value=">" />
                    </div>



                </div>


                <script>

                    $(document).ready(function() {
                        var par = '<?php echo Common::getSession("parent_id"); ?>';
                        $(".aitem"+par).addClass('active');
                        //$("#comboPage").attr('width','20%');
                        //$("#comboPerPage").select2();
                        $("#comboPerPage1").select2({
                            minimumResultsForSearch: Infinity
                        }); $("#comboPage111").select2({
                            minimumResultsForSearch: Infinity
                        });

                        $( "#comboOrderBy" ).change(function() {
                            showOrderBy(0);
                        });
                        $( "#comboPage" ).change(function() {
                            showOrderBy(1);
                        });
                        $( "#comboPerPage" ).change(function() {
                            showOrderBy(0);
                        });
                    });
                    $( ".btnNext" ).click(function() {
                        var indexCho = $("#comboPage option:selected").index();
                        //  alert($("#dropDownMenuKategorie")[0].selectedIndex);
                        $('#comboPage option')[indexCho+1].selected = true; showOrderBy(1);
                    });
                    $( ".btnPre" ).click(function() {
                        var indexCho = $("#comboPage option:selected").index();
                        //  alert($("#dropDownMenuKategorie")[0].selectedIndex);
                        $('#comboPage option')[indexCho-1].selected = true; showOrderBy(1);
                    });
                    function showOrderBy(isPage){
                        var  gotopage =$( "#comboPage").val();
                        var  perpageshow =$( "#comboPerPage").val();
                        var  orderbyid =$( "#comboOrderBy").val();
                        if(isPage==0){
                            gotopage=1;
                        }
                        $.ajax({
                            type:"POST",
                            url:'/Site/SubLibaryTieuMuc?from=order&gotopage='+gotopage+'&orderbyid='+orderbyid+'&perpageshow='+perpageshow,
                            data:{},
                            success:function(result){
                                $("#divcontent").empty().append(result);
                            }
                        });

                    }


                </script>


            </div>
        </div>
        <div class="clear" style="height: 14px"></div>

        <div class="row box-login onlybox" style="padding:0px;padding-left:5px;padding-top:3px">
            <!--// `id`,`book_code`,`parent_id`,`,`book_name`,`introduction`,`bookimage_link`,`active`,`create_date`,`good_book_flg`,`book_type`,`content_link`,`viewer_count`,`reader_count`,`relate_book_id`,`download_flg`,`download_file_link`,`admin_id`,`delete_logic_flg`,`user_id_delete`,`date_delete`-->
            <?php foreach($comboData as $value):?>
                <div style="float:left;width: 140px;height: 150px; margin:5px 5px 80px 5px;">
                    <div style="" class="preview-img showsearch">

                        <img onclick="openNewWindow('<?php echo $value["id"]?>')" class="boximg" style="width: 140px;height: 175px;" u="image" src="<?php echo PATH_IMAGE.$value["bookimage_link"] ?>" />
                        <div class="viewtextsearch" >
                            <div class="readbooknewsearch" onclick="openNewWindow('<?php echo $value["id"]?>')" >
                                Đọc
                            </div>
                        </div>
                        <div style="font-size: 11px;font-weight: bold;line-height: 15px;padding-top: 11px;">

                            <?php echo $value["book_name"]?></div>

                   

                    </div>
                </div>

            <?php endforeach?>
        </div>

        <div class="col-md-12" style="height: 80px;">

            <!--        <img   style="width: 100%" u="image" src="--><?php //echo Yii::app()->baseUrl?><!--/img/tieu-muc-title-bottom.png" />-->
        </div>
        <div class="clear1"></div>
    <?php endif; ?>
</div>

<style>

    .selectMin{
        width: 40%;
    }
</style>