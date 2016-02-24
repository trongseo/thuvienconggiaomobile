<?php

class Common {


    public static function guid(){

        return CommonDB::guid();
    }
    public  static  function getBookmarpage($userId,$IDDetailBook){
        $userId =Common::getSession(USER_ID);
        Common::setSession(BOOK_MARK_PAGE,1);
        if($userId!=''){
            $arrtbl_bookmark = CommonDB::GetDataRow('tbl_bookmark ',' user_id='.$userId.'  AND book_id='.$IDDetailBook.'   ORDER BY book_mark_page DESC LIMIT 1 ');
            if ($arrtbl_bookmark=="") {
                $BOOK_MARK_PAGE=1;
            }else{
                $BOOK_MARK_PAGE =$arrtbl_bookmark['book_mark_page'];
            }
            Common::setSession(BOOK_MARK_PAGE,$BOOK_MARK_PAGE);
        }

    }
    public static function  doubleData($myData,$minRow){
        if(count($myData)<$minRow) return $myData;
        $cucudata=$myData;
        foreach($myData as $value)
        {
            $cucudata[]=$value;
        }
        foreach($myData as $value)
        {
            $cucudata[]=$value;
        }
        foreach($myData as $value)
        {
            $cucudata[]=$value;
        }
        return $cucudata;
    }
    public static function  checkImageFile($ctrName){
        $max_file_size = 1024*2000; // 200kb
        // Check filesize
        if($_FILES[$ctrName]['size'] > $max_file_size){
            return "Lỗi upload > 1024*2000";
        }

        // Check for errors
        if($_FILES[$ctrName]['error'] > 0){
            return "Lỗi upload.> 2MB";
        }

        if(!getimagesize($_FILES[$ctrName]['tmp_name'])){
            return "Lỗi upload (không tìm thấy)";
        }

        return "";

    }
    public static function getPara($key){

        return  trim(isset($_REQUEST[$key])?$_REQUEST[$key]:"") ;
    }
    public static function getSession($key){
       if(isset(Yii::app()->session[$key]))
           return Yii::app()->session[$key];
        return "";
    }
    public static function getCurrentDateYYYYDDMM(){
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        return date('Y-m-d H:m:i');
    }
    public static function getCurrentDateYYYYDDMMNotime(){
        date_default_timezone_set('Asia/Bangkok');
        return date('Y-m-d');
    }
    public static function setSession($key,$valueadd){

          Yii::app()->session[$key]=$valueadd;

    }
    public static function converDDMMYYToYYYYMMDDPara($originalDate){
//        $d="05/Feb/2010:14:00:01";
//        $dr= date_create_from_format('d/M/Y:H:i:s', $d);
//        echo $dr->format('Y-m-d H:i:s');

//23/01/2015
       $arrDate =  explode('/',$originalDate);
        $day = $arrDate[0];
        $month = $arrDate[1];
        $yyyy = $arrDate[2];
        return $yyyy.'-'.$month.'-'.$day;

    }
    public static function truncate($string,$length=100,$append="&hellip;") {
        $string = trim($string);
        $string1= trim($string);
        if(strlen($string) > $length) {
            $string = wordwrap($string, $length);
            $string = explode("\n", $string, 2);
            $string = $string[0] . $append;
        }

       $after = str_pad(substr($string1,0,$length), $length ,  str_repeat(' ', 40));
        return $string;
    }
    public static function formatDateShowDDMMYYYYHHmmss($originalDate){
        $phpdate = strtotime( $originalDate );
        $mysqldate = date( 'd-m-Y H:i:s', $phpdate );
        return $mysqldate;
    }
    public static function formatDateShowDDMMYYYY($originalDate){
        $phpdate = strtotime( $originalDate );
        $mysqldate = date( 'd/m/Y', $phpdate );
        return $mysqldate;
    }

