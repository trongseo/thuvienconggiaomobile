<?php

class ClsReadBook {
    /**
     * LoadComment
     * @return array('dataItem'=>$dataItem,'totalPage'=>$totalPage,'pageSize'=>$pageSize,'itemCount'=>$itemCount,'page'=>$page)
     */
    public  function  LoadComment($bookId){
        if(Common::getPara("from")=="order"){
            $bookId = Common::getSession(IDDetailBook);
        }else{
            Common::setSession(IDDetailBook,$bookId);
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
        $query=" SELECT  tbl_comment.*,display_name,user_image,sex FROM ".$TABLE_GET." WHERE 1=1 ".$TABLE_WHERE ;
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
//        SELECT CONCAT(tbl_bookcase.`book_id`,'_', tbl_book_detail.part) AS book_id,CONCAT(book_name,' ',tbl_book_detail.part ),bookimage_link
// FROM tbl_bookcase LEFT JOIN tbl_book_detail ON tbl_bookcase.`book_id` = tbl_book_detail.`id`
// LEFT JOIN tbl_book ON tbl_book_detail.`book_id` = tbl_book.`id`
//WHERE tbl_bookcase.`user_id`=19 AND tbl_book.delete_logic_flg =0 AND tbl_book.`active`=1
        $COLUMN_GET=" tbl_book_detail.id as detailid,  CONCAT(tbl_book_detail.book_id,'_', tbl_book_detail.part) AS id,CONCAT(book_name,' ',tbl_book_detail.part ) as book_name,bookimage_link  ";
        $TABLE_GET="  tbl_bookcase LEFT JOIN tbl_book_detail ON tbl_bookcase.`book_id` = tbl_book_detail.`id` LEFT JOIN tbl_book ON tbl_book_detail.`book_id` = tbl_book.`id` ";
        $userId = Common::getSession(USER_ID);
        $TABLE_WHERE=" AND tbl_bookcase.user_id=$userId AND tbl_book.delete_logic_flg =0 AND tbl_book.active=1 ";
        $TABLE_ORDER_BY=" book_name desc";
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
            //$hsTable['book_id']= Common::getSession('idbook');
            $hsTable['book_id']= Common::getSession(IDDetailBook);
            $hsTable['admin_id_check']=0;
            $hsTable['is_check']=0;
            CommonDB::runSQL($queryUpdate,$hsTable);
            echo "1";Yii::app()->end();
        }
    }


}



