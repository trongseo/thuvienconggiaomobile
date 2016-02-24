<div class="row">

<?php $myTextPath="Điều khoản sử dụng"; ?>
    <?php  require "template_path.php"  ?>
	
<div class="clear" style="padding-top:2px"></div>
<div class="col-md-12" style="background-color: #B8763A;height: 1px;"></div>
    <div class="clear1"></div>
    <div class="main-login col-md-12 ">
	<div class=" row box-login onlybox">
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

    <?php foreach($comboData1 as $value1):?>
        <?php echo $value1["content"]?>

    <?php endforeach?>


  

</div>
</div>
</div>
</div>
<div class="clear1"></div>
<script>
$('.collapse').collapse();
</script>