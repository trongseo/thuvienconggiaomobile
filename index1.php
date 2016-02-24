<?php
$postdata = http_build_query(
    array(
        'var1' => 'some content',
        'var2' => 'doh'
    )
);

$opts = array('http' =>
    array(
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'content' => $postdata
    )
);

$context  = stream_context_create($opts);


$id    = "myValue";
$time  = 15; // in seconds


$val = Yii::app()->cache->get($id);
if (!$val){
    $result = file_get_contents('http://localhost:8222/index.php', false, $context);

    Yii::app()->cache->set($id, $result, $time);

}else{

}

echo $result;

