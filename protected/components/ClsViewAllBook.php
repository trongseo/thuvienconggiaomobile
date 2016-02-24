<?php

class ClsViewAllBook {

    public static  function addtoBookCase($idbook){
        $hsTable["book_id"]=$idbook;
        $hsTable["user_id"]= Common::getSession(USER_ID);
        $userId =Common::getSession(USER_ID);
        $hsTable["create_date"]= Common::getCurrentDateYYYYDDMMNotime();
        $deleteQuery =" delete from tbl_bookcase where book_id=$idbook and user_id=$userId ";
       // var_dump($deleteQuery);
        CommonDB::runSQL($deleteQuery,[]);
        $query ="INSERT INTO `tbl_bookcase`
                    (
                     `book_id`,
                     `user_id`,
                     `create_date`)
        VALUES (
                :book_id,
                :user_id,
                :create_date); ";

        //$hsTable["create_date"]= Common::getCurrentDateYYYYDDMM();
        CommonDB::runSQL($query,$hsTable);
        $queryU=" UPDATE `tbl_book_detail`
            SET reader_count_detail = reader_count_detail+1
            WHERE id=".$idbook;
        CommonDB::runSQL($queryU,[]);
    }
    /**
     * LoadComment
     * @return array('dataItem'=>$dataItem,'totalPage'=>$totalPage,'pageSize'=>$pageSize,'itemCount'=>$itemCount,'page'=>$page)
     */
    public  function  LoadComment($bookId){
        if(Common::getPara("from")=="order"){
            $bookId = Common::getSession("bookId");
        }else{
            Common::setSession("bookId",$bookId);
        }
        $DEFAULT_GOTOPAGE=1;
        $DEFAULT_PER_PAGE_SHOW=100;
        ////////NO NEED CHANGE ############################################################
        $gotopage = Common::getPara("gotopage");
        $orderbyid = Common::getPara("orderbyid");
        $perpageshow = Common::getPara("perpageshow");
        $page = ($gotopage!="") ? $gotopage : $DEFAULT_GOTOPAGE;
        $pageSize = ($perpageshow!="") ? $perpageshow : $DEFAULT_PER_PAGE_SHOW;
        $arrView["gotopage"]=$gotopage;
        $arrView["orderbyid"]=$orderbyid;
        $arrView["perpageshow"]=$perpageshow;
        ////////NO NEED CHANGE ############################################################
       $TABLE_GET=" tbl_comment,tbl_users ";
       $TABLE_WHERE=" AND tbl_users.`id`=tbl_comment.`user_id` and tbl_comment.active =1 and tbl_comment.book_id=".$bookId;
       $TABLE_ORDER_BY="tbl_comment.comment_date";
      //  SELECT tbl_comment.*,display_name FROM tbl_comment,tbl_users WHERE tbl_users.`id`=tbl_comment.`user_id`
        $query=" SELECT  tbl_comment.*,display_name FROM ".$TABLE_GET." WHERE 1=1 ".$TABLE_WHERE ;
        $queryCommand = Yii::app()->db->createCommand($query);
        $queryCommand->limit($pageSize,  ($page-1) * $pageSize);
        if ($orderbyid==0){
            $queryCommand=   $queryCommand->order($TABLE_ORDER_BY);
        }else
            if ($orderbyid==1){
               // $queryCommand=  $queryCommand->order('viewer_count ');
            }

//        if($parent_id!=0){
//            $query1->bindParam(':parent_id',  $parent_id, PDO::PARAM_INT);
//        }
//        $keyword = "%".$keysearch."%";
//        $query1->bindParam(':book_name',  $keyword, PDO::PARAM_STR);

        $dataItem= $queryCommand->queryAll();

        $queryCount ="SELECT COUNT(*) FROM ".$TABLE_GET." WHERE 1=1 ".$TABLE_WHERE;
        $item_count = Yii::app()->db->createCommand($queryCount);

//        if($parent_id!=0){
//            $item_count->bindParam(':parent_id',  $parent_id,  PDO::PARAM_INT);
//        }
//        $keyword = "%".$keysearch."%";
//        $item_count->bindParam(':book_name',  $keyword, PDO::PARAM_STR);

        $itemCount= $item_count->queryScalar();
        $totalPage = ceil($itemCount / $pageSize);
        $dataPage =array('dataItem'=>$dataItem,'totalPage'=>$totalPage,'pageSize'=>$pageSize,'itemCount'=>$itemCount,'page'=>$page);
        return $dataPage;
    }

