<section class="content-header">
    <h1>
        <?php echo $this->pageTitle; ?>

    </h1>

</section>
<section class="content  bordertop">
    <div class="row">
        <div class="col-md-6" style="width: 80%">
            <a href="index.php?r=myadmin/sanphamdanhmuc&add=1"> <b>Thêm mới </b></a>
            <div class="panel panel-default">
                <form id="myForm" action="index.php?r=myadmin/sanphamdanhmuc" method="post" enctype="multipart/form-data">
                    <div class="box-body">
                        <table class="table table-bordered">
                            <tbody><tr>
                                <th style="width: 10px">#</th>
                                <th>Mô tả</th>
                                <th>Số TT</th>
                                <th>Xóa</th>
								<th>Hiện/Ẩn</th>
                            </tr>
                            <?php $numst=1; ?>
                            <?php foreach($data as $value):?>

                                <tr class="remove<?php echo $value["san_pham_loai_guid"]?>">
                                    <td> <?php echo $numst++; ?></td>
                                    <td><input type="text" value="<?php echo $value["ten_loai"]?>" id="ten_loai_<?php echo $value["san_pham_loai_guid"]?>" name="ten_loai_<?php echo $value["san_pham_loai_guid"]?>" />
                                    </td>
                                    <td><input type="text" value="<?php echo $value["so_thu_tu"]?>" id="so_thu_tu_<?php echo $value["san_pham_loai_guid"]?>" name="so_thu_tu_<?php echo $value["san_pham_loai_guid"]?>" />
                                    </td>
                                    <td>
                                        <button class="btn btn-info btn-sm cssdelete"  san_pham_loai_guid="<?php echo $value["san_pham_loai_guid"]?>" type="button" >Xóa</button>
                                    </td>
 <td>
                                        <input  id="chkisshow_<?php echo $value["san_pham_loai_guid"]?>"  name="chkisshow_<?php echo $value["san_pham_loai_guid"]?>" class="" san_pham_loai_guid="<?php echo $value["san_pham_loai_guid"]?>"  <?php echo $value["isshow"]=="1"?"checked":"" ?> type="checkbox" />
                                    </td>
                                </tr>

                            <?php endforeach?>


                            </tbody></table> <input class="btn btn-danger btn-lg" name="bsubmit" value=" Lưu " type="submit" />
                    </div>
                </form>
            </div>

        </div>

    </div>
    </div>
</section>
<!--<script src="http://120.72.106.146:66/themes/user-templete/js/jquery.min.js"></script>-->
<script>
    $(document).ready(function()
    {

        var options = {
            beforeSend: function()
            {
                $("#progress").show();
                //clear everything
                $("#bar").width('0%');
                $("#message").html("");
                $("#percent").html("0%");
            },
            uploadProgress: function(event, position, total, percentComplete)
            {
                $("#bar").width(percentComplete+'%');
                $("#percent").html(percentComplete+'%');


            },
            success: function()
            {
                $("#bar").width('100%');
                $("#percent").html('100%');
                //  listImage();
                // $("#myForm").reset();
                //document.getElementById("myForm").reset();
                alert("Đã lưu thành công");

            },
            complete: function(response)
            {
                $("#message").html("<font color='green'>"+response.responseText+"</font>");
            },
            error: function()
            {
                $("#message").html("<font color='red'> ERROR: unable to upload files</font>");

            }

        };

        /// $("#myForm").ajaxForm(options);


    });

    $(document).on('click', '.cssdelete', function () {
        san_pham_loai_guid = $(this).attr("san_pham_loai_guid");
        var confirm1 = confirm("Các sản phẩm theo danh mục này sẽ bị xóa theo?Bạn có chắc?");
        if(confirm1){
            var confirm2 = confirm("Khi xóa rồi không thể phục hồi?Bạn có chắc không?");
            if(confirm2){
                $.get("index.php?r=myadmin/danhmucdelete&san_pham_loai_guid="+san_pham_loai_guid , function (data, status) {
                    $('.remove'+san_pham_loai_guid).hide()  ;

                });
            }
        }



    });
</script>
