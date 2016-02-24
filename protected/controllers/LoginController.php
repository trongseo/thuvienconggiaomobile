<?php

class LoginController extends CController {

    public function actionIndex() {
//va quass
        Yii::app()->theme = '';
    $model = new User();
        if( isset($_POST["bsubmit"]) )
        {
          $arrInfo =   $model->getUserLogin($_POST["username"],md5( $_POST['password']));

            if($arrInfo==false)
            {
                $this->render('login',array('errors' =>'Email or password is wrong!'));
            }else
            {
                Yii::app()->session['id_user'] = $arrInfo['id'];
                Yii::app()->session['email'] = $arrInfo['email'];
                Yii::app()->session['full_name'] = $arrInfo['full_name'];
                if(Yii::app()->session['email']=='admin')
                {
                    $this->redirect(array('myadmin/sanphamlist'));
                }
            }
            return;
        }

    $this->render('login',array('errors' =>''));

}
    public function actionSignOut() {
        Yii::app()->session->clear();
        Yii::app()->session->destroy();
        $this->redirect(array('login/index'));
    }



} 