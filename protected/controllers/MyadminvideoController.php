<?php
Yii::app()->theme = 'admin-green';
class MyadminvideoController extends CController {


    public function actionIndex() {

        $this->pageTitle = 'Danh sách video';
        $this->render('index',  array('model'=>""));
    }

    public function actionAjaxVideoList() {
        Yii::app()->theme = '';
        $page = (isset($_GET['page']) ? $_GET['page'] : 1);  // define the variable to “LIMIT” the query
        $query1 = Yii::app()->db->createCommand() //this query contains all the data
            ->select(array('*'))
            ->from(array('video_list'))
            // ->where('t1.id_question_type = '.$question_type_id.' AND t2.id = t1.id_question_type ')
            ->where(' 1=1')
            ->order('date_create')
            ->limit(Yii::app()->params['listPerPage'], ($page-1) * Yii::app()->params['listPerPage']) // the trick is here!
            ->queryAll();

        $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
            ->select('count(video_list_guid) as count')
            ->from(array('video_list '))
            ->where(' 1=1 ')
            ->queryScalar(); // do not LIMIT it, this must count all items!
        $type_id= (isset($_GET['san_pham_loai_guid']) ? $_GET['san_pham_loai_guid'] : 0);
        if ($type_id!=0)
        {
            $query1 = Yii::app()->db->createCommand() //this query contains all the data
                ->select(array('*'))
                ->from(array('video_list'))
                ->where('san_pham_guid in (SELECT san_pham_guid FROM  san_pham WHERE san_pham_loai_guid=:san_pham_loai_guid )')
                ->order('date_create')
                ->limit(Yii::app()->params['listPerPage'],  ($page-1) * Yii::app()->params['listPerPage']); // the trick is here!

            $query1->bindParam(':san_pham_loai_guid',  $type_id, PDO::PARAM_STR);
            $query1= $query1->queryAll();

            $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
                ->select('count(video_list_guid) as count')
                ->from(array('video_list'))
                ->where('san_pham_guid in (SELECT san_pham_guid FROM  san_pham WHERE san_pham_loai_guid=:san_pham_loai_guid )');
            $item_count->bindParam(':san_pham_loai_guid',  $type_id, PDO::PARAM_STR);
            $item_count= $item_count->queryScalar(); // do not LIMIT it, this must count all items!

        }

        $pages = new CPagination($item_count);
        $pages->pageSize = Yii::app()->params['listPerPage'];
        $dataSearch = array('models' =>$query1, 'pages' => $pages, 'itemCount'=>$item_count,'pageSize'=>Yii::app()->params['listPerPage']);
        $this->render('ajaxvideolist',array('hsTable'=>'','data'=>$query1,'dataSearch'=>$dataSearch,'datasan_pham_loai_guid'=>''));
        Yii::app()->end();
    }
    public function actionVideoList() {

        $this->pageTitle = 'Danh sách video';
        $query="Select * from video_list ";
        $data = CommonDB::GetAll($query,[]);
        $hsTable["san_pham_loai_guid"]="";
        $datasan_pham_loai_guid = CommonDB::GetAll("Select san_pham_loai_guid,ten_loai from san_pham_loai ",[]);

/////////

        //$orderBy = $this->getOrderBy($order,$direction);
        $page = (isset($_GET['page']) ? $_GET['page'] : 1);  // define the variable to “LIMIT” the query
        $query1 = Yii::app()->db->createCommand() //this query contains all the data
            ->select(array('*'))
            ->from(array('video_list'))
            // ->where('t1.id_question_type = '.$question_type_id.' AND t2.id = t1.id_question_type ')
            ->where(' 1=1')
            ->order('date_create')
            ->limit(Yii::app()->params['listPerPage'], ($page-1) * Yii::app()->params['listPerPage']) // the trick is here!
            ->queryAll();

        $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
            ->select('count(video_list_guid) as count')
            ->from(array('video_list '))
            ->where(' 1=1 ')
            ->queryScalar(); // do not LIMIT it, this must count all items!
        $type_id= (isset($_GET['san_pham_loai_guid']) ? $_GET['san_pham_loai_guid'] : 0);
        if ($type_id!=0)
        {
            $query1 = Yii::app()->db->createCommand() //this query contains all the data
                ->select(array('*'))
                ->from(array('video_list'))
                ->where('san_pham_loai_guid =:san_pham_loai_guid ')
                ->order($orderBy)
                ->limit(Yii::app()->params['listPerPage'],  ($page-1) * Yii::app()->params['listPerPage']); // the trick is here!

            $query1->bindParam(':san_pham_loai_guid',  $type_id, PDO::PARAM_STR);
            $query1= $query1->queryAll();

            $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
                ->select('count(video_list_guid) as count')
                ->from(array('video_list'))
                ->where('san_pham_loai_guid =:san_pham_loai_guid ');
            $item_count->bindParam(':san_pham_loai_guid',  $type_id, PDO::PARAM_STR);
            $item_count= $item_count->queryScalar(); // do not LIMIT it, this must count all items!

        }

        $pages = new CPagination($item_count);
        $pages->pageSize = Yii::app()->params['listPerPage'];
        $dataSearch = array('models' =>$query1, 'pages' => $pages, 'itemCount'=>$item_count,'pageSize'=>Yii::app()->params['listPerPage']);
        $this->render('videolist',array('hsTable'=>$hsTable,'data'=>$query1,'dataSearch'=>$dataSearch,'datasan_pham_loai_guid'=>$datasan_pham_loai_guid));




    }
    public function actionVideoedit() {


        $hsTable["video_list_guid"]='' ;
        $hsTable["text_embed"]='' ;
        $hsTable["mo_ta"]='' ;
        $hsTable["mo_ta_ngan"]='' ;
        if( isset($_GET["guid"]) ){
                $guid = $_GET["guid"];
            $hsTable=CommonDB::GetDataRowKeyGuid("video_list",$guid);

            if(count($hsTable)==0){
                CommonDB::runSQLInsert("video_list",$guid);
                $hsTable=CommonDB::GetDataRowKeyGuid("video_list",$guid);
                CommonDB::runSQL("Update video_list set san_pham_guid='$guid' where video_list_guid='$guid' ",[]);
                $hsTable["san_pham_guid"]=$guid;
            }
            $hsTable["video_list_guid"]=$guid ;
            $hsTable["ma_sp"]=CommonDB::GetDataRowKeyGuid("san_pham",$hsTable["san_pham_guid"])["ma_sp"] ;
        }else{
            $hsTable["ma_sp"]=CommonDB::GetDataRowKeyGuid("san_pham",$_REQUEST["san_pham_guid"])["ma_sp"] ;
            $hsTable["san_pham_guid"]=$_REQUEST["san_pham_guid"];
        }
        $this->pageTitle = "Cập nhật tài liệu kỹ thuật ";
        //$video_list = CommonDB::GetAll("Select * from video_list order by date_create ",[]);
        $this->render('videoedit',array('hsTable'=>$hsTable));
    }
    public function actionAjaxVideoSave() {
        if( !isset($_POST['bsubmit'])) {return;}
        //$hsTable["ma_sp"]=CommonDB::GetDataRowKeyGuid("san_pham",$_REQUEST["san_pham_guid"])["ma_sp"] ;
        $video_list_guid=$_REQUEST["video_list_guid"] ;
        if($video_list_guid==""){
            $video_list_guid = CommonDB::guid();
            CommonDB::runSQLInsert("video_list",$video_list_guid);
        }
        $hsTable["video_list_guid"]=$video_list_guid ;
        $hsTable["san_pham_guid"]=$_REQUEST["san_pham_guid"] ;
        $hsTable["text_embed"]=$_REQUEST["text_embed"] ;
        $hsTable["mo_ta"]=$_REQUEST["mo_ta"] ;
        $hsTable["mo_ta_ngan"]=$_REQUEST["mo_ta_ngan"];
       $sqlUpdate="update video_list set san_pham_guid=:san_pham_guid,text_embed=:text_embed,
       mo_ta=:mo_ta,mo_ta_ngan=:mo_ta_ngan  where video_list_guid=:video_list_guid";
       CommonDB::runSQL($sqlUpdate,$hsTable);
        echo "ok";Yii::app()->end();
    }

    public function actionChangepassword() {

        $this->pageTitle = "Đổi mật khẩu ";
        $model = new User();
        if( isset($_POST["bsubmit"]) ){
            $model->setScenario('changePass');
            $model->attributes = $_POST['User'];
            if ($model->validate()) {
                $user_id_login = Yii::app()->session['id_user'];
                $model->changePass($model->pass_new, $user_id_login);
                $this->redirect(array('/myadmin/index'));
            }
        }
        $this->render('changepassword',array('model'=>$model));
    }

}