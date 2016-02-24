<?php

class DatabaseHelper {
	public static function export($user, $type = 'publish') {
		$user_class = new Username();
		if ($user_class->checkExistUser($user)) {
			$pdo = Yii::app()->db->pdoInstance;
			$sql = '';

			if ($type == 'publish') {
				$arr[] = array('dos_bussiness', 'SELECT * FROM dos_bussiness');
				$arr[] = array('dos_templates', 'SELECT * FROM dos_templates WHERE template = \'' . $user_class->template . '\'');
				$arr[] = array('dos_configs', 'SELECT * FROM dos_configs WHERE dos_templates_template = \'' . $user_class->template . '\'');
				$arr[] = array('dos_features', 'SELECT * FROM dos_features');
				$arr[] = array('dos_langs', 'SELECT * FROM dos_langs');
				$arr[] = array('dos_modules', 'SELECT * FROM dos_modules');
				$arr[] = array('dos_values', 'SELECT * FROM dos_values');
				$arr[] = array('dos_nationals', 'SELECT * FROM dos_nationals');
				$arr[] = array('dos_provinces', 'SELECT * FROM dos_provinces');
				$arr[] = array('dos_loadfiles', 'SELECT * FROM dos_loadfiles WHERE dos_templates_template = \'' . $user_class->template . '\'');
				$arr[] = array('dos_templates_has_dos_bussiness', 'SELECT * FROM dos_templates_has_dos_bussiness WHERE dos_templates_template=\'' . $user_class->template . '\'');
				$arr[] = array('dos_templates_has_dos_features', 'SELECT * FROM dos_templates_has_dos_features WHERE dos_templates_template=\'' . $user_class->template . '\'');
				$arr[] = array('dos_templates_has_dos_modules', 'SELECT * FROM dos_templates_has_dos_modules WHERE dos_templates_template=\'' . $user_class->template . '\'');
			}

			$arr[] = array('dos_usernames', 'SELECT * FROM dos_usernames WHERE username=\'' . $user . '\'');
			$arr[] = array('dos_modules_has_dos_usernames', 'SELECT * FROM dos_modules_has_dos_usernames WHERE dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_module_webs', 'SELECT * FROM dos_module_webs WHERE dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_usernames_has_dos_modules', 'SELECT * FROM dos_usernames_has_dos_modules WHERE dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_user_langs', 'SELECT * FROM dos_user_langs WHERE dos_usernames_username=\'' . $user . '\'');

			$arr[] = array('dos_module_abouts', 'SELECT * FROM dos_module_abouts WHERE dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_module_advs', 'SELECT * FROM dos_module_advs WHERE dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_module_banners', 'SELECT * FROM dos_module_banners WHERE dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_module_contacts', 'SELECT * FROM dos_module_contacts WHERE dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_module_menus', 'SELECT * FROM dos_module_menus WHERE dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_module_services', 'SELECT * FROM dos_module_services WHERE dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_module_supports', 'SELECT * FROM dos_module_supports WHERE dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_module_news_cat', 'SELECT * FROM dos_module_news_cat WHERE dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_module_news', 'SELECT `record_id`, `title`, `titleen`, `postdate`, `pic_thumb`, dos_module_news.`preview`, dos_module_news.`previewen`, `content`, `contenten`, dos_module_news.`tag`, dos_module_news.`tagen`, dos_module_news.`description`, dos_module_news.`descriptionen`, `hits`, `record_order`, `hot`, `extra_field1`, `extra_field2`, `enable`, `dos_module_item_cat_cat_id` FROM dos_module_news, dos_module_news_cat WHERE dos_module_news.dos_module_item_cat_cat_id = dos_module_news_cat.cat_id AND dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_module_products_cat', 'SELECT * FROM dos_module_products_cat WHERE dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_module_products', 'SELECT `record_id`, `title`, `titleen`, `postdate`, `pic_thumb`, dos_module_products.`pic_full`, dos_module_products.`pic_desc`, dos_module_products.`preview`, dos_module_products.`previewen`, `content`, `contenten`, dos_module_products.`tag`, dos_module_products.`tagen`, dos_module_products.`description`, dos_module_products.`descriptionen`, `hits`, `record_order`, `unit`, `hot`, `specials`, `extra_field1`, `extra_field2`, `extra_field3`, `extra_field4`, `enable`, `dos_module_item_cat_cat_id` FROM dos_module_products, dos_module_products_cat WHERE dos_module_products.dos_module_item_cat_cat_id = dos_module_products_cat.cat_id AND dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_module_video_cat', 'SELECT * FROM dos_module_video_cat WHERE dos_usernames_username=\'' . $user . '\'');
			$arr[] = array('dos_module_video', 'SELECT `record_id`, `title`, `titleen`, `postdate`, dos_module_video.`tag`, dos_module_video.`tagen`, dos_module_video.`description`, dos_module_video.`descriptionen`, dos_module_video.`pic_thumb`, `url`, `record_order`, `hits`, `extra_field1`, `extra_field2`, `hot`, `enable`, `dos_module_item_cat_cat_id` FROM dos_module_video, dos_module_video_cat WHERE dos_module_video.dos_module_item_cat_cat_id = dos_module_video_cat.cat_id AND dos_usernames_username=\'' . $user . '\'');

			foreach ($arr as $value) {
				$itemsQuery = $pdo->query($value[1]);
				$values = "";
				$items = "";
				while ($itemQuery = $itemsQuery->fetch(PDO::FETCH_ASSOC)) {
					$itemNames = array_keys($itemQuery);
					$itemNames = array_map("addslashes", $itemNames);
					$items = join('`,`', $itemNames);

					$itemValues = array_values($itemQuery);
					//$itemValues = array_map("addslashes", $itemValues);
					$itemValues = str_replace("'", "''", $itemValues);
					$valueString = join("','", $itemValues);
					$valueString = "('" . $valueString . "'),";
					$values .= "\n" . $valueString;
				}
				if ($values != "") {
					$insertSql = "INSERT INTO `$value[0]` (`$items`) VALUES" . rtrim($values, ",") . ";\n\r";
					$sql .= $insertSql;
				}
			}
			ob_start();
			echo $sql;
			$content = ob_get_contents();
			ob_end_clean();
			//$content = gzencode($content, 9);

			$saveName = $user . date('-d-m-Y') . ".sql.gz";

			$request = Yii::app()->getRequest();
			$request->sendFile($saveName, $content);
		}
	}

