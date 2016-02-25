<?php

define("SMTP_HOST","mail.kinhtanphuc.com");
define("ADMIN_EMAIL","info@kinhtanphuc.com");
define("SMTP_USERNAME","info@kinhtanphuc.com");
define("SMTP_PASSWORD","123456");
define("SMTP_INCLUDED",1);
define ("ITEM_PER_PAGE", serialize (array (50,100,150)));
define ("ITEM_PER_PAGE_DEFAULT", 50);
define ("ORDER_BY", serialize (array ("Tiêu đề A-Z","Lượt xem")));
define ("ORDER_BY_KEY", serialize (array ("0","1")));
define ("WEB_URL", "http://googleg9.com:8111");
define ("PATH_DOWNLOAD", WEB_URL."/");
define ("PATH_IMAGE", WEB_URL."/admintvcg/uploads/bookImage/");
define ("PATH_IMAGE_REF", WEB_URL."/admintvcg/uploads/referenceImage/");
define ("PATH_IMAGE_bookFile", WEB_URL."/admintvcg/uploads/bookFile/");
define ("PATH_IMAGE_slideImage", WEB_URL."/admintvcg/uploads/slideImage/");
define ("PATH_userimage", "/uploads/userimage/");
define ("PATH_ROOTuserimage", $_SERVER['DOCUMENT_ROOT']."/uploads/userimage/");
define ("NUMBER_LIMIT_BOOK_SCROLL", 6);
//session const
define ("ID_BOOK", "idbook");
define ("BOOK_MARK_PAGE", "book_mark_page");
define ("USER_ID", "id_user");
define ("USER_EMAIL", "email");
define ("USER_IMAGE_FULL", "USER_IMAGE");
define ("USER_FULLNAME", "display_name");
define ("IDDetailBook", "IDDetailBook");

define("DB_HOST","localhost");
define("DB_NAME","thuvienconggiao");
define("DB_USERNAME","thuvienconggiao");
define("DB_PASSWORD","123456789");

