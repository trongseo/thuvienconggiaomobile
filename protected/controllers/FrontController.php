<?php
Yii::app()->theme = 'user-theme';
class FrontController extends CController {

    public $activemenu;
    public function actionIntro() {
       // var_dump($_SERVER["SERVER_NAME"]);
        $guid_id = '111';
        $mystring=$_SERVER["SERVER_NAME"];
        $pos = strpos($mystring, "tanphucglass");


        if ($pos === false) {
            $guid_id = '1';
        }

        $data = CommonDB::GetDataRowKeyGuid("aaachung",$guid_id);
        $this->pageTitle = $data["aaatitle"];
        $this->activemenu="intro";
        $this->render('intro',  array('hsTable'=>$data));
    }
    public function actionContact() {
        $this->activemenu="contact";
		$query1="select * from nvkinhdoanh order by ten";

            $datanv = CommonDB::GetAll($query1,[]);
        if( isset($_POST["btnsave"]) )
        {
            Yii::app()->theme = '';

            $hsTable["lienhe_guid"]= Common::guid();
            $hsTable["hoten"]=$_REQUEST["hoten"];
            $hsTable["email"]=$_REQUEST["email"];
            $hsTable["dienthoai"]=$_REQUEST["dienthoai"];
            $hsTable["fax"]="";
            $hsTable["diachi"]="";
            $hsTable["tieude"]=$_REQUEST["tieude"];
            $hsTable["noidung"]=$_REQUEST["noidung"];
            $queryI="insert into lienhe(lienhe_guid,hoten,email,dienthoai,fax,diachi,tieude,noidung) values(:lienhe_guid,:hoten,:email,:dienthoai,:fax,:diachi,:tieude,:noidung)";
            CommonDB::runSQL($queryI,$hsTable);
            $drG = CommonDB::GetDataRowKeyGuid("aaachung","2");
            $emailist = $drG["mo_ta_dai"];
            $noidungemail= $hsTable["hoten"].'<br/> Điện thoại:'.$hsTable["dienthoai"].'<br/> Email:'.$hsTable["email"].'<br/>'.$hsTable["tieude"].'<br/>'. $hsTable["noidung"];
            SendMail("info@kinhtanphuc.com",$emailist,"Khach hang lien he :".$_REQUEST["hoten"]."".$hsTable["dienthoai"],$noidungemail);
            if($_REQUEST["emailto"]!=""){
                SendMail("info@kinhtanphuc.com",$_REQUEST["emailto"],"Khach hang lien he :".$_REQUEST["hoten"]."".$hsTable["dienthoai"],$noidungemail);
            }
            echo "ok";Yii::app()->end();
            return;

        }
        $this->pageTitle = "Liên hệ";
        $guid_id = '333';
        $mystring=$_SERVER["SERVER_NAME"];
        $pos = strpos($mystring, "tanphucglass");


        if ($pos === false) {
            $guid_id = '3';
        }
        $data = CommonDB::GetDataRowKeyGuid("aaachung",$guid_id);
        $this->render('contact',   array('hsTable'=>$data,'datanv'=>$datanv));
    }
    public function actionSupport() {

        $ma_sp="";
        $query="select aa.ma_sp,a.video_list_guid,a.san_pham_guid,a.text_embed,a.mo_ta,a.mo_ta_ngan from video_list a ,`san_pham` aa WHERE a.san_pham_guid=aa.san_pham_guid order by a.date_create desc";
        $data=[];
        if( isset($_POST["btnsave"]) ){
            $hsTable["ma_sp"]="%".$_REQUEST["ma_sp"]."%";
            $ma_sp=$_REQUEST["ma_sp"];
            $query="select aa.ma_sp,a.video_list_guid,a.san_pham_guid,a.text_embed,a.mo_ta,a.mo_ta_ngan
             from video_list a ,`san_pham` aa WHERE a.san_pham_guid=aa.san_pham_guid and ma_sp like :ma_sp order by a.date_create desc";

            $data = CommonDB::GetAll($query,$hsTable);
        }else{
            $data = CommonDB::GetAll($query,[]);
        }

        $this->pageTitle = "Hỗ trợ kỹ thuật";
        $this->activemenu="support";
        $this->render('support',  array('hsTable'=>$data,'ma_sp'=>$ma_sp));
    }
    public function actionSupportDetail() {

        $ma_sp="";
        $data=[];
        $hsTable["san_pham_guid"]="".$_REQUEST["guid"]."";

        $query="select aa.ma_sp,a.video_list_guid,a.san_pham_guid,a.text_embed,a.mo_ta,a.mo_ta_ngan
         from video_list a ,`san_pham` aa WHERE a.san_pham_guid=aa.san_pham_guid and a.san_pham_guid=:san_pham_guid order by a.date_create desc";
      $data = CommonDB::GetAll($query,$hsTable);


        $this->pageTitle = "Chi tiết hỗ trợ kỹ thuật";
        $this->activemenu="support";
        $this->render('supportdetail',  array('hsTable'=>$data[0],'ma_sp'=>$ma_sp));
    }
    public function actionSanphamchitiet() {
        $this->activemenu="sanpham";
         $guid_id = Common::getPara("san_pham_guid");
        $datasan_pham_loai_guid =  CommonDB::GetAll(" SELECT * FROM san_pham_loai ORDER BY so_thu_tu",[]);
        $dataspshow = $this->getChiTiet($guid_id);
        $this->pageTitle = "Chi tiết sản phẩm ";
        $this->render('sanphamdetail',  array('dataspshow'=>$dataspshow,'dataloaisp'=>$datasan_pham_loai_guid));
    }
    public function actionDathang() {
        $this->activemenu="dathang";
        $guid_id = Common::getPara("san_pham_guid");
        if( isset($_POST["btnsave"]) )
        {
            Yii::app()->theme = '';
            $guid_id=Yii::app()->session['san_pham_guid'];
            $hsTable["dondathang_guid"]= Common::guid();
            $hsTable["san_pham_guid"]=$guid_id;
            $hsTable["hoten"]=$_REQUEST["hoten"];
            $hsTable["email"]=$_REQUEST["email"];
            $hsTable["dienthoai"]=$_REQUEST["dienthoai"];
            $hsTable["fax"]="";
            $hsTable["diachi"]="";
            $hsTable["tieude"]=$_REQUEST["tieude"];
            $hsTable["noidung"]=$_REQUEST["noidung"];
            $hsTable["san_pham_price_guid"]=Yii::app()->session['san_pham_price_guid'];
            $queryI="insert into dondathang(san_pham_price_guid,dondathang_guid,san_pham_guid,hoten,email,dienthoai,fax,diachi,tieude,noidung) values(:san_pham_price_guid,:dondathang_guid,:san_pham_guid,:hoten,:email,:dienthoai,:fax,:diachi,:tieude,:noidung)";
            CommonDB::runSQL($queryI,$hsTable);
            $drG = CommonDB::GetDataRowKeyGuid("aaachung","2");
            $emailist = $drG["mo_ta_dai"];
           // http://kinhtanphuc.com/index.php?r=front/dathang&san_pham_guid=

            $noidungemail= $hsTable["hoten"].'<br/> Điện thoại:'.$hsTable["dienthoai"].'<br/> Email:'.$hsTable["email"].'<br/>'.$hsTable["tieude"].'<br/>'. $hsTable["noidung"];
            $noidungemail .= '<br/> Xem sản phẩm: <a href="http://kinhtanphuc.com/index.php?r=front/sanpham&guid='.$guid_id.'" >http://kinhtanphuc.com/index.php?r=front/sanpham&guid='.$guid_id.'</a>';
            SendMail("info@kinhtanphuc.com",$emailist,"Đơn hàng mới :".$_REQUEST["hoten"]."".$hsTable["dienthoai"],$noidungemail);

            echo "ok";Yii::app()->end();
            return;

        }else{
            Yii::app()->session['san_pham_price_guid'] =$_REQUEST["san_pham_price_guid"];;
            Yii::app()->session['san_pham_guid'] =$guid_id;
        }
		$san_pham_price_guid = Common::getPara("san_pham_price_guid");
        $sqlDetail ="SELECT  a.`san_pham_price_guid`,color_name,size_text, REPLACE( FORMAT(sp_price, 0),',','.') as  sp_price  FROM `san_pham_price` a,`m_size` b , m_color c
WHERE a.`m_size_guid`= b.`m_size_guid`
        AND c.`color_id` = a.`color_id`
        AND   a.`san_pham_price_guid`='$san_pham_price_guid' ";

		$datasan_pham_price =  CommonDB::GetAll($sqlDetail,[]);
        $rowsan_pham_price=$datasan_pham_price[0];
        $dataspshow = $this->getChiTiet($guid_id);
        $this->render('dathang',  array('dataspshow'=>$dataspshow,'rowsan_pham_price'=>$rowsan_pham_price));
    }
    public function getChiTiet($guid_id){
        $datasp= CommonDB::GetDataRowKeyGuid("san_pham",$guid_id);
        $tenloai =  CommonDB::GetDataRowKeyGuid('san_pham_loai',$datasp['san_pham_loai_guid'])   ;
        $datasp['ten_loai']=$tenloai['ten_loai'];

        $queryH = " SELECT * FROM `san_pham_hinh` WHERE san_pham_guid='$guid_id'   ORDER BY color_guid_id ";
        $dataHinh = CommonDB::GetAll($queryH,[]);
        $san_pham_loai_guid=$datasp["san_pham_loai_guid"];

        return array('datasp'=>$datasp,'dataHinh'=>$dataHinh);
    }
    public function actionSanPham() {
        $this->activemenu="sanpham";

        $guid_id = '1';
        $san_pham_loai_guid="";
         $datasp=[];
        $spdautienid = Common::getPara("guid");
        if($spdautienid==""){
            //san pham nay co bao nhieu mau
            $queryTop = "  SELECT san_pham_guid FROM san_pham WHERE san_pham_loai_guid=(
                        SELECT san_pham_loai_guid FROM san_pham_loai ORDER BY so_thu_tu LIMIT 1 ) and isshowhome=1 ORDER BY date_update desc ";

            $san_pham_loai_guid = Common::getPara("san_pham_loai_guid");
            if( $san_pham_loai_guid!=""){
                $queryTop = "  SELECT san_pham_guid FROM san_pham WHERE san_pham_loai_guid='$san_pham_loai_guid' and isshowhome=1 ORDER BY date_update desc limit 1 ";
            }
            //var_dump($queryTop);
            $dataSP =   CommonDB::GetAll($queryTop,[]);
            if(count($dataSP)>0){
               // var_dump($dataSP) ;exit();
                $spdautienid=$dataSP[0]["san_pham_guid"];
            }else{
                $queryTop = "  SELECT san_pham_guid FROM san_pham WHERE san_pham_loai_guid=(
                        SELECT san_pham_loai_guid FROM san_pham_loai ORDER BY so_thu_tu LIMIT 1 ) ORDER BY date_update desc ";
                $dataSP =   CommonDB::GetAll($queryTop,[]);
                $spdautienid=$dataSP[0]["san_pham_guid"];
            }
        }

        $datasan_pham_loai_guid =  CommonDB::GetAll(" SELECT * FROM san_pham_loai where isshow=1 ORDER BY so_thu_tu",[]);
        //$spdautienid='45D2ACE6-D24E-CB65-149C-7A32C24BB3EF';//$datasp[0]["san_pham_guid"];

      // var_dump($spdautienid ); exit();
        $dataspshow = [];
        $noshow =1;
        if($spdautienid!=""){
            $dataspshow = $this->getDetailSP($spdautienid);
            $noshow =0;
        }
        $this->pageTitle = "Sản phẩm ";
        $san_pham_loai_guid=$san_pham_loai_guid;
        if(count($dataspshow)>0)
        {$san_pham_loai_guid =$dataspshow["datasp"]["san_pham_loai_guid"];}
        $this->render('sanpham',  array('noshow'=>$noshow,'san_pham_loai_guid'=>$san_pham_loai_guid,'dataloaisp'=>$datasan_pham_loai_guid,'dataspshow'=>$dataspshow));
    }
    public function getDetailSP($guid_id){
        $datasp= CommonDB::GetDataRowKeyGuid("san_pham",$guid_id);
       $tenloai =  CommonDB::GetDataRowKeyGuid('san_pham_loai',$datasp['san_pham_loai_guid'])   ;
        $datasp['danhmuc']=$tenloai['ten_loai'];
        $datamausp= CommonDB::GetAll("SELECT * FROM m_color WHERE color_id IN (
                                        SELECT color_id FROM `san_pham_price`
                                        WHERE `san_pham_guid`='$guid_id' ) ",[]);
        $datakichco=[];
        if(count($datamausp)>0){
            $color_id= $datamausp[0]['color_id'];

            $datakichco= CommonDB::GetAll("SELECT *,'$color_id' AS color_id,'$guid_id' as san_pham_guid FROM `m_size` WHERE m_size_guid IN (
                                        SELECT m_size_guid FROM `san_pham_price`
                                        WHERE `san_pham_guid`='$guid_id' AND color_id='$color_id' order by  size_text  )",[]);
        }
        $san_pham_loai_guid=$datasp["san_pham_loai_guid"];
        $dataSPCungLoai = CommonDB::GetAll("SELECT * from san_pham where  san_pham_loai_guid='".$san_pham_loai_guid."' order by ma_sp",[]);
        return array('datasp'=>$datasp,'datakichco'=>$datakichco,'datamausp'=>$datamausp,'dataSPCungLoai'=>$dataSPCungLoai);
    }
    public function actionAjaxImageColor() {
        Yii::app()->theme = '';
        $san_pham_guid = $_REQUEST["san_pham_guid"];//luon luon co hidden field
        $color_id = $_REQUEST["color_id"];//luon luon co hidden field
        $subquery=" SELECT `image1` FROM `san_pham_hinh`  WHERE `san_pham_guid`='$san_pham_guid' AND `color_guid_id`='$color_id' order by so_thu_tu LIMIT 1
                               ";
        $dataimage= CommonDB::GetAll($subquery,[]);
        echo  json_encode($dataimage);Yii::app()->end();
    }
    public function actionAjaxGetSize() {
        Yii::app()->theme = '';
        $san_pham_guid = $_REQUEST["san_pham_guid"];//luon luon co hidden field
        $color_id = $_REQUEST["color_id"];//luon luon co hidden field
        $datasize= CommonDB::GetAll("   SELECT  size_text, REPLACE( FORMAT(sp_price, 0),',','.') as  sp_price,aa.san_pham_price_guid,color_id FROM m_size a, san_pham_price aa
                           WHERE a.m_size_guid = aa.m_size_guid AND
                         a.`m_size_guid` IN( SELECT m_size_guid FROM san_pham_price
                         WHERE `san_pham_guid`='$san_pham_guid'  AND color_id='$color_id')
                         AND  aa.`san_pham_guid`='$san_pham_guid' AND color_id='$color_id'
                         ORDER BY size_text ",[]);
        echo  json_encode($datasize);Yii::app()->end();
    }
    public function actionAjaxupdate() {
        Yii::app()->theme = '';
        if( isset($_POST['bsubmit'])) {

            $guid_id=$_REQUEST["aaachung_guid"];//luon luon co hidden field
            $queryIn ="Update  aaachung set mo_ta_dai=:mo_ta_dai where aaachung_guid=:aaachung_guid";
            $hsTable="";

            $hsTable["aaachung_guid"]=$guid_id ;
            $hsTable["mo_ta_dai"]=$_REQUEST["mo_ta_dai"] ;
            CommonDB::runSQL($queryIn,$hsTable);
            echo "1";Yii::app()->end();

        }
    }
    public function actionLienHe() {
        $this->pageTitle = "Danh sách liên hệ";
        $query="Select * from lienhe order by date_create desc";
        $data = CommonDB::GetAll($query,[]);
        $this->render('lienhe',  array('data'=>$data));

    }
    public function actionXoalienhe() {
        $lienhe_guid = $_REQUEST["lienhe_guid"];
        $query=" delete from lienhe  where lienhe_guid=:lienhe_guid ";
        $hs["lienhe_guid"]=$lienhe_guid;
        CommonDB::runSQL($query,$hs);
        echo "1";Yii::app()->end();
    }



    public function actionDondathang() {
        $this->activemenu="sanpham";
        $this->pageTitle = "Danh sách đơn đặt hàng";
        $query="Select hinh_dai_dien,ma_sp, dondathang_guid,hoten,email,dienthoai,fax,diachi,tieude,noidung from dondathang,san_pham where dondathang.san_pham_guid=san_pham.san_pham_guid
          order by dondathang.date_create desc";
        $data = CommonDB::GetAll($query,[]);
        $this->render('dondathang',  array('data'=>$data));

    }
    public function actionDondathangDelete() {
        $dondathang_guid = $_REQUEST["dondathang_guid"];
        $query=" delete from dondathang  where dondathang_guid=:dondathang_guid ";
        $hs["dondathang_guid"]=$dondathang_guid;
        CommonDB::runSQL($query,$hs);
        echo "1";Yii::app()->end();
    }



}