    public static function converYYYYMMDDtoDaymonyyyyPara($originalDate){
//        $d="05/Feb/2010:14:00:01";
//        $dr= date_create_from_format('d/M/Y:H:i:s', $d);
//        echo $dr->format('Y-m-d H:i:s');

//23/01/2015
        $arrDate =  explode('-',$originalDate);
        $yyyy = $arrDate[0];
        $month = $arrDate[1];
        $day = $arrDate[2];
        return $day.'/'.$month.'/'.$yyyy;

    }
public static function getPagging($totalPage,$pageSize,$page,$itemCount){
        $end_page = $totalPage;
        $totalpage=$totalPage;
        $currentpage =$page;
        $first = "";
        $prev = "";
        $next = "  ";
        $end = " ";
        $inpage = "<select id='comboPage' style=' ' class='form-control combopage'> ";
        if ($totalPage == 1) return $inpage."<option>Trang 1 của 1</option> </select>";
        if ($totalPage >= 2)
        {
            $first = "";
            $end = "";
            //totalpage = totalpage - 1;
            $link = "";
            for ($i = 1; $i <= $totalpage; $i++)
            {
                if ($i != $currentpage)
                {
                    $link = $link."<option value='".$i."'  >Trang ".$i." của $totalPage </option>";
                }
                else
                    $link = $link."<option selected value='".$i."'  >Trang ".$i." của $totalPage</option>";

            }
            $inpage=$inpage.$link." </select>";
            if ($currentpage != $totalpage)//next
            {
                $showPage = $currentpage + 1;
                $next = "<a href='javascript:void()'>".$showPage."</a>  ";
            }
            if ($currentpage != 1)//back
            {
                $showPage = $currentpage -1;
                $prev = "<a href='javascript:void()'>".$showPage."</a>  ";
            }
            if ($currentpage == 1)//back
            {
                $showPage = $currentpage -1;
                $prev = "<a href='javascript:void();'>".$showPage."</a>  ";
            }
        }
        //return  $first.$prev.$inpage.$next.$end;
        //return  $prev.$inpage.$next;
    return  $inpage;
    }


    public static function menuMultiLevel($data, $models, $link, $tag = null, $tagSub = null) {
        $rowsize = count($data);
        $model = new $models();
        $row = $model->findCatByTag(Yii::app()->request->getQuery('cid')); //find cat_id
        $cat_id = $row['cat_id'];

        //Find parent_id
        $parent_id = $cat_id;
        if ($cat_id) {
            foreach ($data as $value) {
                if ($cat_id == $value['cat_id']) {
                    if ($value['cat_parent_id']) {
                        $parent_id = $value['cat_parent_id'];
                    }
                    break;
                }
            }
        }

        //Display cat menu
        for ($i = 0; $i < $rowsize; $i++) {
            if ($data[$i]['cat_parent_id'] == 0) {
                //Parent categories
                echo '<li><a href="' . Yii::app()->request->baseUrl . LANGURL . '/' . $link . '/' . $data[$i]['tag' . Yii::app()->session['lang']] . '" title="' . $data[$i]['cat_title' . LANG] . '">' . (($tag) ? '<' . $tag . '>' : '') . $data[$i]['cat_title' . LANG] . (($tag) ? '</' . $tag . '>' : '') . '</a>';
                //Sub categories
                if ($parent_id && ($parent_id == $data[$i]['cat_id'])) {
                    for ($j = 0; $j < $rowsize; $j++) {
                        if ($data[$j]['cat_parent_id'] == $data[$i]['cat_id']) {
                            echo '<ul>';
                            for ($j = 0; $j < $rowsize; $j++) {
                                if ($data[$j]['cat_parent_id'] == $data[$i]['cat_id']) {
                                    echo '<li><a href="' . Yii::app()->request->baseUrl . LANGURL . '/' . $link . '/' . $data[$j]['tag' . Yii::app()->session['lang']] . '" title="' . $data[$j]['cat_title' . LANG] . '">' . (($tagSub) ? '<' . $tagSub . '>' : '') . $data[$j]['cat_title' . LANG] . (($tagSub) ? '</' . $tagSub . '>' : '') . '</a></li>';
                                }
                            }
                            echo '</ul>';
                        }
                    }
                }
                echo '</li>';
            }
        }
    }

    /**
     * @param $item - item sẽ bị remove
     * @param int $type - (0 = pic_full, 1 = pic_desc)
     * @param int $path
     * @param int $cat - Danh mục
     */
    public function removePic($item, $type = 0, $path = 0, $cat = '') {
        $path = ($path == 1) ? YiiBase::getPathOfAlias('webroot') . '/public/userfiles/image/' . Yii::app()->user->id . '/image' . '/' . Yii::app()->controller->id . $cat . '/' : YiiBase::getPathOfAlias('webroot') . USERFILES . '/' . Yii::app()->controller->id . $cat . '/';
        if ($type == 0) {
            if ($item && file_exists($path . $item)) {
                unlink($path . $item);
            }
        } else {
            if ($item) {
                $str = explode('|', $item);
                foreach ($str as $value) {
                    if (file_exists($path . $value)) {
                        unlink($path . $value);
                    }
                }
            }
        }
    }

