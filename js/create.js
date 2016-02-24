/*/**/

/*
Script: GrowingInput.js
	Alters the size of an input depending on its content

	License:
		MIT-style license.

	Authors:
		Guillermo Rauch
*/

(function(){

GrowingInput = function(element, options){
	
	var value, lastValue, calc;
	
	options = $.extend({
		min: 0,
		max: null,
		startWidth: 15,
		correction: 15
	}, options);
	
	element = $(element).data('growing', this);
	
	var self = this;
	var init = function(){
		calc = $('<span></span>').css({
			'float': 'left',
			'display': 'inline-block',
			'position': 'absolute',
			'left': -1000
		}).insertAfter(element);
		$.each(['font-size', 'font-family', 'padding-left', 'padding-top', 'padding-bottom', 
		 'padding-right', 'border-left', 'border-right', 'border-top', 'border-bottom', 
		 'word-spacing', 'letter-spacing', 'text-indent', 'text-transform'], function(i, p){				
				calc.css(p, element.css(p));
		});
		element.blur(resize).keyup(resize).keydown(resize).keypress(resize);
		resize();
	};
	
	var calculate = function(chars){
		calc.html(chars);
		var width = calc.width();
		return (width ? width : options.startWidth) + options.correction;
	};
	
	var resize = function(){
		lastValue = value;
		value = element.val();
		var retValue = value;		
		if(chk(options.min) && value.length < options.min){
			if(chk(lastValue) && (lastValue.length <= options.min)) return;
			retValue = str_pad(value, options.min, '-');
		} else if(chk(options.max) && value.length > options.max){
			if(chk(lastValue) && (lastValue.length >= options.max)) return;
			retValue = value.substr(0, options.max);
		}
		element.width(calculate(retValue));
		return self;
	};
	
	this.resize = resize;
	init();
};

var chk = function(v){ return !!(v || v === 0); };
var str_repeat = function(str, times){ return new Array(times + 1).join(str); };
var str_pad = function(self, length, str, dir){
	if (self.length >= length) return this;
	str = str || ' ';
	var pad = str_repeat(str, length - self.length).substr(0, length - self.length);
	if (!dir || dir == 'right') return self + pad;
	if (dir == 'left') return pad + self;
	return pad.substr(0, (pad.length / 2).floor()) + self + pad.substr(0, (pad.length / 2).ceil());
};

})();

/*
Script: TextboxList.js
	Displays a textbox as a combination of boxes an inputs (eg: facebook tokenizer)

	Authors:
		Guillermo Rauch
		
	Note:
		TextboxList is not priceless for commercial use. See <http://devthought.com/projects/jquery/textboxlist/>. 
		Purchase to remove this message.
*/