	public function importDataSample($userExport, $userImport) {
		$user_class = new Username();
		if ($user_class->checkExistUser($userExport)) {
			//dos_module_abouts
			$str[] = "INSERT INTO `dos_module_abouts` (title, titleen, content, contenten, hit, record_order, hot, extra_field1, extra_field2, tag, tagen, description, descriptionen, activated, dos_usernames_username) SELECT title, titleen, content, contenten, hit, record_order, hot, extra_field1, extra_field2, tag, tagen, description, descriptionen, activated, '" . $userImport . "' FROM `dos_module_abouts` WHERE dos_usernames_username = '" . $userExport . "'";
			//dos_module_services
			$str[] = "INSERT INTO `dos_module_services` (title, titleen, content, contenten, hit, record_order, hot, extra_field1, extra_field2, tag, tagen, description, descriptionen, activated, dos_usernames_username) SELECT title, titleen, content, contenten, hit, record_order, hot, extra_field1, extra_field2, tag, tagen, description, descriptionen, activated, '" . $userImport . "' FROM `dos_module_services` WHERE dos_usernames_username = '" . $userExport . "'";
			//dos_module_contacts
			$str[] = "INSERT INTO `dos_module_contacts` (title, titleen, content, contenten, record_order, hit, hot, tag, tagen, description, descriptionen, enable, dos_usernames_username) SELECT title, titleen, content, contenten, record_order, hit, hot, tag, tagen, description, descriptionen, enable, '" . $userImport . "' FROM `dos_module_contacts` WHERE dos_usernames_username = '" . $userExport . "'";
			//dos_module_supports
			$str[] = "INSERT INTO `dos_module_supports` (support_name, support_nameen, support_phone, support_value, support_order, support_type, dos_usernames_username) SELECT support_name, support_nameen, support_phone, support_value, support_order, support_type, '" . $userImport . "' FROM `dos_module_supports` WHERE dos_usernames_username = '" . $userExport . "'";
			//dos_module_webs
			$str[] = "INSERT INTO `dos_module_webs` (web_name, web_value, dos_usernames_username) SELECT web_name, web_value, '" . $userImport . "' FROM `dos_module_webs` WHERE dos_usernames_username = '" . $userExport . "'";
			//dos_user_langs
			$str[] = "INSERT INTO `dos_user_langs` (lang_name, lang, langen, dos_usernames_username) SELECT lang_name, lang, langen, '" . $userImport . "' FROM `dos_user_langs` WHERE dos_usernames_username = '" . $userExport . "'";
			//dos_module_advs
			$str[] = "INSERT INTO `dos_module_advs` (title, titleen, pic_thumb, url, start_date, end_date, hits, record_order, position, type, enable, dos_usernames_username) SELECT title, titleen, pic_thumb, url, start_date, end_date, hits, record_order, position, type, enable, '" . $userImport . "' FROM `dos_module_advs` WHERE dos_usernames_username = '" . $userExport . "'";
			//dos_module_banners
			$str[] = "INSERT INTO `dos_module_banners` (banner_name, banner_url, banner_link, banner_order, banner_type, position, enable, dos_usernames_username) SELECT banner_name, banner_url, banner_link, banner_order, banner_type, position, enable, '" . $userImport . "' FROM `dos_module_banners` WHERE dos_usernames_username = '" . $userExport . "'";

			foreach ($str as $value) {
				$this->sqlQuery($value);
			}

			//dos_module_products_cat & dos_module_products
			$this->importProducts($userExport, $userImport);
			//dos_module_news_cat & dos_module_news
			$this->importNews($userExport, $userImport);
			//dos_module_video_cat & dos_module_video
			$this->importVideo($userExport, $userImport);

			//copy file
			$myfile = Yii::app()->file->set('public/userfiles/image/' . $userExport, true);
			$myfile->copy($userImport);
		}
	}

