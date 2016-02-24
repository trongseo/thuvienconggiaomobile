<?php

?>
<style>
    #form_contact {
        display: block;
        /* margin-bottom: 185px; */
        /* margin-top: 185px; */
        overflow: hidden;
    }
</style>
<div class="row">
   
	<?php $myTextPath="Liên hệ"; ?>
    <?php  require "template_path.php"  ?>
	
    <div class="clear" style="padding-top:2px"></div>
    <div class="col-md-12" style="background-color: #B8763A;height: 1px;"></div>
    <div class="clear1"></div>

    <div class="col-md-12 box-login onlybox">

	<div class="col-md-6 contact-left">
	
<!--	<div class="form-group">-->
<!---->
<!---->
<!--        <p style="font-size: 16px;padding-left:15px">-->
<!---->
<!--            <span style=";font-weight: bold;" class="textcolor1">THƯ VIỆN</span>-->
<!--            <span style="font-weight: bold;"  class="colorconggiao">CÔNG GIÁO</span>-->
<!--            <span style="font-weight: bold;"  class="textcolor1">VIỆT NAM</span>-->
<!---->
<!--        </p>-->
<!---->
<!--		<div class="col-sm-12">-->
<!--			 <img class="boximgxxxxxxxx" style="100%" u="image" src="http://thuvienconggiaovietnam.net/img/lienhe.png" />-->
<!--		</div>-->
<!--		<div class="col-sm-12">-->
<!--			 -->
<!--		</div>-->
<!--	</div>-->

	<div class="form-group">
		<label class="col-sm-3 control-label" style="text-align:left;width: 45px" for="form-field-1"></label>
		<div class="col-sm-9" style="text-align:left">

		</div>
	</div>


</div>
<div class="col-xs-18 col-sm-12 col-md-6" style="border-left:0px solid #BE7339">
    <form id="form_contact"  onsubmit="return isSend();"  class="form-horizontal" method="POST" action="<?php echo Yii::app()->baseUrl.'/contact';?>" role="form" enctype="multipart/form-data">
        <div class="form-group">           
            <div class="col-sm-12 control-label textcolor1" style="text-align:center;padding-top: 0px" for="form-field-1">
				Quý khách vui lòng điền đầy đủ thông tin dưới đây</br>
				Chúng tôi sẽ phản hồi cho Quý khách trong thời gian sớm nhất.
			</div>
            <div class="clear"></div>
        </div> 
		<div class="form-group">
           
            <div class="col-sm-12">
                <input id="name" name="name" value="" class="form-control" type="text" placeholder="* Họ và tên">
            </div>
            <div class="clear"></div>
        </div>
        <div class="form-group">
            
            <div class="col-sm-12">
                <input id="phone" name="phone" value="" class="form-control" type="text" placeholder=" Số điện thoại">
            </div>
            <div class="clear"></div>
        </div>
        <div class="form-group">
           
            <div class="col-sm-12">
                <input id="email" name="email" value="" class="form-control" type="email" placeholder="* Email">
            </div>
            <div class="clear"></div>
        </div>
        <div class="form-group" style="display: none">
            <div class="col-sm-12">
                <input id="address" name="address" value="" class="form-control" type="text" placeholder="* Địa chỉ">
            </div>
            <div class="clear"></div>
        </div>
        <div class="form-group">
           
            <div class="col-sm-12">
                <input id="title" name="title" value="" class="form-control" type="text" placeholder="* Tiêu đề">
            </div>
            <div class="clear"></div>
        </div>
        <div class="form-group">
            
            <div class="col-sm-12">
                <textarea name="content" id="content" class="autosize form-control" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 109px;" placeholder="* Nội dung"></textarea>
            </div>
            <div class="clear"></div>
        </div>

       <div class="form-group" >
           <div style="  margin-left: 15px;margin-right: -0px;border-top:0px solid #BE7339; text-align: left; color:#AE7418" class="col-sm-11 control-label textcolor1" for="form-field-1"></div>
           <div style=" width:459px; margin-left: 0px;margin-right: -0px; text-align: left; color:#AE7418" class="col-sm-11 control-label textcolor1" for="form-field-1">* Thông tin bắt buộc nhập.</div>

           <div class="" >

               <label class="col-sm-4 control-label" for="form-field-1">  </label>
               <div class="col-sm-8" style="    margin-top: -19px;">

                   <button style="width: 100px" type="submit" class="btn btn-green pull-right btn-epub" value="Đăng ký" id="btnsave" name="btnsave">
                       Gửi
                   </button>


               </div>
               <div class="clear"></div>
           </div>

       </div>
	   <div class="form-group">
	   

        </div>
    </div>


    </div>
 </div>
