<?php
/**
 * This is the model class for table "m_exam".
 *
 * The followings are the available columns in table 'm_exam':
 * @property integer $id
 * @property string $subject
 * @property integer $num_easy
 * @property integer $num_normal
 * @property integer $num_hard
 * @property integer $finish_time
 * @property integer $id_question_type
 * @property string $note
 * @property string $create_at
 * @property integer $create_by
 * @property string $update_at
 * @property integer $update_by
 */

class Exam extends CActiveRecord {


    /**
     * @return string the associated database table name
     */
    public function tableName()
    {
        return 'm_exam';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules()
    {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('subject,finish_time,id_question_type', 'required','on' => 'register'),
            array('num_easy, num_normal, num_hard, finish_time, id_question_type, create_by, update_by', 'numerical', 'integerOnly'=>true),
            array('subject, note', 'length', 'max'=>50),
            array('create_at, update_at', 'safe'),
            // The following rule is used by search().
            // @todo Please remove those attributes that should not be searched.
            array('id, subject, num_easy, num_normal, num_hard, finish_time, id_question_type, note, create_at, create_by, update_at, update_by', 'safe', 'on'=>'search'),
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
            'subject' => 'Subject',
            'num_easy' => 'Num Easy',
            'num_normal' => 'Num Normal',
            'num_hard' => 'Num Hard',
            'finish_time' => 'Finish Time',
            'id_question_type' => 'Exam Type',
            'note' => 'Note',
            'create_at' => 'Create At',
            'create_by' => 'Create By',
            'update_at' => 'Update At',
            'update_by' => 'Update By',
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
        $criteria->compare('subject',$this->subject,true);
        $criteria->compare('num_easy',$this->num_easy);
        $criteria->compare('num_normal',$this->num_normal);
        $criteria->compare('num_hard',$this->num_hard);
        $criteria->compare('finish_time',$this->finish_time);
        $criteria->compare('id_question_type',$this->id_question_type);
        $criteria->compare('note',$this->note,true);
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
     * @return MExam the static model class
     */
    public static function model($className=__CLASS__)
    {
        return parent::model($className);
    }
    //Back end - list Value for Edit Template - Modules
    public function listAllItem(){
        return $this->search(0);
    }
    public function getDataForCombo() {

        $sql = "SELECT * FROM " . $this->tableName() . "   ORDER BY id ASC";

        $command = Yii::app()->db->createCommand($sql);

        return $command->queryAll();

    }
    public function search($question_type_id) {
        $page = (isset($_GET['page']) ? $_GET['page'] : 1);  // define the variable to “LIMIT” the query
        $item_results = Yii::app()->db->createCommand() //this query contains all the data
            ->select(array('ex.*','qt.name'))
            ->from(array('m_exam ex', 'm_question_type qt'))
            ->where(' qt.id = ex.id_question_type ')
            ->order('ex.id DESC')
            ->limit(Yii::app()->params['listPerPage'], ($page-1) * Yii::app()->params['listPerPage']) // the trick is here!
            ->queryAll();

        $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
            ->select('count(ex.id) as count')
            ->from(array('m_exam ex', 'm_question_type qt'))
            ->where(' qt.id = ex.id_question_type ')
            ->queryScalar(); // do not LIMIT it, this must count all items!

        if($question_type_id!=0){
            $item_results = Yii::app()->db->createCommand() //this query contains all the data
                ->select(array('ex.*','qt.name'))
                ->from(array('m_exam ex', 'm_question_type qt'))
                ->where(' qt.id = ex.id_question_type AND ex.id_question_type =:id_question_type')
                ->order('ex.id DESC')
                ->limit(Yii::app()->params['listPerPage'], ($page-1) * Yii::app()->params['listPerPage']); // the trick is here!

            $item_results->bindParam(':id_question_type',  $question_type_id, PDO::PARAM_INT);
            $item_results= $item_results->queryAll();

            $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
                ->select(array('count(ex.id) as count'))
                ->from(array('m_exam ex', 'm_question_type qt'))
                ->where(' qt.id = ex.id_question_type AND ex.id_question_type =:id_question_type');
            $item_count->bindParam(':id_question_type',  $question_type_id, PDO::PARAM_INT);
            $item_count= $item_count->queryScalar(); // do not LIMIT it, this must count all items!
        }

        $pages = new CPagination($item_count);
        $pages->pageSize = Yii::app()->params['listPerPage'];
        return array('models' => $item_results, 'pages' => $pages,'itemCount'=>$item_count,'pageSize'=>Yii::app()->params['listPerPage']);

    }

    public function insertNew($exam_model) {

        $id_user = intval( Yii::app()->session['id_user']);

        $command = Yii::app()->db->createCommand('INSERT INTO ' . $this->tableName() . ' (`subject`,`num_easy`, `num_normal`,`num_hard`,`finish_time`, `id_question_type`, `note`,`create_by`) VALUES (:subject,:number_easy, :number_normal, :number_hard,:finish_time,:id_question_type,:note,:create_by)');
        $command->bindParam(":subject", $exam_model['subject'], PDO::PARAM_STR);
        $command->bindParam(":number_easy",  $exam_model['num_easy'], PDO::PARAM_INT);
        $command->bindParam(":number_normal",  $exam_model['num_normal'], PDO::PARAM_INT);
        $command->bindParam(":number_hard",  $exam_model['num_hard'], PDO::PARAM_INT);
        $command->bindParam(":finish_time",  $exam_model['finish_time'], PDO::PARAM_INT);
        $command->bindParam(":id_question_type", $exam_model['id_question_type'], PDO::PARAM_INT);
        $command->bindParam(":note", $exam_model['note'], PDO::PARAM_STR);
        $command->bindParam(":create_by", $id_user  , PDO::PARAM_INT);

        $command->execute();

    }

    public function updateExam($exam_model) {

        $id_user = intval( Yii::app()->session['id_user']);

        $command = Yii::app()->db->createCommand('UPDATE ' . $this->tableName() . ' SET subject=:subject, num_easy=:number_easy,num_normal=:number_normal,num_hard=:number_hard,finish_time=:finish_time,id_question_type=:id_question_type,note=:note,update_by=:update_by where id=:id ');
        $command->bindParam(":id", $exam_model['id'], PDO::PARAM_INT);
        $command->bindParam(":subject", $exam_model['subject'], PDO::PARAM_STR);
        $command->bindParam(":number_easy",  $exam_model['num_easy'], PDO::PARAM_INT);
        $command->bindParam(":number_normal",  $exam_model['num_normal'], PDO::PARAM_INT);
        $command->bindParam(":number_hard",  $exam_model['num_hard'], PDO::PARAM_INT);
        $command->bindParam(":finish_time",  $exam_model['finish_time'], PDO::PARAM_INT);
        $command->bindParam(":id_question_type", $exam_model['id_question_type'], PDO::PARAM_INT);
        $command->bindParam(":note", $exam_model['note'], PDO::PARAM_STR);
        $command->bindParam(":update_by",  $id_user , PDO::PARAM_INT);

        $command->execute();

    }

    public function deleteExam($idkey) {

        $command = Yii::app()->db->createCommand('DELETE FROM  ' . $this->tableName() . '  where id=:id ');
        $command->bindParam(":id",$idkey, PDO::PARAM_INT);
        $command->execute();

        $command = Yii::app()->db->createCommand('DELETE FROM t_user_exam  where id_exam=:id ');
        $command->bindParam(":id",$idkey, PDO::PARAM_INT);
        $command->execute();

        $command = Yii::app()->db->createCommand('DELETE FROM t_test  where id_exam=:id ');
        $command->bindParam(":id",$idkey, PDO::PARAM_INT);
        $command->execute();
    }

    public function getExamForUser($user_id){
        $item_results = Yii::app()->db->createCommand() //this query contains all the data
            ->select(array('ex.*'))
            ->from(array('m_exam ex', 't_user_exam ue'))
            ->where('ex.id = ue.id_exam AND ue.id_user =:id_user');

        $item_results->bindParam(':id_user', $user_id, PDO::PARAM_INT);
        $item_results= $item_results->queryAll();

        return array('models' => $item_results);
    }
} 