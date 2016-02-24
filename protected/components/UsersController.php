<?php

class UsersController extends CController {


    public $menu = array();

    public $breadcrumbs = array();
    public $title;
    public $keywords;
    public $description;
    public $analytics;
    public $lang = array(); //language

    public $aboutLists = array();
    public $servicesLists = array();
    public $businessLists = array();

    public function init() {

        if(!isset( Yii::app()->session['id_user']))
        {
            $this->redirect(array('login/index'));
        }


        //Setup lang
      //  $this->lang = Langs::setLangs();

      //  Yii::app()->getModule('about');
       // $this->aboutLists = About::model()->listMenuByDos();

       // Yii::app()->getModule('services');
       // $this->servicesLists = Services::model()->listMenuByDos();

       // $this->businessLists = Bussiness::model()->listCats();
    }

}