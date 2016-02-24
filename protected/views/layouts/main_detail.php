<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>trangchu</title>
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/font-awesome.min.css" rel="stylesheet">
    <link href="/css/prettyPhoto.css" rel="stylesheet">
    <link href="/css/price-range.css" rel="stylesheet">
    <link href="/css/animate.css" rel="stylesheet">
    <link href="/css/main.css" rel="stylesheet">
    <link href="/css/responsive.css" rel="stylesheet">
    <script src="/js/jquery.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/jquery.scrollUp.min.js"></script>
    <script src="/js/price-range.js"></script>
    <script src="/js/jquery.prettyPhoto.js"></script>
    <script src="/js/main.js"></script>


    <script src="/css/select2.min.js"></script>
    <script type="text/javascript" language="javascript" src="/js/jquery.bt.min.js"></script>

    <script src="/js/jquery.form.js"></script>
    <link href="/js/dialog/bootstrap-dialog.min.css" rel="stylesheet" type="text/css" />
    <script src="/js/dialog/bootstrap-dialog.min.js"></script>
    <script src="/js/JsCommon.js"></script>

    <style>
        body{

            /*background: url('http://thuvienconggiaovietnam.net/images/background_new.jpg') ;*/

        }
    </style>

    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.min.js"></script>
    <![endif]-->
    <link rel="shortcut icon" href="images/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="images/ico/apple-touch-icon-57-precomposed.png">
    <style>
        @media (min-width: 760px) and (max-width: 991px) {
            .col-sm-3{
                width: 30%;
                padding-left: 2px;
                padding-right: 2px;
            }
            .pull-right {
                float: right;
                width: 100%;
            }
            .search_box input {
                background: #F0F0E9;
                border: medium none;
                color: #B2B2B2;
                font-family: 'roboto';
                font-size: 12px;
                font-weight: 300;
                height: 35px;
                outline: medium none;
                padding-left: 10px;
                background-image: url('');
                background-repeat: no-repeat;
                background-position: 130px;
            }
        }
        @media (max-width: 767px){
            .header-bottom .col-sm-3 {
                display: inline-block;
                position: absolute;
                left: 0;
                top: 8px;

            }
            .showchild >.dropdown-menu{position: static;
                float: none;
                width: auto;
                margin-top: 0;
                background-color: transparent;
                border: 0;
                box-shadow: none; display: inline-block;}

        }
        .search_box input{
            width: 100%;
            background-image: url('');
        }
        .pull-right{
            width: 100%;
        }
        .navbar-collapse {
            max-height:none;
        }
        .header-bottom {
            padding-bottom: 0px;
            padding-top: 0px;
        }
        .container .row {

            padding-bottom: 5px;
            padding-top: 5px;
        }
        .navbar-toggle {
            margin-top: 4px;
        }
        .mytitle{

            color: #FE980F;
            font-family: 'Roboto', sans-serif;
            font-size: 15px;
            font-weight: 700;
            margin: 0 15px;
            text-transform: uppercase;
            margin-bottom: 10px;
            /*position: relative;*/
        }
        .small1{
            font-size: 8px;
            font-style: italic;
        }
        .imgBook{
            max-width: 140px;
            max-height: 200px;
        }
        .colorconggiao{
            color:#5a2e0b;

        }
        .colorvietnam{
            color:#be7338;
        }
        .textcolor1{

            color:#be7338;
        }
        .smenu{

            color:#be7338;
            background-color:#eee !important;
        }

    </style>
</head><!--/head-->

<body>

<header id="header"><!--header-->

    <div class="header-middle"><!--header-middle-->
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="logo pull-left">
                        <!--<a href="index.html"><img src="images/home/logo.png" alt=""></a>-->
                        <a href="/"><img src="http://www.thuvienconggiaovietnam.net/images/logo.png" alt=""></a>

                        Thư Viện Công Giáo Việt Nam

                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="shop-menu pull-right">
                        <ul class="nav navbar-nav">
                            <li><a href="javascript:void();" alt="0" class="btn_tab btn_tab_active docsachcls"><i class="fa fa-book"></i> Đọc sách</a></li>
                            <li><a href="javascript:void();" alt="1" class="btn_tab" ><i class="fa fa-info"></i> Thông tin sách</a></li>

                            <li><a href="javascript:void(); " alt="2" class="btn_tab" ><i class="fa fa-comment"></i>Bình luận</a></li>
                            <li><a href="javascript:void();" alt="3" class="btn_tab"><i class="fa fa-plus"></i> Sách liên quan</a></li>

                            <?php if(isset(Yii::app()->session['id_user'])): ?>
                                <li class="menu-item dropdown"><a href="index.php?id=15" title="Produkty" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-user"></i>Thêm vào tủ sách</a>
                                    <ul class="dropdown-menu " style="position: absolute;background-color:#eee">
                                        <li><a  href="javascript:AddBookToMe(0)">Sách này</a></li>
                                        <li><a  href="javascript:AddBookToMe(1)">Nguyên bộ</a></li>
                                    </ul>
                                </li>

                            <?php else: ?>
                                <li>  <a class="register" href="javascript:AddBookToMeNo()"  >
                                       Thêm vào tủ sách
                                    </a></li>
                            <?php endif; ?>

                        </ul>




                    </div>

                </div>
            </div>
        </div>
    </div>
    <!--/header-middle-->

