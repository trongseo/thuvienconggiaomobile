<style>
    .carousel-indicators {
        bottom: -13px;
    }
</style>
<div id="slider-carousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
        <li data-target="#slider-carousel" data-slide-to="1"></li>

    </ol>

    <div class="carousel-inner">
        <div class="item active" href="http://abc.com">

            <div class="col-sm-12">
                <img src="http://thuvienconggiaovietnam.net/admintvcg/uploads/slideImage/072118_icon.jpg" class="girl img-responsive" alt="" />

            </div>
        </div>
        <div class="item " href="http://abc.com">

            <div class="col-sm-12">
                <img src="http://thuvienconggiaovietnam.net/admintvcg/uploads/slideImage/072118_icon.jpg" class="girl img-responsive" alt="" />

            </div>
        </div>




    </div>

    <a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
        <i class="fa fa-angle-left"></i>
    </a>
    <a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
        <i class="fa fa-angle-right"></i>
    </a>
</div>
<script>
    $('.item').click(function(){
        alert('dd');
        alert($(this).attr('href'));
    });
</script>