    //Front end - Create folder and Chmod
    public function recursiveMkdir($path, $mode = 0777) {
        $dirs = explode('/', $path);
        $count = count($dirs);

        $location = '/';
        for ($i = 1; $i < ($count - 1); ++$i) {
            $location .= $dirs[$i] . '/';
            if (!is_dir(YiiBase::getPathOfAlias('webroot') . $location)) {
                mkdir(YiiBase::getPathOfAlias('webroot') . $location, 0777);
                chmod(YiiBase::getPathOfAlias('webroot') . $location, 0777);
            }
        }
    }

    public static function setLanguage() {
        if (isset($_GET['language']) && ($_GET['language'] != 'vi')) {
            Yii::app()->language = $_GET['language'];
            define('LANG', $_GET['language']); //coi lai
            define('LANGURL', '/' . $_GET['language']); //coi lai
            Yii::app()->session['lang'] = $_GET['language'];
            Yii::app()->session['langUrl'] = '/' . $_GET['language'];
        } else {
            Yii::app()->language = 'en';
            define('LANG', ''); //coi lai
            define('LANGURL', ''); //coi lai
            Yii::app()->session['lang'] = '';
            Yii::app()->session['langUrl'] = '';
        }
    }

    /**
     * Function dùng cho việc tính toán trả về số, hay là liên hệ giá cả sản phẩm
     * @static
     * @param $price
     * @return string
     */
    public static function getPrice($price) {
        $str = '';
        if (is_numeric($price)) {
            $str = number_format($price, 0, '', '.');
        } else {
            if ($price) {
                $str = $price;
            } else {
                $str = Yii::app()->controller->lang['contact'];
            }
        }
        return $str;
    }

}

//------------------ send email


//
// This function has been modified as provided
// by SirSir to allow multiline responses when
// using SMTP Extensions
//
function server_parse($socket, $response)
{
    $server_response = '';
    while ( substr($server_response,3,1) != ' ' )
    {
        if( !( $server_response = fgets($socket, 256) ) )
        {
            echo "Couldn't get mail server response codes";
        }
    }

    if( !( substr($server_response, 0, 3) == $response ) )
    {
        echo "Ran into problems sending Mail. Response: $server_response";
    }
}

/****************************************************************************
 *        Function:                 smtpmail
 *        Description:         This is a functional replacement for php's builtin mail
 *                                                function, that uses smtp.
 *        Usage:                        The usage for this function is identical to that of php's
 *                                                built in mail function.
 ****************************************************************************/
