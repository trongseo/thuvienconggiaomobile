

    <div class="row">
        <div class="col-md-12 borderpage" style="background:rgb(248, 226, 198);" >
            <div class="row">
                <?php $ORDER_BY_KEY = unserialize (ORDER_BY_KEY); ?>
                <?php $ORDER_BY = unserialize (ORDER_BY); ?>
                <div class="col-md-5  col-xs-12 "  style=""> <div class=" form-inline" style="">Sắp xếp:
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
                <div class="col-md-3 col-xs-12  "><div class=" form-inline"  >Hiển thị
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

                <div class="col-md-4 form-inline  col-xs-12  " style="text-align:left">
                    <div class=" form-inline"  >Trang
                    <div class="form-group">

                        <div class="input-group">
<!--    <span class="input-group-btn">-->
<!--      <input type="button" class="btnPre" style="" value="<" />-->
<!--    </span>-->

       <?php
       // $dataPage =array('totalPage'=>$totalPage,'pageSize'=>$pageSize,'itemCount'=>$itemCount,'page'=>$page);

       $totalPage= $arrDataPage['totalPage'];

       $pageSize= $arrDataPage['pageSize'];
       $page= $arrDataPage['page'];
       $itemCount= $arrDataPage['itemCount'];
       // var_dump($arrDataPage);
       echo(   Common::getPagging($totalPage,$pageSize,$page,$itemCount));
       ?>

<!--                   <span class="input-group-btn">-->
<!--     <input type="button" class="btnNext" style="" value=">" />-->
<!--    </span>-->

                        </div>
                    </div>

                    </div>


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
                   var keyword = $('#txtKeySearch').val();
                    var myURl = '/Site/SubLibaryTieuMucSearch?from=order&gotopage='+gotopage+'&orderbyid='+orderbyid+'&perpageshow='+perpageshow;
                    if(keyword=="sachhaynendoc")
                    {
                        myURl = '/Site/SubLibaryTieuMucSearchFlg?from=order&gotopage='+gotopage+'&orderbyid='+orderbyid+'&perpageshow='+perpageshow;
                    }
                    if(keyword=="sachmoiduavaothuvien")
                    {
                        myURl = '/Site/SubLibaryTieuMucSearchFlg?from=order&gotopage='+gotopage+'&orderbyid='+orderbyid+'&perpageshow='+perpageshow;
                    }
                    if(keyword=="sachsapduavaothuvien")
                    {
                        myURl = '/Site/SubLibaryTieuMucSearchFlg?from=order&gotopage='+gotopage+'&orderbyid='+orderbyid+'&perpageshow='+perpageshow;
                    }

                    $.ajax({
                        type:"POST",
                        url:myURl,
                        data:{},
                        success:function(result){
                            $("#divcontent").empty().append(result);
                        }
                    });

                }


            </script>


        </div>
    </div>
    <div class="clear" style="height: 13px"></div>

    <div class="row box-login onlybox" style="padding:0px;padding:5px">
        <?php foreach($comboData as $value):?>

            <?php require "index_item.php" ?>



        <?php endforeach?>
    </div>

    <div class="col-md-12" style="height: 80px;display:none;">
    </div>
    <div class="clear1"></div>
