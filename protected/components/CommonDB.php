<?php

class CommonDB {


    public static function guid(){
        $guid1 ="";
        if (function_exists('com_create_guid')){
            $guid= com_create_guid();
        }else{
            mt_srand((double)microtime()*10000);//optional for php 4.2.0 and up.
            $charid = strtoupper(md5(uniqid(rand(), true)));
            $hyphen = chr(45);// "-"
            $uuid = chr(123)// "{"
                .substr($charid, 0, 8).$hyphen
                .substr($charid, 8, 4).$hyphen
                .substr($charid,12, 4).$hyphen
                .substr($charid,16, 4).$hyphen
                .substr($charid,20,12)
                .chr(125);// "}"
            $guid1= $uuid;
        }

        $guid1= str_replace("{","",$guid1 );
        $guid1= str_replace("}","",$guid1 );
        $guid1= str_replace("-","_",$guid1 );
        $guid1= str_replace(".","",$guid1 );
       // var_dump($guid1);
        return $guid1 ;
    }
    public static function GetAll($sql,$hashTable){
        //sample
        //cach goi
         //$hashTable["subject"]="%test%";
         //CommonDB::GetAll("Select *  from m_exam where subject like :subject ",$hashTable);
        // cach nhan du lieu
        // foreach($result as $value){
               // echo $value["subject"];
        //}

        $command = Yii::app()->db->createCommand($sql);
        CommonDB::setPara($command,$hashTable);
         $result = $command->queryAll();
        //var_dump($result);
        return $result;
    }

    public static function GetOneField($sql,$hashTable){
        //sample
        //cach goi
        //$hashTable["subject"]="%test%";
        //CommonDB::GetAll("Select *  from m_exam where subject like :subject ",$hashTable);
        // cach nhan du lieu
        // foreach($result as $value){
        // echo $value["subject"];
        //}

        $command = Yii::app()->db->createCommand($sql);
        CommonDB::setPara($command,$hashTable);
        $result = $command->queryAll();
        //var_dump($result[0]);exit();
        return $result[0];
    }
    public static function GetDataRow($tableName,$whereNoAnd){
        //sample
        //cach goi
        //$hashTable["subject"]="%test%";
        //CommonDB::GetAll("Select *  from m_exam where subject like :subject ",$hashTable);
        // cach nhan du lieu
        // foreach($result as $value){
        // echo $value["subject"];
        //}
        $sql = "Select * from ".$tableName ." where 1=1 AND ".$whereNoAnd;

        $command = Yii::app()->db->createCommand($sql);

        $result = $command->queryAll();
      //  var_dump($result,$sql);
        if (count($result)==0) {
            return "";
        }
        return $result[0];
    }
    public static function GetDataRowKeyGuid($tableName,$key){
        //sample
        //cach goi
        //$hashTable["subject"]="%test%";
        //CommonDB::GetAll("Select *  from m_exam where subject like :subject ",$hashTable);
        // cach nhan du lieu
        // foreach($result as $value){
        // echo $value["subject"];
        //}
        $sql = "Select * from ".$tableName ." where 1=1 AND $tableName"."_guid='".$key."'";
        $command = Yii::app()->db->createCommand($sql);
        $result = $command->queryAll();
        //var_dump($result);
        if(count($result)>0)
            return $result[0];
        return [];
    }
    public static function GetDataRowKeyInt($tableName,$key){
        //sample
        //cach goi
        //$hashTable["subject"]="%test%";
        //CommonDB::GetAll("Select *  from m_exam where subject like :subject ",$hashTable);
        // cach nhan du lieu
        // foreach($result as $value){
        // echo $value["subject"];
        //}
        $sql = "Select * from ".$tableName ." where 1=1 AND id=".$key;

        $command = Yii::app()->db->createCommand($sql);

        $result = $command->queryAll();
        //var_dump($result);
        return $result[0];
    }

    public static   function  setPara(&$command,$hashTable){
        foreach($hashTable as $key=>$value){
            $command->bindParam(":$key",$hashTable[$key], PDO::PARAM_STR);
        }
    }
    public  static  function getIDDetailBook($book_id,$part){
        $query =" SELECT id FROM tbl_book_detail WHERE book_id=$book_id AND part=$part";
        $reData = CommonDB::GetAll($query,[]);
        if(count($reData)==0){
            return 0;
        }
        return $reData[0]["id"];
    }
    public static   function runSQL($sql,$hashTable){
        $command = Yii::app()->db->createCommand($sql);
        CommonDB::setPara($command,$hashTable);
        $command->execute();
    }
    public static   function runUpdate($tableName,$hashColum,$whereNoAnd){
        $sqlUpdate = "Update ".$tableName." Set ";
        $listUpdateColumn ="";
        foreach($hashColum as $key=>$value){
            $vald=$key.'=:'.$key;
            $listUpdateColumn.=$vald.',';
        }
        $listUpdateColumn=rtrim($string, ",");
        $sqlUpdate .= $listUpdateColumn;
        $sqlUpdate .=" WHERE 1=1 and ".$whereNoAnd;
       CommonDB::runSQL($sqlUpdate,$hashColum);
    }
    public static   function runSQLInsert($tableName,$guid){
        $command = Yii::app()->db->createCommand("insert into ".$tableName."(".$tableName."_guid)  values('".$guid."')");
        $command->execute();
    }
    public function runSQLTransaction($hashTableQuery,$hashTableOfHashTable) {
        //sample
//        $hashTableQuery[]="update  san_pham set ma_sp=:ma_sp where san_pham_guid=:san_pham_guid;";
//        $hashTable1["san_pham_guid"]= "6EC545DE-EEC4-9064-660C-434608EE72BF";
//        $hashTable1["ma_sp"]="2update22222222222";
//        $hashTablePara[]=$hashTable1;
//
//        $hashTableQuery[]="INSERT INTO san_pham(san_pham_guid,ma_sp) VALUES(:san_pham_guid,:ma_sp);";
//        $hashTable2["san_pham_guid"]= CommonDB::guid();
//        $hashTable2["ma_sp"]="22222";
//        $hashTablePara[]=$hashTable2;
//        CommonDB::runSQLTransaction($hashTableQuery,$hashTablePara);

        $transaction = Yii::app()->db->beginTransaction();
        $numD = 0;
        $i=0;;
        try
        {
            foreach($hashTableOfHashTable as $value){

               // $command->bindParam(":$key",$hashTable[$key], PDO::PARAM_STR);
                $sql=$hashTableQuery[$i];
                $command = Yii::app()->db->createCommand($sql);
                $hashTable = $value;
                CommonDB::setPara($command,$hashTable);
                $command->execute();
                //var_dump($hashTableQuery[$i]);
                $i++;
            }
            $transaction->commit();
        }
        catch(Exception $e)
        {
            var_dump($e);
            $transaction->rollback();
        }
    }


}