	private function sqlQuery($str) {
		$pdo = Yii::app()->db->pdoInstance;
		try {
			$newStream = preg_replace_callback("/\((.*)\)/", create_function('$matches', 'return str_replace(";"," $$$ ",$matches[0]);'), $str);
			$sqlArray = explode(";", $newStream);
			foreach ($sqlArray as $value) {
				if (!empty($value)) {
					$sql = str_replace(" $$$ ", ";", $value) . ";";
					$pdo->exec($sql);
				}
			}
			//echo "succeed to import the sql data!";
			return true;
		} catch (PDOException $e) {
			echo $e->getMessage();
			exit;
		}
	}

	private function importProducts($userExport, $userImport) {
		$str = "SELECT cat_id, cat_parent_id, cat_title, cat_titleen, preview, previewen, tag, tagen, description, descriptionen, pic_full, pic_desc, cat_order, cat_extra1, cat_extra2, cat_enable FROM `dos_module_products_cat` WHERE dos_usernames_username = '" . $userExport . "'";
		$command = Yii::app()->db->createCommand($str);
		$rows = $command->queryAll();

		foreach ($rows as $row) {
			$sql = "INSERT INTO `dos_module_products_cat` (cat_parent_id, cat_title, cat_titleen, preview, previewen, tag, tagen, description, descriptionen, pic_full, pic_desc, cat_order, cat_extra1, cat_extra2, cat_enable, dos_usernames_username) VALUE('" . $row['cat_parent_id'] . "', '" . $row['cat_title'] . "', '" . $row['cat_titleen'] . "', '" . $row['preview'] . "', '" . $row['previewen'] . "', '" . $row['tag'] . "', '" . $row['tagen'] . "', '" . $row['description'] . "', '" . $row['descriptionen'] . "', '" . $row['pic_full'] . "', '" . $row['pic_desc'] . "', '" . $row['cat_order'] . "', '" . $row['cat_extra1'] . "', '" . $row['cat_extra2'] . "', '" . $row['cat_enable'] . "', '" . $userImport . "')";
			$this->sqlQuery($sql);

			$str = "INSERT INTO `dos_module_products` (title, titleen, pic_thumb, pic_full, pic_desc, preview, previewen, content, contenten, tag, tagen, description, descriptionen, hits, record_order, unit, hot, specials, extra_field1, extra_field2, extra_field3, extra_field4, enable, dos_module_item_cat_cat_id) SELECT title, titleen, pic_thumb, pic_full, pic_desc, preview, previewen, content, contenten, tag, tagen, description, descriptionen, hits, record_order, unit, hot, specials, extra_field1, extra_field2, extra_field3, extra_field4, enable, " . Yii::app()->db->getLastInsertId() . " FROM `dos_module_products` WHERE dos_module_item_cat_cat_id = " . $row['cat_id'];
			$this->sqlQuery($str);
		}
	}

