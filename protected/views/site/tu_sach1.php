
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
        margin-left: 30px;
        padding-left: 10px;
        padding-right: 60px;
        cursor: pointer;
        color: #B27D47;
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
   
	
	 <div class="arrow colorconggiao">
        <h4>Tủ sách</h4>
    </div>
    <div class="arrow-right"></div>
	
	
    <div class="clear" style="padding-top:2px"></div>
    <div class="col-md-12" style="background-color: #B8763A;height: 1px;"></div>
    <div class="clear1"></div>

</div>
    <?php $dataItem=$dataPage["dataItem"]; ?>
    <?php foreach($dataItem as $value):?>

        <div class="row boxproduct rev<?php echo $value["id"]?> onlybox">
            <table class="auto-style1">
                <tr>
                    <td class="auto-style2">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td style="text-align: left" valign="top"><a href="javascript:DeleteRead('<?php echo $value["id"]?>')"><img style="top:0px;float:right;" u="image" src="/img/ic_bin.PNG"></a></td>
                </tr>
                <tr>
                    <td class="auto-style2" style="text-align: center"><img src="/images/item.jpg" width="150px" height="200px">
                    <br/>
                        <a target="_blank" href="/chi-tiet/<?php echo $value["id"]?>">
                            <div class="read-book">
                                Đọc
                            </div>
                        </a>
                    </td>
                    <td valign="top" style="vertical-align:top">
                        <table class="auto-style1" style="vertical-align:top">
                            <tr>
                                <td></td>
                                <td style="display: none" class="colortext">Thông tin chi tiết</td>
                                <td style="display: none" class="colortext">Đánh giá bình luận</td>
                                <td  style="display: none"  class="colortext">Sách liên quan</td>
                            </tr>
                            <tr>
                                <td colspan="4" class="colorconggiao"><?php echo $value["book_name"]?></td>
                            </tr>
                            <tr>
                                <td colspan="4" width="580px" ><?php echo nl2br($value["introduction"])?></td>
                            </tr>
                        </table>
                    </td>
                    <td  valign="top" style="display:none;vertical-align:top;width:180px;padding-top:8px;color:#7a5231;font-size: 11px;font-weight: 600" >&nbsp;Đã đọc <?php echo $value["date_read"]?> ngày trước&nbsp;</td>
                </tr>
            </table>

            <div class="clear rev<?php echo $value["id"]?>" ></div>

        </div>
        <div class="clear1"></div>


    <?php endforeach?>



</div>
</div>
    <?php endif; ?>
      </div>

	  </div>
	  <script>

    function DeleteRead(booid){
        var confr = confirm("Bạn có chắc là muốn xóa ra khỏi tủ sách?");
        if(confr){
                $.ajax({
                    type:"POST",
                    url:'/Site/RemoveBook?ID_BOOK='+booid,
                    data:{},
                    success:function(result){
                        var keyV = '.rev'+booid;
                        $(keyV).remove();
                        alert('Đã bỏ ra tủ sách của bạn thành công!');
                    }
                });

            }
    }
</script>