<?php

/**
 * This is the model class for table "MY_CONST".
 *
 * The followings are the available columns in table 'MY_CONST':
 * @property integer $id
 * @property string $const_name
 * @property string $const_text
 * @property string $const_type
 */
class MYCONST extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'MY_CONST';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('const_name, const_text', 'length', 'max'=>500),
			array('const_type', 'length', 'max'=>100),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, const_name, const_text, const_type', 'safe', 'on'=>'search'),
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
			'const_name' => 'Const Name',
			'const_text' => 'Const Text',
			'const_type' => 'Const Type',
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
		$criteria->compare('const_name',$this->const_name,true);
		$criteria->compare('const_text',$this->const_text,true);
		$criteria->compare('const_type',$this->const_type,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return MYCONST the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
    public function getList($const_type) {
        $command = Yii::app()->db->createCommand('SELECT * FROM ' . $this->tableName() . '  WHERE const_type=:const_type order by ord asc');
        $command->bindParam(':const_type',  $const_type, PDO::PARAM_STR);
        return $command->queryAll();

    }
}