    public  function  LoadBookRead(){

        $DEFAULT_GOTOPAGE=1;
        $DEFAULT_PER_PAGE_SHOW=100;
        ////////NO NEED CHANGE ############################################################
        $gotopage = Common::getPara("gotopage");
        $orderbyid = Common::getPara("orderbyid");
        $perpageshow = Common::getPara("perpageshow");
        $page = ($gotopage!="") ? $gotopage : $DEFAULT_GOTOPAGE;
        $pageSize = ($perpageshow!="") ? $perpageshow : $DEFAULT_PER_PAGE_SHOW;
        $arrView["gotopage"]=$gotopage;
        $arrView["orderbyid"]=$orderbyid;
        $arrView["perpageshow"]=$perpageshow;
        ////////NO NEED CHANGE ############################################################
//        SELECT b.*,b2.`date_read`
// FROM `tbl_book` b ,`tbl_bookcase` b1,`tbl_tusach` b2
// WHERE b.`id`=b1.`book_id` AND  b.`id`= b2.`book_id` AND b.delete_logic_flg =0 AND b.`active`=1 AND b1.`user_id`=19 AND b2.`user_id`=19
//DATEDIFF(CURDATE(),date_read)
        $COLUMN_GET="  b.*,DATEDIFF(CURDATE(),b2.`date_read`) as `date_read`   ";
        $TABLE_GET=" `tbl_book` b ,`tbl_bookcase` b1,`tbl_tusach` b2 ";
        $userId = Common::getSession(USER_ID);
        $TABLE_WHERE=" AND b.`id`=b1.`book_id` AND  b.`id`= b2.`book_id` AND b.delete_logic_flg =0 AND b.`active`=1 AND b1.`user_id`=$userId AND b2.`user_id`=$userId";
        $TABLE_ORDER_BY=" b2.`date_read` desc";
        //  SELECT tbl_comment.*,display_name FROM tbl_comment,tbl_users WHERE tbl_users.`id`=tbl_comment.`user_id`
        $query=" SELECT  ".$COLUMN_GET." FROM ".$TABLE_GET." WHERE 1=1 ".$TABLE_WHERE ;
        $queryCommand = Yii::app()->db->createCommand($query);
        $queryCommand->limit($pageSize,  ($page-1) * $pageSize);
        if ($orderbyid==0){
            $queryCommand=   $queryCommand->order($TABLE_ORDER_BY);
        }else
            if ($orderbyid==1){
                // $queryCommand=  $queryCommand->order('viewer_count ');
            }

//        if($parent_id!=0){
//            $query1->bindParam(':parent_id',  $parent_id, PDO::PARAM_INT);
//        }
//        $keyword = "%".$keysearch."%";
//        $query1->bindParam(':book_name',  $keyword, PDO::PARAM_STR);

        $dataItem= $queryCommand->queryAll();

        $queryCount ="SELECT COUNT(*) FROM ".$TABLE_GET." WHERE 1=1 ".$TABLE_WHERE;
        $item_count = Yii::app()->db->createCommand($queryCount);

//        if($parent_id!=0){
//            $item_count->bindParam(':parent_id',  $parent_id,  PDO::PARAM_INT);
//        }
//        $keyword = "%".$keysearch."%";
//        $item_count->bindParam(':book_name',  $keyword, PDO::PARAM_STR);

        $itemCount= $item_count->queryScalar();
        $totalPage = ceil($itemCount / $pageSize);
        $dataPage =array('dataItem'=>$dataItem,'totalPage'=>$totalPage,'pageSize'=>$pageSize,'itemCount'=>$itemCount,'page'=>$page);
        return $dataPage;
    }

    public  function InsertComment(){
        $txtComment = Common::getPara('txtComment');
        if($txtComment!=""){
           // echo $txtComment;
            $queryUpdate = " insert into `tbl_comment`
            (
             `user_id`,
             `comment_date`,
             `content`,
             `active`,
             `book_id`,
             `admin_id_check`,
             `is_check`)
values (
        :user_id,
        :comment_date,
        :content,
        :active,
        :book_id,
        :admin_id_check,
        :is_check);";
            // $date = new DateTime('now', new DateTimeZone('Asia/Bangkok'));
            date_default_timezone_set('Asia/Bangkok');
            $hsTable['user_id']=Yii::app()->session['id_user'];
            $hsTable['comment_date']=Common::getCurrentDateYYYYDDMM();
            $hsTable['content']=$txtComment;
            $hsTable['active']=0;
            $hsTable['book_id']= Common::getSession('idbook');
            $hsTable['admin_id_check']=0;
            $hsTable['is_check']=0;
            CommonDB::runSQL($queryUpdate,$hsTable);
            echo "1";Yii::app()->end();
        }
    }


}



