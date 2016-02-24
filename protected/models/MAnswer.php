<?php

/**
 * This is the model class for table "m_answer".
 *
 * The followings are the available columns in table 'm_answer':
 * @property integer $id
 * @property string $content
 * @property integer $id_question
 * @property string $feed_back
 * @property string $create_at
 * @property integer $create_by
 * @property string $update_at
 * @property integer $update_by
 */
class MAnswer extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'm_answer';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('create_at', 'required'),
			array('id_question, create_by, update_by', 'numerical', 'integerOnly'=>true),
			array('content, feed_back', 'length', 'max'=>3000),
			array('update_at', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, content, id_question, feed_back, create_at, create_by, update_at, update_by', 'safe', 'on'=>'search'),
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
			'content' => 'Content',
			'id_question' => 'Id Question',
			'feed_back' => 'Feed Back',
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
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('content',$this->content,true);
		$criteria->compare('id_question',$this->id_question);
		$criteria->compare('feed_back',$this->feed_back,true);
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
	 * @return MAnswer the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

    public function loadAnswerFromQuestion($id_quesion) {

        $command = Yii::app()->db->createCommand('select * from  ' . $this->tableName() . '  where id_question=:id_question order by id asc');
        $command->bindParam(":id_question",$id_quesion, PDO::PARAM_INT);
        return  $command->queryAll();
    }

    public function insertAllAnswer($post_right,$id_quesion,$curModel) {


$id_true_answer = 0;
        for ($i = 0; $i < 4; $i++) {

            $command = Yii::app()->db->createCommand('INSERT INTO ' . $this->tableName() . ' (`content`, `id_question`,update_at) VALUES (:content, :id_question,CURRENT_TIMESTAMP)');
            $command->bindParam(":content",  $curModel[$i+1], PDO::PARAM_STR);
            $command->bindParam(":id_question",$id_quesion, PDO::PARAM_INT);
            $command->execute();
            if($i+1==$post_right)
            {
                $id_true_answer=  Yii::app()->db->createCommand()->select('max(id) as max')->from('m_answer')->queryScalar();
            }
        }
        return $id_true_answer;
    }
    public function updateAllAnswer($post_right,$id_quesion,$curModel) {


        $id_true_answer = 0;
        $arrAnswer =  $this->loadAnswerFromQuestion($id_quesion);
        $i=0;
        foreach ($arrAnswer as $value) {
            $command = Yii::app()->db->createCommand('UPDATE ' . $this->tableName() . ' SET content=:content WHERE id=:id ');
            $command->bindParam(":content",  $curModel[$i+1], PDO::PARAM_STR);
            $command->bindParam(":id",$value["id"], PDO::PARAM_INT);
            $command->execute();
            if($value["id"]==$post_right)
            {
                $id_true_answer= $value["id"];
            }
            $i++;
        }

        return $id_true_answer;
    }

}