function smtpmail($mail_to, $subject, $message, $headers='',$smtp_host, $smtp_username, $smtp_password,
                  $admin_email)
{
//global $smtp_host, $smtp_username, $smtp_password, $admin_email;
//echo $to_mail.$subject.$message.$headers.$smtp_host.$smtp_username.$smtp_password;

    //
    // Fix any bare linefeeds in the message to make it RFC821 Compliant.
    //
    $message = preg_replace("/(?<!\r)\n/si", "\r\n", $message);
    /*echo "SMTP_HOST".$smtp_host;
    echo "<br>\nSMTP_USER".$smtp_user;
    echo "<br>\nSMTP_PW".$smtp_password;
    echo "<br>\nADMIN".$admin_email; */

    if ($headers != "")
    {
        if(is_array($headers))
        {
            if(sizeof($headers) > 1)
            {
                $headers = join("\r\n", $headers);
            }
            else
            {
                $headers = $headers[0];
            }
        }
        $headers = chop($headers);

        //
        // Make sure there are no bare linefeeds in the headers
        //
        $headers = preg_replace("/(?<!\r)\n/si", "\r\n", $headers);
        //
        // Ok this is rather confusing all things considered,
        // but we have to grab bcc and cc headers and treat them differently
        // Something we really didn't take into consideration originally
        //
        $header_array = explode("\r\n", $headers);
        @reset($header_array);
        $headers = "";
        $cc = '';
        $bcc = '';
        while( list(, $header) = each($header_array) )
        {
            if( preg_match("/^cc:/si", $header) )
            {
                $cc = preg_replace("/^cc:(.*)/si", "\\1", $header);
            }
            else if( preg_match("/^bcc:/si", $header ))
            {
                $bcc = preg_replace("/^bcc:(.*)/si", "\\1", $header);
                $header = "";
            }
            $headers .= $header . "\r\n";
        }
        $headers = chop($headers);
        $cc = explode(",", $cc);
        $bcc = explode(",", $bcc);
    }


    if(trim($mail_to) == "")
    {
        exit();
    }
    if(trim($subject) == "")
    {
        die("No email Subject specified");
    }

    $mail_to_array = explode(";", $mail_to);

    //
    // Ok we have error checked as much as we can to this point let's get on
    // it already.
    //
    if( !$socket = fsockopen($smtp_host, 25, $errno, $errstr, 20) )
    {
        die("Could not connect to smtp host : $errno : $errstr");
    }
    server_parse($socket, "220");

    if( !empty($smtp_username) && !empty($smtp_password) )
    {
        // Send the RFC2554 specified EHLO.
        // This improved as provided by SirSir to accomodate
        // both SMTP AND ESMTP capable servers
        fputs($socket, "EHLO " . $smtp_host . "\r\n");
        server_parse($socket, "250");

        fputs($socket, "AUTH LOGIN\r\n");
        server_parse($socket, "334");
        fputs($socket, base64_encode($smtp_username) . "\r\n");
        server_parse($socket, "334");
        fputs($socket, base64_encode($smtp_password) . "\r\n");
        server_parse($socket, "235");
    }
    else
    {
        // Send the RFC821 specified HELO.
        fputs($socket, "HELO " . $smtp_host . "\r\n");
        server_parse($socket, "250");
    }

    // From this point onward most server response codes should be 250
    // Specify who the mail is from....
    fputs($socket, "MAIL FROM: <" . $admin_email . ">\r\n");
    server_parse($socket, "250");

    // Specify each user to send to and build to header.
    $to_header = "To: ";
    @reset( $mail_to_array );
    while( list( , $mail_to_address ) = each( $mail_to_array ))
    {
        //
        // Add an additional bit of error checking to the To field.
        //
        $mail_to_address = trim($mail_to_address);
        if ( preg_match('/[^ ]+\@[^ ]+/', $mail_to_address) )
        {
            fputs( $socket, "RCPT TO: <$mail_to_address>\r\n" );
            server_parse( $socket, "250" );
        }
        $to_header .= "<$mail_to_address>, ";
    }
    // Ok now do the CC and BCC fields...
    @reset( $bcc );
    while( list( , $bcc_address ) = each( $bcc ))
    {
        //
        // Add an additional bit of error checking to bcc header...
        //
        $bcc_address = trim( $bcc_address );
        if ( preg_match('/[^ ]+\@[^ ]+/', $bcc_address) )
        {
            fputs( $socket, "RCPT TO: <$bcc_address>\r\n" );
            server_parse( $socket, "250" );
        }
    }
    @reset( $cc );
    while( list( , $cc_address ) = each( $cc ))
    {
        //
        // Add an additional bit of error checking to cc header
        //
        $cc_address = trim( $cc_address );
        if ( preg_match('/[^ ]+\@[^ ]+/', $cc_address) )
        {
            fputs($socket, "RCPT TO: <$cc_address>\r\n");
            server_parse($socket, "250");
        }
    }
    // Ok now we tell the server we are ready to start sending data
    fputs($socket, "DATA\r\n");

    // This is the last response code we look for until the end of the message.
    server_parse($socket, "354");

    // Send the Subject Line...
    fputs($socket, "Subject: $subject\r\n");

    // Now the To Header.
    fputs($socket, "$to_header\r\n");

    // Now any custom headers....
    fputs($socket, "$headers\r\n\r\n");

    // Ok now we are ready for the message...
    fputs($socket, "$message\r\n");

    // Ok the all the ingredients are mixed in let's cook this puppy...
    fputs($socket, ".\r\n");
    server_parse($socket, "250");

    // Now tell the server we are done and close the socket...
    fputs($socket, "QUIT\r\n");
    fclose($socket);

    return TRUE;
}
function SendMail($frommail,$tomail,$subject,$message,$fromfullname="info")
{
    $fromfullname =ADMIN_EMAIL;

    $from= $fromfullname." <".$frommail.">";
    $headers ="Return-Path: ".$fromfullname." <".$frommail.">\r\n";
    $headers.="From: $from\nX-Mailer: ".$fromfullname."\r\n";
    $headers .="Mime-Version: 1.0\r\n";
    $headers .="Content-type: text/html; charset=utf-8\r\n";

//        define("SMTP_HOST","mail.kinhtanphuc.com");
//        define("ADMIN_EMAIL","info@kinhtanphuc.com");
//        define("SMTP_USERNAME","info@kinhtanphuc.com");
//        define("SMTP_PASSWORD","123456");

    $smtp_host =SMTP_HOST;//Dia chi mail server
    $admin_email = ADMIN_EMAIL;//User duoc khai bao tren mail server
    $smtp_username = SMTP_USERNAME;//User duoc khai bao tren mail server
    $smtp_password = SMTP_PASSWORD;//Pass cua email nay
    $result = @smtpmail($tomail,$subject,$message,$headers,$smtp_host, $smtp_username, $smtp_password,
        $admin_email);

}
//--------------------------------------------