<style>

</style>
<?php
$noShow="";
?>


<div class="container">
    <ul class="nav nav-pills">
        <li class="active btnmoi" id="ligioithieu" alt="tab_3"  ><a href="javascript:void();">Giới thiệu</a></li>
        <li class=" btnmoi" id="linhataitro"   alt="tab_4"  ><a href="javascript:void();">Danh sách nhà tài trợ</a></li>

    </ul>
    <br/>
    <?php foreach($comboData1 as $value1):?>

        <div id="tab_<?php echo $value1["id"]?>" class="tab btnmoi"  style="<?php echo $noShow ?>">
            <?php echo $value1["content"]?>
        </div>
        <?php $noShow="display: none;";
        ?>
    <?php endforeach?>

</div>


<script>
    $(document).ready(function() {
        $(".btnmoi").click(function() {
            var id = $(this).attr('alt');
            $(".btnmoi").removeClass('active');
            $(this).addClass('active');
            $(".tab").hide();
            $("#" + id).show();
        });
    });
</script>