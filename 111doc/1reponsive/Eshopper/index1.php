<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>trangchu</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/prettyPhoto.css" rel="stylesheet">
    <link href="css/price-range.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <link href="css/responsive.css" rel="stylesheet">
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.scrollUp.min.js"></script>
    <script src="js/price-range.js"></script>
    <script src="js/jquery.prettyPhoto.js"></script>
    <script src="js/main.js"></script>
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
                        <a href="index.html"><img src="http://www.thuvienconggiaovietnam.net/images/logo.png" alt=""></a>

                        Thư Viện Công Giáo Việt Nam

                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="shop-menu pull-right">
                        <ul class="nav navbar-nav">
                            <li><a href="login.html"><i class="fa fa-book"></i> Tủ sách</a></li>
                            <li><a href="login.html"><i class="fa fa-info"></i> Giới thiệu</a></li>
                            <li><a href="#"><i class="fa fa-user"></i> Đăng ký</a></li>
                            <li><a href="login.html"><i class="fa fa-lock"></i> Đăng nhập</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
   <!--/header-middle-->

    <div class="header-bottom"><!--header-bottom-->
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-xs-3">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse out" aria-expanded="false">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">Trang chủ</a></li>

                            <li><a href="#"> Sách mới</a></li>
                            <li><a href="#"> Sách hay</a></li>
                            <li class="dropdown showchild ">
                                <a href="#" class="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Thư Viện <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">  Kiến Thức Cơ Bản</a></li>
                                    <li><a href="#">  Kiến Thức Cơ Bảnt</a></li>
                                    <li><a href="#"> Thánh kinh</a></li>
                                    <li><a href="#"> Thánh kinh</a></li>
                                    <li><a href="#"> Thánh kinh</a></li>
                                    <li><a href="#"> Thánh kinh</a></li>
                                    <li><a href="#"> Thánh kinh</a></li>
                                    <li><a href="#"> Thánh kinh</a></li>
                                    <li><a href="#"> Thánh kinh</a></li>
                                    <li><a href="#"> Thánh kinh</a></li>
                                    <li><a href="#"> Thánh kinh</a></li>
                                    <li><a href="#"> Thánh kinh</a></li>
                                    <li><a href="#"> Thánh kinh</a></li>
                                    <li><a href="#"> Thánh kinh</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
                <div class="col-sm-3 col-xs-9">

                    <form  role="search">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search" name="q">
                            <div class="input-group-btn">
                                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div><!--/header-bottom-->
</header><!--/header-->


<section id="slider"><!--slider-->
    <div class="container">
        <div class="row">
            <div class="col-sm-12">

                <?php require "index1scroll.php" ;?>
            </div>
        </div>
    </div>
</section><!--/slider-->

<section>
<div class="container">
<div class="row">

<!--xs (phones), sm (tablets), md (desktops), and lg (larger desktops)-->
<div class="col-sm-12 padding-right">


    <h2 class="mytitle text-left">Sách mới đưa vào Thư Viện</h2>
    <div class="features_items"><!--features_items-->
        <?php for ($i = 1; $i <= 14; $i++): ?>
                <?php require "index1Templete.php" ;?>
        <?php endfor?>

        </div>

    </div><!--features_items-->
</div>

</div>
</div>
</section>

<footer id="footer"><!--Footer-->

    <div class="container">

    <div class="col-md-12">
        <div class="col-md-12 footer-wp onlybox">
            <div class="row">
                <div class="col-md-4 form-group">
                    <h4 class="headings1">Thông tin</h4>

                    <a href="/dieu-khoan-su-dung">
                        <div class="items items-1">
                            Điều khoản sử dụng
                        </div>
                    </a>
                    <a href="/lien-he">
                        <div class="items items-2">
                            Liên hệ
                        </div>
                    </a>
                </div>
                <div class="col-md-4 form-group">
                    <h4 class="headings1">Phần mềm đọc sách</h4>
                    <a href="/huong-dan-app">
                        <div class="items items-7">
                            Ứng dụng cho PC
                        </div>
                    </a>
                    <a href="/huong-dan-app">
                        <div class="items items-3">
                            Ứng dụng cho iOS
                        </div>
                    </a>
                    <a href="/huong-dan-app">
                        <div class="items items-4">
                            Ứng dụng cho Android
                        </div>
                    </a>
                </div>
                <div class="col-md-4 form-group">
                    <h4 class="headings1">Hỗ trợ</h4>
                    <a href="/huong-dan">
                        <div class="items items-5">
                            Hướng dẫn
                        </div>
                    </a>
                    <a href="/cau-hoi-thuong-gap">
                        <div class="items items-6">
                            Những câu hỏi thường gặp
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
</footer><!--/Footer-->

<script>
    $(document).ready(function() {
        $('.navbar-toggle').click(function() {
            $( ".showchild" ).addClass( 'open' );

        });
    });
</script>
</body>
</html>