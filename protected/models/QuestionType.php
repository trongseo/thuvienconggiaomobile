<?php

/**
 * This is the model class for table "dos_customers".
 *
 * The followings are the available columns in table 'dos_customers':
 * @property integer $customer_id
 * @property string $customer_name
 * @property string $pic_thumb
 * @property string $pic_full
 * @property string $email
 * @property string $phone
 * @property string $address
 * @property string $website
 * @property string $agent_sale
 * @property string $agent_tech
 * @property string $created_date
 * @property string $expired_date
 * @property string $tag
 * @property integer $enable
 * @property string $dos_bussiness_bussiness_id
 *
 * The followings are the available model relations:
 * @property DosBussiness $dosBussinessBussiness
 */
class QuestionType extends CActiveRecord {
    /**
     * @return string the associated database table name
     */
    public function tableName()
    {
        return 'm_question_type';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules()
    {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('name, description, create_at, create_by, update_at, update_by', 'required'),
            array('create_by, update_at', 'numerical', 'integerOnly'=>true),
            array('name', 'length', 'max'=>80),
            // The following rule is used by search().
            // @todo Please remove those attributes that should not be searched.
            array('id, name, description, create_at, create_by, update_at, update_by', 'safe', 'on'=>'search'),
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
             m_question_type_id=>'ID',
            'name' => 'Name',
            'description' => 'Description',
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
        $criteria->compare('name',$this->name,true);
        $criteria->compare('description',$this->description,true);
        $criteria->compare('create_at',$this->create_at,true);
        $criteria->compare('create_by',$this->create_by);
        $criteria->compare('update_at',$this->update_at);
        $criteria->compare('update_by',$this->update_by,true);

        return new CActiveDataProvider($this, array(
            'criteria'=>$criteria,
        ));
    }

    /**
     * Returns the static model of the specified AR class.
     * Please note that you should have this exact method in all your CActiveRecord descendants!
     * @param string $className active record class name.
     * @return QuestionType the static model class
     */
    public static function model($className=__CLASS__)
    {
        return parent::model($className);
    }


    //Back end - List item admin
    public function listAllItem() {
        $command = Yii::app()->db->createCommand('SELECT id as m_question_type_id , name  FROM ' . $this->tableName());
       return $command->queryAll();
    }

}