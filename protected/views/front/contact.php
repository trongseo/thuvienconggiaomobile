
<?php


?>



    <section class="support">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                <div class="form-group">
<!--                    <div class="col-md-12">-->
<!--                        <h5 class="text-center"><strong>CÔNG TY TRÁCH NHIỆM HỮU HẠN TÂN PHÚC</strong></h5>-->
<!--                        <address class="text-center">-->
<!--                            <p>Giám đốc điều hành: Larry Page</p>-->
<!--                            <p><strong><abbr title="address">Trụ sở:</abbr></strong> Mountain View, CA, Hoa Kỳ</p>-->
<!--                            <p><strong><abbr title="phone">Điện thoại :</abbr></strong> 0123 456 789 - <strong><abbr title="atfaxtribute">Fax :</abbr></strong> 123 545 678</p>-->
<!--                            <p><strong><abbr title="attribute">Nhà sáng lập:</abbr></strong> Larry Page, Sergey Brin</p>-->
<!--                            <p><strong><abbr title="website">website :</abbr></strong> <a href="http://kinhtanphuc.com">kinhtanphucom</a></p>-->
<!---->
<!--                        </address>-->
<!--                    </div>-->
                    <?php echo $hsTable["mo_ta_dai"] ?>
                </div>

                <div class="video-block-detail">
                    <iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=vi&amp;geocode=&amp;q=380+L%C3%AA+Tr%E1%BB%8Dng+T%E1%BA%A5n,+T%C3%A2n+Ph%C3%BA,+H%E1%BB%93+Ch%C3%AD+Minh&amp;aq=0&amp;oq=38&amp;sll=10.879183,106.799662&amp;sspn=0.012791,0.021136&amp;gl=VN&amp;ie=UTF8&amp;hq=&amp;hnear=380+L%C3%AA+Tr%E1%BB%8Dng+T%E1%BA%A5n,+T%C3%A2n+Ph%C3%BA,+H%E1%BB%93+Ch%C3%AD+Minh&amp;ll=10.808012,106.619355&amp;spn=0.012794,0.021136&amp;t=m&amp;z=14&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=vi&amp;geocode=&amp;q=380+L%C3%AA+Tr%E1%BB%8Dng+T%E1%BA%A5n,+T%C3%A2n+Ph%C3%BA,+H%E1%BB%93+Ch%C3%AD+Minh&amp;aq=0&amp;oq=38&amp;sll=10.879183,106.799662&amp;sspn=0.012791,0.021136&amp;gl=VN&amp;ie=UTF8&amp;hq=&amp;hnear=380+L%C3%AA+Tr%E1%BB%8Dng+T%E1%BA%A5n,+T%C3%A2n+Ph%C3%BA,+H%E1%BB%93+Ch%C3%AD+Minh&amp;ll=10.808012,106.619355&amp;spn=0.012794,0.021136&amp;t=m&amp;z=14" style="color:#0000FF;text-align:left">Xem Bản đồ cỡ lớn hơn</a></small>


                </div>
				
				<div class="form-group" style="display:none">
                    <div class="col-md-12 ">
                        <h5 class="text-uppercase"><strong>Liên hệ nhân viên kinh doanh</strong></h5>
						<?php foreach($datanv as $value):?>
                              <input  style='background:yellow' class='email btnemail col-sm-offset-2 ' type="button" id="<?php echo $value["nvkinhdoanh_id"]  ?>" name="<?php echo $value["nvkinhdoanh_id"]  ?>" class="btn btn-default" value="Gởi email đến:<?php echo $value["email"]  ?>" email='<?php echo $value["email"]  ?>'>  <?php
                               
                                    //echo $value["ten"].' -(Phone: '.$value["sodienthoai"].' )'.'.Email:'.$value["email"];
									echo $value["ten"].' -(Phone: '.$value["sodienthoai"].' )';
                                ?>
								
								<br/>
	
                            <?php endforeach?>
							<input style="background:yellow" class="email btnemail col-sm-offset-2 " type="button" id="EB4F711A_AD37_9ED7_FCB8_C6A750589E5w" name="EB4F711A_AD37_9ED7_FCB8_C6A750589E5w" value="Gởi đến công ty" email="">
                        <p></p>
                    </div>
                </div>
				
                <div class="form-group">
                    <div class="col-md-12 text-center">
                        <h5 class="text-uppercase"><strong>vui lòng điền đầy đủ thông tin dưới đây</strong></h5>
                        <p>(Để chúng tôi có thể liên lạc với quý khách, xin quý khách vui lòng cung cấp đúng thông tin số điện thoại và nội dung. Xin cảm ơn quý khách.)</p>
                    </div>
                </div>

              <form id="registration-form" method="post" onsubmit="return validateForm();" class="form-horizontal" action="index.php?r=front/contact">
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
                            <input type="text" class="form-control" value="" id="tieude" name="tieude"  placeholder="Tiêu đề">
                        </div> </div>
                    <div class="form-group">
                        <label for="noidung" class="col-sm-2 control-label">Nội dung</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" id="noidung" name="noidung" rows="3"></textarea>
                        </div>
                    </div>


                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
						<input type="hidden" id="emailto" name="emailto"  value=""/>
                            <input type="submit" id="btnsave" name="btnsave"  class="btn btn-default" value="Gởi đến công ty">
                        </div>
                    </div>
                </form>
            </div>
    </section>
    </div>
    <!-- .container -->


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
		//$('#hoten').focus();
		$('.btnemail').click(function(){
			var myemail = $(this).attr('email');
			$('#emailto').val(myemail);
			if(myemail=="")
			{
					$('#btnsave').val("Gửi đến công ty");
			}else
			$('#btnsave').val("Gửi email đến:"+myemail);
			$('#hoten').focus();
		});

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