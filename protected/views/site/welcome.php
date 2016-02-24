<style>

    .wel{



    }
    .hrcolor{
        background-color: #D5904D;

        height: 1px;
        margin-top: 12px; margin-bottom: 12px;
    }
</style>
<div class="row">


    <div class="col-md-10 box-login onlybox wel" id="divcontent" >
	
	
	<div class="col-md-12" style="text-align:center" >
        <div class="col-md-12" >   <img src="http://thuvienconggiaovietnam.net/img/smile.png" /> </div>
        <p style="padding-left:15px;padding-top: 10px">
            <span class="textcolor1"><i>Chào mừng bạn đến với</i> </span>
            <span style="font-weight: bold;"  class="colorvietnam">Thư Viện</span>
            <span style="font-weight: bold;" class="colorconggiao">Công Giáo</span>
            <span style="font-weight: bold;" class="colorvietnam">Việt Nam</span>
            <br>
        <p class="hrcolor" >    </p>
        </p>



<!--        <p class="colorconggiao" style="padding-left:15px;padding-top: 0px">-->
<!--           Chọn vào các mục bên trái để tìm sách cần đọc-->
<!--            <br>-->
<!--        </p>-->

    </div>
    </div>
</div>
<script>

    function LoadContent(myid,mylevel){


        if(mylevel==2){
            $.ajax({
                type:"POST",
                url:'/Site/SubLibaryTieuMuc?mylevel='+mylevel+'&myid='+myid,
                data:{},
                success:function(result){
                    $("#divcontent").empty().append(result);
                }
            });
        }else //SubLibaryTieuMuc
            $.ajax({
                type:"POST",
                url:'/Site/SubLibary?mylevel='+mylevel+'&myid='+myid,
                data:{},
                success:function(result){
                    $("#divcontent").empty().append(result);
                }
            });
    }



</script>