<div class="clear1"></div>
<script>
    jQuery(document).ready(function() {
        //LoadCapcha();
        $("#phone").keyup(function(e) {
            var value = $("#phone").val();
            value = value.replace(/[^0-9]+/g, '');
            $("#phone").val(value);
        });
        $("#captcha").keyup(function(e) {
            $("#captcha").btOff();
        });
    })
    function LoadCapcha(){
        $.ajax({
            type:"POST",
            url:'<?php echo Yii::app()->baseUrl ?>/Site/LoadCapcha',
            data:{},
            success:function(result){
                $("#frm-capcha").empty().append(result);
            }
        })
    }
    function isEmail(email)
    {
        var rule = /^[a-zA-Z]{1}[a-zA-z0-9._]+\@[a-zA-Z0-9._-]{3,}\.[a-z.]{2,}$/;
        if(email.match(rule))
            return true;
        else
            return false;
    }
    function isSend(){
        var name = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var title = $("#title").val();
        var content = $("#content").val();

        var captcha = $("#captcha").val();

        $("#name").btOff();
        $("#phone").btOff();
        $("#email").btOff();
        $("#address").btOff();
        $("#title").btOff();
        $("#content").btOff();
        $("#captcha").btOff();
        if(name == ""){
            $('#name').bt('Vui lòng nhập tên',{
                trigger: 'none',
                clickAnywhereToClose : false,
                positions: ['top'],
                fill: 'rgba(33, 33, 33, .8)',
                spikeLength: 10,
                spikeGirth: 10,

                cssStyles: {color: '#FFF', fontSize: '11px',textAlign:'justify',width:'auto'}
            });
            $("#name").btOn();
            $("#name").focus();
            return false;
        }

        if(email == ""){
            $('#email').bt('Vui lòng nhập email',{
                trigger: 'none',
                clickAnywhereToClose : false,
                positions: ['top'],
                fill: 'rgba(33, 33, 33, .8)',
                spikeLength: 10,
                spikeGirth: 10,

                cssStyles: {color: '#FFF', fontSize: '11px',textAlign:'justify',width:'auto'}
            });
            $("#email").btOn();
            $("#email").focus();
            return false;
        }
        if(!isEmail(email)){
            $('#email').bt('Email không đúng định dạng',{
                trigger: 'none',
                clickAnywhereToClose : false,
                positions: ['top'],
                fill: 'rgba(33, 33, 33, .8)',
                spikeLength: 10,
                spikeGirth: 10,

                cssStyles: {color: '#FFF', fontSize: '11px',textAlign:'justify',width:'auto'}
            });
            $("#email").btOn();
            $("#email").focus();
            return false;
        }

        if(address == ""){
            $('#address').bt('Vui lòng nhập địa chỉ',{
                trigger: 'none',
                clickAnywhereToClose : false,
                positions: ['top'],
                fill: 'rgba(33, 33, 33, .8)',
                spikeLength: 10,
                spikeGirth: 10,

                cssStyles: {color: '#FFF', fontSize: '11px',textAlign:'justify',width:'auto'}
            });
            $("#address").btOn();
            $("#address").focus();
            return false;
        }
        if(title == ""){
            $('#title').bt('Vui lòng nhập tiêu đề',{
                trigger: 'none',
                clickAnywhereToClose : false,
                positions: ['top'],
                fill: 'rgba(33, 33, 33, .8)',
                spikeLength: 10,
                spikeGirth: 10,

                cssStyles: {color: '#FFF', fontSize: '11px',textAlign:'justify',width:'auto'}
            });
            $("#title").btOn();
            $("#title").focus();
            return false;
        }
        if(content == ""){
            $('#content').bt('Vui lòng nhập nội dung',{
                trigger: 'none',
                clickAnywhereToClose : false,
                positions: ['top'],
                fill: 'rgba(33, 33, 33, .8)',
                spikeLength: 10,
                spikeGirth: 10,

                cssStyles: {color: '#FFF', fontSize: '11px',textAlign:'justify',width:'auto'}
            });
            $("#content").btOn();
            $("#content").focus();
            return false;
        }
        var ctc = $("#ctc").val();


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
                alert("Thông tin liên hệ đã gửi thành công!Chúng tôi sẽ trả lời trong thời gian sớm nhất!");
                window.location='/';
            },
            complete: function(response)
            {

            },
            error: function()
            {
            }
        };
        $("#form_contact").ajaxForm(options);
    });
</script>