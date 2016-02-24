<?php
    $c = TblConfig::model()->find();
?>
  
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="en" />
        <title><?php echo CHtml::encode($this->pageTitle); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <link rel="shortcut icon" href="/img/favicon.ico"  />
        <link rel="stylesheet" href="<?php echo Yii::app()->baseUrl; ?>/css/bootstrap.min.css" type="text/css"/>
        <link href="/css/select2.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="<?php echo Yii::app()->baseUrl; ?>/css/main.css" type="text/css"/>
        <script src="<?php echo Yii::app()->baseUrl?>/js/jquery-1.9.1.min.js"></script>        
        <script src="/css/select2.min.js"></script>
        <script type="text/javascript" language="javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/jquery.bt.min.js"></script>
        <script type="text/javascript" src="<?php echo Yii::app()->baseUrl?>/js/jssor.js"></script>
        <script type="text/javascript" src="<?php echo Yii::app()->baseUrl?>/js/jssor.slider.js"></script>
        <script type="text/javascript" src="<?php echo Yii::app()->baseUrl?>/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="<?php echo Yii::app()->baseUrl?>/css/font-awesome.min.css" />
        <script src="/js/jquery.form.js"></script>
        <script src="/js/JsCommon.js"></script>
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
        <style>
            .contact-head {

                text-align: center;
                height: 50px;
                /*margin-top: -15px;*/
                font-size:18px;


            }
            .contact-head1 {
                max-width: 1040px;
                margin: 0 auto;



            }
            .container1 {
                max-width: 1000px;
                margin: 0 auto;

            }
            .btn_tab {
                height: 50px;
                border-right: 1px solid rgb(192, 112, 61);
                /*color: #5A2D0C;*/
                /*font-weight: bold;*/
                margin-left: -5px;
                background: transparent none repeat scroll 0% 0%;
                /*border-right: 1px solid rgb(192, 112, 61);*/
                /*border-bottom: 1px solid rgb(192, 112, 61);*/
                border-top: none;
                padding-left: 15px;
                padding-right: 15px;
                float: left;
                line-height:50px;
                font-weight:bold;;
                color: #C0703D ;cursor: pointer;
            }
            .btn_tab1{
                height: 50px;
                border-right: 1px solid rgb(192, 112, 61);

                margin-left: -5px;
                background: transparent none repeat scroll 0% 0%;
                /*border-right: 1px solid rgb(192, 112, 61);*/
                /*border-bottom: 1px solid rgb(192, 112, 61);*/
                border-top: none;

                float: left;
                line-height:50px;
                font-weight:bold;;
                color: #C0703D ;cursor: pointer;
            }
            .btn_tab_active {
                color: #5A2D0C ;
            }
            .logo {
                margin-left: 5px;
                float: left;
            }
            .logoleft {

                margin-right: 30px;

            }
            body {
                line-height: 20px;
                height: 100%;
                background: url(/img/bggg.jpg);
            }
            .logo-login {
                /* width: 182px; */
                float: left;
                position: relative;
                top: 6px;
                padding-left: 30px;
            }
            .download {
                height: 36px;
                border: 1px solid #be7338;
                border-radius: 4px;
                font-weight: bold;
                color: #be7338;
                padding: 8px 10px 1px 10px;margin-top:10px;margin-left:-10px;
            }
            .logo-login .register {
                /* background: url('../images/ic_register.png') left center no-repeat #ecd1b5; */
                float: left;
            }
            .colorconggiao{
                color:#5a2e0b;

            }
            .textcolor1{
 color:#be7338;
               
            }
			.logo-login a{
				 color:#5a2e0b;
			}
            @media (min-width: 979px) {
               div.dropdown:hover > ul.dropdown-menu {
                    display: block;
                  border: 1px solid #fff;
                }
            }
            .dropdown-menu{
                padding:    0px;
                font-size: 16px;
                font-weight: bolder;
                margin-left: 59px;
            }
            .bookimagecls{
                cursor:hand;
            }
            .nav>li>a:hover, .nav>li>a:focus {
                text-decoration: none;
                background-color: rgba(238, 238, 238, 0);
            }

        </style>
    </head>
    <body>
    <div class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="background-color:#D5A16F;color: white ">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title">Modal title</h4>
                </div>
                <div class="modal-body">
                    <p>One fine body…</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Yêu cầu đăng nhập</h4>
                </div>
                <div class="modal-body">
                    <p>Vui lòng <a target="_blank" href="/dang-nhap" style="color: #C0703D" > đăng nhập  </a>để sử dụng chức năng này</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>

        <div class="container-wp-fullwidth">


            <div class="col-md-12">

                <div class="clear"></div>
                <div class="row contact-head1">

                <div class="col-md-12 contact-head">
                    <div class="logo">

                        <a href="<?php echo Yii::app()->baseUrl.'/' ?>">
                            <img class="logoleft"  src="/img/logobook.png" /></a>
                    </div>
                    <div alt="0" class="btn_tab btn_tab_active docsachcls" >
                        Đọc sách
                    </div>
                    <?php if(isset(Yii::app()->session['id_user'])): ?>
                    <?php else: ?>

                    <?php endif; ?>

                        <div alt="1" class="btn_tab">
                            Thông tin sách
                        </div>
                    <div alt="2" class="btn_tab">
                        Đánh giá & Bình luận
                    </div>
                    <div alt="3" class="btn_tab">
                        Sách liên quan
                    </div>
                    <div class="logo-login">
                        <?php if(isset(Yii::app()->session['id_user'])): ?>
                            <div class="dropdown ">

                                <a class="register" href="javascript:void(0)" data-toggle="dropdown">
                                    <img src="/images/bookstore.png"> Thêm vào tủ sách   <span class="caret"></span>
                                </a>

                                <ul class="dropdown-menu colorconggiao"  style="margin-top: 35px">
                                    <li><a style="  border: 1px solid #b1b3b8;" href="javascript:AddBookToMe(0)">Sách này</a></li>
                                    <li><a style="  border: 1px solid #b1b3b8;" href="javascript:AddBookToMe(1)">Nguyên bộ</a></li>
                                </ul>
                            </div>

                        <?php else: ?>
                            <a class="register" href="javascript:AddBookToMeNo()"  >
                                <img src="<?php echo Yii::app()->baseUrl.'/images/bookstore.png'?>" /> Thêm vào tủ sách
                            </a>
                        <?php endif; ?>

                    </div>
                </div>
                <div class="col-md-12">
                   <img src="/images/line_shadow.png" />

                </div>

                </div>

                <div class="col-md-12">
                    <div class="row" id="slide-warp"></div>
                </div>
                <div class="clear1" style="height: 7px"></div>
                <div class="col-md-12" id="content-wp">
                    <?php echo $content?>
                </div>
                <div class="col-md-12" id="contentbook" style="display: none">
                <div class="row idreadbook" >
                    <div style="padding-left: 140px;padding-top: 5px;width:100%; min-height: 100%; overflow: hidden;">

                        <iframe  id="ifbook" src="/readpdf/web/pdfviewer.php?rc=<?php echo rand(); ?>" scrolling="no"
                                seamless="seamless" width="90%" height="100%"></iframe>
                    </div>
                </div>
                </div>
            </div>
            <div class="clear1"></div>
            <div class="col-md-12">

            </div>
            <div class="clear"></div>
        </div>

<div id="bodyEnd" style="position:absolute;top:10;left:10;width:400px;"><div  class="overlay" style="position:absolute;top:10;left:10;width:100%;height:100%;z-index:1000;color: #000;">Đang tải....... </div></div>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-68203180-1', 'auto');
        ga('send', 'pageview');

    </script>
    </body>
    <link href="/js/dialog/bootstrap-dialog.min.css" rel="stylesheet" type="text/css" />
    <script src="/js/dialog/bootstrap-dialog.min.js"></script>
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
</html>