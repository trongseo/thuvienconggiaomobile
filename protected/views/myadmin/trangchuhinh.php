<section class="content-header">
    <h1>
        <?php echo $this->pageTitle; ?>

    </h1>

</section>

<script src="http://malsup.github.com/jquery.form.js"></script>
<form id="myForm" action="index.php?r=ajaxadmin/UploadImagetrangchu" method="post" enctype="multipart/form-data">
<section class="content  bordertop">
    <div class="row">
        <div class="col-md-6">

            <div class="panel panel-default">

                <div class="panel-body">

                    <div class="form-group">
                        <label for="pass_old">Hình bên phải trang chủ:</label>
                         <input type="file" size="60" name="uploaded_image2" id="uploaded_image2"> <img alt="" width="50" name="uploaded_image22" id="uploaded_image22"  src="item_image/trangchu/<?php echo $hinh_dai_dien ?> " />
                    </div>
                    
                        
                       <input type="hidden" id="color_id" name="color_id" value="1" />
                        <input type="hidden" id="san_pham_guid" name="san_pham_guid" value="<?php echo $san_pham_guid ?>" />
                    
                    <div class="form-group">
                        <label for="pass_new">Hình bên trái :</label>
                        <br/>

                        <div id="message"></div><div id="progress">
                            <div id="bar"></div>
                            <div id="percent"></div >
                        </div>
                        <input type="file" size="60" name="uploaded_image" id="uploaded_image"> <img alt="" width="50" name="uploaded_image1" id="uploaded_image1"  src="" />
                    </div>
                    <input class="btn btn-primary btn-lg" name="bsubmit" value=" Lưu " type="submit">

                  
                </div>Danh sách hình bên trái
<div id="divlist">

</div>
            </div>

        </div>
    </div>
</section>
</form>


<script>
    function showImage(src,target) {
        var fr=new FileReader();
        // when image is loaded, set the src of the image where you want to display it
        fr.onload = function(e) { target.src = this.result; };
        src.addEventListener("change",function() {
            // fill fr with image data
            fr.readAsDataURL(src.files[0]);
        });
    }
    var src = document.getElementById("uploaded_image");
    var target = document.getElementById("uploaded_image1");
	
	 var src = document.getElementById("uploaded_image2");
    var target = document.getElementById("uploaded_image22");
	
    showImage(src,target);
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
              listImage();

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

        $("#myForm").ajaxForm(options);
        listImage();

    });
    $( "#color_id" ).change(function() {
        listImage();
    });
function listImage(){
    $('#divlist').html('loading...');
    guid_id=$('#san_pham_guid').val();
    color_id=$('#color_id').val();
    $.get("index.php?r=ajaxadmin/hinhtrangchulist&san_pham_guid="+guid_id +"&color_id="+color_id, function (data, status) {
       $('#divlist').html(data);

    });

}
</script>
