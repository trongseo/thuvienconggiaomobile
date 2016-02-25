<style>
    .carousel-indicators {
        bottom: -13px;
    }
</style>
<section id="slider"><!--slider-->
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div id="slider-carousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">

                        <?php
                        $slideCount=0;
                        $slideClassActive="";
                        $datatbl_slide = CommonDB::GetAll("SELECT  * FROM `tbl_slide` WHERE active=1 ORDER BY show_order",[]);

                        ?>
                        <?php foreach($datatbl_slide as $value):?>
                            <?php
                            if( $slideCount==0){
                                $slideClassActive="active";
                            } ?>

                            <li data-target="#slider-carousel" data-slide-to="<?php echo $slideCount; ?>"></li>
                        <?php  $slideCount++; ?>
                        <?php endforeach?>

                    </ol>

                    <div class="carousel-inner">

                        <?php
                        $slideCount=0;
                        $slideClassActive="active";
                        ?>
                        <?php foreach($datatbl_slide as $value):?>
                            <?php
                            if( $slideCount==1){
                                $slideClassActive="";
                            }
                            ?>

                            <div class="item <?php echo $slideClassActive; ?>" href="<?php echo  $value["link_ref"] ?>">

                                <div class="col-sm-12">

                                    <img u="image" src="<?php echo PATH_IMAGE_slideImage. $value["image_name"] ?>"  class="girl img-responsive" alt="" />
                                </div>
                            </div>
                            <?php  $slideCount++; ?>
                        <?php endforeach?>








                    </div>

                    <a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
                        <i class="fa fa-angle-left"></i>
                    </a>
                    <a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>

            </div>
        </div>
    </div>
</section><!--/slider-->


<script>
    $('.item').click(function(){

        window.open($(this).attr('href'));
    });
</script>