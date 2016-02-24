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
class Customers extends CActiveRecord {
    private $_oldImageThumb;
    private $_oldImageFull;
    private $_model;

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Customers the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return 'dos_customers';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('customer_name, email, phone, website, tag, dos_bussiness_bussiness_id', 'required'),
            array('enable', 'numerical', 'integerOnly' => true),
            array('customer_name', 'length', 'max' => 70),
            array('pic_thumb, pic_full, website, tag, dos_bussiness_bussiness_id', 'length', 'max' => 100),
            array('email, phone', 'length', 'max' => 45),
            array('address', 'length', 'max' => 60),
            array('agent_sale, agent_tech', 'length', 'max' => 8),
            array('email', 'email'),
            array('expired_date', 'safe'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('customer_id, customer_name, pic_thumb, pic_full, email, phone, address, website, agent_sale, agent_tech, created_date, expired_date, tag, enable, dos_bussiness_bussiness_id', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'Bussiness' => array(self::BELONGS_TO, 'Bussiness', 'dos_bussiness_bussiness_id'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'customer_id' => 'Customer',
            'customer_name' => 'Customer Name',
            'pic_thumb' => 'Pic Thumb',
            'pic_full' => 'Pic Full',
            'email' => 'Email',
            'phone' => 'Phone',
            'address' => 'Address',
            'website' => 'Website',
            'agent_sale' => 'Agent Sale',
            'agent_tech' => 'Agent Tech',
            'created_date' => 'Created Date',
            'expired_date' => 'Expired Date',
            'tag' => 'Tag',
            'enable' => 'Enable',
            'dos_bussiness_bussiness_id' => 'Dos Bussiness Bussiness',
        );
    }

    /**
     * Retrieves a list of models based on the current search/filter conditions.
     * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
     */
    public function search() {
        // Warning: Please modify the following code to remove attributes that
        // should not be searched.

        $criteria = new CDbCriteria;

        $criteria->compare('customer_id', $this->customer_id);
        $criteria->compare('customer_name', $this->customer_name, true);
        $criteria->compare('pic_thumb', $this->pic_thumb, true);
        $criteria->compare('pic_full', $this->pic_full, true);
        $criteria->compare('email', $this->email, true);
        $criteria->compare('phone', $this->phone, true);
        $criteria->compare('address', $this->address, true);
        $criteria->compare('website', $this->website, true);
        $criteria->compare('agent_sale', $this->agent_sale, true);
        $criteria->compare('agent_tech', $this->agent_tech, true);
        $criteria->compare('created_date', $this->created_date, true);
        $criteria->compare('expired_date', $this->expired_date, true);
        $criteria->compare('tag', $this->tag, true);
        $criteria->compare('enable', $this->enable);
        $criteria->compare('dos_bussiness_bussiness_id', $this->dos_bussiness_bussiness_id, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public function afterFind() {
        parent::afterFind();
        $this->_oldImageThumb = $this->pic_thumb;
        $this->_oldImageFull = $this->pic_full;
    }

    public function beforeSave() {
        if ($this->isNewRecord) {
            if ($_FILES[ucfirst(Yii::app()->controller->id)]['name']['pic_thumb']) {
                Yii::import('ext.simpleImage.CSimpleImage');
                $file = new CSimpleImage();
                $this->pic_thumb = $file->processUpload($_FILES[ucfirst(Yii::app()->controller->id)]['name']['pic_thumb'], $_FILES[ucfirst(Yii::app()->controller->id)]['tmp_name']['pic_thumb'], 150, 130, '/public/userfiles/image/dos/image/' . Yii::app()->controller->id, $this->customer_name . '-thumb');
            }
            if ($_FILES[ucfirst(Yii::app()->controller->id)]['name']['pic_full']) {
                Yii::import('ext.simpleImage.CSimpleImage');
                $file = new CSimpleImage();
                $this->pic_full = $file->processUpload($_FILES[ucfirst(Yii::app()->controller->id)]['name']['pic_full'], $_FILES[ucfirst(Yii::app()->controller->id)]['tmp_name']['pic_full'], 665, 1200, '/public/userfiles/image/dos/image/' . Yii::app()->controller->id, $this->customer_name);
            }
        } else {
            //check file old and upload
            if ($_FILES[ucfirst(Yii::app()->controller->id)]['name']['pic_thumb']) {
                Yii::import('ext.simpleImage.CSimpleImage');
                $file = new CSimpleImage();
                $this->pic_thumb = $file->processUpload($_FILES[ucfirst(Yii::app()->controller->id)]['name']['pic_thumb'], $_FILES[ucfirst(Yii::app()->controller->id)]['tmp_name']['pic_thumb'], 150, 130, '/public/userfiles/image/dos/image/' . Yii::app()->controller->id, $this->customer_name . '-thumb', $this->_oldImageThumb);
            } else {
                $this->pic_thumb = $this->_oldImageThumb;
            }
            //check file old and upload
            if ($_FILES[ucfirst(Yii::app()->controller->id)]['name']['pic_full']) {
                Yii::import('ext.simpleImage.CSimpleImage');
                $file = new CSimpleImage();
                $this->pic_full = $file->processUpload($_FILES[ucfirst(Yii::app()->controller->id)]['name']['pic_full'], $_FILES[ucfirst(Yii::app()->controller->id)]['tmp_name']['pic_full'], 665, 1200, '/public/userfiles/image/dos/image/' . Yii::app()->controller->id, $this->customer_name, $this->_oldImageFull);
            } else {
                $this->pic_full = $this->_oldImageFull;
            }
        }

        return parent::beforeSave();
    }

    //Back end - List item admin
    public function listAllItem() {
        $criteria = new CDbCriteria();
        $criteria->order = 'created_date DESC';
        $criteria->condition = 'enable=1';

        $count = $this::model()->count($criteria);

        // elements per page
        $pages = new CPagination($count);
        $pages->pageSize = 16;
        $pages->applyLimit($criteria);

        return array('models' => $this::model()->findAll($criteria), 'pages' => $pages);
    }

    //Back end - List item admin
    public function listItemByBusinessID($bussiness_id) {
        $criteria = new CDbCriteria();
        $criteria->order = 'created_date DESC';
        $criteria->condition = 'dos_bussiness_bussiness_id=:business AND enable=1';
        $criteria->params = array(':business' => $bussiness_id);

        $count = $this::model()->count($criteria);

        // elements per page
        $pages = new CPagination($count);
        $pages->pageSize = 16;
        $pages->applyLimit($criteria);

        return array('models' => $this::model()->findAll($criteria), 'pages' => $pages);
    }

    public function detailRecord($id) {
        $command = Yii::app()->db->createCommand('SELECT customer_id, customer_name, pic_full, address, website, bussiness_id, bussiness_name FROM ' . $this->tableName() . ', dos_bussiness WHERE ' . $this->tableName() . '.dos_bussiness_bussiness_id = dos_bussiness.bussiness_id AND tag=:tag AND enable=1');
        $command->bindParam(':tag', $id, PDO::PARAM_STR);
        return $command->queryRow();
    }

    //Back end - List item admin
    public function listItemAdmin() {
        $criteria = new CDbCriteria();
        $criteria->order = 'created_date DESC';

        $count = $this::model()->count($criteria);

        // elements per page
        $pages = new CPagination($count);
        $pages->pageSize = 16;
        $pages->applyLimit($criteria);

        return array('models' => $this::model()->findAll($criteria), 'pages' => $pages);
    }

    //Back end - Update Record for Administrator
    private function updateShowHidden($enable, $customer_id) {
        $command = Yii::app()->db->createCommand('UPDATE ' . $this->tableName() . ' SET enable=:enable WHERE customer_id=:customer_id');
        $command->bindParam(":enable", $enable, PDO::PARAM_INT);
        $command->bindParam(":customer_id", $customer_id, PDO::PARAM_STR);
        return $command->execute();
    }

    //Back end - Delete Record
    private function deleteRecord($id) {
        $item = $this::model()->find('customer_id=:id', array(':id' => $id));

        $common_class = new Common();
        $common_class->removePic($item->pic_thumb, 0, 1);
        $common_class->removePic($item->pic_full, 0, 1);

        $this::model()->findByPk($id)->delete(); //delete record_id
    }

    //Back end - Active Item
    public function activeItem($data) {
        $flag = $data->getPost('factive', 'disable');
        $ids = $data->getPost('ids', '');

        if (!empty($ids)) {
            if (!is_array($ids)) {
                $record_id[0] = $ids;
            } else {
                $record_id = $ids;
            }
            unset($ids);

            if ($flag) {
                if ($flag == 'export') {
                    foreach ($record_id as $value) {
                        $id = strval($value);
                        if ($id) {
                            DatabaseHelper::export(trim($id), 'user');
                        }
                    }
                } else {
                    //show or hidden
                    $active = ($flag == "enable") ? 1 : 0;

                    foreach ($record_id as $value) {
                        $id = strval($value);
                        if ($id) {
                            $this->updateShowHidden($active, $id);
                        }
                    }
                }

            } else {
                //delete
                foreach ($record_id as $value) {
                    $id = strval($value);
                    if ($id) {
                        $this->deleteRecord($id);
                    }
                }
            }
        }
    }

    //Back end - Get record to Edit
    public function loadEdit($id) {
        $this->_model = $this::model()->findByPk($id);

        if ($this->_model === null) {
            throw new CHttpException(404, 'The requested page does not exist.');
        }
        return $this->_model;
    }

    //Back end - Change info
    /*public function changeInfo($customer_id, $customer_name, $email, $phone, $address, $website, $expired_date, $dos_bussiness_bussiness_id) {
        $command = Yii::app()->db->createCommand('UPDATE ' . $this->tableName() . ' SET customer_name=:customer_name, email=:email, phone=:phone, address=:address, website=:website, expired_date=:expired_date, dos_bussiness_bussiness_id=:bussiness WHERE customer_id=:customer_id');

        $command->bindParam(":customer_name", $customer_name, PDO::PARAM_STR);
        $command->bindParam(":email", $email, PDO::PARAM_STR);
        $command->bindParam(":phone", $phone, PDO::PARAM_STR);
        $command->bindParam(":address", $address, PDO::PARAM_STR);
        $command->bindParam(":website", $website, PDO::PARAM_STR);
        $command->bindParam(":expired_date", $expired_date, PDO::PARAM_STR);
        $command->bindParam(":bussiness", $dos_bussiness_bussiness_id, PDO::PARAM_STR);
        $command->bindParam(":customer_id", $customer_id, PDO::PARAM_INT);
        $command->execute();
    }*/
}