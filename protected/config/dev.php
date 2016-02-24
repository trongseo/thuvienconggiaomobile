<?php
return CMap::mergeArray(
    require(dirname(__FILE__) . '/main.php'),
    array(
        'components' => array(
            'cache'=>array(
                'class'=>'system.caching.CDbCache'
            ),
            'db' => array(
                'connectionString' => 'mysql:host='.DB_HOST.';dbname='.DB_NAME,
                'emulatePrepare' => true,
                'username' => DB_USERNAME,
                'password' => DB_PASSWORD,
                'charset' => 'utf8',
                'schemaCachingDuration' => 60 * 60,
                'enableParamLogging' => true,
            ),
            'log' => array(
                'class' => 'CLogRouter',
                'routes' => array(
                    array(
                        'class'=>'CFileLogRoute',
                        'levels'=>'trace,log',
                        'categories' => 'system.db.CDbCommand',
//                        'logFile' => 'db.log',
//                        'class' => 'CFileLogRoute',
//                        'levels' => 'error, warning',
                        /*'class'=>'CProfileLogRoute',
                        'levels'=>'trace, info, error, warning',*/
                    ),
                ),
            ),
        ),
        'params' => array('listPerPage'=> 20,),
    )

);
