<form id="registration-form" method="post" onsubmit="return validateForm();"  action="/quen-mat-khau">
<div class="row">

	<?php $myTextPath="Quên mật khẩu"; ?>
    <?php  require "template_path.php"  ?>
	
    <div class="clear" style="padding-top:2px"></div>
    <div class="col-md-12" style="background-color: #B8763A;height: 1px;"></div>
    <div class="clear1"></div>
    <div class="main-login col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
        <div class="row">
            <div class="box-login boxborder onlybox">


                <fieldset>
                    <div class="col-md-12" style=""></div>
                    <div class="clear1"></div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <p>
                            <span style="color:#D5A16F;">1) Nhập địa chỉ email của bạn </span>

                            <br/>
                        </p><div class="clear1"></div>
                        <div class="form-group form-actions" style="margin-bottom:5px">
                            <span class="input-icon">
                                <input type="text" class="form-control" id="email" name="email" placeholder="* Địa chỉ email">
                            </span>
                        </div>
                        <p><div class="clear1"></div>
                            <span style="color:#D5A16F;">2) Sau khi nhấn nút "Lấy mật khẩu", bạn kiểm tra email để nhận mật khẩu </span>

                            <br/>
                        </p><div class="clear1"></div>
                        <div class="form-group form-actions">

                            <span style="float: left;">* Thông tin bắt buộc nhập</span>
                        </div>
                        <div class="clear1"></div>
                        <div class="form-group form-actions">
                            <div class="col-xs-12 col-md-12" style="text-align: center;">
                                <div class="row" style="margin-right:0;margin-left: 0" >
                                    <button type="submit" class="btn btn-green btn-epub" id="btn_login" >
                                       Lấy mật khẩu
                                    </button>

                                </div>
                            </div>                 
                            <div class="clear"></div>
                        </div>
                    </div>
<!--                    <div class="col-md-5 col-sm-6 col-xs-12">
                        <h4>Kết nối đến</h4>
                        <div class="clear1"></div>
                        <div class="form-group form-actions">
                            <div style="border: 1px solid #C9BBAA;border-radius: 5px;padding: 5px 30px;background: #fff;cursor: pointer;">
                                <img src="<?php echo Yii::app()->baseUrl.'/images/google.jpg'?>" />
                            </div>
                        </div>
                        <div class="form-group form-actions">
                            <div style="border: 1px solid #C9BBAA;border-radius: 5px;padding: 5px 30px;background: #fff;cursor: pointer;">
                                <img src="<?php echo Yii::app()->baseUrl.'/images/facebook.jpg'?>" />
                            </div>
                        </div>
                        <div class="form-group form-actions">
                            <div style="border: 1px solid #C9BBAA;border-radius: 5px;padding: 5px 30px;background: #fff;cursor: pointer;">
                                <img src="<?php echo Yii::app()->baseUrl.'/images/twitter.jpg'?>" />
                            </div>
                        </div>
                    </div>       -->
                </fieldset>
            </div>
        </div>
    </div>
</div>
</form>
  <div class="clear1"></div>

<script type="text/JavaScript">

    function validateURL(url) {
        var reurl = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
        return re.test(url);
    }

    function checkSamePass( objid, objid1){
        var title = $("#"+objid).val();
        var title1 = $("#"+objid1).val();
        var reVal=true;
        if (title!=title1) {
            alertMore("Vui lòng nhập nội dung mật khẩu giống nhau !");
            $("#"+objid).focus();
            reVal=false;

        }
        return reVal;
    }

    function checkEmpty( objid, textval){
        var title = $("#"+objid).val();
        var reVal=true;
        if (title=="" || title==null) {
            alertMore("Vui lòng nhập nội dung "+textval+" !");
            $("#"+objid).focus();
            reVal=false;

        }
        return reVal;
    }

    function validateForm()
    {

       var resO =  ClassMyValidate.checkEmptyItem("email","[Email]");
        if(resO==false){
            return false;
        }
         resO =  ClassMyValidate.checkValidEmail("email","[Email]");
        if(resO==false){
            return false;
        }

        if(MA_SP_valid==false){
            ClassMyValidate.ShowError("email","Email này không tồn tại trong hệ thống!Vui lòng nhập lại.");
            return false;
        }
        return true;
    }
    var MA_SP_valid=true;
    $( "#email" )
        .focusout(function() {

        })
        .blur(function() {
           // $('#btn_login').attr('disabled','disabled');

            $email1=$('#email').val()+"";
            if($email1!="")
                $.get("/dang-ky?ischeck=1&email="+$(this).val() +"&guid_id=", function (data, status) {
                    if(data=="0"){
                        MA_SP_valid=true;
                    }else{
                        MA_SP_valid=false;
                    }
                   // $('#btn_login').removeAttr('disabled');
                });
        });
    $(document).ready(function()
    {
        $('#email').focus();
        var options = {
            beforeSend: function()
            {
            },
            uploadProgress: function(event, position, total, percentComplete)
            {

            },
            success: function(responseText, statusText, xhr, $form)
            {
               if(responseText=="1"){
                   alertMore("Vui lòng kiểm tra email để nhận mật khẩu!");
                   //window.location='/';
               }else{
                   alertMore(responseText); $('#email').focus();
               }

            },
            complete: function(response)
            {

               // window.location='/thu-vien';
            },
            error: function()
            {
            }
        };
       $("#registration-form").ajaxForm(options);
    });

</script>