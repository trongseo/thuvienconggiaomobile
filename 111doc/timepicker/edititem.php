<?php $form = $this->beginWidget('CActiveForm', array('id' => 'frmtask', 'enableAjaxValidation' => true, 'enableClientValidation' => true, 'htmlOptions' => array('name' => 'frm'))); ?>
    <script type="text/javascript" src="themes/user-theme/js/lib/jquery.timepicker.js"></script>
    <link rel="stylesheet" type="text/css" href="themes/user-theme/js/lib/jquery.timepicker.css" />
    <script type="text/javascript" src="themes/user-theme/js/lib/bootstrap-datepicker.js"></script>
    <link rel="stylesheet" type="text/css" href="themes/user-theme/js/lib/bootstrap-datepicker.css" />

    <style>
        .textareacss {

            width: 300px;
            height: 70px;
        }
        .labelcss {

            width: 290px;
            font-weight:bold;
            background-color: white;}
        .auto-style1 {
            width: 100%;
            float: left;
        }
        .textareacss1{
            width: 330px;
            height: 32px;
        }
 
       

        
        .maintable{
            width: 100%;

        }

    </style>
    <style>
        .myButton {
            background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ededed), color-stop(1, #dfdfdf));
            background:-moz-linear-gradient(top, #ededed 5%, #dfdfdf 100%);
            background:-webkit-linear-gradient(top, #ededed 5%, #dfdfdf 100%);
            background:-o-linear-gradient(top, #ededed 5%, #dfdfdf 100%);
            background:-ms-linear-gradient(top, #ededed 5%, #dfdfdf 100%);
            background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
            filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf',GradientType=0);
            background-color:#ededed;
            -moz-border-radius:7px;
            -webkit-border-radius:7px;
            border-radius:7px;
            border:1px solid #dcdcdc;
            display:inline-block;
            cursor:pointer;
            color:#777777;
            font-family:arial;
            font-size:18px !important;
            padding:8px 10px;
            text-decoration:none;
            text-shadow:0px 1px 0px #ffffff;
        }
        .myButton:hover {
            background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #dfdfdf), color-stop(1, #ededed));
            background:-moz-linear-gradient(top, #dfdfdf 5%, #ededed 100%);
            background:-webkit-linear-gradient(top, #dfdfdf 5%, #ededed 100%);
            background:-o-linear-gradient(top, #dfdfdf 5%, #ededed 100%);
            background:-ms-linear-gradient(top, #dfdfdf 5%, #ededed 100%);
            background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
            filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfdfdf', endColorstr='#ededed',GradientType=0);
            background-color:#dfdfdf;
        }
        .myButton:active {
            position:relative;
            top:1px;
        }
    </style>
    <table class="maintable" cellpadding="2" cellspacing="0" border="0" align="left">
        <tr><td class="">


    <table class="menutablew" cellpadding="2" cellspacing="0" border="0" align="left">
        <tbody>


        <tr>
            <?php echo $errors ?>
            <?php echo $form->errorSummary($model, ''); ?>
            <td align="left" style="">

                <label for="rtodo">Task</label>
                <input id="rtodo"  type="radio" name="rtodoortask" class="rtodoortask" >
                <label for="rtask">Todo</label>
                <input id="rtask" name="rtodoortask" type="radio"  checked  class="rtodoortask"  >
                <input type="hidden" value="<?php echo $istodo; ?>" id="istodo" name="istodo" />
                <input type="hidden" value="<?php echo $guid_id; ?>" id="guid_id" name="guid_id" />


            </td> </tr>

        <tr>
            <td align="left" style="">


                
                <?php echo $form->textArea($model, 'title', array( 'placeholder'=>'Title','maxlength'=>'50' ,'class'=>'textareacss1','rows'=>'1','cols'=>'20')); ?>
                <?php echo $form->hiddenField($model, 'GUID_ID'); ?>

            </td>
        </tr>
        <tr>
            <td align="left" style="">


                <label style="font-weight: bold">
<!--                    <input value="1" id="cknolimit" name="MTodo[all_day]" type="checkbox">All day-->
                    <?php echo $form->checkBox($model,'all_day',array('value'=>1,'uncheckValue'=>0,'id'=>"cknolimit")); ?>All the day

                </label>
            </td> </tr>
        <tr>
            <td align="left" style="">


                <table align="left" cellpadding="0" cellspacing="0" style="width: 100%;">
                    <tbody>


                    <tr>
                        <td class="labeltitle" >&nbsp;Start&nbsp;&nbsp;:</td>
<!--                        <td><input name="txtStartDate" id="txtStartDate" style="background-color: transparent;border: 1px solid #000000" class="inputdate"  type="text"   /></td>-->
<!--                        <td align="center"><input name="txtStartTime" style="background-color: transparent;border: 1px solid #000000" class="inputtime" id="txtStartTime"  /></td>-->
                        <td><?php echo $form->textField($model, 'start_date', array( 'class'=>'inputdatetodo','id'=>'txtStartDate')); ?></td>
                        <td>&nbsp;<?php echo $form->textField($model, 'start_time', array( 'class'=>'inputtimetodo','id'=>'txtStartTime')); ?></td>
                    </tr>

                    <tr>
                        <td class="labeltitle">&nbsp;Finish&nbsp;: </td>

<!--                        <td><input name="txtEndDate" id="txtEndDate" style="background-color: transparent;border: 0px solid #000000"  class="inputdate" type="text"   /></td>-->
<!--                        <td align="center"><input name="txtEndTime" style="background-color: transparent;border: 0px solid #000000"  class="inputtime" id="txtEndTime"  /></td>-->
                        <td width="1"><?php echo $form->textField($model, 'end_date', array( 'class'=>'inputdatetodo','id'=>'txtEndDate')); ?></td>
                        <td>&nbsp;<?php echo $form->textField($model, 'end_time', array( 'class'=>'inputtimetodo','id'=>'txtEndTime')); ?></td>
                    </tr>
                    <tr>

                        <td class="labelsubtask">Subtask</td>
                        <td>&nbsp;</td>
                        <td align="right">
                            <a class="plusiconchild" href="javascript:void(0)" style="font-size: 40px;">+</a></td>
                    </tr>
                    </tbody></table>



            </td> </tr>


        <tr>
            <td align="left">



                <div style="text-align: left" id="divchild" ></div></td> </tr>

        <tr>
            <td align="center" >
                <button type="button" istodo="1" name="bsubmit" load_status='<?php echo $load_status  ?>' class="myButton savebutton">Save</button>
                <input type="hidden"  name="bsubmit" id="bsubmit" value="1" />
<!--                <a href="#" class="myButton savebutton">Save</a>-->
                <a href="javascript:void(0)" class="myButton cancelbutton">Cancel</a></td> </tr>

        </tbody></table>


            </td></tr>

    </table>
    <script>
        $(function() {
			IS_limit=false;
            var is_center='<?php echo isset($_REQUEST["is_center"])?$_REQUEST["is_center"]:"";  ?>';

            var load_status='<?php echo $load_status  ?>';
            var guid_id='<?php echo $guid_id  ?>';
            var istodo='<?php echo $istodo  ?>';
            var child_load_status =1;
            if(load_status==1){
                child_load_status=0;
				checkLimit(istodo);
            }

            $.get("index.php?r=ajaxtodo/SubItem&istodo="+istodo+"&par_id="+guid_id+"&load_status=0", function (data, status) {
                $('#divchild').html(data);
//               if(is_center==1)
//                    central();
                //showPlus();
				
					
				if(SAVE_DIV_CHILD!='')
				{$('#divchild').html(SAVE_DIV_CHILD);
					SetDatePicker();
					
				}
				
				
            });


            $('#txtStartDate').datepicker({
                'format': 'yyyy/mm/dd',
                'autoclose': true
            });
            if(load_status==1){
                $("#txtStartDate").datepicker("setDate", new Date());
            }
			if(load_status==2){
                if($('#cknolimit').is(':checked')==false){
					
					   
					//txtStartTime txtEndTime
					
				}else{
					
					$('#txtStartTime').hide();$('#txtEndTime').hide();
					
				}
           
            }

			/*	
		 $('#txtEndDate').on('change',function(e){
				if( $('#txtEndDate').val()> $('#txtStartDate').val() ){
					$('#cknolimit').prop('checked',true);
					$('#txtStartTime').hide(300);
					$('#txtEndTime').hide(300);
					
				}else{
						
					if( ($('#txtEndDate').val().trim())< ($('#txtStartDate').val().trim()) ){
						$('#txtEndDate').val($('#txtStartDate').val());
						alert('End Date Time must be > Start Date Time!');
					}
				}
			// alert('Changed!')
			});
			*/
            $("#aStartDate").click(function() {
                $("#txtStartDate").datepicker( "show" );
            });
            $(".plusiconchild11").click(function() {
                var guid_id='<?php echo $guid_id ?>';
                var load_status='<?php echo $load_status ?>';
                var istodo='<?php echo $istodo ?>';
                $('.trshow').show();
                $.get("index.php?r=ajaxtodo/SubItem&istodo="+istodo+"&par_id="+guid_id+"&load_status=1", function (data, status) {
                    $('#divchild').html(data);
                });

            });

            $(document).on('click', '.subcancel', function () {
                $('.trshow').hide();
            })

            $(document).on('click', '.aeditsub', function () {

                var guid_id=$(this).attr('guid_id');
                var par_id=$(this).attr('par_id');
                var load_status='<?php echo $load_status ?>';
                var istodo='<?php echo $istodo ?>';
                $('.trshow').show();
                $.get("index.php?r=ajaxtodo/SubItem&istodo="+istodo+"&par_id="+par_id+"&load_status=2&guid_id="+guid_id, function (data, status) {
                    $('#divchild').html(data);
                });

            });
            IS_POST=0;
            $(document).on('click', '.savesubbutton', function () {

                if(IS_POST==1) return;
                IS_POST=1;
                var par_id=$('#frmsubitem #par_id').val();
                var guid_id=$('#frmsubitem #guid_id').val();
                var load_status='<?php echo $load_status ?>';
                var istodo=$('#frmsubitem #istodo').val();
                load_status=1;
                if(guid_id!=""){
                    load_status=2;
                }

                //debugger;
                //them con chua co cha
                $.post( "index.php?r=ajaxtodo/SubItem&par_id="+par_id+"&load_status="+load_status+"&istodo="+istodo, $('#frmsubitem').serialize())
                    .done(function( data ) {
                        IS_POST=0;
                        if(data=="update subtask ok"){
                            $(".plusiconchild").click();
                        }else
                        if(data=="insert newsubtask ok"){
                            //save thanh cong
                            $(".plusiconchild").click();
                        }else {
                            $('#divchild').html(data);
                        }
                    });


            });
            Date.prototype.addDays = function(days) {
                this.setDate(this.getDate() + parseInt(days));
                return this;
            };
		

            var IS_confirm=0;
            $(document).on('click', '.adeletesub', function () {

                $(this).hide();
                if(IS_confirm==1) return;

                if(IS_confirm==0){
                    IS_confirm=1;
                    var rConfirm = confirm("Are you sure delete?");
                    if(!rConfirm) {
                        IS_confirm=0;
                        return;
                    }
                }


                var guid_id=$(this).attr('guid_id');
                var par_id=$(this).attr('par_id');
                var istodo=$(this).attr('istodo');
                $.get("index.php?r=ajaxtodo/SubItem&istodo="+istodo+"&par_id="+par_id+"&load_status=3&guid_id="+guid_id, function (data, status) {

                    $.get("index.php?r=ajaxtodo/SubItem&istodo=0&par_id="+par_id+"&load_status=0", function (data, status) {
                        IS_confirm=0;  $('#divchild').html(data);
                    });
                });
            });
            // $('#txtStartTime').timepicker();

            $('#txtStartTime').timepicker({
                'showDuration': true,
                'timeFormat': 'H:i'
            });
            if(load_status==1){
                //$('#txtStartTime').timepicker('setTime','09:00');
				//timeNowEnd() 
				//var myStart =timeNowStart();
				$('#txtStartTime').timepicker('setTime',timeNowStart());
            }
			

            $("#aStartTime").click(function() {
                $('#txtStartTime').timepicker('show');
            });

            $('#txtEndDate').datepicker({
                'format': 'yyyy/mm/dd',
                'autoclose': true
            }).on('changeDate', function(ev) {
					if( $('#txtEndDate').val()> $('#txtStartDate').val() ){
					$('#cknolimit').prop('checked',true);
					$('#txtStartTime').hide(300);
					$('#txtEndTime').hide(300);
					
				}else{
						
					if( ($('#txtEndDate').val().trim())< ($('#txtStartDate').val().trim()) ){
						$("#txtEndDate").datepicker("setDate",$('#txtStartDate').val());
						alert('End Date Time must be > Start Date Time!');
					}else{
						$('#txtEndTime').show();
						$('#txtStartTime').show();
						$('#cknolimit').prop('checked',false);
					}
				}
				
				//Functionality to be called whenever the date is changed
			});;
		
            if(load_status==1){
                $("#txtEndDate").datepicker("setDate", new Date());

            }
            $("#aEndDate").click(function() {
                $("#txtEndDate").datepicker( "show" );
            });
            $('#txtEndTime').timepicker({
                'showDuration': true,
                'timeFormat': 'H:i'
            });

            if(load_status==1){
               // $('#txtEndTime').timepicker('setTime', '17:00');
			  $('#txtEndTime').timepicker('setTime', timeNowEnd());
                if( timeNowEnd()=="00:00"){
                    var curDate = new Date();
                    $("#txtEndDate").datepicker("setDate",curDate.addDays(1) );
                }
            }
            $("#aEndTime").click(function() {

                $('#txtEndTime').timepicker('show');
            });



        });

    </script>
<?php $this->endWidget(); ?>