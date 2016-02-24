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

//$dataNewBook =Common::doubleData($dataNewBook,7);
//$dataPrepareBook =Common::doubleData($dataPrepareBook,7);
//$dataGoodBook =Common::doubleData($dataGoodBook,7);
//$dataReference =Common::doubleData($dataReference,7);
?>
<h2 class="mytitle text-left">Sách mới đưa vào Thư Viện</h2>
<div class="features_items"><!--features_items-->
    <?php foreach($dataNewBook as $value):?>
        <?php require "index_item.php" ?>
    <?php endforeach?>
</div>


