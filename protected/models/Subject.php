<?php

/**
 * This is the model class for table "m_subject".
 *
 * The followings are the available columns in table 'm_subject':
 * @property integer $id
 * @property string $name
 * @property string $description
 * @property string $create_at
 * @property integer $create_by
 * @property string $update_at
 * @property integer $update_by
 */
class Subject extends CActiveRecord
{
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
            array('name, description', 'required','on' => 'register'),
            array('create_by, update_by', 'numerical', 'integerOnly'=>true),
            array('name', 'length', 'max'=>50),
            array('create_at, update_at', 'safe'),
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
    public function search1()
    {
        // @todo Please modify the following code to remove attributes that should not be searched.

        $criteria=new CDbCriteria;

        $criteria->compare('id',$this->id);
        $criteria->compare('name',$this->name,true);
        $criteria->compare('description',$this->description,true);
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
     * @return MSubject the static model class
     */
    public static function model($className=__CLASS__)
    {
        return parent::model($className);
    }

    //Back end - list Value for Edit Template - Modules
    public function listAllItem($order,$direction){
        return $this->search($order,$direction);
    }
    public function search($order,$direction) {
        $orderBy = $this->getOrderBy($order,$direction);
        $page = (isset($_GET['page']) ? $_GET['page'] : 1);  // define the variable to “LIMIT” the query
        $item_results = Yii::app()->db->createCommand() //this query contains all the data
            ->select(array('qt.*'))
            ->from(array('m_question_type qt'))
            ->order($orderBy)
            ->limit(Yii::app()->params['listPerPage'], ($page-1) * Yii::app()->params['listPerPage']) // the trick is here!
            ->queryAll();

        $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
            ->select('count(qt.id) as count')
            ->from(array('m_question_type qt'))
            ->queryScalar(); // do not LIMIT it, this must count all items!

        $pages = new CPagination($item_count);
        $pages->pageSize = Yii::app()->params['listPerPage'];
        return array('models' => $item_results, 'pages' => $pages,'itemCount'=>$item_count,'pageSize'=>Yii::app()->params['listPerPage']);

    }

    public function insertNew($subject_model) {
        $id_user = intval( Yii::app()->session['id_user']);
        $command = Yii::app()->db->createCommand('INSERT INTO ' . $this->tableName() . ' (`name`,`description`,`create_by`) VALUES (:name,:description,:create_by)');
        $command->bindParam(":name", $subject_model['name'], PDO::PARAM_STR);
        $command->bindParam(":description",  $subject_model['description'], PDO::PARAM_STR);
        $command->bindParam(":create_by",$id_user , PDO::PARAM_INT);

        $command->execute();

    }

    public function updateSubject($subject_model) {
        $id_user = intval( Yii::app()->session['id_user']);
        $command = Yii::app()->db->createCommand('UPDATE ' . $this->tableName() . ' SET name=:name, description=:description, update_by=:update_by where id=:id ');
        $command->bindParam(":id", $subject_model['id'], PDO::PARAM_INT);
        $command->bindParam(":name", $subject_model['name'], PDO::PARAM_STR);
        $command->bindParam(":description",  $subject_model['description'], PDO::PARAM_INT);
        $command->bindParam(":update_by", $id_user, PDO::PARAM_INT);

        $command->execute();

    }

    public function deleteSubject($idkey) {

        $command = Yii::app()->db->createCommand('DELETE FROM  ' . $this->tableName() . '  where id=:id ');
        $command->bindParam(":id",$idkey, PDO::PARAM_INT);
        $command->execute();

        $command = Yii::app()->db->createCommand('DELETE FROM m_exam  where id_question_type=:id ');
        $command->bindParam(":id",$idkey, PDO::PARAM_INT);
        $command->execute();

        $command = Yii::app()->db->createCommand('DELETE FROM m_question  where id_question_type=:id ');
        $command->bindParam(":id",$idkey, PDO::PARAM_INT);
        $command->execute();

        $command = Yii::app()->db->createCommand('DELETE FROM t_test  where id_question_type=:id ');
        $command->bindParam(":id",$idkey, PDO::PARAM_INT);
        $command->execute();
    }


    private function getOrderBy($order,$direction){
        $sql ="qt.description ";
        if ($order=='description'){
            $sql ="qt.description ";
        }elseif ($order=='name'){
            $sql ="qt.name ";
        }

        if($direction =='ASC'){
            $sql.= "ASC";
        }else{
            $sql.= "DESC";
        }

        return $sql;
    }


}
