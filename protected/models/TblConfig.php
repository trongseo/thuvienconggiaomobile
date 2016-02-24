<?php

/**
 * This is the model class for table "config".
 *
 * The followings are the available columns in table 'config':
 * @property string $name
 * @property string $address
 * @property string $phone
 * @property string $fax
 * @property string $content
 * @property string $change
 * @property string $site
 * @property string $title
 * @property string $keyword
 * @property string $description
 * @property string $email
 * @property string $logo
 * @property string $tax
 * @property string $ifame
 * @property string $google
 * @property string $food
 * @property string $deliveryfee
 * @property string $deliverytime
 * @property string $mon_from
 * @property string $mon_to
 * @property string $tue_from
 * @property string $tue_to
 * @property string $wed_from
 * @property string $wed_to
 * @property string $thu_from
 * @property string $thu_to
 * @property string $fri_from
 * @property string $fri_to
 * @property string $sat_from
 * @property string $sat_to
 * @property string $sun_from
 * @property string $sun_to
 * @property string $mobile
 */
class TblConfig extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'config';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('tax', 'required'),
			array('name, address, email, logo, tax, food, deliveryfee, deliverytime', 'length', 'max'=>255),
			array('phone, fax, site, mobile', 'length', 'max'=>50),
			array('mon_from, mon_to, tue_from, tue_to, wed_from, wed_to, thu_from, thu_to, fri_from, fri_to, sat_from, sat_to, sun_from, sun_to', 'length', 'max'=>10),
			array('content, change, title, keyword, description, ifame, google', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('name, address, phone, fax, content, change, site, title, keyword, description, email, logo, tax, ifame, google, food, deliveryfee, deliverytime, mon_from, mon_to, tue_from, tue_to, wed_from, wed_to, thu_from, thu_to, fri_from, fri_to, sat_from, sat_to, sun_from, sun_to, mobile', 'safe', 'on'=>'search'),
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
			'name' => 'Name',
			'address' => 'Address',
			'phone' => 'Phone',
			'fax' => 'Fax',
			'content' => 'Content',
			'change' => 'Change',
			'site' => 'Site',
			'title' => 'Title',
			'keyword' => 'Keyword',
			'description' => 'Description',
			'email' => 'Email',
			'logo' => 'Logo',
			'tax' => 'Tax',
			'ifame' => 'Ifame',
			'google' => 'Google',
			'food' => 'Food',
			'deliveryfee' => 'Deliveryfee',
			'deliverytime' => 'Deliverytime',
			'mon_from' => 'Mon From',
			'mon_to' => 'Mon To',
			'tue_from' => 'Tue From',
			'tue_to' => 'Tue To',
			'wed_from' => 'Wed From',
			'wed_to' => 'Wed To',
			'thu_from' => 'Thu From',
			'thu_to' => 'Thu To',
			'fri_from' => 'Fri From',
			'fri_to' => 'Fri To',
			'sat_from' => 'Sat From',
			'sat_to' => 'Sat To',
			'sun_from' => 'Sun From',
			'sun_to' => 'Sun To',
			'mobile' => 'Mobile',
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

		$criteria->compare('name',$this->name,true);
		$criteria->compare('address',$this->address,true);
		$criteria->compare('phone',$this->phone,true);
		$criteria->compare('fax',$this->fax,true);
		$criteria->compare('content',$this->content,true);
		$criteria->compare('change',$this->change,true);
		$criteria->compare('site',$this->site,true);
		$criteria->compare('title',$this->title,true);
		$criteria->compare('keyword',$this->keyword,true);
		$criteria->compare('description',$this->description,true);
		$criteria->compare('email',$this->email,true);
		$criteria->compare('logo',$this->logo,true);
		$criteria->compare('tax',$this->tax,true);
		$criteria->compare('ifame',$this->ifame,true);
		$criteria->compare('google',$this->google,true);
		$criteria->compare('food',$this->food,true);
		$criteria->compare('deliveryfee',$this->deliveryfee,true);
		$criteria->compare('deliverytime',$this->deliverytime,true);
		$criteria->compare('mon_from',$this->mon_from,true);
		$criteria->compare('mon_to',$this->mon_to,true);
		$criteria->compare('tue_from',$this->tue_from,true);
		$criteria->compare('tue_to',$this->tue_to,true);
		$criteria->compare('wed_from',$this->wed_from,true);
		$criteria->compare('wed_to',$this->wed_to,true);
		$criteria->compare('thu_from',$this->thu_from,true);
		$criteria->compare('thu_to',$this->thu_to,true);
		$criteria->compare('fri_from',$this->fri_from,true);
		$criteria->compare('fri_to',$this->fri_to,true);
		$criteria->compare('sat_from',$this->sat_from,true);
		$criteria->compare('sat_to',$this->sat_to,true);
		$criteria->compare('sun_from',$this->sun_from,true);
		$criteria->compare('sun_to',$this->sun_to,true);
		$criteria->compare('mobile',$this->mobile,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return TblConfig the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
