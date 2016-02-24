<?php

/**
 * This is the model class for table "m_question".
 *
 * The followings are the available columns in table 'm_question':
 * @property integer $id
 * @property string $content
 * @property integer $id_question_type
 * @property integer $id_level
 * @property integer $id_answer
 * @property integer $second
 * @property string $create_at
 * @property integer $create_by
 * @property string $update_at
 * @property integer $update_by
 * @property string $guid
 */
class QuestionBanks extends CActiveRecord {
    /**
     * @return string the associated database table name
     */
    public function tableName()
    {
        return 'm_question';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules()
    {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
          //  array('id_question_type, id_level, id_answer, second, create_by, update_by', 'numerical', 'integerOnly'=>true),
            array('second,id_question_type, id_level,content,id_answer', 'required' ,'on' => 'register'),
            array('content', 'length', 'max'=>400000),
          //  array('create_at, update_at', 'safe'),
            // The following rule is used by search().
            // @todo Please remove those attributes that should not be searched.
            array('id, content, id_question_type, id_level, id_answer, second, create_at, create_by, update_at, update_by', 'safe', 'on'=>'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations()
    {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels()
    {
        return array(
            'id' => 'ID',
            'content' => 'Question',
            'id_question_type' => 'Question subject',
            'id_level' => 'Level',
            'id_answer' => 'Accept as correct',
            'second' => 'Times for finish',
            'create_at' => 'Create At',
            'create_by' => 'Create By',
            'update_at' => 'Update At',
            'update_by' => 'Update By',
            'guid' => 'guid',

        );
    }

    /**
     * Retrieves a list of models based on the current search/filter conditions.
     *
     * Typical usecase:
     * - Initialize the model fields with values from filter form.
     * - Execute this method to get CActiveDataProvider instance which will filter
     * models according to data in model fields.
     * - Pass data provider to CGridView, CListView or any similar widget.
     *
     * @return CActiveDataProvider the data provider that can return the models
     * based on the search/filter conditions.
     */
    public function search1()
    {
        // @todo Please modify the following code to remove attributes that should not be searched.

        $criteria=new CDbCriteria;

        $criteria->compare('id',$this->id);
        $criteria->compare('content',$this->content,true);
        $criteria->compare('id_question_type',$this->id_question_type);
        $criteria->compare('id_level',$this->id_level);
        $criteria->compare('id_answer',$this->id_answer);
        $criteria->compare('second',$this->second);
        $criteria->compare('create_at',$this->create_at,true);
        $criteria->compare('create_by',$this->create_by);
        $criteria->compare('update_at',$this->update_at,true);
        $criteria->compare('update_by',$this->update_by);

        return new CActiveDataProvider($this, array(
            'criteria'=>$criteria,
        ));
    }

    /**
     * Returns the static model of the specified AR class.
     * Please note that you should have this exact method in all your CActiveRecord descendants!
     * @param string $className active record class name.
     * @return MQuestion the static model class
     */
    public static function model($className=__CLASS__)
    {
        return parent::model($className);
    }

    private function getOrderBy($order,$direction){
        $sql ="t1.id ";
        if ($order=='subject'){
            $sql ="t2.name ";
        }elseif ($order=='content'){
            $sql ="t1.content ";
        }elseif ($order=='second'){
            $sql ="t1.second ";
        }

        if($direction =='ASC'){
            $sql.= "ASC";
        }else{
            $sql.= "DESC";
        }

        return $sql;
    }

    //Back end - List item admin
    public function listAllItem($order,$direction) {
        return  $this->search(0,$order,$direction) ;
    }
    public function search($question_type_id,$order,$direction) {
        $orderBy = $this->getOrderBy($order,$direction);
        $page = (isset($_GET['page']) ? $_GET['page'] : 1);  // define the variable to “LIMIT” the query
        $query1 = Yii::app()->db->createCommand() //this query contains all the data
            ->select(array('t1.*','t2.name'))
            ->from(array('m_question t1', 'm_question_type t2'))
            // ->where('t1.id_question_type = '.$question_type_id.' AND t2.id = t1.id_question_type ')
            ->where(' t2.id = t1.id_question_type ')
            ->order($orderBy)
            ->limit(Yii::app()->params['listPerPage'], ($page-1) * Yii::app()->params['listPerPage']) // the trick is here!
            ->queryAll();

        $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
            ->select('count(t1.id) as count')
            ->from(array('m_question t1', 'm_question_type t2'))
            ->where(' t2.id = t1.id_question_type ')
            ->queryScalar(); // do not LIMIT it, this must count all items!
        if ($question_type_id!=0)
        {
            $query1 = Yii::app()->db->createCommand() //this query contains all the data
                ->select(array('t1.*','t2.name'))
                ->from(array('m_question t1', 'm_question_type t2'))
                ->where('t1.id_question_type = :id_question_type AND t2.id = t1.id_question_type ')
                ->order($orderBy)
                ->limit(Yii::app()->params['listPerPage'],  ($page-1) * Yii::app()->params['listPerPage']); // the trick is here!

            $query1->bindParam(':id_question_type',  $question_type_id, PDO::PARAM_INT);
            $query1= $query1->queryAll();

            $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
                ->select('count(t1.id) as count')
                ->from(array('m_question t1', 'm_question_type t2'))
                ->where('t1.id_question_type = :id_question_type AND t2.id = t1.id_question_type ');
            $item_count->bindParam(':id_question_type',  $question_type_id, PDO::PARAM_INT);
            $item_count= $item_count->queryScalar(); // do not LIMIT it, this must count all items!

        }

        $pages = new CPagination($item_count);
        $pages->pageSize = Yii::app()->params['listPerPage'];
        return array('models' =>$query1, 'pages' => $pages, 'itemCount'=>$item_count,'pageSize'=>Yii::app()->params['listPerPage']);

    }
    public function updateTrueAnswer($id_true_answer,$idkey) {

        $command = Yii::app()->db->createCommand('update  ' . $this->tableName() . ' set id_answer= :id_answer where id=:id ');
        $command->bindParam(":id_answer",$id_true_answer, PDO::PARAM_INT);
        $command->bindParam(":id",$idkey, PDO::PARAM_INT);
        $command->execute();

    }

    public function deleteQuestion($idkey) {

        $command = Yii::app()->db->createCommand('DELETE FROM  ' . $this->tableName() . '  where id=:id ');
        $command->bindParam(":id",$idkey, PDO::PARAM_INT);
        $command->execute();

        $command = Yii::app()->db->createCommand('DELETE FROM m_answer  where id_question=:id ');
        $command->bindParam(":id",$idkey, PDO::PARAM_INT);
        $command->execute();


    }

    public function insertNew($curModel) {
      //  $curModel = new QuestionBanks();
        $common_class = new Common();
       $guid_id = $common_class->guid();
        $id_user = intval( Yii::app()->session['id_user']);

        $command = Yii::app()->db->createCommand('INSERT INTO ' . $this->tableName() . ' (`guid`,`content`, `id_level`, `id_question_type`, `second`,`create_by`) VALUES (:guid,:content, :id_level, :id_question_type, :second, :create_by)');
        $command->bindParam(":guid", $guid_id, PDO::PARAM_STR);
        $command->bindParam(":content",  $curModel['content'], PDO::PARAM_STR);
        $command->bindParam(":id_level", $curModel['id_level'], PDO::PARAM_INT);
        $command->bindParam(":id_question_type", $curModel['id_question_type'], PDO::PARAM_INT);
        $command->bindParam(":second", $curModel['second'], PDO::PARAM_INT);
        $command->bindParam(":create_by", $id_user , PDO::PARAM_INT);

        $command->execute();

        $command = Yii::app()->db->createCommand('select id from ' . $this->tableName() . ' where guid=:guid');
        $command->bindParam(":guid", $guid_id, PDO::PARAM_STR);
         $idreturn =  $command->queryRow()["id"];
        return $idreturn;

    }
    public function UpdateBanks($curModel) {

        $id_user = intval( Yii::app()->session['id_user']);
        $command = Yii::app()->db->createCommand('UPDATE  ' . $this->tableName() . ' SET content=:content, id_level=:id_level,id_question_type=:id_question_type, second=:second, update_by=:update_by where id=:id');

        $command->bindParam(":content",  $curModel['content'], PDO::PARAM_STR);
        $command->bindParam(":id_level", $curModel['id_level'], PDO::PARAM_INT);
        $command->bindParam(":id_question_type", $curModel['id_question_type'], PDO::PARAM_INT);
        $command->bindParam(":second", $curModel['second'], PDO::PARAM_INT);
        $command->bindParam(":id", $curModel['id'], PDO::PARAM_INT);
        $command->bindParam(":update_by",  $id_user, PDO::PARAM_INT);
        $command->execute();
        return  $curModel['id'];

    }

}