<?php

/**
 * This is the model class for table "t_user_exam".
 *
 * The followings are the available columns in table 't_user_exam':
 * @property integer $id
 * @property integer $id_user
 * @property integer $id_exam
 * @property integer $finish_time
 * @property string $start_time
 * @property string $end_time
 * @property integer $is_view_result
 * @property string $create_at
 * @property integer $create_by
 * @property string $update_at
 * @property integer $update_by
 */
class TUserExam extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 't_user_exam';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
		//	array('id_user, id_exam, finish_time, is_view_result, create_by, update_by', 'numerical', 'integerOnly'=>true),
            array('id_user,id_exam', 'required' ,'on' => 'register'),
            array('id_user', 'myTestUniqueMethod'),
			array('start_time, end_time, create_at, update_at', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, id_user, id_exam, finish_time, start_time, end_time, is_view_result, create_at, create_by, update_at, update_by', 'safe', 'on'=>'search'),
		);
	}
    public function myTestUniqueMethod($attribute,$params)
    {

        //... and here your own pure SQL or ActiveRecord test ..
        // usage:
        // $this->firstField;
        // $this->secondField;
        // SELECT * FROM myTable WHERE firstField = $this->firstField AND secondField = $this->secondField ...
        // If result not empty ... error
         $item_count = Yii::app()->db->createCommand()
            ->select(array('id'))
            ->from(array('t_user_exam'))
             ->where(' id_user = :id_user and id_exam=:id_exam ',array('id_user'=>$this->id_user,':id_exam'=>$this->id_exam))
            ->queryScalar();
        var_dump($item_count);
        if ($item_count!=false)
        {
            $this->addError('firstField secondField', "Text of error");
        }

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
			'id_user' => ' User',
			'id_exam' => ' Exam',
			'finish_time' => 'Finish Time',
			'start_time' => 'Start Time',
			'end_time' => 'End Time',
			'is_view_result' => 'Is View Result',
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
		$criteria->compare('id_user',$this->id_user);
		$criteria->compare('id_exam',$this->id_exam);
		$criteria->compare('finish_time',$this->finish_time);
		$criteria->compare('start_time',$this->start_time,true);
		$criteria->compare('end_time',$this->end_time,true);
		$criteria->compare('is_view_result',$this->is_view_result);
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
	 * @return TUserExam the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

    public function listAllItem(){
        return $this->search('','');
    }

    public function search($m_id_user,$m_id_exam) {
        $page = (isset($_GET['page']) ? $_GET['page'] : 1);  // define the variable to “LIMIT” the query
        $item_results = Yii::app()->db->createCommand() //this query contains all the data
            ->select(array('tue.id','us.full_name','us.email','ex.subject'))
            ->from(array('m_exam ex', 'm_user us','t_user_exam tue'))
            ->where(' tue.id_user = us.id and tue.id_exam = ex.id ')
            ->order('tue.id DESC')
            ->limit(Yii::app()->params['listPerPage'], ($page-1) * Yii::app()->params['listPerPage']) // the trick is here!
            ->queryAll();

        $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
            ->select(array('count(tue.id) as count'))
            ->from(array('m_exam ex', 'm_user us','t_user_exam tue'))
            ->where(' tue.id_user = us.id and tue.id_exam = ex.id ')
            ->queryScalar(); // do not LIMIT it, this must count all items!

        if($m_id_user != '' || $m_id_exam != '' ){
            if ($m_id_user != '' && $m_id_exam != ''){
                    $sql=(' tue.id_user = us.id and tue.id_exam = ex.id and tue.id_user =:id_user and tue.id_exam =:id_exam ');
                }elseif ($m_id_user != ''){
                    $sql=(' tue.id_user = us.id and tue.id_exam = ex.id and tue.id_user =:id_user ');
                }else {
                    $sql=(' tue.id_user = us.id and tue.id_exam = ex.id and tue.id_exam =:id_exam ');
                }
            $item_results = Yii::app()->db->createCommand() //this query contains all the data
                ->select(array('tue.id','us.full_name','us.email','ex.subject'))
                ->from(array('m_exam ex', 'm_user us','t_user_exam tue'))
                ->where($sql)
                ->order('tue.id DESC')
                ->limit(Yii::app()->params['listPerPage'], ($page-1) * Yii::app()->params['listPerPage']); // the trick is here!

            if ($m_id_user != '' && $m_id_exam != ''){
                $item_results->bindParam(':id_user',  $m_id_user, PDO::PARAM_INT);
                $item_results->bindParam(':id_exam',  $m_id_exam, PDO::PARAM_INT);
            }elseif ($m_id_user != ''){
                $item_results->bindParam(':id_user',  $m_id_user, PDO::PARAM_INT);
            }else{
                $item_results->bindParam(':id_exam',  $m_id_exam, PDO::PARAM_INT);
            }

            $item_results= $item_results->queryAll();

            $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
                ->select(array('count(tue.id) as count'))
                ->from(array('m_exam ex', 'm_user us','t_user_exam tue'))
                ->where($sql);
            if ($m_id_user != '' && $m_id_exam != ''){
                $item_count->bindParam(':id_user',  $m_id_user, PDO::PARAM_INT);
                $item_count->bindParam(':id_exam',  $m_id_exam, PDO::PARAM_INT);
            }elseif ($m_id_user != ''){
                $item_count->bindParam(':id_user',  $m_id_user, PDO::PARAM_INT);
            }else{
                $item_count->bindParam(':id_exam',  $m_id_exam, PDO::PARAM_INT);
            }
            $item_count= $item_count->queryScalar(); // do not LIMIT it, this must count all items!
        }

        $pages = new CPagination($item_count);
        $pages->pageSize = Yii::app()->params['listPerPage'];
        return array('models' => $item_results, 'pages' => $pages,'itemCount'=>$item_count,'pageSize'=>Yii::app()->params['listPerPage']);

    }

    public function deleteUserExam($idkey) {

        $model_class = new TUserExam();
        $model_class=   $model_class->findByPk($idkey);

        if($model_class!=null){
            $id_user = $model_class->id_user;
            $id_exam = $model_class->id_exam;
            $command = Yii::app()->db->createCommand('DELETE FROM t_test where id_user=:id_user and id_exam=:id_exam ');
            $command->bindParam(":id_user",$id_user, PDO::PARAM_INT);
            $command->bindParam(":id_exam",$id_exam, PDO::PARAM_INT);
            $command->execute();

            $command = Yii::app()->db->createCommand('DELETE FROM  ' . $this->tableName() . '  where id=:id ');
            $command->bindParam(":id",$idkey, PDO::PARAM_INT);
            $command->execute();


        }
    }

    private function getTotalQuestion($id_exam){
        return $item_count = Yii::app()->db->createCommand()
            ->select(array('SUM(ex.num_easy + ex.num_normal + ex.num_hard) as totalQuestion'))
            ->from(array('m_exam ex'))
            ->where(' ex.id = :id_exam ',array(':id_exam'=>$id_exam))
            ->queryScalar();
    }

    private function getTotalCorrectAnswer($id_user,$id_exam){
        return $item_count = Yii::app()->db->createCommand()
            ->select(array('count(q.id) as totalAnswer'))
            ->from(array('t_test t','m_question q'))
            ->where(' t.id_question = q.id and t.id_answer = q.id_answer and t.id_user = :id_user and t.id_exam=:id_exam ',array('id_user'=>$id_user,':id_exam'=>$id_exam))
            ->queryScalar();
    }

    private function  getScore($item_results){
        $max = sizeof($item_results);
        for($i=0;$i<$max;$i++){
            $item_results[$i]['score']= '0%';
            $total_question = $this->getTotalQuestion($item_results[$i]['id_exam']);
            $total_answer = $this->getTotalCorrectAnswer($item_results[$i]['id_user'],$item_results[$i]['id_exam']);
            if($total_answer!=0){
                $item_results[$i]['score']= floor($total_answer/$total_question * 100) .'%';
            }
        }
        return $item_results;
    }

    private function getItemReportResultList($id_user,$page){
        if($id_user!=0){
            $query="  SELECT tue.id,tue.id_user,tue.id_exam,tue.start_time, us.full_name, ex.subject, SEC_TO_TIME(ex.finish_time * 60) as finish_time, SEC_TO_TIME(TIMESTAMPDIFF(SECOND,tue.start_time,tue.end_time )) as remaining_time,0 as score
                FROM t_user_exam tue, m_user us, m_exam ex
                WHERE tue.id_user = us.id and tue.id_exam = ex.id and tue.id_user=:id_user
                ORDER by tue.id desc
                LIMIT ".Yii::app()->params['listPerPage']." OFFSET ".($page-1) * Yii::app()->params['listPerPage'];

            $command = Yii::app()->db->createCommand($query );
            $command->bindParam(':id_user',  $id_user, PDO::PARAM_INT);
            $item_results =$command->queryAll();
        }else{
            $query="  SELECT tue.id,tue.id_user,tue.id_exam,tue.start_time, us.full_name, ex.subject, SEC_TO_TIME(ex.finish_time * 60) as finish_time, SEC_TO_TIME(TIMESTAMPDIFF(SECOND,tue.start_time,tue.end_time )) as remaining_time,0 as score
                FROM t_user_exam tue, m_user us, m_exam ex
                WHERE tue.id_user = us.id and tue.id_exam = ex.id
                ORDER by tue.id desc
                LIMIT ".Yii::app()->params['listPerPage']." OFFSET ".($page-1) * Yii::app()->params['listPerPage'];

            $command = Yii::app()->db->createCommand($query );
            $item_results =$command->queryAll();
        }
        return $item_results;
    }

    private  function getTotalCountReportResultList($id_user){
        if($id_user!=0){
            $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
                ->select(array('count(tue.id) as count'))
                ->from(array('m_exam ex', 'm_user us','t_user_exam tue'))
                ->where(' tue.id_user = us.id and tue.id_exam = ex.id and tue.id_user=:id_user',array(':id_user'=>$id_user))
                ->queryScalar(); // do not LIMIT it, this must count all items!
        }else{
            $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
                ->select(array('count(tue.id) as count'))
                ->from(array('m_exam ex', 'm_user us','t_user_exam tue'))
                ->where(' tue.id_user = us.id and tue.id_exam = ex.id ')
                ->queryScalar(); // do not LIMIT it, this must count all items!
        }
        return $item_count;
    }

    private function getItemReportSearchResultList($id_user,$id_exam,$page){
        if ($id_user != '' || $id_exam != ''){
            if ($id_user != '' && $id_exam != ''){
                $sql=" WHERE tue.id_user = us.id and tue.id_exam = ex.id and tue.id_user =:id_user and tue.id_exam =:id_exam " ;
            }elseif ($id_user != ''){
                $sql=" WHERE tue.id_user = us.id and tue.id_exam = ex.id and tue.id_user =:id_user ";
            }else {
                $sql=" WHERE tue.id_user = us.id and tue.id_exam = ex.id and tue.id_exam =:id_exam ";
            }
            $query="  SELECT tue.id,tue.id_user,tue.id_exam,tue.start_time, us.full_name, ex.subject, SEC_TO_TIME(ex.finish_time * 60) as finish_time, SEC_TO_TIME(TIMESTAMPDIFF(SECOND,tue.start_time,tue.end_time )) as remaining_time,0 as score
                       FROM t_user_exam tue, m_user us, m_exam ex ";
            $query.=$sql;
            $query.="ORDER by tue.id desc LIMIT ".Yii::app()->params['listPerPage']." OFFSET ".($page-1) * Yii::app()->params['listPerPage'];

            $command = Yii::app()->db->createCommand($query );
            if ($id_user != '' && $id_exam != ''){
                $command->bindParam(':id_user',  $id_user, PDO::PARAM_INT);
                $command->bindParam(':id_exam',  $id_exam, PDO::PARAM_INT);
            }elseif ($id_user != ''){
                $command->bindParam(':id_user',  $id_user, PDO::PARAM_INT);
            }else{
                $command->bindParam(':id_exam',  $id_exam, PDO::PARAM_INT);
            }
            $item_results =$command->queryAll();
        }else{
            $query="  SELECT tue.id,tue.id_user,tue.id_exam,tue.start_time, us.full_name, ex.subject, SEC_TO_TIME(ex.finish_time * 60) as finish_time, SEC_TO_TIME(TIMESTAMPDIFF(SECOND,tue.start_time,tue.end_time )) as remaining_time,0 as score
                FROM t_user_exam tue, m_user us, m_exam ex
                WHERE tue.id_user = us.id and tue.id_exam = ex.id
                ORDER by tue.id desc
                LIMIT ".Yii::app()->params['listPerPage']." OFFSET ".($page-1) * Yii::app()->params['listPerPage'];

            $command = Yii::app()->db->createCommand($query );
            $item_results =$command->queryAll();
        }
        return $item_results;
    }

    private  function getTotalCountSearchReportResultList($id_user,$id_exam){
        if ($id_user != '' || $id_exam != ''){
            if ($id_user != '' && $id_exam != ''){
                $sql=' tue.id_user = us.id and tue.id_exam = ex.id and tue.id_user =:id_user and tue.id_exam =:id_exam ';
                $condition = array(':id_user'=>$id_user,':id_exam'=>$id_exam);
            }elseif ($id_user != ''){
                $sql=' tue.id_user = us.id and tue.id_exam = ex.id and tue.id_user =:id_user ';
                $condition = array(':id_user'=>$id_user);
            }else {
                $sql=' tue.id_user = us.id and tue.id_exam = ex.id and tue.id_exam =:id_exam ';
                $condition = array(':id_exam'=>$id_exam);
            }
            $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
                ->select(array('count(tue.id) as count'))
                ->from(array('m_exam ex', 'm_user us','t_user_exam tue'))
                ->where($sql,$condition)
                ->queryScalar(); // do not LIMIT it, this must count all items!
        }else{
            $item_count = Yii::app()->db->createCommand() // this query get the total number of items,
                ->select(array('count(tue.id) as count'))
                ->from(array('m_exam ex', 'm_user us','t_user_exam tue'))
                ->where(' tue.id_user = us.id and tue.id_exam = ex.id ')
                ->queryScalar(); // do not LIMIT it, this must count all items!
        }
        return $item_count;
    }


    public function getReportList(){

        $page = (isset($_GET['page']) ? $_GET['page'] : 1);  // define the variable to “LIMIT” the query

        $item_results = $this->getItemReportResultList(0,$page);
        $item_results = $this->getScore($item_results);

        $item_count = $this->getTotalCountReportResultList(0);

        $pages = new CPagination($item_count);
        $pages->pageSize = Yii::app()->params['listPerPage'];
        Yii::app()->session['result']=$item_results;
        return array('models' => $item_results, 'pages' => $pages,'itemCount'=>$item_count,'pageSize'=>Yii::app()->params['listPerPage']);
    }

    public function getReportListByUser($id_user){

        $page = (isset($_GET['page']) ? $_GET['page'] : 1);  // define the variable to “LIMIT” the query

        $item_results = $this->getItemReportResultList($id_user,$page);
        $item_results = $this->getScore($item_results);

        $item_count = $this->getTotalCountReportResultList($id_user);

        $pages = new CPagination($item_count);
        $pages->pageSize = Yii::app()->params['listPerPage'];
        Yii::app()->session['result']=$item_results;

        return array('models' => $item_results, 'pages' => $pages,'itemCount'=>$item_count,'pageSize'=>Yii::app()->params['listPerPage']);
    }

    public function searchReportList($id_user,$id_exam){
        $page = (isset($_GET['page']) ? $_GET['page'] : 1);  // define the variable to “LIMIT” the query

        $item_results = $this->getItemReportSearchResultList($id_user,$id_exam,$page);
        $item_results = $this->getScore($item_results);

        $item_count = $this->getTotalCountSearchReportResultList($id_user,$id_exam);

        $pages = new CPagination($item_count);
        $pages->pageSize = Yii::app()->params['listPerPage'];
        Yii::app()->session['result']=$item_results;
        return array('models' => $item_results, 'pages' => $pages,'itemCount'=>$item_count,'pageSize'=>Yii::app()->params['listPerPage']);
    }


}
