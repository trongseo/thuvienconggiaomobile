<section class="content-header">
    <h1>
        <?php echo $this->pageTitle; ?>

    </h1>

</section>

<script src="http://malsup.github.com/jquery.form.js"></script>
<form id="myForm" action="index.php?r=myadminvideo/AjaxVideoSave" method="post" enctype="multipart/form-data">
    <section class="content  bordertop">
        <div class="row">
            <div class="col-md-6" style="width: 80%">

                <div class="panel panel-default">

                    <div class="panel-body">


                        <div class="form-group">
                            <label for="pass_new">Mã sản phẩm: </label>
                                   <strong> <?php echo $hsTable["ma_sp"] ?></strong>
                <input type="hidden" id="san_pham_guid" name="san_pham_guid" value="<?php echo $hsTable["san_pham_guid"] ?>" />
    <input type="hidden" id="video_list_guid" name="video_list_guid" value="<?php echo $hsTable["video_list_guid"] ?>" />
                        </div>
                        <div class="form-group">
                            <label for="text_embed">Video embed:</label>

                            <textarea id="text_embed" name="text_embed" rows="10" cols="80"><?php echo $hsTable["text_embed"] ?></textarea>

                        </div>
                        <div class="form-group">
                            <label for="mo_ta_ngan">Mô tả ngắn:</label>

                            <textarea id="mo_ta_ngan" name="mo_ta_ngan" rows="10" cols="80"><?php echo $hsTable["mo_ta_ngan"] ?></textarea>

                        </div>

                        <div class="form-group">
                            <label for="mo_ta">Mô tả đầy đủ:</label>

                            <textarea id="mo_ta" name="mo_ta" rows="10" cols="80"><?php echo $hsTable["mo_ta"] ?></textarea>

                        </div>
                        <div class="form-group" style="padding: 6px 12px">
                            <input class="btn btn-danger btn-lg" name="bsubmit"  id="bsubmit" value=" Lưu " type="submit" />
       <input class="btn btn-primary btn-lg .btncancel" onclick="javascript:window.location=window.history.back();" name="btncancel" value=" Quay về " type="button" />
                            <!--                        <input class="btn btn-primary btn-lg .btnaddcolor" name="btnaddcolor" value=" Thêm màu sắc " type="button" />-->
                            <!--                        <input class="btn btn-primary btn-lg .btnprice" name="btnprice" value=" Cập nhật giá " type="button" />-->
                        </div>


                    </div>

                </div>

            </div>
        </div>
    </section>
</form>

<script src="themes/admin-green/views/js/jquery-ui-1.10.3.min.js" type="text/javascript"></script>
<!-- Bootstrap -->
<script src="themes/admin-green/views/js/bootstrap.min.js" type="text/javascript"></script>


<!-- AdminLTE App -->
<script src="themes/admin-green/views/js/AdminLTE/app.js" type="text/javascript"></script>
<!-- Bootstrap WYSIHTML5 -->
<script type="text/javascript" src="tinymce/js/tinymce/tinymce.min.js"></script>
<script type="text/javascript">
    tinymce.init({
        selector: "#mo_ta", fontsize_formats: "12pt 14pt 18pt 24pt 36pt",
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "jbimages insertdatetime media table contextmenu paste colorpicker "
        ],
        toolbar: "preview media insertfile jbimages undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        relative_urls: false

    });
</script>

<script type="text/javascript">
    $(function() {
        // Replace the <textarea id="editor1"> with a CKEditor
        // instance, using default configuration.
      //  CKEDITOR.replace('mo_ta');
        //bootstrap WYSIHTML5 - text editor
      //  $(".textarea").wysihtml5();
    });
</script>
<script>


    $(document).ready(function()
    {

        var options = {
            beforeSend: function()
            {
				
        $( "#mo_ta").val(varTitle);
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

        $("#myForm").ajaxForm(options);


    });
 $( "#bsubmit" ).mouseover(function() {
        tinyMCE.triggerSave(false, true);
        varTitle = $('<textarea />').html( $("#mo_ta").val()).text();
        $( "#mo_ta").val(varTitle);

    });

</script>
