/*tinyMCE.init({
	mode:"exact",
	elements : "elm",
	theme:"advanced",
	skin : "o2k7",
	skin_variant : "silver",
	plugins : "paste, autolink,lists,style,layer,table,save,advhr,advimage,advlink,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",

	theme_advanced_buttons1 : "bold,italic,underline,strikethrough,formatselect,fontsizeselect,|,justifyleft,justifycenter,justifyright,justifyfull,|,pastetext,pasteword,|,link,unlink,|,image,media,|,fullscreen",
	theme_advanced_buttons2 : "forecolor,backcolor,|,bullist,numlist,|,underline,justifyfull,outdent,indent,|,sub,sup,|,tablecontrols,|,visualaid,charmap,removeformat",
	theme_advanced_buttons3: "",

	paste_auto_cleanup_on_paste : true,
	paste_remove_styles: true,
	paste_remove_styles_if_webkit: true,
	paste_strip_class_attributes: true,

	theme_advanced_toolbar_location : "top",
	theme_advanced_toolbar_align : "left",
	//theme_advanced_statusbar_location : "bottom",
	theme_advanced_resizing : true,
	width : "100%",
	height: "250"
});*/

function openKCFinder(field_name, url, type, win) {
	tinyMCE.activeEditor.windowManager.open({
		file: '/public/plugin/kcfinder/browse.php?opener=tinymce&lang=vi&type=' + type,
		title: 'KCFinder',
		width: 700,
		height: 500,
		resizable: "yes",
		inline: true,
		close_previous: "no",
		popup_css: false
	}, {
		window: win,
		input: field_name
	});
	return false;
}