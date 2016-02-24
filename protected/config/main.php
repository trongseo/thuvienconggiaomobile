<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');
// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
return array(
    'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'name' => 'THƯ VIỆN CÔNG GIÁO',
    'defaultController' => 'site',
   // 'theme' => 'admin-green',
    'theme' => 'admin-template',
    'timeZone' => 'Asia/Ho_Chi_Minh',
    // preloading 'log' component
    'preload' => array('log'),
    // autoloading model and component classes
    'import' => array(
        'application.models.*',
        'application.components.*',
        'application.extensions.PHPMailer.*',
    ),
    'modules' => array(
        'default', 'about', 'products', 'services', 'news', 'video', 'contact', 'search', 'admin', 'administrator', 'agent',
        /*'gii' => array(
          'class' => 'system.gii.GiiModule',
          'password' => '123',
          // If removed, Gii defaults to localhost only. Edit carefully to taste.
          'ipFilters' => array('127.0.0.1', '::1'),
      ),*/
    ),
    // application components
    'components' => array(
        // UserCounter
        'counter' => array('class' => 'application.extensions.UserCounter',),
		'file'=>array('class'=>'application.extensions.CFile.CFile'),
        'user' => array(
            'allowAutoLogin' => true,
            'loginUrl' => array('admin/login')
        ),
        'agentUser' => array(
            'class' => 'CWebUser',
            'loginUrl' => array('agent/login'),
            'stateKeyPrefix' => 'agent',
        ),
        'cache' => array(
            'class' => 'CFileCache',
        ),
        'ePdf' => array(
            'class'         => 'ext.yii-pdf.EYiiPdf',
            'params'        => array(
                'mpdf'     => array(
                    'librarySourcePath' => 'application.vendors.mpdf.*',
                    'constants'         => array(
                        '_MPDF_TEMP_PATH' => Yii::getPathOfAlias('application.runtime'),
                    ),
                    'class'=>'mpdf',
                    'default_font'      => 'DejaVuSansMono-Bold', // Sets the default font-family for the new document.
                    /*'defaultParams'     => array( // More info: http://mpdf1.com/manual/index.php?tid=184
                        'mode'              => '', //  This parameter specifies the mode of the new document.
                        'format'            => 'A4', // format A4, A5, ...
                        'default_font_size' => 0, // Sets the default document font size in points (pt)
                        'default_font'      => '', // Sets the default font-family for the new document.
                        'mgl'               => 15, // margin_left. Sets the page margins for the new document.
                        'mgr'               => 15, // margin_right
                        'mgt'               => 16, // margin_top
                        'mgb'               => 16, // margin_bottom
                        'mgh'               => 9, // margin_header
                        'mgf'               => 9, // margin_footer
                        'orientation'       => 'P', // landscape or portrait orientation
                    )*/
                ),
                'HTML2PDF' => array(
                    'librarySourcePath' => 'application.vendors.html2pdf.*',
                    'classFile'         => 'html2pdf.class.php', // For adding to Yii::$classMap
                    /*'defaultParams'     => array( // More info: http://wiki.spipu.net/doku.php?id=html2pdf:en:v4:accueil
                        'orientation' => 'P', // landscape or portrait orientation
                        'format'      => 'A4', // format A4, A5, ...
                        'language'    => 'en', // language: fr, en, it ...
                        'unicode'     => true, // TRUE means clustering the input text IS unicode (default = true)
                        'encoding'    => 'UTF-8', // charset encoding; Default is UTF-8
                        'marges'      => array(5, 5, 5, 8), // margins by default, in order (left, top, right, bottom)
                    )*/
                )
            ),
        ),
        /*  // uncomment the following to enable URLs in path-format
		'urlManager'=>array(
			'urlFormat'=>'path',
			'rules'=>array(
                '<controller:\w+>/<id:\d+>'=>'<controller>/view',
                '<controller:\w+>/<action:\w+>/<id:\d+>'=>'<controller>/<action>',
                '<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
			),
		),

        */
//              'urlManager'=>array(
//			'urlFormat'=>'path',
//			 'showScriptName' => true,
//			'rules'=>array(
//				'<tuserexam:(tu|tv)>/<cid:[-a-z0-9]+>/<id:[-a-z0-9]+>' => array('tuserexam/index', 'urlSuffix' => '.html'),
//    '<controller:\w+>/<id:\d+>'=>'<controller>/view',
//    '<controller:\w+>/<action:\w+>/<id:\d+>'=>'<controller>/<action>',
//    '<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
//
//			),
//		),
    //    quen-mat-khau GetPassword
        'urlManager'=>array(
            'urlFormat'=>'path',
            'showScriptName' => false,
            'urlSuffix' => "",
            'rules'=>array(

                'admin'=>'Admin/Index',
                'admin/contact'=>'Admin/Contact',
                'admin/slide'=>'Admin/Slide',
                'admin/contact/<id:>'=>'Admin/DetailContact/id/<id>',
                'logout'=>'Admin/Logout',
                'admin/<strid:>'=>'Admin/Detail/strid/<strid>',
                'gioi-thieu'=>'Site/AboutUs',
                'contact'=>'Site/Contact',
                'thong-tin-tai-khoan'=>'Site/AccountInfo',
				'tu-sach'=>'Site/TuSach',
                'huong-dan'=>'Site/Guide',
                'huong-dan-app'=>'Site/AppHelp',
                'cau-hoi-thuong-gap'=>'Site/Question',
                'thu-vien'=>'Site/Libary',
                'thu-vien/<key_search:>'=>'Site/LibarySearch/key_search/<key_search>',
                'thu-vien-dai-muc'=>'Site/LibaryHight',
                'thu-vien-trung-muc'=>'Site/LibaryNormal',
                'thu-vien-tieu-muc'=>'Site/LibarySlow',
                'dieu-khoan-su-dung'=>'Site/DieuKhoanSuDung',
                'lien-he'=>'Site/Contact',
                'chi-tiet/<id:>'=>'Site/Detail/id/<id>',
                'dang-nhap'=>'Site/Login',
                'login'=>'Service/Login',
                'cache'=>'Service/cache',
                'dang-xuat'=>'Site/Logout',
				'update-password'=>'Site/UpdatePassword',
                'quen-mat-khau'=>'Site/GetPassword',
                'lay-lai-mat-khau/<code_active:>'=>'Site/ChangeForgetPass/code_active/<code_active>',
                'dang-ky'=>'Site/Register',
                'welcome'=>'Site/Welcome',
                '<strid:>'=>'Site/Error',
                '<controller:\w+>/<id:\d+>'=>'<controller>/view',
                '<controller:\w+>/<action:\w+>/<id:\d+>'=>'<controller>/<action>',
                '<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
            ),
        ),

        'errorHandler' => array(
            // use 'site/error' action to display errors
            'errorAction' => 'site/error',
        ),
    ),
);