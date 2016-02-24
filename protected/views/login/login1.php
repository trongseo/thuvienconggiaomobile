


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr"><head><title> LOGIN -QUIZ </title>
    <meta http-equiv="Content-Language" content="en-us">
    <meta content="text/html; charset=UTF-8" http-equiv=Content-Type>
    <link rel="SHORTCUT ICON" href="/favicon.ico">
    <link href="themes/admin-green/shared/style.css" rel=stylesheet type=text/css>
    <script language=javascript src="themes/admin-green/shared/shared.js" type="text/javascript"></script>
</head>
<body bgcolor="#ffffff">
<?php $form = $this->beginWidget('CActiveForm', array('id' => 'frm', 'enableAjaxValidation' => true, 'enableClientValidation' => true, 'htmlOptions' => array('name' => 'frm'))); ?>

<p><table cellpadding=0 cellspacing=0 border=0 width="100%">
    <tr><td width=200></td><td width="100%" align=center class=top_section>
            ADMIN LOGIN</td></tr>
    <tr><td colspan=2 height=1 width=100% style="background-color: #E7E9EF;"><img src="themes/admin-green/images/1x1.gif" width=1 height=1></td></tr>

    <tr><td colspan=2 height=7 width=100%><img src="themes/admin-green/images/1x1.gif" width=1 height=7></td></tr>
    <tr><td colspan=2>

            <table cellpadding=0 cellspacing=0 border=0 width="100%">
                <tr vAlign=top><td width="1%"><img src="themes/admin-green/images/1x1.gif" width=2 height=1></td><td>

                        <table cellpadding=0 cellspacing=0 border=0 width="100%">
                            <tr><td class=box_area>

                                    <table cellpadding=0 cellspacing=5 border=0 width="100%">
                                        <tr vAlign=top><td  height="100%" class="signin1" COLSPAN="2">
                                                <p>
                                                <p><b><?php echo $errors ?></b></p>
                                                    <br>Email:
                                                    <br><input name=username class=inp type=text value="" size=20>
                                                    <br>Password:
                                                    <br><input name=password class=inp type=password value="" size=20>
                                                <input name=gotourl type=hidden value="/php/tracnghiem/test.php">
                                                    <br>
                                                    <br><input class=btn type=submit name=bsubmit value=" Login ">

                                                    <br><br>&nbsp;</td>
                                            <td >



</td></tr></table>

</td></tr></table>
</td><td width="1%"><img src="themes/admin-green/images/1x1.gif" width=2 height=1></td></tr></table>

</td></tr>
<tr><td colspan=2 height=9 width=100%><img src="themes/admin-green/images/1x1.gif" width=1 height=9></td></tr>
<tr><td colspan=2 height=1 width=100% style="background-color: #E7E9EF;"><img src="themes/admin-green/images/1x1.gif" width=1 height=1></td></tr>
<tr><td colspan=2 height=2 width=100%><img src="themes/admin-green/images/1x1.gif" width=1 height=2></td></tr>
<tr><td colspan=2 align=right></td></tr>
<tr><td colspan=2 align=center>Copyright &copy; 2015<br />
        All Rights Reserved.
    </td></tr>
</table>
<?php $this->endWidget(); ?>
</body></html>