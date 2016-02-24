<div class="row">
	<?php $myTextPath="Những câu hỏi thường gặp"; ?>
    <?php  require "template_path.php"  ?>
	
<div class="clear" style="padding-top:2px"></div>
<div class="col-md-12" style="background-color: #B8763A;height: 1px;"></div>
 <div class="clear1"></div>
 <div class="main-login col-md-12 ">
     <div class=" row box-login onlybox">
         <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

             <?php foreach($comboData1 as $value1):?>

                 <div class="guide-icon ">
                     <div class="panel-heading" role="tab" id="headingOne">
                         <h4 class="panel-title ">
                             <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse<?php echo $value1["id"]?>" aria-expanded="true" aria-controls="collapseOne">
                                 <?php echo $value1["title"]?>
                             </a>
                         </h4>
                     </div>
                     <div id="collapse<?php echo $value1["id"]?>" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                         <div class="panel-body" style="border-top:0;padding: 0;padding-left: 35px;">
                             <?php echo $value1["content"]?>
                         </div>
                     </div>
                 </div>
             <?php endforeach?>




         </div>
     </div>
 </div>
</div>
<div class="clear1"></div>
 <script>
     $('.collapse').collapse();
 </script>