(function($){
	
TextboxList = function(element, _options){
	
	var original, container, list, current, focused = false, index = [], blurtimer, events = {};
	var options = $.extend(true, {
    prefix: 'textboxlist',
    max: null,
		unique: false,
		uniqueInsensitive: true,
    endEditableBit: true,
		startEditableBit: true,
		hideEditableBits: true,
    inBetweenEditableBits: true,
		keys: {previous: 37, next: 39},
		bitsOptions: {editable: {}, box: {}},
    plugins: {},
		filter: function(str){ return $.trim(str.replace(/\s+/g, ' ')).replace(/,/g, ''); },
		encode: function(o){ return o ? o.join(',') : ''; },
		decode: function(o){ return o ? o.split(',') : []; }
  }, _options);
	
	element = $(element);
	
	var self = this;
	var init = function(){		
		original = element.css('display', 'none').attr('autocomplete', 'off').focus(focusLast);
		container = $('<div class="'+options.prefix+'" />')
			.insertAfter(element)
			.click(function(e){ 
				if ((e.target == list.get(0) || e.target == container.get(0)) && (!focused || current.toElement().get(0) != list.find(':last-child').get(0))) focusLast(); 			
			});			
		list = $('<ul class="'+ options.prefix +'-bits" />').appendTo(container);
		for (var name in options.plugins) enablePlugin(name, options.plugins[name]);		
		afterInit();
	};
	
	var enablePlugin = function(name, options){
		self.plugins[name] = new TextboxList[camelCase(capitalize(name))](self, options);
	};
	
	var afterInit = function(){
		if (options.endEditableBit) create('editable', null, {tabIndex: original.tabIndex}).inject(list);
		addEvent('bitAdd', update, true);
		addEvent('bitRemove', update, true);
		$(document).click(function(e){
			if (!focused) return;
			if (e.target.className.indexOf(options.prefix) != -1){				
				if (e.target == $(container).get(0)) return;				
				var parent = $(e.target).parents('div.' + options.prefix);
				if (parent.get(0) == container.get(0)) return;
			}
			blur();
		}).keydown(function(ev){
			if (!focused || !current) return;
			var caret = current.is('editable') ? current.getCaret() : null;
			var value = current.getValue()[1];
			var special = !!$.map(['shift', 'alt', 'meta', 'ctrl'], function(e){ return ev[e]; }).length;
			var custom = special || (current.is('editable') && current.isSelected());
			var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
			switch (ev.which){
				case 8:
					if (current.is('box')){ 
						evStop();
						return current.remove(); 
					}
				case options.keys.previous:
					if (current.is('box') || ((caret == 0 || !value.length) && !custom)){
						evStop();
						focusRelative('prev');
					}
					break;
				case 46:
					if (current.is('box')){ 
						evStop();
						return current.remove(); 
					}
				case options.keys.next: 
					if (current.is('box') || (caret == value.length && !custom)){
						evStop();
						focusRelative('next');
					}
			}
		});
		setValues(options.decode(original.val()));
	};
	
	var create = function(klass, value, opt){
		if (klass == 'box'){
			if (!value[0] && !value[1]) return false;
			if (chk(options.max) && list.getChildren('.' + options.prefix + '-bit-box').length + 1 > options.max) return false;
			if (options.unique && $.inArray(uniqueValue(value), index) != -1) return false;		
		}		
		return new TextboxListBit(klass, value, self, $.extend(true, options.bitsOptions[klass], opt));
	};
	
	var uniqueValue = function(value){
		return chk(value[0]) ? value[0] : (options.uniqueInsensitive ? value[1].toLowerCase() : value[1]);
	};
	
	var add = function(plain, id, html, afterEl){
		var b = create('box', [id, plain, html]);
		if (b){
			if (!afterEl || !afterEl.length) afterEl = list.find('.' + options.prefix + '-bit-box').filter(':last');
			b.inject(afterEl.length ? afterEl : list, afterEl.length ? 'after' : 'top');
		} 
		return self;
	};
	
	var focusRelative = function(dir, to){
		var el = getBit(to && $(to).length ? to : current).toElement();
		var b = getBit(el[dir]());
		if (b) b.focus();
		return self;
	};
	
	var focusLast = function(){
		var lastElement = list.children().filter(':last');
		if (lastElement) getBit(lastElement).focus();
		return self;
	};
	
	var blur = function(){	
		if (! focused) return self;
		if (current) current.blur();
		focused = false;
		return fireEvent('blur');
	};
	
	var getBit = function(obj){				
		return obj.jquery ? $(obj).data('textboxlist:bit') : obj;
	};
	
	var getValues = function(){
		return $.grep($.map(list.children(), function(el){
			var bit = getBit($(el));
			if (bit.is('editable')) return null;
			var v = bit.getValue();
			return (chk(v[0]) ? v[0] : options.filter(v[1])) || null;
		}), function(o){ return o != undefined; });
	};
	
	var setValues = function(values){
		if (!values) return;
		$.each(values, function(i, v){
			if (v) add.apply(self, $.isArray(v) ? [v[1], v[0], v[2]] : [v]);
		});		
	};
	
	var update = function(){
		original.val(options.encode(getValues()));
	};
	
	var addEvent = function(type, fn){
		if (events[type] == undefined) events[type] = [];
		var exists = false;
		$.each(events[type], function(f){
			if (f === fn){
				exists = true;
				return;
			};
		});
		if (!exists) events[type].push(fn);
		return self;
	};
	
	var fireEvent = function(type, args, delay){
		if (!events || !events[type]) return self;
		$.each(events[type], function(i, fn){		
			(function(){
				args = (args != undefined) ? splat(args) : Array.prototype.slice.call(arguments);
				var returns = function(){
					return fn.apply(self || null, args);
				};
				if (delay) return setTimeout(returns, delay);
				return returns();
			})();
		});
		return self;
	};
	
	var removeEvent = function(type, fn){
		if (events[type]){
			for (var i = events[type].length; i--; i){
				if (events[type][i] === fn) events[type].splice(i, 1);
			}
		} 
		return self;
	};
	
	this.onFocus = function(bit){
		if (current) current.blur();
		clearTimeout(blurtimer);
		current = bit;
		container.addClass(options.prefix + '-focus');		
		if (!focused){
			focused = true;
			fireEvent('focus', bit);
		}
	};
	
	this.onAdd = function(bit){
		if (options.unique && bit.is('box')) index.push(uniqueValue(bit.getValue()));
		if (bit.is('box')){
			var prior = getBit(bit.toElement().prev());
			if ((prior && prior.is('box') && options.inBetweenEditableBits) || (!prior && options.startEditableBit)){				
				var priorEl = prior && prior.toElement().length ? prior.toElement() : false;
				var b = create('editable').inject(priorEl || list, priorEl ? 'after' : 'top');
				if (options.hideEditableBits) b.hide();
			}
		}
	};
	
	this.onRemove = function(bit){
		if (!focused) return;
		if (options.unique && bit.is('box')){
			var i = $.inArray(uniqueValue(bit.getValue()), index);
			if (i != -1) index = index.splice(i + 1, 1);
		} 
		var prior = getBit(bit.toElement().prev());
		if (prior && prior.is('editable')) prior.remove();
		focusRelative('next', bit);
	};
	
	this.onBlur = function(bit, all){
		current = null;
		container.removeClass(options.prefix + '-focus');		
		blurtimer = setTimeout(blur, all ? 0 : 200);
	};
	
	this.setOptions = function(opt){
		options = $.extend(true, options, opt);
	};
	
	this.getOptions = function(){
		return options;
	};
	
	this.getContainer = function(){
		return container;
	};
	
	this.addEvent = addEvent;
	this.removeEvent = removeEvent;
	this.fireEvent = fireEvent;
	this.create = create;
	this.add = add;
	this.getValues = getValues;
	this.plugins = [];
	init();
};

TextboxListBit = function(type, value, textboxlist, _options){
	
	var element, bit, prefix, typeprefix, close, hidden, focused = false, name = capitalize(type); 
	var options = $.extend(true, type == 'box' ? {
		deleteButton: true
  } : {
		tabIndex: null,
		growing: true,
		growingOptions: {},
		stopEnter: true,
		addOnBlur: false,
		addKeys: 13
	}, _options);
	
	this.type = type;
	this.value = value;
	
	var self = this;
	var init = function(){
		prefix = textboxlist.getOptions().prefix + '-bit';
		typeprefix = prefix + '-' + type;
		bit = $('<li />').addClass(prefix).addClass(typeprefix)
			.data('textboxlist:bit', self)
			.hover(function(){ 
				bit.addClass(prefix + '-hover').addClass(typeprefix + '-hover'); 
			}, function(){
				bit.removeClass(prefix + '-hover').removeClass(typeprefix + '-hover'); 
			});
		if (type == 'box'){
			if(chk(self.value[2]))
				bit.html(self.value[2]);
			else
				bit.text(self.value[1]);
			bit.click(focus);
			if (options.deleteButton){
				bit.addClass(typeprefix + '-deletable');
				close = $('<a href="#" class="'+ typeprefix +'-deletebutton" />').click(function(event) { event.preventDefault(); remove(); }).appendTo(bit);
			}
			bit.children().click(function(e){ e.stopPropagation(); e.preventDefault(); });
		} else {
			element = $('<input type="text" class="'+ typeprefix +'-input" autocomplete="off" />').val(self.value ? self.value[1] : '').appendTo(bit);
			if (chk(options.tabIndex)) element.tabIndex = options.tabIndex;
			if (options.growing) new GrowingInput(element, options.growingOptions);		
			element.focus(function(){ focus(true); }).blur(function(){
				blur(true);
				if (options.addOnBlur) toBox(); 
			});				
			if (options.addKeys || options.stopEnter){
				element.keydown(function(ev){
					if (!focused) return;
					var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
					if (options.stopEnter && ev.which === 13) evStop();
					if ($.inArray(ev.which, splat(options.addKeys)) != -1){
						evStop();
						toBox();
					}
				});
			}
		}
	};
	
	var inject = function(el, where){
		switch(where || 'bottom'){
			case 'top': bit.prependTo(el); break;
			case 'bottom': bit.appendTo(el); break;
			case 'before': bit.insertBefore(el); break;			
			case 'after': bit.insertAfter(el); break;						
		}
		textboxlist.onAdd(self);	
		return fireBitEvent('add');
	};
	
	var focus = function(noReal){
		if (focused) return self;
		show();
		focused = true;
		textboxlist.onFocus(self);
		bit.addClass(prefix + '-focus').addClass(prefix + '-' + type + '-focus');
		fireBitEvent('focus');		
		if (type == 'editable' && !noReal) element.focus();
		return self;
	};
	
	var blur = function(noReal){
		if (!focused) return self;
		focused = false;
		textboxlist.onBlur(self);
		bit.removeClass(prefix + '-focus').removeClass(prefix + '-' + type + '-focus');
		fireBitEvent('blur');
		if (type == 'editable'){
			if (!noReal) element.blur();
			if (hidden && !element.val().length) hide();
		}
		return self;
	};
	
	var remove = function(){
		blur();
		textboxlist.onRemove(self);
		bit.remove();
		return fireBitEvent('remove');
	};
	
	var show = function(){
		bit.css('display', 'block');
		return self;
	};
	
	var hide = function(){
		bit.css('display', 'none');		
		hidden = true;
		return self;
	};
	
	var fireBitEvent = function(type){
		type = capitalize(type);
		textboxlist.fireEvent('bit' + type, self).fireEvent('bit' + name + type, self);
		return self;
	};
	
  this.is = function(t){
    return type == t;
  };

	this.setValue = function(v){
		if (type == 'editable'){
			element.val(chk(v[0]) ? v[0] : v[1]);
			if (options.growing) element.data('growing').resize();
		} else value = v;
		return self;
	};

 	this.getValue = function(){
		return type == 'editable' ? [null, element.val(), null] : value;
	};
	
	if (type == 'editable'){
		this.getCaret = function(){
 			var el = element.get(0);
			if (el.createTextRange){
		    var r = document.selection.createRange().duplicate();		
		  	r.moveEnd('character', el.value.length);
		  	if (r.text === '') return el.value.length;
		  	return el.value.lastIndexOf(r.text);
		  } else return el.selectionStart;
		};

		this.getCaretEnd = function(){
 			var el = element.get(0);			
			if (el.createTextRange){
				var r = document.selection.createRange().duplicate();
				r.moveStart('character', -el.value.length);
				return r.text.length;
			} else return el.selectionEnd;
		};
		
		this.isSelected = function(){
			return focused && (self.getCaret() !== self.getCaretEnd());
		};
		
		var toBox = function(){
			var value = self.getValue();				
			var b = textboxlist.create('box', value);
			if (b){
				b.inject(bit, 'before');
				self.setValue([null, '', null]);
				return b;
			}
			return null;
		};
		
		this.toBox = toBox;
	}
	
	this.toElement = function(){
		return bit;
	};
	
	this.focus = focus;
	this.blur = blur;
	this.remove = remove;
	this.inject = inject;
	this.show = show;
	this.hide = hide;
	this.fireBitEvent = fireBitEvent;
	init();
};

var chk = function(v){ return !!(v || v === 0); };
var splat = function(a){ return (Object.prototype.toString.call(a) === "[object Array]") ? a : [a]; };
var camelCase = function(str){ return str.replace(/-\D/g, function(match){ return match.charAt(1).toUpperCase(); }); };
var capitalize = function(str){ return str.replace(/\b[a-z]/g, function(A){ return A.toUpperCase(); }); };

})(jQuery);