</header><!--/header-->



<section>
    <div class="container">
        <div class="row">

            <!--xs (phones), sm (tablets), md (desktops), and lg (larger desktops)-->
            <div class="col-sm-12 padding-right"  id="content-wp">


                <?php echo $content?>

            </div><!--features_items-->
            <div class="col-md-12" id="contentbook" style="display: none">
                <div class="row idreadbook" >
                    <div style="width:100%; min-height: 100%; overflow: hidden;">d

                        <iframe  id="ifbook" src="/readpdf/web/pdfviewer.php?rc=<?php echo rand(); ?>" scrolling="no"
                                 seamless="seamless" width="90%" height="800px"></iframe>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
</section>

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-68203180-1', 'auto');
    ga('send', 'pageview');

</script>
<script>
    $(document).ready(function() {
        $('.navbar-toggle').click(function() {
            $( ".showchild" ).addClass( 'open' );

        });
    });

</script>

<script>
    function openNewWindow(openid){
        window.open('/chi-tiet/'+openid,'_blank');
    }
    var ID_BOOK='<?php echo $this->ID_BOOK; ?>';

    <!--    ID_BOOK='--><?php //echo  Common::getSession('idbook'); ?><!--';-->


    $(document).on('click', '.bookimagecls', function(){
        $(".docsachcls").click();
    });
    $(document).ready(function() {
        $("#fabric").select2();
        $(".btn_tab").click(function(){
//                $(".btn_tab").removeClass('btn_tab_active');
//                $(this).addClass('btn_tab_active');
            var id = $(this).attr('alt');
            LoadInfo(id);
        });
    });
    function LoadSLide(){
        $.ajax({
            type:"POST",
            url:'<?php echo Yii::app()->baseUrl ?>/Site/LoadSLide',
            data:{},
            success:function(result){
                $("#slide-warp").empty().append(result);
            }
        })
    }
    function LoadSLideProduct(){
        $.ajax({
            type:"POST",
            url:'<?php echo Yii::app()->baseUrl ?>/Site/LoadSLideProduct',
            data:{},
            success:function(result){
                $("#slide-product").empty().append(result);
            }
        })
    }
    function LoadItem(id){
        $.ajax({
            type:"POST",
            url:'<?php echo Yii::app()->baseUrl ?>/Site/LoadItem',
            data:{id:id},
            success:function(result){
                $("#item-book").empty().append(result);
            }
        })
    }
    function AddBookToMe(isAll){
        wailtLoad();
        $.ajax({
            type:"POST",
            url:'<?php echo Yii::app()->baseUrl ?>/Site/AddBook?isAll='+isAll+'&ID_BOOK='+ID_BOOK,
            data:{},
            success:function(result){
                wailtLoadEnd();
                //alert('Đã thêm vào tủ sách của bạn thành công!');
                BootstrapDialog.alert('Đã thêm vào tủ sách của bạn thành công!');
            }
        })
    }
    function AddBookToMeNo(){
        BootstrapDialog.alert('Vui lòng đăng nhập để sử dụng chức năng này!');
    }
    localStorage.removeItem('database');
    var BOOK_CONTENT_LOAD ='';
    var IS_FIRST_LOAD=0;
    function LoadInfo(id){

        wailtLoad();
        // var id = $(this).attr('alt');
        $obcc =  $( ".btn_tab[alt='"+id+"']" );
        $(".btn_tab").removeClass('btn_tab_active');
        $obcc.addClass('btn_tab_active');
        if(id==0){
            //truong hop moi vao chua co session cho doc sach
            if(IS_FIRST_LOAD==0){
                $.ajax({
                    type:"POST",
                    url:'<?php echo Yii::app()->baseUrl ?>/Site/LoadInfo?ID_BOOK='+ID_BOOK,
                    data:{id:id},
                    success:function(result){

                        $('#ifbook').attr("src", $('#ifbook').attr("src"));
                        $("#contentbook").show();
                        $("#content-wp").empty().hide();
                        wailtLoadEnd();
                    }
                });
            }else{
                $("#contentbook").show();
                $("#content-wp").empty().hide();
                wailtLoadEnd();
            }

            IS_FIRST_LOAD=1;

            return;

        }
        $("#contentbook").hide();
        $("#content-wp").show();
        $.ajax({
            type:"POST",
            url:'<?php echo Yii::app()->baseUrl ?>/Site/LoadInfo?ID_BOOK='+ID_BOOK,
            data:{id:id},
            success:function(result){
                $("#content-wp").empty().append(result);

                if(id==0){
                    BOOK_CONTENT_LOAD=result;
                }
                wailtLoadEnd();
            }
        });
    }

</script>

</body>
</html>