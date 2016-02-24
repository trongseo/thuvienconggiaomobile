<style>
    p {
        margin: 0 0 0px;
    }
    h4, .h4, h5, .h5, h6, .h6 {
        margin-top: 0px;
        margin-bottom: 5px;
    }
    .list-size li {
        float: left;
        width: 100%;
        padding: 0px 5px;
        font-size: 1em;
        margin-left: 15px;
    }
    label{
        font-weight: normal;
        margin-bottom:0px;
    }
    .color_active{
        background-color: #ffff00;
    }
    .box-img{
        overflow: hidden;height: 300px;padding-top:3px;
    }
</style>
<?php
$postSP =0;
$curSP =0;
$dataSPCungLoai=[];
?>
<?php if(($noshow=="0")):?>
    <?php

    $datasp =$dataspshow['datasp'];$datakichco =$dataspshow['datakichco'];$datamausp =$dataspshow['datamausp'];
    $dataSPCungLoai = $dataspshow["dataSPCungLoai"];

//array('datasp'=>$datasp,'datakichco'=>$datakichco,'datamausp'=>$datamausp);
    $san_pham_loai_guid= $datasp["san_pham_loai_guid"];
    ?>
    <div class="row">
        <div class="col-md-3 col-sm-4 col-xs-4">
            <h4 class="title-cate"><?php echo $datasp["danhmuc"] ?></h4>
            <input type="hidden" value="<?php echo $datasp["san_pham_guid"] ?>" id="san_pham_guid" name="san_pham_guid" />

            <div class="aside-right">
                <h5><i class="fa fa-caret-right append-icon"></i><strong><?php echo $datasp["ma_sp"] ?></strong></h5>
            </div>
            <div class="aside-right">
                <h5><i class="fa fa-caret-right append-icon"></i>Màu sắc</h5>
                <ul class="list-color">
                    <?php foreach($datamausp as $value):?>


                        <li>
                            <div class="box-color"><img width="20px" height="20px" src="item_image/<?php echo $value["image1"]?>"></div>
         <span class="underline color_id" color_id='<?php echo $value["color_id"]?>'>
          <?php echo $value["color_name"]?>
         </span>
                        </li>



                    <?php endforeach?>



                </ul>
            </div>
            <div class="aside-right">
                <h5><i class="fa fa-caret-right append-icon"></i>Kích thước</h5>
                <p class="param">Rộng - dài - cao</p>
                <ul class="list-size listsize">

                </ul>
            </div>
            <div class="aside-right">
                <span class="price-tag">Giá : <span id="spprice">... </span>đ</span>
                <a class="btn-cart btn-simple mg-l-40" href="index.php?r=front/dathang&san_pham_guid=<?php echo $datasp["san_pham_guid"]?>"><i class="fa fa-caret-right"></i><span>đặt hàng</span></a>
            </div>
        </div>
        <div class="col-md-9 col-sm-8 col-xs-8 text-center">

            <div class="box-img">
                <a class="width-100p" href="index.php?r=front/sanphamchitiet&san_pham_guid=<?php echo $datasp["san_pham_guid"]?> ">  <img src="item_image/<?php echo $datasp["hinh_dai_dien"] ?>" id="hinhdaidien"  style="max-height: 300px"  alt=""></a>
            </div>

            <a class="btn-cart btn-simple mg-t-15 btnchitiet" href="index.php?r=front/sanphamchitiet&san_pham_guid=<?php echo $datasp["san_pham_guid"]?>"><i class="fa fa-caret-right"></i><span>xem chi tiết</span></a>
        </div>
    </div>

    <div class="row">
        <div class="product-other">
            <h3>
							<span class="bg_title">
								sản phẩm khác
							</span>
            </h3>
            <div class="col-md-offset-2 col-md-9 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">
                <div class="owl-carousel">

                    <?php foreach($dataSPCungLoai as $value):?>
                        <?php
                        $postSP++;
                        if($value["san_pham_guid"]==$datasp["san_pham_guid"]){
                            $curSP = $postSP;
                        }
                        ?>
                        <div class=" funfact-item   text-center">
                            <a href=""><img src="item_image/icon_<?php echo $value["hinh_dai_dien"]?>" alt=""></a>
                            <a class="detail" href="index.php?r=front/sanpham&guid=<?php echo $value["san_pham_guid"]?>"><span>chi tiết</span></a>
                        </div>


                    <?php endforeach?>



                </div>
                <!-- end ourstory carousel -->

            </div>
        </div>
    </div>

    <style>
        label{
            font-weight: 3;
        }
    </style>
    <script>

        function AjaxGetColor(color_id){
            $(".listsize").html('loading...');
            var san_pham_guid= $('#san_pham_guid').val();//luon luon co hidden field
            //$('#color_id').val();//luon luon co hidden field san_pham_guid color_id
            $.get( CUR_URL+"index.php?r=front/AjaxGetSize&san_pham_guid="+san_pham_guid+"&color_id="+color_id+"", function( data,status ) {
                //  size_text,sp_price,aa.san_pham_price_guid,color_id
                var obj = jQuery.parseJSON(data );
                $(".listsize").html('');
                if(data.length==2){
                    $("#san_pham_price_guid").val("");
                    $("#sp_price").val("");
                    return;
                }else{
                    var isFirst=1;

                    for(var i=0;i<obj.length;i++){
                        var myTemplate = $("#repeating-form-section-template").html();
                        var size_text= obj[i]["size_text"];
                        var sp_price= obj[i]["sp_price"];
                        var san_pham_price_guid= obj[i]["san_pham_price_guid"];
                        var color_id= obj[i]["color_id"];
                        myTemplate1 = myTemplate.replace(/zzzsan_pham_price_guidzzz/g, san_pham_price_guid);
                        myTemplate1 = myTemplate1.replace(/zzzsp_pricezzz/g, sp_price);
                        myTemplate1 = myTemplate1.replace(/zzzsize_textzzz/g, size_text);
                        if(isFirst==1){
                            myTemplate1 = myTemplate1.replace(/xxxcheckedxxx/g, "checked");
                            isFirst=0;  $('#spprice').html(sp_price);

							if(window.location.href.indexOf('tanphucglass.com')>-1){
								 $('#spprice').html("(liên hệ)");
							}
                        }
                        $(".listsize").append(myTemplate1);
                        setLinkBuy();

                    }
                }

            });
        }
        function AjaxImageColor(color_id){
            $('#hinhdaidien').hide();
            var san_pham_guid= $('#san_pham_guid').val();//luon luon co hidden field
            //$('#color_id').val();//luon luon co hidden field san_pham_guid color_id
            $.get( CUR_URL+"index.php?r=front/AjaxImageColor&san_pham_guid="+san_pham_guid+"&color_id="+color_id+"", function( data,status ) {
                //  size_text,sp_price,aa.san_pham_price_guid,color_id
                var obj = jQuery.parseJSON(data );

                if(data.length==2){

                    return;
                }else{
                    var hinhdaidien=  obj[0]['image1'];
                    $('#hinhdaidien').attr('src','item_image/'+hinhdaidien);
                    $('#hinhdaidien').show(300);
                }

            });
        }
        $(document).on('mouseover', '#hinhdaidien', function () {
            $(this).attr('title',"Copyright@2015 kinhtanphuc");
        });
        AjaxGetColor('<?php echo (isset($datamausp[0]['color_id'])?$datamausp[0]['color_id']:"0") ?>' );
        $(document).on('click', '.rdSelect', function () {
            var sp_price= $('input:radio[name=radiosize]:checked').attr('sp_price');

            $('#spprice').html(sp_price);
            setLinkBuy();

			if(window.location.href.indexOf('tanphucglass.com')>-1){
								 $('#spprice').html("(liên hệ)");
			}
			
        });
        function setLinkBuy(){
            var san_pham_price_guid = $('input:radio[name=radiosize]:checked').attr('san_pham_price_guid');
            var san_pham_guid= $('#san_pham_guid').val();//luon luon co hidden field
            $( ".btn-cart" ).each(function( index ) {
                var myhrr = "index.php?r=front/dathang&san_pham_guid="+san_pham_guid+"&san_pham_price_guid="+san_pham_price_guid;
                $(this).attr('href',myhrr);
            })
            var myhrr1 = "index.php?r=front/sanphamchitiet&san_pham_guid="+san_pham_guid+"&san_pham_price_guid="+san_pham_price_guid;

            $( ".btnchitiet").attr('href',myhrr1);
//index.php?r=front/sanphamchitiet&san_pham_guid=
            //index.php?r=front/dathang&san_pham_guid=B6421E04_E2BF_90C9_56A7_F34B58B99A16&san_pham_price_guid
        }
        $(document).on('click', '.color_id', function () {
            color_id= $(this).attr('color_id');
            $('.color_id').removeClass('color_active');
            $(this).addClass('color_active');
            AjaxImageColor(color_id);
            AjaxGetColor(color_id);


        });
        //



    </script>
    <script type="text/template" id="repeating-form-section-template">
        <li>
            <input type="radio" xxxcheckedxxx class="rdSelect" name="radiosize" id="zzzsan_pham_price_guidzzz" san_pham_price_guid='zzzsan_pham_price_guidzzz'  sp_price='zzzsp_pricezzz' >
            <label for="zzzsan_pham_price_guidzzz"> <span style="font-weight: 3" >
										zzzsize_textzzz
									</span></label>
        </li>
    </script>

<?php endif ?>
<script type="text/template" id="menuchild">
    <div class="sub-menu" id="menusanpham">
        <ul>
          <?php foreach($dataloaisp as $value):?>

        <li id='li<?php echo $value["san_pham_loai_guid"]?>'>
            <a href="index.php?r=front/sanpham&san_pham_loai_guid=<?php echo $value["san_pham_loai_guid"]?>"><span class="underline color-black"><?php echo $value["ten_loai"]?> </span></a>


        </li>



                    <?php endforeach?>

    </ul>
    </div>
</script>
<script>
    var StartPosition=0;
    $(function(){
        var menuchild = $("#menuchild").html();

        $("ul > .active").append(menuchild);
        var san_pham_loai_guid='<?php echo $san_pham_loai_guid ?>' ;
        $('#li'+san_pham_loai_guid).addClass("active");

        var countSP='<?php echo count($dataSPCungLoai)?>';
        var curPostSp= '<?php echo $curSP?>' ;

        var numbershow = 5;

        console.log(countSP+'countsp-'+curPostSp+'sss'+StartPosition);
        StartPosition=curPostSp-1;

    });
</script>