/**//**/
/*
 *	CreateTour
 *	----------
 *	This class handles all the interactions like map and navigation
 *	in the tour create wizard.
 *
 */
GYG.CreateTour = function() {
	GYG.CreateTour.running = this;
	this.init(document.body.className.match(/step(\d*)/)[1]);
};

$.extend(GYG.CreateTour.prototype, {
	init: function(step) {
		var i=0;
		this.currentStep = step;
		this.$form = $("#create_form");
		// where the form should go
		this.$stepToGo = $("#create_step");
		this.initNavigation();
		if(this["initStep"+step])
			this["initStep"+step]();
		
		// ask if user wants to leave the page
		if(step > 0) {
			// very exotic event
			window.onbeforeunload = function() {
				if(!GYG.okToLeavePage) {
					return GYG.translation.CreateTour.leaveWarning;
				}
			};
			
			this.$form.submit(function() {
				GYG.okToLeavePage = true;
				
				// WYSIWYG clean up
				if(step == 2) {
					var parse = $("textarea.tiny-mce").val();
					// clean tags
					parse = parse.replace(/<strong>/gi, "[:strong:]").replace(/<\/strong>/gi, "[:/strong:]").replace(/<em>/gi, "[:em:]").replace(/<\/em>/gi, "[:/em:]");
					
					// decode
					parse = parse.replace(/<p>/gi, "").replace(/<\/p>/gi, "\n").replace(/<br(\s+)?\/(\s+)?>/gi, "\n").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
	                
	                // cleanup
	                parse = parse.replace(/<[^>]+>/gi, "");
	                	
	                // reintroduce html
	                parse = parse.replace(/\[:strong:\]/g, "<strong>").replace(/\[:\/strong:\]/g, "</strong>").replace(/\[:em:\]/g, "<em>").replace(/\[:\/em:\]/g, "</em>");
	                		                
	                $("textarea[name='description']").val(parse);
				}
			});
			
			// textfields with 
			new GYG.TextFieldCounter();
		}
	},
	
	// makes the navigation
	initNavigation: function() {
		var self = this;
		
		// listen to the back link
		$("#create_back").click(function(event) {
			event.preventDefault();
			self.goToStep.apply(self, [self.currentStep -1]);
		});
		
		// listen for the navigation bar
		$("#create-step a").click(function(event) {
			event.preventDefault();
			self.goToStep.apply(self, [$(this).attr("href").substr(1)]);
		});
	},
	
	// goes to a specific step
	goToStep: function(step) {
		GYG.okToLeavePage = true;
		this.$stepToGo.val(step);
		this.$form.submit();
	},
	
	// initializations for each step if needed
	//initStep0: function() {},
	
	// map
	initStep1: function() {
		this.gmap = gMapObj = new GMap2($("#gmap-canvas")[0], { size: new GSize(666, 482) });

		this.geocoder = new GClientGeocoder();

		GYG.DefaultGMarkerIcon();

		// initialize the marker
		var marker = new GMarker(new GLatLng(0,0), {draggable: true});

		//GEvent.addListener(marker, "dragstart", function() {
		//});

		GEvent.addListener(marker, "dragend", function() {
			setTimeout(function() {
				gMapObj.panTo(marker.getLatLng());
			}, 333);
			$("input[name=lat]").val(marker.getLatLng().lat());
			$("input[name=lng]").val(marker.getLatLng().lng());
		});

		// explanation for start point
		GEvent.addListener(marker, "dragend", function() {
			var text = GYG.translation.CreateTour.tourStartPoint;
			text = text.replace(/%1/g, "<strong>").replace(/%2/g, "</strong>");
			marker.openInfoWindowHtml("<div style='width: 220px;'>"+text+"</div>");
		});

		GEvent.addListener(gMapObj, "zoomend", function(oldLevel, newLevel) {
			$("input[name=map_zoom]").val(newLevel);
		});

		var self = this;
		var markerIsOnMap = false;

		// methods used by this step:
		$.extend(this, {
			// method to search for an address
			showAddress: function(address) {
				this.geocoder.getLatLng(
					address,
					function(point) {
						$(".inline-js-error").remove();
						if (!point) {
							self.addressNotFound(address);
						} else {
							gMapObj.setCenter(point, 12);
							marker.setLatLng(point);
							if(!markerIsOnMap) {
								gMapObj.addOverlay(marker);
								markerIsOnMap = true;
							}
							// fire event to get lat lng in form fields
							GEvent.trigger(marker, "dragend");
							$.scrollTo($('.numbers.n2').parent(), 150);
						}
					}
				);
			},

			addressNotFound: function(address) {
				$("input[name='search_location']").before("<p class='error inline-js-error'><strong>"+address+"</strong> "+GYG.translation.CreateTour.addressNotFound+"</p>");
			}
		});

		$(window).unload(GUnload);

		/*
		 * catch the submission of the "inner form" used to find a location on the map.
		 * when the user hits enter in this field, it is focused. on submission of the form
		 * it checks if the field is focused, meaning that a location search will be done.
		 * if the button is pressed, a search is started too.
		 */
		$("#gmap_search").focus(function() {
			$(this).attr("focus", "true");
		});

		$("#gmap_search").blur(function() {
			$(this).attr("focus", "false");
		});

		$("#gmap_search_button").click(function() {
			var val = $("#gmap_search").val();
			if(val != $("#gmap_search").attr("placeholder"))
				self.showAddress(val);
		});

		this.$form.submit(function(event) {
			if($("#gmap_search").attr("focus") == "true") {
				event.preventDefault();
				var val = $("#gmap_search").val();
				if(val != "")
					self.showAddress(val);
			}
		});

		// do we already have all map infos?
		// if so, adjust the map
		if($("input[name=lat]").val() != '' && $("input[name=lng]").val() != '' && $("input[name=map_zoom]").val() != '') {
			var latlng = new GLatLng(parseFloat($("input[name=lat]").val()), parseFloat($("input[name=lng]").val()));
			gMapObj.setCenter(latlng, parseInt($("input[name=map_zoom]").val(), 10));
			marker.setLatLng(latlng);
			gMapObj.addOverlay(marker);
		} else {
			gMapObj.setCenter(new GLatLng(0, 15), 1);
		}

		gMapObj.addControl(new GSmallZoomControl3D());
		gMapObj.addControl(new GMenuMapTypeControl());
		gMapObj.enableContinuousZoom();
		gMapObj.disableDragging();
	},
 
 

 
 
 
 
	
	initStep2: function() {
		var self = this;
		
		this.selectedLanguages = [];
		
		var select = $("#language_select select");
		
		// listen for the language dropdown change
		select.change(function() {
			self.selectLanguage(this.value);
			// return to 'please select' value
			this.value = '';
		});
		
		$("textarea.tiny-mce").tinymce({
			// Location of TinyMCE script
			script_url : '/js/lib/tiny_mce/tiny_mce.js',

			// General options
			theme : "advanced",
			mode : "exact",
			skin : "o2k7",
			plugins : "safari,paste",
			entity_encoding : "raw",
			paste_convert_middot_lists: false,
			
			setup: function(ed) {
				if($.browser.safari) {
					// Force Paste-as-Plain-Text
					ed.onPaste.add( function(ed, e, o) {
						ed.execCommand('mcePasteText', true);
						return tinymce.dom.Event.cancel(e);
					});
				}
			},
			
			// Theme options
			theme_advanced_buttons1 : "bold,italic,|,undo,redo",
			theme_advanced_buttons2 : "",
			theme_advanced_buttons3 : "",
			theme_advanced_buttons4 : "",
			theme_advanced_toolbar_location : "top",
			theme_advanced_toolbar_align : "left",
			theme_advanced_resizing : false
		});

		
		// add methods
		$.extend(this, {
			selectLanguage: function(langID) {
				if(langID == '' || $("option[value="+langID+"]", select).length > 2) return;
				
				this.selectedLanguages.push(langID);
				$("input[name=languages]").val(this.selectedLanguages.join("|"));
				$("option[value="+langID+"]", select).attr("disabled", true);
				
				// create li
				var langName = $("option[value="+langID+"]", select).text();
				if($("option[value="+langID+"]", select).length > 1) {
					langName = $("option[value="+langID+"]:first", select).text();
				}
				var li = $('<li id="lang'+langID+'"></li>');
				li.text(langName);
				var a = $('<a href="#">X</a>').click(function(event) {
					event.preventDefault();
					self.deselectLanguage($(this).parent().attr("id").replace(/lang/,''));
				});
				a.prependTo(li);
				GYG.flashElement(li.insertBefore("#language_select"), { duration: 750 });
			},
			
			deselectLanguage: function(langID) {
				$("#lang"+langID).fadeOut("fast", function() { $(this).remove(); });
				var index = $.inArray(langID, this.selectedLanguages);
				if(index >= 0) {
					this.selectedLanguages.splice(index, 1);
					$("input[name=languages]").val(this.selectedLanguages.join("|"));
				}
				$("option[value="+langID+"]", select).attr("disabled", false);
			}
		});
		
		// preselect the languages already set
		var selectedLanguages = $("input[name=languages]").val().split("|").sort(function(a,b){return a-b;});
		for(var i=0; i<selectedLanguages.length; i++)
			this.selectLanguage(selectedLanguages[i]);
			
		// TextBoxList for keywords
		GYG.ImagePreloader.load(['close.gif'], false);
		var options = {
			editable: {
				addKeys: 188,
				addOnBlur: true,
				stopEnter: false,
				unique: true
			}
		};
		this.textboxList = new TextboxList('#keywords', { bitsOptions: options, unique: true });
		
		// target groups
		var $tGroupsAll = $("input[name='target_group_all']");
		// initial check
		if($(".t-groups:checked").size() == 0) {
			$tGroupsAll.attr("checked", true);
		}
		// on change of real target groups
		$(".t-groups").click(function() {
			if($(".t-groups:checked").size() == 0) {
				$tGroupsAll.attr("checked", true);
			} else if($(".t-groups:checked").size() > 0) {
				$tGroupsAll.attr("checked", false);
			}
		});
		// on change of all
		$tGroupsAll.click(function() {
			if(this.checked) {
				$(".t-groups:checked").attr("checked", false);
			}
		});
		
		// highlights
		$(".highlight").each(function() {
			if($("input", $(this)).val() != '') {
				$(this).removeClass("hidden");
				$(this).next().removeClass("hidden");
			}
		});
		// display the next highlight
		$(".highlight input").keyup(function() {
			var $div = $(this).parent();
			if($(this).val() != '') {
				$div.next().removeClass("hidden");
			}
		});
	},
	
	// availabilty
	initStep3: function() {
		var self = this;
		var okForNextStep = true;
		
		var availability = new GYG.Availability();
		
		// Submit Parent Form
		$("#create_next").click(function() {
			if(okForNextStep == true) {
				self.$form.submit();
			}
		});
	},
	
	// price
	initStep4: function() {
		var self = this;
		var okForNextStep = true;
		
		var prices = new GYG.Prices();
		
		// Submit Parent Form
		$("#create_next").click(function() {
			if(okForNextStep == true) {
				self.$form.submit();
			}
		});
		
		// hide praticipants if group price
		$("select[name='price_type']").change(function() {
			var $priceLi = $("#visible-price-table").parent().parent();
			var $currencyLi = $("select[name='currency_id']").parent().parent();
			var $priceTypeLi = $("select[name='price_type']").parent().parent();
			
			// switch tables
			var hiddenTable = $("#hidden-price-container").html();
			var visibleTable = $("#visible-price-table").html();
			$("#hidden-price-container").html(visibleTable);
			$("#visible-price-table").html(hiddenTable);
			
			if($(this).val() == 'per_person') {
				$("#participants.hidden").removeClass("hidden");
				$(".per-person-controls.hidden").removeClass("hidden");
				$(".group-controls:not(.hidden)").addClass("hidden");
				if($(".numbers", $priceLi).hasClass("n3")) {
					$(".numbers", $priceLi).removeClass("n3").addClass("n4");
				}
				$currencyLi.addClass("even");
				$priceTypeLi.removeClass("even");
			} else if($(this).val() == 'group') {
				$("#participants:not(.hidden)").addClass("hidden");
				$(".per-person-controls:not(.hidden)").addClass("hidden");
				$(".group-controls.hidden").removeClass("hidden");
				if($(".numbers", $priceLi).hasClass(".n4")) {
					$(".numbers", $priceLi).removeClass("n4").addClass("n3");
				}
				$currencyLi.removeClass("even");
				$priceTypeLi.addClass("even");
			}
			prices.triggerAddColumn.apply(self);
			prices.triggerDeleteSeason.apply(self);
			prices.triggerDeleteCategory.apply(self);
		});
	},
	
	// picture upload
	initStep5: function() {
		var self = this;
		
		var $pictureList = $("#picture-list");
		
		$(".delete", $pictureList).click(function(event) {
			event.preventDefault();
			$(this).unbind();
			self.deletePictureWithId(parseInt($(this).parent().attr("id").replace(/pic-/, ''), 10));
		});
		
		var html = 
		'<li id="pic-%pictureId%">'+
			'<div class="handle"></div>'+
			'<a href="#" class="slideshow" rel="slideshow-%order%" title="%slideshowTitle%">'+
				'<img src="http://img.getyourguide.com/img/tour_img-%pictureId%-7.jpg" width="70" height="70" />'+
			'</a>'+
			'<p class="order">%orderText%</p>'+
			'<p><label>%descriptionLabel%<br /><input type="text" name="picture_description[%pictureId%]" maxlength="100" /></label></p>'+
			'<a href="#" class="delete" title="%deleteTitle%">X</a>'+
		'</li>';
		
		$.extend(this, {
			beginUpload: function() {
				$("ul.error").empty().hide();
				$("#picture-upload").addClass("uploading");
			},
			uploadEnded: function(data) {
				$("[name=picture]").val('');
				$("#picture-upload").removeClass("uploading");
				if(data.success) {
					this.insertNewImage(data.order_id, data.tour_picture_id);
				} else {
					this.showErrors(data.user_exceptions.picture);
				}
			},
			insertNewImage: function(order, pictureId) {
				var li = html.replace(/%pictureId%/g, pictureId).replace(/%order%/g, order).replace(/%slideshowTitle%/g, GYG.translation.CreateTour.slideshowTitle).replace(/%id%/g, GYG.CreateTour.tour_id).replace(/%orderText%/g, (order == 0) ? GYG.translation.CreateTour.mainPicture : order+1).replace(/%descriptionLabel%/g, GYG.translation.CreateTour.descriptionLabel).replace(/%deleteTitle%/g, GYG.translation.CreateTour.deleteTitle);
				li = $(li);
				$pictureList.append(li.hide());
				$("a.delete", li).click(function(event) {
					event.preventDefault();
					$(this).unbind();
					self.deletePictureWithId(parseInt($(this).parent().attr("id").replace(/pic-/, ''), 10));
				});
				GYG.flashElement(li.slideDown());
				$pictureList.sortable("refresh");
				GYG.Slideshow.running.checkForNewPictures();
				
				var newOrderVal = $("input[name=new_picture_order]").val();
				if(newOrderVal != "")
					$("input[name=new_picture_order]").val(newOrderVal+"|"+order);
				
				this.checkUploadCount();
			},
			showErrors: function(exceptions) {
				if(exceptions.length == 0) return;
				
				var $ul = $("ul.error");
				var i = -1;
				while(++i < exceptions.length)
					$('<li></li>').text(exceptions[i]).appendTo($ul);
				$ul.show();
			},
			deletePictureWithId: function(id) {
				var self = this;
				
				$.ajax({
					type: "POST",
					url: "/supplier/ajax/tour_edit.php",
					data: {
						edit: "tour_picture_delete",
						tour_picture_id: id
					},
					dataType: "json",
					success: function(data) {
						if(data.success)
							self.removePictureWithId.apply(self, [id]);
						else
							self.unableToDeletePicture.apply(self);
					},
					error: function() { 
						self.unableToDeletePicture.apply(self);
					}
				 });
			},
			removePictureWithId: function(id) {
				$pic = $("#pic-"+id);
				$pic.slideUp("normal", function() {
					$(this).remove();
					self.checkUploadCount.apply(self);
					self.updatePictureNumbering.apply(self);
					GYG.Slideshow.running.checkForNewPictures();
				});
			},
			unableToDeletePicture: function() {
				alert("Error - Do not doubleclick");
			},
			checkUploadCount: function() {
				if($pictureList.children().length >= GYG.CreateTour.maxFiles) {
					$("#limit-message").show();
				} else {
					$("#limit-message").hide();
				}
			},
			updatePictureNumbering: function() {
				$pictureList.children().removeClass("main").each(function(i) {
					if(i == 0)
						this.className="main";
						
					$(".order", this).text((i == 0) ? GYG.translation.CreateTour.mainPicture : i+1);
				});
			}
		});
		
		GYG.genericError = function(error) {
			self.uploadEnded({ user_exceptions: { picture: [error] }});
		};
		
		this.checkUploadCount();
		
		this.$form.submit(function() {
			var newOrders = [];
			
			$pictureList.children().each(function(i) {
				newOrders.push($(this).attr("id").replace(/pic-/, ''));
			});
			
			$("input[name=new_picture_order]").val(newOrders.join("|"));
		});
		
		$("#picture-upload").submit(function() {
			self.beginUpload.apply(self);
		});
		
		// automatically submit after file selection
		$("#picture").change(function() {
			$("#picture-upload").submit();
		});
		
		$pictureList.sortable({
			handle: ".handle",
			axis: 'y',
			containment: 'parent',
			tolerance: 'pointer',
			start: function(event, ui) {
				if($.browser.safari)
					ui.item.addClass("webkit-dragging");
				else
					ui.item.addClass("dragging");
			},
			stop: function(event, ui) {
				ui.item.removeClass("dragging");
				ui.item.removeClass("webkit-dragging");
				
				self.updatePictureNumbering.apply(self);
			}
		});
		
		$("#create_next").click(function() {
			self.$form.submit();
		});
		
		// modify sorting if already specified.
		// only occurs if description has exception.
		// doing this to restore the order the user selected
		var order;
		if((order = $("input[name=new_picture_order]").val()) != '') {
			order = order.split("|");
			for(var i = 0; i < order.length; i++)
				$pictureList.append($("#pic-"+order[i]));
			this.updatePictureNumbering();
		}
	},
	
	// Preview and Language confirm
	initStep6: function() {
		// Language Selection controls
		$("#tour-language a").click(function(event) {
			event.preventDefault();
			$("#tour-language").fadeOut("fast", function() {
				$("#language-select").fadeIn("fast");
			});
		});
	}
	
});
$(function() {
	new GYG.CreateTour();
});
/**/
