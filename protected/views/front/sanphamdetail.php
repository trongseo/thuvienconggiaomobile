
<?php
$dataloaisp=$dataloaisp;
$datasp =$dataspshow['datasp'];
$dataHinh = $dataspshow["dataHinh"];
//array('datasp'=>$datasp,'datakichco'=>$datakichco,'datamausp'=>$datamausp);
$san_pham_loai_guid= $datasp["san_pham_loai_guid"];
?>
    <section class="product-detail">
        <div class="row">
            <div class="col-md-12">
                <h3 class="title-page color-red">
                    <?php  echo $datasp["ten_loai"]; ?>
                </h3>
                <h5 class=""> <i class="fa fa-caret-right append-icon"></i><strong>mã số : <?php  echo $datasp["ma_sp"]; ?></strong></h5>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="row">
                    <div class="col-md-offset-1 col-sm-offset-1 col-md-10 col-sm-10  col-xs-12">

                        <ul class="bxslider">
                            <?php foreach($dataHinh as $value):?>

                                    <li><img src="item_image/<?php  echo $value["image1"]; ?>" /></li>




                            <?php endforeach?>


                        </ul>

                        <div id="bx-pager" class="bx-pager">
                            <?php $iid=0;?>
                            <?php foreach($dataHinh as $value):?>

                                    <a data-slide-index="<?php  echo $iid++; ?>" href=""><img src="item_image/<?php  echo $value["image1"]; ?>" /></a>


                            <?php endforeach?>



                        </div>


                    </div>
                </div>
                <div class="row">
                   <?php echo $datasp["mo_ta_dai"] ?>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <a class="btn-cart btn-simple mg-l-40" href="index.php?r=front/dathang&san_pham_guid=<?php  echo $datasp["san_pham_guid"]; ?>&san_pham_price_guid=<?php  echo $_REQUEST["san_pham_price_guid"]; ?>"><i class="fa fa-caret-right"></i><span>đặt hàng</span></a>
                    </div>
                </div>
            </div>

        </div>
    </section>
<script type="text/template" id="menuchild">
    <div class="sub-menu" id="menusanpham">
        <ul>
          <?php foreach($dataloaisp as $value):?>

        <li id='li<?php echo $value["san_pham_loai_guid"]?>'>
            <a href="index.php?r=front/sanpham&san_pham_loai_guid=<?php echo $value["san_pham_loai_guid"]?>"><span class="underline color-black"><?php echo $value["ten_loai"]?> </span></a>


        </li>



                    <?php endforeach?>

    </ul>
    </div>
</script>
<script>
    $(function(){
        var menuchild = $("#menuchild").html();

        $("ul > .active").append(menuchild);
        var san_pham_loai_guid='<?php echo $san_pham_loai_guid ?>' ;
        $('#li'+san_pham_loai_guid).addClass("active");
    });
</script>