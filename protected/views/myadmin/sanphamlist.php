<style>
    ul.yiiPager{
        padding-left: 15px;
    }
</style>
<section class="content-header">
    <h1>
        <?php echo $this->pageTitle; ?>

    </h1>

</section>


<form id="myForm" action="index.php?r=myadmin/sanphamlist" method="post" enctype="multipart/form-data">
    <section class="content  bordertop">
        <div class="row">
            <div class="col-md-6" style="width: 80%">

                <div class="panel panel-default">

                    <div class="panel-body">
                    <div class="form-group">
                        <table style="height: 40px;" width="367">
                            <tbody>
                            <tr>
                                <td> <label for="pass_new">Loại sản phẩm: </label></td>
                                <td>
                                    <select id="san_pham_loai_guid" name="san_pham_loai_guid"  class="form-control">
                                        <option  value="" >Tất cả</option>
                                        <?php foreach($datasan_pham_loai_guid as $value):?>

                                            <?php
                                            if($value["san_pham_loai_guid"] == $hsTable["san_pham_loai_guid"])
                                            {
                                                echo ' <option  value="'.$value["san_pham_loai_guid"].'" >'.$value["ten_loai"].'</option>';
                                            }
                                            else
                                            {
                                                echo ' <option value="'.$value["san_pham_loai_guid"].'" >'.$value["ten_loai"].'</option>';
                                            }
                                            ?>

                                        <?php endforeach?>
                                    </select></td>
                            </tr>
                            <tr>
                                <td> <input type="text" id="ma_sp"  name="ma_sp" placeholder="Mã sản phẩm" value="<?php echo $hsTable["ma_sp"] ?>" class="form-control"/></td>
                                <td><input value="Tìm" type="button" class="btn btn-info cssfind"/> </td>
                            </tr>
                            </tbody>
                        </table>


</div>
                    </div>
                 <a href="index.php?r=myadmin/sanphamedit"> <b>Thêm mới sản phẩm </b></a>
                    <div id="divlist">

                        <div class="box-body">
                            <table class="table table-bordered">
                                <tbody><tr>
                                    <th style="width: 10px">#</th>
                                    <th>Sản phẩm</th>
                                    <th>Action</th>

                                </tr>
                                <?php $numst=1; ?>
                                <?php foreach($data as $value):?>

                                    <tr class="remove<?php echo $value["san_pham_guid"]?>">
                                        <td> <?php echo $numst++; ?></td>
                                        <td> <?php echo $value["ma_sp"]?> <img src="item_image/icon_<?php echo $value["hinh_dai_dien"] ?>"/></td>
                                        <td>
                                            <button class="btn btn-info btn-sm cssdelete" type="button"  guid_id="<?php echo $value["san_pham_guid"]?>" >Xóa</button>

                                            <button class="btn btn-info btn-sm cssedit" type="button"  guid_id="<?php echo $value["san_pham_guid"]?>" >Sửa</button>

                                         <a href="index.php?r=myadmin/hinhsanpham&san_pham_guid=<?php echo $value["san_pham_guid"]?>" class="btn btn-info btn-sm" >Sửa Hình</a>
                                            <a href="index.php?r=myadminvideo/videoedit&guid=<?php echo $value["san_pham_guid"]?>" class="btn btn-info btn-sm" >Thêm video kỹ thuật</a>
                                            <a href="index.php?r=admingia/giasanpham&san_pham_guid=<?php echo $value["san_pham_guid"]?>" class="btn btn-info btn-sm" >Cập nhật giá</a>

                                       <label   >Hiện ưu tiên
                            <input   type="radio" id="rd_isshowhome_<?php echo $value["san_pham_guid"]?>" <?php echo $value["isshowhome"]=="1"?"checked":"" ?> name="rd_isshowhome"  value="<?php echo $value["san_pham_guid"]?>"/>
                                       </label>  </td>

                                    </tr>

                                <?php endforeach?>


                                </tbody></table>
                        </div>
                    <div class="form-group">
                        <?php

                        $this->widget('CLinkPager', array(
                            'currentPage'=> $dataSearch['pages']->getCurrentPage(),
                            'itemCount'=>$dataSearch['itemCount'],
                            'pageSize'=>$dataSearch['pageSize'],
                            'maxButtonCount'=>5,
                            //'nextPageLabel'=>'My text >',
                            'header'=>'',
                            'htmlOptions'=>array('class'=>'yiiPager'),
                        ));
                        ?>  </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</form>

<script>
$(document).on('click', '.cssdelete', function () {
    guid_id = $(this).attr("guid_id");
var cf1= confirm("Bạn có chắc là muốn xóa ?Không thể phục hồi.");
    if(cf1)
    $.get("index.php?r=ajaxadmin/deletesanpham&guid_id="+guid_id +"&imagename=", function (data, status) {
      $('.remove'+guid_id).hide()  ;
    });

});

$(document).on('click', '.cssfind', function () {
    ma_sp = $('#ma_sp').val();
//myadminvideo/videoedit&san_pham_guid=45D2ACE6-D24E-CB65-149C-7A32C24BB3EF
    window.location.href='index.php?r=myadmin/sanphamlist&ma_sp='+ma_sp;

});
$(document).on('change', 'input[name="rd_isshowhome"]', function () {
 var guidsp = $(this).val();
//myadminvideo/videoedit&san_pham_guid=45D2ACE6-D24E-CB65-149C-7A32C24BB3EF

    $.get("index.php?r=ajaxadmin/updateisshowhome&guid_id="+guidsp +"&imagename=", function (data, status) {

        alert("Đã cập nhật ưu tiên!");
    });

});



$(document).on('click', '.cssedit', function () {
    guid_id = $(this).attr("guid_id");
//myadminvideo/videoedit&san_pham_guid=45D2ACE6-D24E-CB65-149C-7A32C24BB3EF
 window.location.href='index.php?r=myadmin/sanphamedit&guid='+guid_id;

});
$( "#san_pham_loai_guid" ).change(function() {
    san_pham_loai_guid=$('#san_pham_loai_guid').val();
    $('#divlist').html('Đang tải...');
    window.location="index.php?r=myadmin/sanphamlist&san_pham_loai_guid="+san_pham_loai_guid +"&rd="+Math.random();
});
function GoTo(ahref){
    $.get(ahref, function (data, status) {
        $('#divlist').html(data);
        jQuery('.yiiPager .page a').each(function() {
            console.log( $(this).attr('href'));

        });

    });
}
function GoTo1(ahref){
    $.get(ahref, function (data, status) {
        $('#divlist').html(data);
        jQuery('.yiiPager .page a').each(function() {
            console.log( $(this).attr('href'));

        });

    });
}
$("#san_pham_loai_guid").val("<?php echo $hsTable["san_pham_loai_guid"] ?>");


//
</script>
