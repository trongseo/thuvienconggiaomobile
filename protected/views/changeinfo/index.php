<script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl; ?>/scripts/jquery-1.3.2.js"></script>
<script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl; ?>/scripts/jquery-ui-1.7.2.custom.min.js"></script>
<link rel="Stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/style/jqueryui/ui-lightness/jquery-ui-1.7.2.custom.css" />
<script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl; ?>/scripts/jHtmlArea-0.8.js"></script>
<link rel="Stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/style/jHtmlArea.css" />
<link rel="Stylesheet" type="text/css" media="all" href="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/skins/aqua/theme.css" title="Aqua" />
<link rel="Stylesheet" type="text/css" media="all" href="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/skins/calendar-blue.css" title="winter" />
<link rel="Stylesheet" type="text/css" media="all" href="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/skins/calendar-blue2.css" title="blue" />
<link rel="Stylesheet" type="text/css" media="all" href="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/skins/calendar-brown.css" title="summer" />
<link rel="Stylesheet" type="text/css" media="all" href="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/skins/calendar-green.css" title="green" />
<link rel="Stylesheet" type="text/css" media="all" href="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/skins/calendar-win2k-1.css" title="win2k-1" />
<link rel="Stylesheet" type="text/css" media="all" href="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/skins/calendar-win2k-2.css" title="win2k-2" />
<link rel="Stylesheet" type="text/css" media="all" href="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/skins/calendar-win2k-cold-1.css" title="win2k-cold-1" />
<link rel="Stylesheet" type="text/css" media="all" href="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/skins/calendar-win2k-cold-2.css" title="win2k-cold-2" />
<link rel="Stylesheet" type="text/css" media="all" href="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/skins/calendar-system.css" title="system" />


<script type="text/javascript" src="s<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/calendar-helper.js"></script>
<!-- import the Jalali Date Class script -->
<script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/jalali.js"></script>
<!-- import the calendar script -->
<script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/calendar.js"></script>
<!-- import the calendar script -->
<script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/calendar-setup.js"></script>
<!-- import the language module -->
<script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl; ?>/shared/calendar/lang/calendar-en.js"></script>

<style type="text/css">
    /* body { background: #ccc;} */
    div.jHtmlArea .ToolBar ul li a.custom_disk_button
    {
        background: url(<?php echo Yii::app()->theme->baseUrl; ?>/images/disk.png) no-repeat;
        background-position: 0 0;
    }

    div.jHtmlArea
    {
        border: solid 1px #ccc;
    }
</style>

<script type="text/javascript">
    // You can do this to perform a global override of any of the "default" options
    // jHtmlArea.fn.defaultOptions.css = "jHtmlArea.Editor.css";
    $(function () {
        $("#QuestionBanks_content").htmlarea(); // Initialize jHtmlArea's with all default values

    });

</script>



<table border="0" width="100%" cellpadding="0" cellspacing="0">
    <tbody><tr>
        <td class="box_area">
            <h2>
                Change Info</h2>
            <?php $form = $this->beginWidget('CActiveForm', array('id' => 'frm', 'enableAjaxValidation' => true, 'enableClientValidation' => true, 'htmlOptions' => array('name' => 'frm'))); ?>
            <?php echo $form->errorSummary($model, ''); ?>
            <p>
            </p>
            <table class="rowtable2" border="0" width="50%" cellpadding="5" cellspacing="1">
                <tbody>
                <tr class="rowone" valign="top">
                    <td>
                        Full name:
                    </td>
                    <td>
                        <?php echo $form->textField($model, 'full_name', array( 'class'=>'inp','size'=>'50')); ?> <label style="color: #ff0000">*</label>
                        <?php echo $form->hiddenField($model, 'id'); ?>
                    </td>
                </tr>
                <tr class="rowtwo" valign="top">
                    <td>
                        Email:
                    </td>
                    <td>
                        <?php echo $form->textField($model, 'email', array( 'class'=>'inp','size'=>'30','readonly'=>'readonly')); ?>
                    </td>
                </tr>
                <tr class="rowone" valign="top">
                    <td>
                        Telephone:
                    </td>
                    <td>
                        <?php echo $form->textField($model, 'telephone', array( 'class'=>'inp','size'=>'10')); ?>
                    </td>
                </tr>
                <tr class="rowone" valign="top">
                    <td>
                        Birthday:
                    </td>
                    <td>
                        <?php echo $form->textField($model, 'birthday', array( 'class'=>'inp','id'=>'date_input_1')); ?>
                        <a href="javascript:void(0);" title="Calendar...">
                            <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/button-calendar.gif"  name="date_btn_1" id="date_btn_1" " alt="Calendar..." class="calendar-icon"
                            onmouseover="this.className+=' calendar-icon-hover';" onmouseout="this.className = this.className.replace(/\s*calendar-icon-hover/ig, '');"></a>

                        <script type="text/javascript">
                            Calendar.setup({
                                inputField: "date_input_1",   // id of the input field
                                button: "date_btn_1",   // trigger for the calendar (button ID)
                                ifFormat: "%Y-%m-%d",       // format of the input field
                                dateType: 'jalali',
                                weekNumbers: false
                            });
                        </script>
                        <label style="color: #ff0000">*</label>
                    </td>
                </tr>
                </tbody>
            </table>
            <p class="center">
                <input class="btn" name="bsubmit" value=" Save " type="submit">
            </p>
        </td>
    </tr>
    </tbody>
</table>
<?php $this->endWidget(); ?>
