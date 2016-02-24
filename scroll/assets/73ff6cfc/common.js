jQuery(document).ready(function () {
	if (jQuery(".TabControl02").length > 0) {						 
		jQuery(".TabControl02 > .Active").each(function() {
			jQuery(jQuery(this).find("a").attr("rel")).show();
		});
		jQuery(".TabControl02 > li > a").bind("click", function() {
			if (!jQuery(this).parent().hasClass("Active")) {
				jQuery(this).parent().parent().find(".Active").removeClass("Active");
				jQuery(this).parent().parent().parent().find(".TabContent02").each(function() {
					jQuery(this).hide();
				});
				jQuery(this).parent().addClass("Active");
				jQuery(jQuery(this).attr("rel")).show();
			}
			return false;
		});
	}
	if (jQuery(".TabControl").length > 0) {						 
		jQuery(".TabControl > .Active").each(function() {
			jQuery(jQuery(this).find("a").attr("rel")).show();
		});
		jQuery(".TabControl > li > a").bind("click", function() {
			if (!jQuery(this).parent().hasClass("Active")) {
				jQuery(this).parent().parent().find(".Active").removeClass("Active");
				jQuery(this).parent().parent().parent().find(".TabContent").each(function() {
					jQuery(this).hide();
				});
				jQuery(this).parent().addClass("Active");
				jQuery(jQuery(this).attr("rel")).show();
			}
			return false;
		});
	}
	
	if (jQuery(".ListStyle03").length > 0) {	
		jQuery(".ListStyle03 > li > a").bind("mouseenter", function(e) {
			var tooltip = jQuery(this).attr("rel");
			jQuery(tooltip).css("left", e.pageX);
			jQuery(tooltip).css("top", e.pageY);
		});
		jQuery(".ListStyle03 > li > a").bind("mouseleave", function() {
			jQuery(".Tooltip").css("left", -1000);
		});
		jQuery(".Tooltip").bind("mouseenter", function(e) {
			jQuery(this).css("left", e.pageX);
			jQuery(this).css("top", e.pageY);
		});
		jQuery(".Tooltip").bind("mouseleave", function() {
			jQuery(this).css("left", -1000);
		});
	}
	if (jQuery("#menu").length > 0) {	
		jQuery("#menu li a").bind("mouseenter", function() {
			jQuery(this).addClass("Hover");															 
			jQuery(this).next().show();
		});
		jQuery("#menu li a").bind("mouseleave", function() {
			jQuery(this).removeClass("Hover");
			jQuery(this).next().hide();															 
		});
		jQuery(".SubMenuLevel2").bind("mouseenter", function() {
			jQuery(this).prev().addClass("Hover");													 
			jQuery(this).show();
		});
		jQuery(".SubMenuLevel2").bind("mouseleave", function() {
			jQuery(this).prev().removeClass("Hover");																 
			jQuery(this).hide();
		});
		jQuery(".SubMenuLevel3").bind("mouseenter", function() {
			jQuery(this).prev().addClass("Hover");
			jQuery(this).show();
		});
		jQuery(".SubMenuLevel3").bind("mouseleave", function() {
			jQuery(this).prev().removeClass("Hover");												 	
			jQuery(this).hide();
		});
	}
	if (jQuery(".Nav").length > 0) {	
		jQuery(".Nav li a").bind("mouseenter", function() {
			jQuery(this).addClass("Hover");															 
			jQuery(this).next().show();
		});
		jQuery(".Nav li a").bind("mouseleave", function() {
			jQuery(this).removeClass("Hover");
			jQuery(this).next().hide();															 
		});
		jQuery(".NavLevel2").bind("mouseenter", function() {
			jQuery(this).prev().addClass("Hover");													 
			jQuery(this).show();
		});
		jQuery(".NavLevel2").bind("mouseleave", function() {
			jQuery(this).prev().removeClass("Hover");																 
			jQuery(this).hide();
		});
	}
});