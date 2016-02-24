<script type="text/javascript" src="/js/datetime/lib/jquery.timepicker.js"></script>
<link rel="stylesheet" type="text/css" href="/js/datetime/lib/jquery.timepicker.css" />
<script type="text/javascript" src="/js/datetime/lib/bootstrap-datepicker.js"></script>
<link rel="stylesheet" type="text/css" href="/js/datetime/lib/bootstrap-datepicker.css" />
<style>
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-top: -16px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    width: 124px;
}
</style>
<form id="registration-form" method="post" onsubmit="return validateForm();"  action="/dang-ky">
<div class="row">

<!--  <div class="arrow colorconggiao">-->
<!--        -->
<!--    </div>-->
<!--    <div class="arrow-right"></div>-->

<?php $myTextPath="Đăng ký"; ?>
    <?php  require "template_path.php"  ?>

    <div class="clear" style="padding-top:2px" ></div>

    <div class="col-md-12" style="background-color: #B8763A;height: 1px;"></div>
    <div class="clear1"></div>
    <div class="main-login col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
        <div class="box-login onlybox boxborder colorconggiao" style="">
            <p>
                <span  class="textcolor1">Chào mừng bạn đến với </span>
                <span style="color: #D5904D;font-weight: bold;">Thư Viện</span>
                <span style="font-weight: bold;" class="colorconggiao">Công Giáo</span>
                <span style="color: #D5904D;font-weight: bold;">Việt Nam</span>
                <br>
                Vui lòng điền thông tin dưới đây để tạo tài khoản. Nếu bạn đã có tài khoản, <a href="/dang-nhap" style="color: #D5904D;text-decoration:underline">Đăng nhập</a>
            </p>
            <div class="clear1"></div>
            <fieldset>
                <div class="form-group">
                    <span class="input-icon">
                        <input type="text" class="form-control" id="display_name" name="display_name" placeholder="* Tên hiển thị">
                    </span>
                </div>

                <div class="form-group">
                    <span class="input-icon">
                        <input type="text" class="form-control" id="email" name="email" placeholder="* Địa chỉ email">
                    </span>
                </div>
                <div class="form-group form-actions">
                    <span class="input-icon">
                        <input type="password" class="form-control password" id="password" name="password" placeholder="* Mật khẩu (Tối thiểu 6 ký tự)">
                    </span>
                </div>
                <div class="form-group form-actions">
                    <span class="input-icon">
                        <input type="password" class="form-control password" id="re-password" name="re-password" placeholder="* Nhập lại mật khẩu">
                    </span>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label colorconggiao" for="form-field-1">
                        <div class="row" style="margin-top: 9px;">
                            Ngày sinh *
                        </div>
                    </label>
                    <div class="col-md-8">
                        <input type="text" placeholder="28/02/1983" class="form-control" id="birthday" name="birthday" style="width:140px" placeholder="">
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label colorconggiao" for="form-field-1">
                        <div class="row" style="margin-top:1px">
                            Giới tính *
                        </div>
                    </label>

                    <div class="radio-pading col-md-2 radio-inline colorconggiao ">
                        <label><input type="radio" value="0" name="optradio">Nam</label>
                    </div>
                    <div class="col-md-2  radio-inline colorconggiao">
                        <label><input type="radio" value="1" checked="" name="optradio">Nữ</label>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="form-group">

                    <label style="padding-top:11px;font-weight: normal;border-top: 1px solid #EDBE99; text-align: left; " class="col-sm-12 control-label colorconggiao" for="form-field-1">* Thông tin bắt buộc nhập.</label>

                    <label style="font-weight: normal;width: 473px;" class="col-sm-12 control-label textcolor1" for="form-field-1">Bằng cách nhấp vào nút Đăng ký, bạn sẽ đồng ý với các
                        <a class="linUnder colorconggiao " href="/dieu-khoan-su-dung"><i>điều khoản sử dụng</i></a>
                       <span class='textcolor1'> của chúng tôi </span> </label>
                    <button type="submit" class="btn btn-green pull-right btn-epub" value="Đăng ký" id="btnsave" name="btnsave">
                        Đăng ký
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
            alert("Vui lòng nhập nội dung mật khẩu giống nhau !");
            $("#"+objid).focus();
            reVal=false;

        }
        return reVal;
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
                    //ClassMyValidate.ShowError('email',"Email đã tồn tại.Vui lòng nhập Email khác!");
                }else{
                    MA_SP_valid=true;
                    $("#email").btOff();
                }

            });
        });


    $('#birthday').datepicker({
        'format': 'dd/mm/yyyy',
        'autoclose': true
    });
    function validateForm()
    {

        $("#display_name").btOff();
        $("#email").btOff();
        $("#password").btOff();
        $("#re-password").btOff();
        $("#birthday").btOff();

        if(ClassMyValidate.checkEmptyItem("display_name","[Tên hiển thị]")==false){
            return false;

        }

        if(ClassMyValidate.checkEmptyItem("email","[Email]")==false){
            return false;
        }
        if(ClassMyValidate.checkValidEmail("email","[Email]")==false){
            return false;
        }
        if(ClassMyValidate.checkEmptyItem("password","[Mật khẩu]")==false){
            return false;
        }
        if(ClassMyValidate.checkEmptyItem("re-password","[Nhập lại mật khẩu]")==false){
            return false;
        }
        if(ClassMyValidate.checkSamePassN('password','re-password')==false){
            return false;
        }
        if(ClassMyValidate.checkEmptyItem("birthday","[Ngày sinh]")==false){
            return false;
        }
        if(MA_SP_valid==false){
            ClassMyValidate.ShowError("email","Email đã tồn tại.Vui lòng nhập Email khác!");
            return false;
        }

        return true;

//        // Validate Title
//        var resO =  checkEmpty("display_name","[Tên hiển thị]");
//        if(resO==false){
//            return false;
//        }
//        resO =  checkEmpty("birthday","[Ngày sinh]");
//        if(resO==false){
//            return false;
//        }
//        resO =  checkEmpty("email","[Email]");
//        if(resO==false){
//            return false;
//        }
//        var email = $("#email").val();
//        if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email=="" || email==null) { } else {
//            alert("Email chưa chính xác!");
//            $("#email").focus();
//            return false;
//        }
//        resO =  checkEmpty("password","[Mật khẩu]");
//        if(resO==false){
//            return false;
//        }
//        resO =  checkEmpty("re-password","[Nhập lại mật khẩu]");
//        if(resO==false){
//            return false;
//        }
//        resO =  checkSamePass("password","re-password");
//        if(resO==false){
//            return false;
//        }
//        if(MA_SP_valid==false){
//            alert("Email đã tồn tại.Vui lòng nhập Email khác!");
//            $('#email').focus();
//            return false;
//        }
//
//        return true;
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
                alertMore("Đã đăng ký thành công.Vui lòng đăng nhập để dùng!");
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