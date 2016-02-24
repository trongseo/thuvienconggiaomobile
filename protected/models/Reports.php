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
     * Returns the static model of the specified AR class.
     * Please note that you should have this exact method in all your CActiveRecord descendants!
     * @param string $className active record class name.
     * @return MQuestion the static model class
     */
    public static function model($className=__CLASS__)
    {
        return parent::model($className);
    }

    //Back end - List item admin
    public function listAllItem() {
        return  $this->search(0) ;
    }
    public function getTestOfUser($question_type_id) {

        $page = (isset($_GET['page']) ? $_GET['page'] : 1);  // define the variable to “LIMIT” the query
        $query1 = Yii::app()->db->createCommand() //this query contains all the data
            ->select(array('t1.*','t2.name'))
            ->from(array('m_question t1', 'm_question_type t2'))
            // ->where('t1.id_question_type = '.$question_type_id.' AND t2.id = t1.id_question_type ')
            ->where(' t2.id = t1.id_question_type ')
            ->order('t1.id DESC')
            ->limit(Yii::app()->params['listPerPage'], $page-1) // the trick is here!
            ->queryAll();
        return $query1;
    }

}