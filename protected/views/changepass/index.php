<section class="content-header">
    <h1>
        <?php echo $this->pageTitle; ?>

    </h1>

</section>
<?php $form = $this->beginWidget('CActiveForm', array('id' => 'frm', 'enableAjaxValidation' => false, 'enableClientValidation' => true, 'htmlOptions' => array('name' => 'frm'))); ?>

<section class="content  ">
<div class="row">
    <div class="col-md-6">
         <?php echo $form->errorSummary($model, ''); ?>
        <div class="panel panel-default">

            <div class="panel-body">

                    <div class="form-group">
                        <label for="pass_old">  Old password:</label>
                        <?php echo $form->passwordField($model, 'pass_old',array( 'class'=>'form-control','size'=>'30')); ?>
                    </div>
                <div class="form-group">
                    <label for="pass_new">New Password: </label>
                    <?php echo $form->passwordField($model, 'pass_new', array( 'class'=>'form-control','size'=>'30')); ?>
                </div>
                <div class="form-group">
                    <label for="pass_new">Confirm password:</label>
                    <?php echo $form->passwordField($model, 'pass_new_compare', array( 'class'=>'form-control','size'=>'30')); ?>
                </div>
                <input class="btn btn-primary btn-lg" name="bsubmit" value=" L?u " type="submit">
              </div>






        </div>

    </div>
</div>
</section>
<?php $this->endWidget(); ?>