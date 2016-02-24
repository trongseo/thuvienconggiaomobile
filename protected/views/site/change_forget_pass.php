<form id="registration-form" method="post" onsubmit="return validateForm();"  action="/lay-lai-mat-khau">
    <input type="hidden" value="1" id="issubmit" name="issubmit" />
    <input type="hidden" value="<?php echo $code_active ?>" id="code_active" name="code_active" />
<div class="row">


    <?php $myTextPath="Đổi mật khẩu"; ?>
    <?php  require "template_path.php"  ?>

    <div class="clear" style="padding-top:2px"></div>
    <div class="col-md-12" style="background-color: #B8763A;height: 1px;"></div>


    <div class="clear1"></div>
    <div class="main-login col-xs-12 col-sm-12 col-md-8 col-md-offset-2 ">
        <div class="box-login onlybox">
            <p>

                <br/>
               Vui lòng nhập mật khẩu mới
            </p>
            <div class="clear1"></div>
            <fieldset>
                <div class="form-group form-actions">
                    <span class="input-icon">
                        <input type="password" class="form-control password" id="password" name="password" placeholder="* Mật khẩu">
                    </span>
                </div>
                <div class="form-group form-actions">
                    <span class="input-icon">
                        <input type="password" class="form-control password" id="re-password" name="re-password" placeholder="* Nhập lại mật khẩu">
                    </span>
                </div>
               <div class="form-group" >
					
					<label style="padding-top:11px;font-weight: normal;border-top: 1px solid #EDBE99; text-align: left;" class="col-sm-12 control-label" for="form-field-1">* Thông tin bắt buộc nhập.</label>


                   <button type="submit" class="btn btn-green pull-right btn-epub" value="Đăng ký"  id="btnsave" name="btnsave"  >
                       Đổi mật khẩu
                   </button>
               </div>
			   <div class="form-actions">

                </div>
            </fieldset>
        </div>
    </div>
</div>
</form>
<div class="clear1"></div>
<!--<script src="http://malsup.github.com/jquery.form.js"></script>-->

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
    var MA_SP_valid=true;
    $( "#email" )
        .focusout(function() {

        })
        .blur(function() {
            $email1=$('#email').val()+"";
            if($email1!="")
            $.get("/dang-ky?ischeck=1&email="+$(this).val() +"&guid_id=", function (data, status) {
                if(data=="0"){
                    MA_SP_valid=false;
                }else{
                    MA_SP_valid=true;
                }

            });
        });
    function validateForm()
    {
var resO;

        resO =  ClassMyValidate.checkEmptyItem("password","[Mật khẩu]");
        if(resO==false){
            return false;
        }
        resO =  ClassMyValidate.checkEmptyItem("re-password","[Nhập lại mật khẩu]");
        if(resO==false){
            return false;
        }
        resO =  ClassMyValidate.checkSamePassN("password","re-password");
        if(resO==false){
            return false;
        }
        return true;
    }
    $(document).ready(function()
    {
       $('#display_name').focus();
        var options = {
            beforeSend: function()
            {
            },
            uploadProgress: function(event, position, total, percentComplete)
            {

            },
            success: function()
            {
                alertMore("Đã đổi mật khẩu mới thành công!Vui lòng đăng nhập.");
                window.location='/dang-nhap';
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