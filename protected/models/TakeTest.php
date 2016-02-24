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
class TakeTest extends CActiveRecord {
    /**
     * @return string the associated database table name
     */
    public function tableName()
    {
        return 'm_question';
    }
    private $user_id_login = '';
    public function __construct($scenario='insert')
    {
        $user_id_login = Yii::app()->session['id_user'];
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
     * Returns the static model of the specified AR class.
     * Please note that you should have this exact method in all your CActiveRecord descendants!
     * @param string $className active record class name.
     * @return MQuestion the static model class
     */
    public static function model($className=__CLASS__)
    {
        $user_id_login= Yii::app()->session['id_user'];
        return parent::model($className);
    }
    public function insertQuestionUser1($data_num_easy,$id_exam, $id_user)
    {
        foreach($data_num_easy as $value)
        {

            $sql1 ='INSERT INTO t_test(`create_by`,`id_question`,`id_user`,`id_question_type`,`id_exam`) VALUES(:create_by,:id_question,:id_user,:id_question_type,:id_exam)';
            $query1=Yii::app()->db->createCommand($sql1);
            $query1->bindParam(':id_question',  $value['id'], PDO::PARAM_INT);
            $query1->bindParam(':id_user',   $id_user, PDO::PARAM_INT);
            $query1->bindParam(':id_question_type',  $value['id_question_type'], PDO::PARAM_INT);
            $query1->bindParam(':id_exam',  $id_exam, PDO::PARAM_INT);
            $query1->bindParam(':create_by',$user_id_login, PDO::PARAM_INT);
            $query1 ->execute();
        }
    }
    /**
     * insertQuestionUser
     * Please note that you should have this exact method in all your CActiveRecord descendants!
     * @param array $data_num_easy active record class name.
     * @return MQuestion the static model class
      */
    public function insertQuestionUser($data_num_easy,$data_num_normal,$data_num_hard,$id_exam, $id_user,$t_user_exam_id) {
       $transaction = Yii::app()->db->beginTransaction();
        $numD = 0;
        try
        {
            foreach($data_num_easy as $value)
            {
                $numD++;
                $sql1 ='INSERT INTO t_test(`create_by`,`id_question`,`id_user`,`id_question_type`,`id_exam`) VALUES(:create_by,:id_question,:id_user,:id_question_type,:id_exam)';
                $query1=Yii::app()->db->createCommand($sql1);
                $query1->bindParam(':id_question',  $value['id'], PDO::PARAM_INT);
                $query1->bindParam(':id_user',   $id_user, PDO::PARAM_INT);
                $query1->bindParam(':id_question_type',  $value['id_question_type'], PDO::PARAM_INT);
                $query1->bindParam(':id_exam',  $id_exam, PDO::PARAM_INT);
                $query1->bindParam(':create_by',$user_id_login, PDO::PARAM_INT);
                $query1 ->execute();
            }
            foreach($data_num_normal as $value)
            {
                $numD++;
                $sql1 ='INSERT INTO t_test(`create_by`,`id_question`,`id_user`,`id_question_type`,`id_exam`) VALUES(:create_by,:id_question,:id_user,:id_question_type,:id_exam)';
                $query1=Yii::app()->db->createCommand($sql1);
                $query1->bindParam(':id_question',  $value['id'], PDO::PARAM_INT);
                $query1->bindParam(':id_user',   $id_user, PDO::PARAM_INT);
                $query1->bindParam(':id_question_type',  $value['id_question_type'], PDO::PARAM_INT);
                $query1->bindParam(':id_exam',  $id_exam, PDO::PARAM_INT);
                $query1->bindParam(':create_by',$user_id_login, PDO::PARAM_INT);
                $query1 ->execute();
            }
            foreach($data_num_hard as $value)
            {
                $numD++;
                $sql1 ='INSERT INTO t_test(`create_by`,`id_question`,`id_user`,`id_question_type`,`id_exam`) VALUES(:create_by,:id_question,:id_user,:id_question_type,:id_exam)';
                $query1=Yii::app()->db->createCommand($sql1);
                $query1->bindParam(':id_question',  $value['id'], PDO::PARAM_INT);
                $query1->bindParam(':id_user',   $id_user, PDO::PARAM_INT);
                $query1->bindParam(':id_question_type',  $value['id_question_type'], PDO::PARAM_INT);
                $query1->bindParam(':id_exam',  $id_exam, PDO::PARAM_INT);
                $query1->bindParam(':create_by',$user_id_login, PDO::PARAM_INT);
                $query1 ->execute();
            }

            $sql1 ='UPDATE t_user_exam SET start_time=NOW(),update_by=:update_by WHERE id=:id ';
            $query1=Yii::app()->db->createCommand($sql1);
            $query1->bindParam(':id',  $t_user_exam_id, PDO::PARAM_INT);
            $query1->bindParam(':update_by',$user_id_login, PDO::PARAM_INT);
            $query1 ->execute();
            $transaction->commit();
        }

        catch(Exception $e)
        {
            var_dump($e);
            $transaction->rollback();
        }
    }
    public function getQuestionRandom($number_random,$id_level,$id_question_type) {
        $query =' SELECT * FROM m_question
                WHERE id_level='.$id_level.' AND id_question_type='.$id_question_type.'
                ORDER BY RAND()
                LIMIT '.$number_random;
        $command = Yii::app()->db->createCommand($query );
        return $command->queryAll();
    }

    public function getAnswerExamOfUser($id_user,$id_exam) {

        $query ='  SELECT id_question,id_answer,id_exam FROM t_test
                    WHERE id_user='.$id_user.'  AND id_exam ='.$id_exam;
        $command = Yii::app()->db->createCommand($query );
        return $command->queryAll();

    }
    public function getMysqltime($id_user,$id_exam,$finishTime) {

        $query =' SELECT TIMESTAMPDIFF(SECOND,NOW(),start_time + INTERVAL :finishTime HOUR_MINUTE) as rnow FROM t_user_exam WHERE id_user='.$id_user.'  AND id_exam ='.$id_exam;
        $command = Yii::app()->db->createCommand($query );
        $command->bindParam(':finishTime', $finishTime, PDO::PARAM_STR);
        return $command->queryRow();

    }
    public function infoTest($id_user,$id_exam) {

      $query ="  SELECT CONCAT(mu.full_name,' / ',mu.email) as full_name,id_user,id_exam,ue.start_time, ue.id AS tid,ex.id AS examid,ex.id_question_type,ex.subject,num_easy,num_normal,num_hard,ex.finish_time
                  FROM t_user_exam ue, m_exam ex , m_user mu
                  WHERE mu.id=ue.id_user and ue.id_exam = ex.id AND id_user=".$id_user." AND ex.id=".$id_exam;
        $command = Yii::app()->db->createCommand($query );
        return $command->queryAll();

    }
    public function updateFinishTime($t_user_exam_id) {
        $sql1 ='UPDATE  t_user_exam SET update_by=:update_by,finish_time = TIMESTAMPDIFF(SECOND,start_time,end_time) WHERE id=:id';
        $query1=Yii::app()->db->createCommand($sql1);
        $query1->bindParam(':id',$t_user_exam_id, PDO::PARAM_INT);
        $query1->bindParam(':update_by',$user_id_login, PDO::PARAM_INT);
        $query1 ->execute();
    }
    public function updateUserAnswerQuestion($arrUpdateAnswer,$t_user_exam_id) {
        $transaction = Yii::app()->db->beginTransaction();
        try
        {
            //var_dump($arrUpdateAnswer);
            foreach($arrUpdateAnswer as $value)
            {
                $sql1 ='UPDATE t_test SET update_by=:update_by, id_answer=:id_answer WHERE id_question=:id_question AND id_user=:id_user';
                $query1=Yii::app()->db->createCommand($sql1);
                $query1->bindParam(':id_answer', $value[0], PDO::PARAM_INT);
                $query1->bindParam(':id_question',   $value[1], PDO::PARAM_INT);
                $query1->bindParam(':id_user',  $value[2], PDO::PARAM_INT);
                $query1->bindParam(':update_by', $user_id_login, PDO::PARAM_INT);
                $query1 ->execute();
            }
            $sql1 ='UPDATE t_user_exam SET update_by=:update_by,end_time=NOW() WHERE id=:id ';
            $queryUpdate=Yii::app()->db->createCommand($sql1);
            $queryUpdate->bindParam(':id',  $t_user_exam_id, PDO::PARAM_INT);
            $queryUpdate->bindParam(':update_by',  $user_id_login, PDO::PARAM_INT);
           $queryUpdate ->execute();

            $transaction->commit();
        } catch(Exception $e)
        {
            var_dump($e);
            $transaction->rollback();
        }
    }

    public function getQuestionExamTest($id_user,$id_exam) {

        $query ='SELECT  qu.id_answer,te.id_question,qu.content FROM t_test te ,m_question qu
                WHERE
                te.id_question = qu.id
                AND
                te.id_user='.$id_user.' AND te.id_exam='.$id_exam;
        $command = Yii::app()->db->createCommand($query );
        return $command->queryAll();
    }
    public function getAnswerFromQuestion($id_question) {
        $query=' SELECT content,id_question,id as id_answer FROM m_answer WHERE id_question ='.$id_question;
        $command = Yii::app()->db->createCommand($query );
        return $command->queryAll();
    }
    public function getFullExamTest($id_user,$id_exam) {

        $query =' SELECT te.id_question,ma.id AS id_answer,qu.content,ma.content AS ancontent FROM t_test te ,m_question qu ,m_answer ma
                WHERE
                te.id_question = qu.id
                AND
                ma.id_question = qu.id
                AND
                te.id_user='.$id_user.' AND te.id_exam='.$id_exam;
        $command = Yii::app()->db->createCommand($query );
        return $command->queryAll();
    }
    public function search($question_type_id) {

        $page = (isset($_GET['page']) ? $_GET['page'] : 1);  // define the variable to “LIMIT” the query
        $query1 = Yii::app()->db->createCommand() //this query contains all the data
            ->select(array('t1.*','t2.name'))
            ->from(array('m_question t1', 'm_question_type t2'))
            // ->where('t1.id_question_type = '.$question_type_id.' AND t2.id = t1.id_question_type ')
            ->where(' t2.id = t1.id_question_type ')
            ->order('t1.id DESC')
            ->limit(Yii::app()->params['listPerPage'], $page-1) // the trick is here!
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
                ->order('t1.id DESC')
                ->limit(Yii::app()->params['listPerPage'], $page-1); // the trick is here!

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

    public function getResultTest($id_user,$id_exam){
        return $query = Yii::app()->db->createCommand()
            ->select(array('ue.start_time','TIMESTAMPDIFF(SECOND,ue.start_time,ue.end_time ) as workTime','ex.subject','mu.full_name'))
            ->from(array('t_user_exam ue', 'm_exam ex' , 'm_user mu'))
            ->where('mu.id=ue.id_user and ue.id_exam = ex.id and id_user=:id_user and ex.id=:id_exam',array(':id_user'=>$id_user,':id_exam'=>$id_exam))
            ->queryRow();
    }

    private function getTotalQuestion($id_exam){
        return $item_count = Yii::app()->db->createCommand()
            ->select(array('SUM(ex.num_easy + ex.num_normal + ex.num_hard) as totalQuestion'))
            ->from(array('m_exam ex'))
            ->where(' ex.id = :id_exam ',array(':id_exam'=>$id_exam))
            ->queryScalar();
    }

    private function getTotalCorrectAnswer($id_user,$id_exam){
        return $item_count = Yii::app()->db->createCommand()
            ->select(array('count(q.id) as totalAnswer'))
            ->from(array('t_test t','m_question q'))
            ->where(' t.id_question = q.id and t.id_answer = q.id_answer and t.id_user = :id_user and t.id_exam=:id_exam ',array('id_user'=>$id_user,':id_exam'=>$id_exam))
            ->queryScalar();
    }

    public function getScore($id_user,$id_exam){
        $total_question = $this->getTotalQuestion($id_exam);
        $total_answer = $this->getTotalCorrectAnswer($id_user,$id_exam);
        $score = floor($total_answer/$total_question * 100);

        return $total_answer.' / '.$total_question.' ('.$score.'%)';
    }
}