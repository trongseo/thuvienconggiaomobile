<?php
/**
 * This is the model class for table "m_user".
 *
 * The followings are the available columns in table 'm_user':
 * @property integer $id
 * @property string $full_name
 * @property string $email
 * @property string $password
 * @property string $birthday
 * @property string $telephone
 * @property string $create_at
 * @property integer $create_by
 * @property string $update_at
 * @property integer $update_by
 */

class User extends CActiveRecord {

    public $pass_old; //for change password
    public $pass_new; //for change password
    public $pass_new_compare; //for change password

    /**
     * @return string the associated database table name
     */
    public function tableName()
    {
        return 'm_user';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules()
    {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('full_name, email, password,birthday','required','on' => 'register'),
            array('create_by, update_by', 'numerical', 'integerOnly'=>true),
            array('full_name, email, telephone', 'length', 'max'=>50),
            array('email', 'email'),
            array('email', 'unique', 'on' => 'register', 'message' => '<strong>{value}</strong> already exists please choose another email'),
            array('telephone', 'match', 'pattern'=>'/^([+]?[0-9 ]+)$/'),
            array('full_name, birthday','required','on' => 'changeInfo'),
            array('birthday, create_at, update_at', 'safe'),
            //rules for change password
            array('pass_old, pass_new, pass_new_compare', 'required', 'on' => 'changePass'),
            array('pass_old', 'checkPassOld', 'on' => 'changePass'),
            array('pass_new, pass_new_compare', 'length', 'min' => 6, 'max' => 45),
            array('pass_new', 'compare', 'compareAttribute' => 'pass_new_compare'),
            // The following rule is used by search().
            // @todo Please remove those attributes that should not be searched.
            array('id, full_name, email, password, birthday, telephone, create_at, create_by, update_at, update_by', 'safe', 'on'=>'search'),
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
            'full_name' => 'Full Name',
            'email' => 'Email',
            'password' => 'Password',
            'birthday' => 'Birthday',
            'telephone' => 'Telephone',
            'create_at' => 'Create At',
            'create_by' => 'Create By',
            'update_at' => 'Update At',
            'update_by' => 'Update By',
            'pass_old' => 'Old password',
            'pass_new' => 'New password',
            'pass_new_compare' => 'Confirm password',
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
        $criteria->compare('full_name',$this->full_name,true);
        $criteria->compare('email',$this->email,true);
        $criteria->compare('password',$this->password,true);
        $criteria->compare('birthday',$this->birthday,true);
        $criteria->compare('telephone',$this->telephone,true);
        $criteria->compare('create_at',$this->create_at,true);
        $criteria->compare('create_by',$this->create_by);
        $criteria->compare('update_at',$this->update_at,true);
        $criteria->compare('update_by',$this->update_by);

        return new CActiveDataProvider($this, array(
            'criteria'=>$criteria,
        ));
    }

    public function checkPassOld($attribute) {
        $user_id_login = Yii::app()->session['id_user'];
        $item_results = Yii::app()->db->createCommand()
            ->select(array('u.*'))
            ->from(array('m_user u'))
            ->where('u.id=:id AND u.password=:password ',array(':id' => $user_id_login, ':password' =>  md5($this->pass_old)))
            ->queryRow();

        if($item_results == false){
            $this->addError($attribute, 'Old Password is incorrect');
        }
    }

    //Back end - list Value for Edit Template - Modules
    public function listAllItem(){

        return $this->search('','');
    }

    public function search($search_full_name,$search_email) {

        $full_name_value='%'.$search_full_name.'%';
        $email_value='%'.$search_email.'%';

        $page = (isset($_GET['page']) ? $_GET['page'] : 1);  // define the variable to “LIMIT” the query

        $item_results = Yii::app()->db->createCommand() //this query contains all the data
            ->select(array('u.*'))
            ->from(array('m_user u'))
            ->where('u.full_name LIKE :full_name AND u.email LIKE :email ')
            ->order('u.id DESC')
            ->limit(Yii::app()->params['listPerPage'], ($page-1) * Yii::app()->params['listPerPage']); // the trick is here!

        $item_results->bindParam(':full_name', $full_name_value , PDO::PARAM_STR);
        $item_results->bindParam(':email',  $email_value, PDO::PARAM_STR);
        $item_results= $item_results->queryAll();

        $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
            ->select(array('count(u.id) as count'))
            ->from(array('m_user u'))
            ->where('u.full_name LIKE :full_name AND u.email LIKE :email ');

        $item_count->bindParam(':full_name', $full_name_value , PDO::PARAM_STR);
        $item_count->bindParam(':email',  $email_value, PDO::PARAM_STR);
        $item_count= $item_count->queryScalar(); // do not LIMIT it, this must count all items!

        $pages = new CPagination($item_count);
        $pages->pageSize = Yii::app()->params['listPerPage'];

        return array('models' => $item_results, 'pages' => $pages,'itemCount'=>$item_count,'pageSize'=>Yii::app()->params['listPerPage']);

    }
    public function getDataForCombo() {

        $sql = "SELECT * FROM " . $this->tableName() . "   ORDER BY id ASC";

        $command = Yii::app()->db->createCommand($sql);

        return $command->queryAll();

    }
    public function getUserLogin($userEmal,$passWord) {

        $sql = "SELECT * FROM " . $this->tableName() . "  where email=:email and password=:password ORDER BY id ASC";

        $command = Yii::app()->db->createCommand($sql);
        $command->bindParam(":email",$userEmal, PDO::PARAM_STR);
        $command->bindParam(":password",$passWord, PDO::PARAM_STR);
        return $command->queryRow();

    }


    public function insertNew($user_model) {

        $purifier = new CHtmlPurifier();
        $password = md5($purifier->purify($user_model['password']));

        $command = Yii::app()->db->createCommand('INSERT INTO ' . $this->tableName() . ' (`create_by`,`full_name`,`email`,`password`,`birthday`,`telephone`) VALUES (:create_by,:full_name,:email,:password,:birthday,:telephone)');
        $command->bindParam(":full_name", $user_model['full_name'], PDO::PARAM_STR);
        $command->bindParam(":email",  $user_model['email'], PDO::PARAM_STR);
        $command->bindParam(":password",$password , PDO::PARAM_STR);
        $command->bindParam(":birthday",  $user_model['birthday'], PDO::PARAM_STR);
        $command->bindParam(":telephone",  $user_model['telephone'], PDO::PARAM_STR);
        $user_id_login = Yii::app()->session['id_user'];
        $command->bindParam(":create_by",$user_id_login, PDO::PARAM_INT);

        $command->execute();
    }


    public function updateUser($user_model) {
        $purifier = new CHtmlPurifier();

        if ($user_model['password']!=''){
             $password = md5($purifier->purify($user_model['password']));
        }else{
            $model_class = new User();
            $model_class=   $model_class->findByPk($user_model['id']);
            $password = $model_class['password'];
        }

        $command = Yii::app()->db->createCommand('UPDATE ' . $this->tableName() . ' SET password=:password,update_by=:update_by,full_name=:full_name, birthday=:birthday,telephone=:telephone where id=:id');
        $command->bindParam(":id", $user_model['id'], PDO::PARAM_INT);
        $command->bindParam(":password",  $password, PDO::PARAM_STR);
        $command->bindParam(":full_name", $user_model['full_name'], PDO::PARAM_STR);
        $command->bindParam(":birthday",  $user_model['birthday'], PDO::PARAM_STR);
        $command->bindParam(":telephone",  $user_model['telephone'], PDO::PARAM_STR);
        $user_id_login = Yii::app()->session['id_user'];
        $command->bindParam(":update_by",$user_id_login, PDO::PARAM_INT);
        $command->execute();
    }

    public function deleteUser($idkey) {

        $command = Yii::app()->db->createCommand('DELETE FROM  ' . $this->tableName() . '  where id=:id ');
        $command->bindParam(":id",$idkey, PDO::PARAM_INT);
        $command->execute();

        $command = Yii::app()->db->createCommand('DELETE FROM t_user_exam  where id_user=:id ');
        $command->bindParam(":id",$idkey, PDO::PARAM_INT);
        $command->execute();

        $command = Yii::app()->db->createCommand('DELETE FROM t_test  where id_user=:id ');
        $command->bindParam(":id",$idkey, PDO::PARAM_INT);
        $command->execute();

    }

    //Back end - Change password
    public function changePass($password, $id_user) {
        $purifier = new CHtmlPurifier();
        $password = md5($purifier->purify($password));

        $command = Yii::app()->db->createCommand('UPDATE ' . $this->tableName() . ' SET password=:password WHERE id=:id');
        $command->bindParam(":id", $id_user, PDO::PARAM_INT);
        $command->bindParam(":password", $password, PDO::PARAM_STR);
        $command->execute();
    }

    public function changeInfo($user_model) {

        $command = Yii::app()->db->createCommand('UPDATE ' . $this->tableName() . ' SET update_by=:update_by,full_name=:full_name, birthday=:birthday,telephone=:telephone where id=:id');
        $command->bindParam(":id", $user_model['id'], PDO::PARAM_INT);
        $command->bindParam(":full_name", $user_model['full_name'], PDO::PARAM_STR);
        $command->bindParam(":birthday",  $user_model['birthday'], PDO::PARAM_STR);
        $command->bindParam(":telephone",  $user_model['telephone'], PDO::PARAM_STR);
        $user_id_login = Yii::app()->session['id_user'];
        $command->bindParam(":update_by",$user_id_login, PDO::PARAM_INT);
        $command->execute();

        Yii::app()->session['full_name'] =  $user_model['full_name'];
    }
} 