<?php
    $this->pageTitle = $c->title;
    Yii::app()->clientScript->registerMetaTag($c->description, 'description');
    Yii::app()->clientScript->registerMetaTag($c->keyword, 'keywords');
?>
<div class="row">
    <div class="main-login col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
        <div class="row">
            <div class="box-login">
                <div class="col-xs-18 col-sm-12 col-md-12" style="text-align: center;">
                    <img src="<?php echo Yii::app()->baseUrl;?>/images/11_404_loi.jpg" />
                    <div class="col-md-12" style="background-color: #B8763A;height: 1px;"></div>
                    <div class="clear1"></div>
                    <span>Trang đã bị xóa hoặc URL không đúng <br/> Trở về <a href="<?php echo Yii::app()->baseUrl.'/'?>">Trang chủ</a></span>
                    <div class="clear1"></div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</div>