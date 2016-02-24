<section class="content-header">
    <h1>
        <?php echo $this->pageTitle; ?>

    </h1>

</section>

<script src="http://malsup.github.com/jquery.form.js"></script>
<form id="myForm" action="index.php?r=myadminvideo/videolist" method="post" enctype="multipart/form-data">
    <section class="content  bordertop">
        <div class="row">
            <div class="col-md-6" style="width: 80%">

                <div class="panel panel-default">

                    <div class="panel-body">
                    <div class="form-group">
    <label for="pass_new">Loại sản phẩm: </label>
    <select id="san_pham_loai_guid" name="san_pham_loai_guid"  class="form-control">
        <option  value="" >Tất cả</option>
        <?php foreach($datasan_pham_loai_guid as $value):?>
            <?php
            if($value["san_pham_loai_guid"] == $hsTable["san_pham_loai_guid"])
            {
                echo ' <option seleted value="'.$value["san_pham_loai_guid"].'" >'.$value["ten_loai"].'</option>';
            }
            else
            {
                echo ' <option value="'.$value["san_pham_loai_guid"].'" >'.$value["ten_loai"].'</option>';
            }
            ?>

        <?php endforeach?>
    </select>

</div>
                    </div><a style="display:none"   href="index.php?r=myadminvideo/videoedit"> <b>Thêm mới tài liệu video</b></a>
                    <div id="divlist">

                    </div>
                </div>

            </div>
        </div>
    </section>
</form>

<script>
$(document).on('click', '.cssdelete', function () {
    guid_id = $(this).attr("guid_id");
    imagename = $(this).attr("imagename");
    $.get("index.php?r=ajaxadmin/deleteimage&guid_id="+guid_id +"&imagename="+imagename, function (data, status) {
      $('.remove'+guid_id).hide()  ;

    });

});
$(document).on('click', '.cssedit', function () {
    guid_id = $(this).attr("guid_id");
//myadminvideo/videoedit&san_pham_guid=45D2ACE6-D24E-CB65-149C-7A32C24BB3EF
 window.location.href='index.php?r=myadminvideo/videoedit&guid='+guid_id;

});

//click vao page
$(document).on('click', '.mycho', function () {
	myhreff= $(this).attr("href");
    $(this).attr("href","#");
//myadminvideo/videoedit&san_pham_guid=45D2ACE6-D24E-CB65-149C-7A32C24BB3EF
 //window.location.href='index.php?r=myadminvideo/videoedit&guid='+guid_id;
GoTo(myhreff);

});
$( "#san_pham_loai_guid" ).change(function() {
    san_pham_loai_guid=$('#san_pham_loai_guid').val();
	
    $('#divlist').html('Đang tải...');
    GoTo("index.php?r=myadminvideo/AjaxVideoList&san_pham_loai_guid="+san_pham_loai_guid +"&rd="+Math.random());
});
function GoTo(ahref){
    $.get(ahref, function (data, status) {
        $('#divlist').html(data);
        jQuery('.yiiPager li').each(function() {
           console.log( $(this).attr('myhref'));

        });

    });
}
function GoTo1(ahref){
    $.get(ahref, function (data, status) {
        $('#divlist').html(data);
        //jQuery('.yiiPager .page a').each(function() {
         //   console.log( $(this).attr('href'));

       // });

    });
}
 san_pham_loai_guid=$('#san_pham_loai_guid').val();
 GoTo("index.php?r=myadminvideo/AjaxVideoList&san_pham_loai_guid="+san_pham_loai_guid +"&rd="+Math.random());

//
</script>
