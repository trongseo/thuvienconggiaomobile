<style>
    .contact-head {
        background: transparent url("images/line_shadow.png") no-repeat scroll center bottom;
        text-align: center;
        height: 39px;
        margin-top: -15px;
    }
    .contact-head button{
        height: 30px;
        border-left: 1px solid rgb(192, 112, 61);
        color: #5A2D0C;
        font-weight: bold;
        margin-left: -5px;
        background: transparent none repeat scroll 0% 0%;
        border-right: 1px solid rgb(192, 112, 61);
        border-bottom: 1px solid rgb(192, 112, 61);
        border-top: none;
    }
    .click_active{
        color:#C0703D !important;
    }
    .btn-epub{
        background: #BE7339;
        color:#FCE4BE;
        height: 36px;
    }
    .btn-epub:hover,.click_active{
        background: #5A2D0C;

    }
	.clswidth{
		   margin-right: 6px;
    margin-left: -15px;
    width: 1010px;
	}
    .btnmoi{
        height: 30px;
        /* border-left: 1px solid rgb(192, 112, 61); */
        color: #5A2D0C;
        font-weight: bold;
        /* margin-left: -4px; */
        background: transparent none repeat scroll 0% 0%;
        border-right: 1px solid rgb(192, 112, 61);
        border-bottom: 1px solid rgb(192, 112, 61);
        border-top: none;
        float: center;
        padding-top: 4px;
        text-align: center;
        display: inline-block;
        padding-right: 9px;
        /* margin-top: -18px; */
        /* vertical-align: middle; */
    }
    .rightLine{
        border-left: 1px solid rgb(192, 112, 61);  padding-left: 9px;
    }
</style>
<div class="clear1"></div>
<div class="main-login col-xs-12 col-sm-12 col-md-12 clswidth " style="">
    <div class="row">
        <div class="box-login onlybox">
            <div class="col-md-12 contact-head">
                <?php $noShow="click_active";
                $classRight = "rightLine";
                ?>
            <?php foreach($comboData1 as $value1):?>


<!--                    <button alt="tab_--><?php //echo $value1["id"]?><!--" class=" btn_tab --><?php //echo $noShow ?><!--" type="button">-->
                        <div class="btnmoi <?php echo $noShow ?> <?php echo $classRight ?>" alt="tab_<?php echo $value1["id"]?>">
                            <?php
                            if($classRight!=""){
                                $classRight="";
                            }
                            ?>
                        <?php
                        if( $value1["id"]==3 ) echo "Giới thiệu";
                        if( $value1["id"]==4 ) echo "Danh sách nhà tài trợ";
                        ?></div>
<!--                </button>-->

                <?php $noShow="";
                ?>
            <?php endforeach?>
                </div>
            <?php $noShow="";
            ?>
            <?php foreach($comboData1 as $value1):?>

            <div id="tab_<?php echo $value1["id"]?>" class="tab"  style="<?php echo $noShow ?>">
                <?php echo $value1["content"]?>
            </div>
                <?php $noShow="display: none;";
                ?>
            <?php endforeach?>

        </div>
    </div>
</div><div class="clear1"></div>
<script>
    $(document).ready(function() {
        $(".btnmoi").click(function() {
            var id = $(this).attr('alt');
            $(".btnmoi").removeClass('click_active');
            $(this).addClass('click_active');
            $(".tab").hide();
            $("#" + id).show();
        });
    });
</script>