<?php
class NoneUnicode {   
    public static function convert($str) {
        $str = strtolower(trim($str));
        $strFind = array(
            '- ',
            ' ',   
            '.',          
            'đ',
            'á','à','ạ','ả','ã','ă','ắ','ằ','ặ','ẳ','ẵ','â','ấ','ầ','ậ','ẩ','ẫ',
            'ó','ò','ọ','ỏ','õ','ô','ố','ồ','ộ','ổ','ỗ','ơ','ớ','ờ','ợ','ở','ỡ',
            'é','è','ẹ','ẻ','ẽ','ê','ế','ề','ệ','ể','ễ',
            'ú','ù','ụ','ủ','ũ','ư','ứ','ừ','ự','ử','ữ',
            'í','ì','ị','ỉ','ĩ',
            'ý','ỳ','ỵ','ỷ','ỹ'
            );
        $strReplace = array(
            '',
            '-',    
            '-',        
            'd',
            'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a',
            'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',
            'e','e','e','e','e','e','e','e','e','e','e',
            'u','u','u','u','u','u','u','u','u','u','u',
            'i','i','i','i','i',
            'y','y','y','y','y'
            );
        return strtolower(preg_replace('/[^a-z0-9\-]+/i', '', str_replace($strFind, $strReplace, $str)));        
    }
    public static function fileName($filename){
        $file_name = NoneUnicode::convert(substr($filename, 0, strripos($filename, '.'))); // strip filename
        $extension = substr(substr($filename, strripos($filename, '.')), 1); //extention
        return $file_name.'.'.$extension; //strip unicode
    }
}