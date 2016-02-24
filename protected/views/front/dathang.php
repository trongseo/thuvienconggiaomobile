
<?php

$datasp =$dataspshow['datasp'];
$dataHinh = $dataspshow["dataHinh"];
//array('datasp'=>$datasp,'datakichco'=>$datakichco,'datamausp'=>$datamausp);
$san_pham_loai_guid= $datasp["san_pham_loai_guid"];
?>
<form id="registration-form" method="post" onsubmit="return validateForm();" class="form-horizontal" action="index.php?r=front/dathang">


<section class="intro">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">

            <h3 class="title-page color-orange bd-b-green">
                đặt hàng
            </h3>
           <div class="row">
                <div class="col-smd-4">
                    <h5 class="" style="display: inline"> <strong><?php echo $datasp["ten_loai"] ?> &gt; <?php echo $datasp["ma_sp"] ?></strong></h5>
                </div>

            </div>
            <div class="row">
                <div class="col-smd-4">
                   <b>Màu</b>:<?php echo $rowsan_pham_price["color_name"] ?>  <br/>
                    <b> Kích cỡ</b>:<?php echo $rowsan_pham_price["size_text"] ?>  <br/>
                    <b> Giá</b>: <span id="spprice" >(liên hệ)</span>  <br/>
                    <script>
                        if(window.location.href.indexOf('tanphucglass')==-1){
                           $('#spprice').html('<?php echo $rowsan_pham_price["sp_price"] ?>') ;
                        }

                    </script>
                </div>

            </div>

            <div class="form-group">
                <div class="box-img">
                    <img src="item_image/icon_<?php echo $datasp["hinh_dai_dien"] ?>" alt="">
                </div>
            </div>
            <div class="row">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="hoten" class="col-sm-2 control-label">Họ tên</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="hoten" id="hoten" placeholder="Họ tên">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email" class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control"  name="email" id="email" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="dienthoai" class="col-sm-2 control-label">Điện Thoại</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="dienthoai" id="dienthoai" placeholder="Điện thoại">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="tieude" class="col-sm-2 control-label">Tiêu đề</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" value="Đặt mua :<?php echo $datasp["ten_loai"] ?> Mã:<?php echo $datasp["ma_sp"] ?>" id="tieude" name="tieude"  placeholder="Tiêu đề">
                        </div> </div>
                    <div class="form-group">
                        <label for="noidung" class="col-sm-2 control-label">Nội dung</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" id="noidung" name="noidung" rows="3"></textarea>
                        </div>
                    </div>


                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <input type="submit" id="btnsave" name="btnsave"  class="btn btn-default" value="Gởi yêu cầu">
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
</section>
</form>

<script>



</script>
<script src="http://malsup.github.com/jquery.form.js"></script>

<script type="text/JavaScript">

    function validateURL(url) {
        var reurl = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
        return re.test(url);
    }

    function checkEmpty( objid, textval){
        var title = $("#"+objid).val();
        var reVal=true;
        if (title=="" || title==null) {
            alert("Vui lòng nhập nội dung "+textval+" !");
            $("#"+objid).focus();
            reVal=false;

        }
        return reVal;
    }
//    $(document).on('click', '#btnsave', function () {
//        validateForm();
//    });
    function validateForm()
    {
        // Validate URL
//        var url = $("#frurl").val();
//        if (validateURL(url)) { } else {
//            alert("Please enter a valid URL, remember including http://");return false;
//        }

        // Validate Title
       var resO =  checkEmpty("hoten","[Họ tên]");
       if(resO==false){
           return false;
       }
        var email = $("#fremail").val();
        if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email=="" || email==null) { } else {
            alert("Email chưa chính xác!");
            $("#email").focus();
            return false;
        }
        resO =  checkEmpty("dienthoai","[Điện thoại]");
        if(resO==false){
            return false;
        }
         resO =  checkEmpty("tieude","[Tiêu đề]");
        if(resO==false){
            return false;
        }
        var title = $("#noidung").val();
        resO =  checkEmpty("noidung","[Nội dung]");
        if(resO==false){
            return false;
        }

        // Validate Email

        return true;
    }
    $(document).ready(function()
    {

        var options = {
            beforeSend: function()
            {


            },
            uploadProgress: function(event, position, total, percentComplete)
            {


            },
            success: function()
            {

                alert("Đã gửi thành công!Xin cám ơn quý khách.Chúng tôi sẽ liên lạc trong thời gian ngắn nhất.");

            },
            complete: function(response)
            {

            },
            error: function()
            {
            }

        };

        $("#registration-form").ajaxForm(options);


    });

</script>