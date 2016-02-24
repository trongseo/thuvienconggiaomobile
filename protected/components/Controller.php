<?php

class Controller extends CController {
    //public $layout='//layouts/column1';
    public $menu = array();
    public $breadcrumbs = array();

    public $nav;
    public $title;
    public $keywords;
    public $description;
    public $analytics;

    public $function = array(); //for show, hidden function
    public $lang = array(); //language
    public $configs = array();

    public $numLang = array();

    public $logo = array(); //Logo
    public $banner = array(); //Banner

    public function init() {
        list($subdomain) = explode('.', $_SERVER['HTTP_HOST'], 2);
        $this->setUser($subdomain);

        //Setup lang
        $this->lang = Langs::setLangs();
    }

    private function setUser($user) {
        $username = new Username();
        //Check exist user
        if ($username->checkExistUser($user)) {
            $dateExpired = $username->checkExpired($user);
            if ($dateExpired > 0) {
                $this->redirect('http://' . Yii::app()->theme->name . '/report-error/expired'); //thong bao het han
            } else {
                Common::setLanguage(); //setting language

                $info_user = $username->infoUser($user);

                $this->numLang = explode('|', $info_user['language']);
                if (isset($_GET['language']) && !in_array($_GET['language'], $this->numLang)) {
                    $this->redirect('http://' . Yii::app()->theme->name . '/error'); //Ngon ngu khong duoc su dung
                }

                Yii::app()->theme = $info_user['dos_templates_template'];

                //Set session template and subdomain
                Yii::app()->session['template'] = $info_user['dos_templates_template'];
                Yii::app()->session['subdomain'] = $user;
                define('USERFILES', '/public/userfiles/image/' . Yii::app()->session['subdomain'] . '/image');

                //Set title, keywords and description
                $web_class = new Web();
                $this->title = $web_class->setWebValue('title', $user);
                $this->keywords = $web_class->setWebValue('keywords', $user);
                $this->description = $web_class->setWebValue('description', $user);
                $this->analytics = $web_class->setWebValue('analytics', 'dos');

                //Set page load file
                $loadfiles_class = new Loadfiles;
                $loadfiles_class->getFileByTemplateModule($info_user['dos_templates_template'], $this->module->id);

                //Set navigation
                $menus_class = new Menus();
                $this->nav = $menus_class->setMenu($user);

                //Set function
                $func_user = UsernamesModules::model()->getFunction($user, $this->module->id);
                if ($func_user) {
                    //function user
                    foreach ($func_user as $value) {
                        Yii::app()->getModule($value['module']);
                        $load = new $value['module_id']();
                        $this->function[$value['value_name']] = $load->$value['function_name']();
                    }
                } else {
                    //function template
                    $func = TemplateModule::model()->getFunction($info_user['dos_templates_template'], $this->module->id);
                    foreach ($func as $value) {
                        Yii::app()->getModule($value['module']);
                        $load = new $value['module_id']();
                        $this->function[$value['value_name']] = $load->$value['function_name']();
                    }
                }

                //Set Logo, Banner
                $banner = new Banner();
                $this->logo = $banner->getLogo();
                $this->banner = $banner->getBanner($this->module->getName());

                //Set configs
                $this->configs = Configs::template(Yii::app()->session['template']); //coi lai cai nay
            }
        } else {
            $this->redirect('http://' . Yii::app()->theme->name . '/error');
        }
    }

    /**
     * Set tag title, description web page
     */
    protected function setSeoPage() {
        $seo = Menus::getSeoPage($this->module->id, Yii::app()->session['subdomain']);

        if ($seo['title' . LANG]) {
            $this->pageTitle = $seo['title' . LANG];
        } else {
            $this->pageTitle = $this->lang[$this->module->id];
        }

        if ($seo['description' . LANG]) {
            $this->description = $seo['description' . LANG];
        }
    }
}