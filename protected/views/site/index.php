<?php

// 0:sắp phát hành; 1: mới phát hành; 2: là bình thuờng
//SELECT * FROM tbl_book WHERE book_type=1 AND delete_logic_flg=0

$id111    = "dataNewBook";
$time  = 3600; // in seconds
$limitIndex = 6;
$dataNewBook = Yii::app()->cache->get($id111);
$dataNewBook = CommonDB::GetAll("SELECT * FROM tbl_book WHERE book_type=1 and active=1 AND delete_logic_flg=0 limit ".$limitIndex ,[]);

if (!$dataNewBook){
    $dataNewBook = CommonDB::GetAll("SELECT * FROM tbl_book WHERE book_type=1 and active=1 AND delete_logic_flg=0 limit ".$limitIndex ,[]);
    Yii::app()->cache->set($id111, $dataNewBook, $time);

}

$id222    = "dataPrepareBook";
$time  = 3600; // in seconds
$dataPrepareBook = Yii::app()->cache->get($id222);
$dataPrepareBook = CommonDB::GetAll("SELECT * FROM tbl_book WHERE book_type=0 and active=1 AND delete_logic_flg=0 limit ".$limitIndex,[]);

if (!$dataPrepareBook){
    $dataPrepareBook = CommonDB::GetAll("SELECT * FROM tbl_book WHERE book_type=0 and active=1 AND delete_logic_flg=0 limit ".$limitIndex,[]);
    Yii::app()->cache->set($id222, $dataPrepareBook, $time);

}

$id333    = "dataGoodBook";
$time  = 3600; // in seconds
$dataGoodBook = Yii::app()->cache->get($id333);
$dataGoodBook = CommonDB::GetAll("SELECT * FROM tbl_book WHERE good_book_flg=1 and active=1 AND delete_logic_flg=0 limit ".$limitIndex,[]);

if (!$dataGoodBook){
    $dataGoodBook = CommonDB::GetAll("SELECT * FROM tbl_book WHERE good_book_flg=1 and active=1 AND delete_logic_flg=0 limit ".$limitIndex,[]);
    Yii::app()->cache->set($id333, $dataGoodBook, $time);

}

$id444    = "dataReference";
$time  = 3600; // in seconds
$dataReference = Yii::app()->cache->get($id444);
$dataReference = CommonDB::GetAll("SELECT  * FROM `tbl_reference` WHERE active=1 ORDER BY show_order",[]);

if (!$dataReference){
    $dataReference = CommonDB::GetAll("SELECT  * FROM `tbl_reference` WHERE active=1 ORDER BY show_order ",[]);
    Yii::app()->cache->set($id444, $dataReference, $time);

}

$dataNewBookcount =count($dataNewBook);
$dataPrepareBookcount =count($dataPrepareBook);
$dataGoodBookcount =count($dataGoodBook);
$dataReferencecount =count($dataReference);

//$dataNewBook =Common::doubleData($dataNewBook,7);
//$dataPrepareBook =Common::doubleData($dataPrepareBook,7);
//$dataGoodBook =Common::doubleData($dataGoodBook,7);
//$dataReference =Common::doubleData($dataReference,7);
?>
<div style="display: inline-block">
    <h2 style="display: inline-block" class="mytitle text-left">Sách mới đưa vào Thư Viện</h2>(<a href="/thu-vien/0-sachmoiduavaothuvien">Xem hết </a>)
</div>
<div class="features_items"><!--features_items-->
    <?php foreach($dataNewBook as $value):?>
        <?php require "index_item.php" ?>
    <?php endforeach?>
</div>
<div style="display: inline-block">
    <h2 style="display: inline-block"  class="mytitle text-left">Sách sắp đưa vào thư viện</h2>(<a href="/thu-vien/0-sachsapduavaothuvien">Xem hết </a>)
</div>


<div class="features_items"><!--features_items-->
    <?php foreach($dataPrepareBook as $value):?>
        <?php require "index_item.php" ?>
    <?php endforeach?>
</div>

<div style="display: inline-block">
    <h2 style="display: inline-block"  class="mytitle text-left">Sách hay nên đọc</h2>(<a href="/thu-vien/0-sachhaynendoc">Xem hết </a>)
</div>

<div class="features_items"><!--features_items-->
    <?php foreach($dataGoodBook as $value):?>
        <?php require "index_item.php" ?>
    <?php endforeach?>
</div>


<div style="display: inline-block">
    <h2 style="display: inline-block"  class="mytitle text-left">Tham khảo</h2>
</div>
<div class="features_items"><!--features_items-->
    <?php foreach($dataReference as $value):?>
        <div class=" col-xs-6 col-sm-3  col-md-2">
            <div class="product-image-wrapper">
                <div class="single-products">
                    <div class="productinfo text-center">
                        <img class="imgBook"   src="<?php echo PATH_IMAGE_REF.$value["image_name"] ?>" alt="" />

                        <a   href="javascript:openNewWindowURL('<?php echo $value["link_ref"]?>',<?php echo $value["flg_iframe"]?>,<?php echo $value["id"]?>)" class="" style="">
                            <p>    <?php echo $value["title"]?> </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    <?php endforeach?>
</div>

<script>
    function openNewWindowURL(url1,flgIframe,idIframe){
        window.open(url1,'_blank');
        if(flgIframe==1){
          //  window.open('/site/iframe?id='+idIframe,'_blank');
        }else{
           // window.open(url1,'_blank');
        }

    }
</script>