<?php

class UserController extends HomeController {

    public function actionIndex() {
    $this->pageTitle = 'Users management';
    $model = new User();
    $model_search = new User('User');
    $search_full_name = '';
    $search_email = '';
    if(isset($_GET['User'])){
        $user_search = $_GET['User'];
        $search_full_name = $user_search['full_name'];
        $search_email = $user_search['email'];

        $result_search = $model->search($search_full_name,$search_email);

        $this->render('index',array('items' =>$result_search,'model'=>$model_search,'search_full_name'=>$search_full_name,'search_email'=>$search_email));
    }
    else{
        $this->render('index',array('items' => $model->listAllItem(),'model'=>$model_search,'search_full_name'=>$search_full_name,'search_email'=>$search_email));
    }


}

    /**
     * Add new subject
     */
    public function actionInsert() {
        $this->pageTitle = 'User insert';
        $model_class = new User();
        //submit for insert
        if(isset($_POST["bsubmit"]))
        {
            //insert
            $model_class->setScenario("register");
            $_POST["User"]["email"] = trim($_POST["User"]["email"]);
            $model_class->attributes =  $_POST["User"];
            //register
            if($model_class->validate())
            {
                $model_class->insertNew($_POST["User"]);
                $this->redirect(array('user/index'));
            }else
            {
                $this->render('insert',  array('model'=>$model_class));
            }

        }else
        {
            $this->render('insert',  array('model'=>$model_class));
        }

    }

    public function actionDelete() {
        if(isset($_REQUEST["id"]))
        {
            $model_class = new User();
            $model_class->deleteUser($_REQUEST["id"]);
            $this->redirect(array('user/index'));
        }else
            if(isset($_REQUEST["box_users"]))
            {
                $model_class = new User();
                foreach($_REQUEST["box_users"] as $valId){
                    $model_class->deleteUser($valId);
                }
                $this->redirect(array('user/index'));
            }

    }

    public function actionEdit() {
        $this->pageTitle = 'User edit';
        $model_class = new User();
        if( isset($_POST["bsubmit"]) )
        {
            // get value
            $model_class->attributes =  $_POST["User"];
            $model_class->id = $_POST["User"]["id"];
            $model_class->full_name = $_POST["User"]["full_name"];
            $model_class->birthday = $_POST["User"]["birthday"];
            $model_class->telephone = $_POST["User"]["telephone"];
            $model_class->password = trim($_POST["User"]["password"]);

            $model_class->setScenario("changeInfo");
            $model_class->attributes =  $_POST["User"];
            //update
            if($model_class->validate())
            {
                $model_class->updateUser($_POST["User"]);
                $this->redirect(array('user/index'));
            }else
            {
                $this->render('edit',  array('model'=>$model_class));
            }


        }else{
            $model_class=   $model_class->findByPk($_REQUEST["id"]);
            if($model_class == null){
                $this->redirect(array('user/index'));
            }
            $model_class['password']='';
            $this->render('edit',  array('model'=>$model_class));
        }
    }
} 