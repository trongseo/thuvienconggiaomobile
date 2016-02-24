<?php

/**
 * This is the model class for table "dos_module_menus".
 *
 * The followings are the available columns in table 'dos_module_menus':
 * @property string $menu
 * @property string $menuen
 * @property string $url
 * @property string $target
 * @property integer $position
 * @property string $dos_usernames_username
 *
 * The followings are the available model relations:
 * @property DosUsernames $dosUsernamesUsername
 */
class Menus extends CActiveRecord {

	/**
	 * Returns the static model of the specified AR class.
	 * @return Menus the static model class
	 */
	public static function model($className = __CLASS__) {
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName() {
		return 'dos_module_menus';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules() {
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('menu, dos_usernames_username', 'required'),
			array('position', 'numerical', 'integerOnly' => true),
			array('menu, menuen', 'length', 'max' => 50),
			array('url', 'length', 'max' => 100),
			array('target', 'length', 'max' => 20),
			array('dos_usernames_username', 'length', 'max' => 45),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('menu, menuen, url, target, position, dos_usernames_username', 'safe', 'on' => 'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations() {
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
			//'dosUsernamesUsername' => array(self::BELONGS_TO, 'DosUsernames', 'dos_usernames_username'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels() {
		return array(
			'menu' => 'Menu',
			'menuen' => 'Menuen',
			'url' => 'Url',
			'target' => 'Target',
			'position' => 'Position',
			'dos_usernames_username' => 'Dos Usernames Username',
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

		$criteria->compare('menu', $this->menu, true);
		$criteria->compare('menuen', $this->menuen, true);
		$criteria->compare('url', $this->url, true);
		$criteria->compare('target', $this->target, true);
		$criteria->compare('position', $this->position);
		$criteria->compare('dos_usernames_username', $this->dos_usernames_username, true);

		return new CActiveDataProvider($this, array(
			'criteria' => $criteria,
		));
	}

	public static function getSeoPage($module, $user) {
		$command = Yii::app()->db->createCommand('SELECT title' . LANG . ', description' . LANG . ' FROM dos_module_menus WHERE url=:url AND dos_usernames_username=:user');
		$command->bindParam(":url", $module, PDO::PARAM_STR);
		$command->bindParam(":user", $user, PDO::PARAM_STR);
		return $command->queryRow();
	}

	public function setMenu($user) {
		$command = Yii::app()->db->createCommand('SELECT menu' . LANG . ', url, target FROM ' . $this->tableName() . ' WHERE dos_usernames_username=:user ORDER BY position ASC');
		$command->bindParam(":user", $user, PDO::PARAM_STR);
		return $command->queryAll();
	}

    public function addModuleMenu($user, $chooses) {
        $langs = Langs::getLangs(0); //get lang list
        //Insert default
        $command = Yii::app()->db->createCommand("INSERT INTO " . $this->tableName() . " (`menu`, `url`, `position`, `dos_usernames_username`) VALUES ('Trang chủ', 'default', 1, :username)");
        $command->bindParam(":username", $user, PDO::PARAM_STR);
        $command->execute();

        $i = 2;
        foreach ($chooses as $choose) {
			$command = Yii::app()->db->createCommand('INSERT INTO ' . $this->tableName() . ' (`menu`, `url`, `position`, `dos_usernames_username`) VALUES (:menu, :url, :position, :username)');
			foreach ($langs as $lang) {
                if ($lang['lang_name'] == $choose) {
                    $command->bindParam(":menu", $lang['lang'], PDO::PARAM_STR);
                }
            }

			$command->bindParam(":url", $choose, PDO::PARAM_STR);
			$command->bindParam(":position", $i, PDO::PARAM_INT);
			$command->bindParam(":username", $user, PDO::PARAM_STR);
			$command->execute();
			$i++;
		}
    }

	public function listMenuByAdmin($type = 0) {
		$user = Yii::app()->user->id;
		$command = Yii::app()->db->createCommand('SELECT menu, menuen, url, target, position, title, titleen, description, descriptionen FROM ' . $this->tableName() . ' WHERE dos_usernames_username=:user ORDER BY position ASC');
		if ($type == 1) {
			$command = Yii::app()->db->createCommand('SELECT menu, menuen, url, target, position, title, titleen, description, descriptionen FROM ' . $this->tableName() . ' WHERE target = \'\' AND dos_usernames_username=:user ORDER BY position ASC');
		}
		$command->bindParam(":user", $user, PDO::PARAM_STR);
		return $command->queryAll();
	}

	//Back end - Add item
	public function addItem($data = NULL) {
		$this->deleteRecord(Yii::app()->user->id); //delete

		$menu = $data->getPost('menu', '');
		$menuen = $data->getPost('menuen', '');
		$url = $data->getPost('url', '');
		$target = $data->getPost('target', '');
		$position = $data->getPost('position', '');

		for ($i = 0; $i < 10; $i++) {
			if (!empty($menu[$i]) && !empty($url[$i])) {
				$this->insertItem(trim($menu[$i]), ($menuen) ? trim($menuen[$i]) : '', trim($url[$i]), trim($target[$i]), trim($position[$i]));
			}
		}
	}

	//Back end - insert item
	private function insertItem($menu, $menuen, $url, $target, $position) {
		$user = Yii::app()->user->id;
		$command = Yii::app()->db->createCommand('INSERT INTO ' . $this->tableName() . ' (`menu`, `menuen`, `url`, `target`, `position`, `dos_usernames_username`) VALUES (:menu, :menuen, :url, :target, :position, :user)');
		$command->bindParam(":menu", $menu, PDO::PARAM_STR);
		$command->bindParam(":menuen", $menuen, PDO::PARAM_STR);
		$command->bindParam(":url", $url, PDO::PARAM_STR);
		$command->bindParam(":target", $target, PDO::PARAM_STR);
		$command->bindParam(":position", $position, PDO::PARAM_INT);
		$command->bindParam(":user", $user, PDO::PARAM_STR);
		$command->execute();
	}

	//Back end - delete item and for Administrator
	public function deleteRecord($user) {
		$command = Yii::app()->db->createCommand('DELETE FROM ' . $this->tableName() . ' WHERE dos_usernames_username=:user');
		$command->bindParam(":user", $user, PDO::PARAM_STR);
		$command->execute();
	}

	//Back end - Add item
	public function addItemSeo($data = NULL) {
		$menu = $data->getPost('menu', '');
		$title = $data->getPost('title', '');
		$titleen = $data->getPost('titleen', '');
		$description = $data->getPost('description', '');
		$descriptionen = $data->getPost('descriptionen', '');

		$size = count($menu);
		for ($i = 0; $i < $size; $i++) {
			$this->updateItem(trim($title[$i]), trim($titleen[$i]), trim($description[$i]), trim($descriptionen[$i]), trim($menu[$i]));
		}
	}

	private function updateItem($title, $titleen, $description, $descriptionen, $menu) {
		$command = Yii::app()->db->createCommand('UPDATE ' . $this->tableName() . ' SET title=:title, titleen=:titleen, description=:description, descriptionen=:descriptionen WHERE menu=:menu');
		$command->bindParam(":title", $title, PDO::PARAM_STR);
		$command->bindParam(":titleen", $titleen, PDO::PARAM_STR);
		$command->bindParam(":description", $description, PDO::PARAM_STR);
		$command->bindParam(":descriptionen", $descriptionen, PDO::PARAM_STR);
		$command->bindParam(":menu", $menu, PDO::PARAM_STR);
		$command->execute();
	}
}