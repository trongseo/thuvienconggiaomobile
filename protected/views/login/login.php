
<!DOCTYPE html>
<html class="bg-black">
<head>
    <meta charset="UTF-8">
    <title>Admin | Log in</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <!-- bootstrap 3.0.2 -->
    <link href="themes/admin-green/views/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- font Awesome -->
    <link href="themes/admin-green/views/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <!-- Ionicons -->

    <!-- Theme style -->
    <link href="themes/admin-green/views/css/AdminLTE.css" rel="stylesheet" type="text/css" />

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

    <style>
        .header{
            font-family: tahoma, verdana, sans-serif;
        }
    </style>
</head>
<body class="bg-black">
<?php $form = $this->beginWidget('CActiveForm', array('id' => 'frm', 'enableAjaxValidation' => true, 'enableClientValidation' => true, 'htmlOptions' => array('name' => 'frm'))); ?>

<div class="form-box" id="login-box">
    <div class="header">Đăng nhập</div>
    <?php echo $errors ?>
        <div class="body bg-gray">
            <div class="form-group">
                <input type="text" name="username" class="form-control" placeholder="User ID"/>
            </div>
            <div class="form-group">
                <input type="password" name="password" class="form-control" placeholder="Password"/>
            </div>

        </div>
        <div class="footer">
            <button type="submit" name=bsubmit  class="btn bg-olive btn-block">Đăng nhập</button>


        </div>



</div>
<?php $this->endWidget(); ?>

<!-- jQuery 2.0.2 -->
<script src="themes/jquery.min.js"></script>
<!-- jQuery UI 1.10.3 -->
<script src="themes/admin-green/views/js/jquery-ui-1.10.3.min.js" type="text/javascript"></script>
<!-- Bootstrap -->
<script src="themes/admin-green/views/js/bootstrap.min.js" type="text/javascript"></script>

</body>
</html>