	private function importNews($userExport, $userImport) {
		$str = "SELECT cat_id, cat_parent_id, cat_title, cat_titleen, preview, previewen, tag, tagen, description, descriptionen, pic_full, cat_order, cat_extra1, cat_extra2, cat_enable FROM `dos_module_news_cat` WHERE dos_usernames_username = '" . $userExport . "'";
		$command = Yii::app()->db->createCommand($str);
		$rows = $command->queryAll();

		foreach ($rows as $row) {
			$sql = "INSERT INTO `dos_module_news_cat` (cat_parent_id, cat_title, cat_titleen, preview, previewen, tag, tagen, description, descriptionen, pic_full, cat_order, cat_extra1, cat_extra2, cat_enable, dos_usernames_username) VALUE('" . $row['cat_parent_id'] . "', '" . $row['cat_title'] . "', '" . $row['cat_titleen'] . "', '" . $row['preview'] . "', '" . $row['previewen'] . "', '" . $row['tag'] . "', '" . $row['tagen'] . "', '" . $row['description'] . "', '" . $row['descriptionen'] . "', '" . $row['pic_full'] . "', '" . $row['cat_order'] . "', '" . $row['cat_extra1'] . "', '" . $row['cat_extra2'] . "', '" . $row['cat_enable'] . "', '" . $userImport . "')";
			$this->sqlQuery($sql);

			$str = "INSERT INTO `dos_module_news` (title, titleen, pic_thumb, preview, previewen, content, contenten, tag, tagen, description, descriptionen, hits, record_order, hot, extra_field1, extra_field2, enable, dos_module_item_cat_cat_id) SELECT title, titleen, pic_thumb, preview, previewen, content, contenten, tag, tagen, description, descriptionen, hits, record_order, hot, extra_field1, extra_field2, enable, " . Yii::app()->db->getLastInsertId() . " FROM `dos_module_news` WHERE dos_module_item_cat_cat_id = " . $row['cat_id'];
			$this->sqlQuery($str);
		}
	}

	private function importVideo($userExport, $userImport) {
		$str = "SELECT cat_id, cat_parent_id, pic_thumb, cat_title, cat_titleen, tag, tagen, description, descriptionen, cat_order, cat_enable FROM `dos_module_video_cat` WHERE dos_usernames_username = '" . $userExport . "'";
		$command = Yii::app()->db->createCommand($str);
		$rows = $command->queryAll();

		foreach ($rows as $row) {
			$sql = "INSERT INTO `dos_module_video_cat` (cat_parent_id, pic_thumb, cat_title, cat_titleen, tag, tagen, description, descriptionen, cat_order, cat_enable, dos_usernames_username) VALUE('" . $row['cat_parent_id'] . "', '" . $row['pic_thumb'] . "', '" . $row['cat_title'] . "', '" . $row['cat_titleen'] . "', '" . $row['tag'] . "', '" . $row['tagen'] . "', '" . $row['description'] . "', '" . $row['descriptionen'] . "', '" . $row['cat_order'] . "', '" . $row['cat_enable'] . "', '" . $userImport . "')";
			$this->sqlQuery($sql);

			$str = "INSERT INTO `dos_module_video` (title, titleen, tag, tagen, description, descriptionen, pic_thumb, url, record_order, hits, extra_field1, extra_field2, hot, enable, dos_module_item_cat_cat_id) SELECT title, titleen, tag, tagen, description, descriptionen, pic_thumb, url, record_order, hits, extra_field1, extra_field2, hot, enable, " . Yii::app()->db->getLastInsertId() . " FROM `dos_module_video` WHERE dos_module_item_cat_cat_id = " . $row['cat_id'];
			$this->sqlQuery($str);
		}
	}
}
