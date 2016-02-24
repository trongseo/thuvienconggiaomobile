<?php

class ServiceController extends CController {
    public $comboData = 'value';
    public $comboSelect = '';
    public $textSearch = '';
    public $ID_BOOK="";
    public $curPage="";
    public $isLoad="0";


    public function actionIndex() {
        //background: #5A2D0C;
        $this->curPage="home";
        $this->render('index',array('c'=>''));
    }

    public function actionLogin(){
        $password= Common::getPara("password");
        //regist

        $email= Common::getPara("email");
        $passwordmd = md5($password);
        //var_dump($email,$passwordmd);
        $hsTable["email"]= $email;
        $hsTable["password"]= $passwordmd;
        $dataTable = CommonDB::GetAll("Select id from tbl_users WHERE active=1 and email=:email and password=:password",$hsTable);
        if(count($dataTable)>0){
            echo $dataTable[0]['id'];
        }else{
            echo 0;
        }

        //header('Content-type: application/json');

        //echo json_encode($result);

    }

    public function  actionGetMasterParent(){
        //$userId=22;

        $query="SELECT id,NAME FROM tbl_index WHERE TYPE=0 AND delete_logic_flg=0 AND active=1 ORDER BY  id";

        header('Content-type: application/json');
        $dataTable = CommonDB::GetAll($query,[]);
        echo json_encode($dataTable);

    }

    public function  actionGetBook(){
        //$userId=22;
        $userId = Common::getPara('user_id');
        $query="SELECT de.id AS id_detail,b.`book_code` AS ma_sach,b.book_name AS ten_sach, tinde.level_top_id AS ma_daimuc,
CONCAT('http://thuvienconggiaovietnam.net/admintvcg/uploads/bookImage/',b.bookimage_link)  AS path_book_image,
CONCAT('http://thuvienconggiaovietnam.net/admintvcg/uploads/bookFile/',de.book_content) AS path_down_pdf,
de.book_id,part,b.id AS id_book, b.`parent_id`

FROM `tbl_book_detail`  de
 LEFT JOIN `tbl_book` b ON de.book_id =b.id
  INNER JOIN (
SELECT b.id , a.l0id AS level_top_id FROM tbl_index b INNER JOIN

(
SELECT l1.id,l0.id AS  l0id FROM tbl_index l1  INNER JOIN (

SELECT id FROM tbl_index WHERE TYPE=0 )  l0  ON l1.parent_id =l0.id

 WHERE   TYPE<>0 ) a ON b.parent_id=a.id) tinde ON  b.`parent_id` = tinde.id
WHERE   b.`delete_logic_flg`=0 and de.id IN (SELECT book_id FROM `tbl_bookcase`
WHERE user_id=$userId
)";
        $id_list = Common::getPara('id_list');
        if($id_list!=""){
            $query.=" AND  de.id not IN($id_list) ";
        }
        header('Content-type: application/json');
        $dataTable = CommonDB::GetAll($query,[]);
         echo json_encode($dataTable);

    }

    function random($length) {
        $characters = "0123456789abcdefghijklmnopqrstuvwxyz";
        $string = "";
        for ($x = 0; $x < $length; $x++):
            $string .= $characters[mt_rand(0, strlen($characters))];
        endfor;
        return $string;
    }
    public function actionCache() {

        // Storing $value in Cache

//        $id    = "myValue";
//        $time  = 15; // in seconds
//
//
//        $val = Yii::app()->cache->get($id);
//        if (!$val){
//            $dataTable = CommonDB::GetAll("Select * from tbl_users",[]);
//            Yii::app()->cache->set($id, $dataTable, $time);
//            var_dump($dataTable);
//        }else{
//            var_dump($val);
//        }

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
        $time  = 1115; // in seconds


        $result = Yii::app()->cache->get($id);
        if (!$result){
            $result = file_get_contents('http://localhost:8222/index.php', false, $context);

            Yii::app()->cache->set($id, $result, $time);

        }

        echo $result;


    }


}