<?php
Yii::app()->theme = 'user-theme';
class ChangeinfoController extends UsersController  {

    public function actionIndex(){
        $user_id_login = Yii::app()->session['id_user'];
        $this->pageTitle = 'Change Info';
        $model_class = new User();
        if( isset($_POST["bsubmit"]) )
        {
            // get value
            $model_class->attributes =  $_POST["User"];
            $model_class->id = $_POST["User"]["id"];
            $model_class->full_name = $_POST["User"]["full_name"];
            $model_class->birthday = $_POST["User"]["birthday"];

            $model_class->setScenario("changeInfo");
            $model_class->attributes =  $_POST["User"];
            //update
            if($model_class->validate())
            {
                $model_class->changeInfo($_POST["User"]);
                $this->redirect(array('chooseexam/index'));
            }else
            {
                $this->render('index',  array('model'=>$model_class));
            }


        }else{
            $model_class=   $model_class->findByPk($user_id_login);
            if($model_class == null){
                $this->redirect(array('chooseexam/index'));
            }

            $this->render('index',  array('model'=>$model_class));
        }
    }

} 