<div class="row">

<!--    --><?php //$myTextPath="Điều khoản sử dụng"; ?>
<!--    --><?php // require "template_path.php"  ?>

    <div class="clear" style="padding-top:2px"></div>
    <div class="col-md-12" style="background-color: #B8763A;height: 1px;"></div>
    <div class="clear1"></div>
    <div class="main-login col-md-12 ">
        <div class=" row box-login onlybox">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
<?php
//var_dump($HsRefer);
?>

                <iframe src="<?php echo $HsRefer["link_ref"]  ?>" frameborder="0" style="" height="100%" width="100%"></iframe>


                </iframe>



            </div>
        </div>
    </div>
</div>
<div class="clear1"></div>
<script>
    $(document).ready(function() {

        $('.footer-wp').hide();
    });
</script>