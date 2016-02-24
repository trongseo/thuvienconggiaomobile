//<![CDATA[

//----------------------------------------------------------------------------
// Code to determine the browser and version.
//----------------------------------------------------------------------------

function Browser() {

  var ua, s, i;

  this.isIE    = false;  // Internet Explorer
  this.isOP    = false;  // Opera
  this.isNS    = false;  // Netscape
  this.version = null;

  ua = navigator.userAgent;

  s = "Opera";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isOP = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  s = "Netscape6/";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  // Treat any other "Gecko" browser as Netscape 6.1.

  s = "Gecko";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = 6.1;
    return;
  }

  s = "MSIE";
  if ((i = ua.indexOf(s))) {
    this.isIE = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }
}

var browser = new Browser();

var activeButton = null;

var id_div_submenu = "wraper";

//
//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
function buttonClick(event, menuId) {

  var button;

  // Get the target button element.

  if (browser.isIE)
  	if (window.event.srcElement.tagName=="A"){
			button = window.event.srcElement;
		}else{
			button = window.event.srcElement.parentElement;
		}
  else
  	if (event.currentTarget.tagName=="A"){
			button = event.currentTarget;
		}else{	
			button = event.currentTarget.parentElement;
		}

  // Blur focus from the link to remove that annoying outline.

  button.blur();

  // Associate the named menu to this button if not already done.
  // Additionally, initialize menu display.

  if (button.menu == null) {
    button.menu = document.getElementById(menuId);
    if (button.menu.isInitialized == null)
      menuInit(button.menu);
  }

  // [MODIFIED] Added for activate/deactivate on mouseover.

  // Set mouseout event handler for the button, if not already done.

  if (button.onmouseout == null)
    button.onmouseout = buttonOrMenuMouseout;

  // Exit if this button is the currently active one.

  if (button == activeButton)
    return false;

  // [END MODIFIED]

  // Reset the currently active button, if any.

  if (activeButton != null)
    resetButton(activeButton);

  // Activate this button, unless it was the currently active one.

  if (button != activeButton) {
    depressButton(button);
    activeButton = button;
  }
  else
    activeButton = null;

  return false;
}

//
//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
function buttonMouseover(event, menuId) {
  var button;
  // [MODIFIED] Added for activate/deactivate on mouseover.

  // Activates this button's menu if no other is currently active.

  if (activeButton == null) {
    buttonClick(event, menuId);
    return;
  }
//		alert("button1");

  // [END MODIFIED]

  // Find the target button element.
  if (browser.isIE)
    button = window.event.srcElement.parentElement;
  else
    button = event.currentTarget.parentElement;
		
  // If any other button menu is active, make this one active instead.
	
//alert(button.tagName);
  if (activeButton != null && activeButton != button)
    buttonClick(event, menuId);
}

//
//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
function depressButton(button) {

  var x, y;
  // Update the button's style class to make it look like it's
  // depressed.

  button.className += " menuButtonActive";

  // [MODIFIED] Added for activate/deactivate on mouseover.

  // Set mouseout event handler for the button, if not already done.

  if (button.onmouseout == null)
    button.onmouseout = buttonOrMenuMouseout;
  if (button.menu.onmouseout == null)
    button.menu.onmouseout = buttonOrMenuMouseout;
	
  // [END MODIFIED]

  // Position the associated drop down menu under the button and
  // show it.

  x = getPageOffsetLeft(button) + 1;// + button.offsetWidth;
  y = getPageOffsetTop(button) + button.offsetHeight;

  // For IE, adjust position.

  if (browser.isIE) {
    x += button.offsetParent.clientLeft;
    y += button.offsetParent.clientTop;
  }else{
    x-=2;
  }
    y-=1;
//  x+=18;

  button.menu.style.left = x + "px";
  button.menu.style.top  = y + "px";
  button.menu.style.visibility = "visible";

  // For IE; size, position and show the menu's IFRAME as well.

  if (button.menu.iframeEl != null)
  {
    button.menu.iframeEl.style.left = button.menu.style.left;
    button.menu.iframeEl.style.top  = button.menu.style.top;
    button.menu.iframeEl.style.width  = button.menu.offsetWidth + "px";
    button.menu.iframeEl.style.height = button.menu.offsetHeight + "px";
    button.menu.iframeEl.style.display = "";
  }
}

//
//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
function resetButton(button) {

  // Restore the button's style class.

  removeClassName(button, "menuButtonActive");

  // Hide the button's menu, first closing any sub menus.

  if (button.menu != null) {
    closeSubMenu(button.menu);
    button.menu.style.visibility = "hidden";

    // For IE, hide menu's IFRAME as well.

    if (button.menu.iframeEl != null)
      button.menu.iframeEl.style.display = "none";
  }
}

//----------------------------------------------------------------------------
// Code to handle the menus and sub menus.
//----------------------------------------------------------------------------

function menuMouseover(event) {

  var menu;

  // Find the target menu element.

  if (browser.isIE)
    menu = getContainerWith(window.event.srcElement, "DIV", "menu");
  else
    menu = event.currentTarget;

  // Close any active sub menu.

  if (menu.activeItem != null)
    closeSubMenu(menu);
}
//
//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
function menuItemMouseover(event, menuId) {

  var item, menu, x, y;
//	alert("bla-bla");
  // Find the target item element and its parent menu element.

  if (browser.isIE)
    item = getContainerWith(window.event.srcElement, "A", "menuItem");
  else
    item = event.currentTarget;
  menu = getContainerWith(item, "DIV", "menu");

  // Close any active sub menu and mark this one as active.

  if (menu.activeItem != null)
    closeSubMenu(menu);
  menu.activeItem = item;

  // Highlight the item element.

  item.className += " menuItemHighlight";

  // Initialize the sub menu, if not already done.

  if (item.subMenu == null) {
    item.subMenu = document.getElementById(menuId);
    if (item.subMenu.isInitialized == null)
      menuInit(item.subMenu);
  }

  // [MODIFIED] Added for activate/deactivate on mouseover.

  // Set mouseout event handler for the sub menu, if not already done.

  if (item.subMenu.onmouseout == null)
    item.subMenu.onmouseout = buttonOrMenuMouseout;

  // [END MODIFIED]

  // Get position for submenu based on the menu item.

  x = getPageOffsetLeft(item) + item.offsetWidth+1;
  y = getPageOffsetTop(item);
  // Adjust position to fit in view.

  var maxX, maxY;

  if (browser.isIE) {
    maxX = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) +
      (document.documentElement.clientWidth != 0 ? document.documentElement.clientWidth : document.body.clientWidth);
    maxY = Math.max(document.documentElement.scrollTop, document.body.scrollTop) +
      (document.documentElement.clientHeight != 0 ? document.documentElement.clientHeight : document.body.clientHeight);
  }
  if (browser.isOP) {
    maxX = document.documentElement.scrollLeft + window.innerWidth;
    maxY = document.documentElement.scrollTop  + window.innerHeight;
  }
  if (browser.isNS) {
    maxX = window.scrollX + window.innerWidth;
    maxY = window.scrollY + window.innerHeight;
  }
  maxX -= item.subMenu.offsetWidth;
  maxY -= item.subMenu.offsetHeight;

  if (x > maxX)
    x = Math.max(0, x - item.offsetWidth - item.subMenu.offsetWidth
      + (menu.offsetWidth - item.offsetWidth));
  y = Math.max(0, Math.min(y, maxY));

  // Position and show the sub menu.

  item.subMenu.style.left       = x + "px";
  item.subMenu.style.top        = y + "px";
  item.subMenu.style.visibility = "visible";

  // For IE; size, position and display the menu's IFRAME as well.

  if (item.subMenu.iframeEl != null)
  {
    item.subMenu.iframeEl.style.left    = item.subMenu.style.left;
    item.subMenu.iframeEl.style.top     = item.subMenu.style.top;
    item.subMenu.iframeEl.style.width   = item.subMenu.offsetWidth + "px";
    item.subMenu.iframeEl.style.height  = item.subMenu.offsetHeight + "px";
    item.subMenu.iframeEl.style.display = "";
  }

  // Stop the event from bubbling.

  if (browser.isIE)
    window.event.cancelBubble = true;
  else
    event.stopPropagation();
}

//
//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
function closeSubMenu(menu) {

  if (menu == null || menu.activeItem == null)
    return;

  // Recursively close any sub menus.

  if (menu.activeItem.subMenu != null) {
    closeSubMenu(menu.activeItem.subMenu);
    menu.activeItem.subMenu.style.visibility = "hidden";

    // For IE, hide the sub menu's IFRAME as well.

    if (menu.activeItem.subMenu.iframeEl != null)
      menu.activeItem.subMenu.iframeEl.style.display = "none";

    menu.activeItem.subMenu = null;
  }

  // Deactivate the active menu item.

  removeClassName(menu.activeItem, "menuItemHighlight");
  menu.activeItem = null;
}

// [MODIFIED] Added for activate/deactivate on mouseover. Handler for mouseout
// event on buttons and menus.

//
//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
function buttonOrMenuMouseout(event) {

  var el;

  // If there is no active button, exit.

  if (activeButton == null)
    return;

  // Find the element the mouse is moving to.

  if (browser.isIE)
    el = window.event.toElement;
  else if (event.relatedTarget != null)
      el = (event.relatedTarget.tagName ? event.relatedTarget : event.relatedTarget.parentNode);

  // If the element is not part of a menu, reset the active button.

  if (getContainerWith(el, "DIV", "menu") == null) {
    resetButton(activeButton);
    activeButton = null;
  }
}

// [END MODIFIED]

//----------------------------------------------------------------------------
// Code to initialize menus.
//----------------------------------------------------------------------------

function menuInit(menu) {

  var itemList, spanList;
  var textEl, arrowEl;
  var itemWidth;
  var w, dw;
  var i, j;
	var maxl, maxall, h;


  // Find the width of a menu item.
  itemList = menu.getElementsByTagName("A");
  if (itemList.length > 0) {
    itemWidth = itemList[0].offsetWidth; }
  else
    return;

//	var s='';
	maxl=0;
	maxall=0;
	for (i = 0; i < itemList.length; i++) {
//		s+="   "+itemList[i].tagName+" (";
		tmp=itemList[i].getElementsByTagName("SPAN");
		if (tmp[1].offsetWidth > maxl){
			maxl=tmp[1].offsetWidth;
		}
		if (tmp[0].offsetWidth+tmp[1].offsetWidth+tmp[2].offsetWidth > maxall){
			maxall=tmp[0].offsetWidth+tmp[1].offsetWidth+tmp[2].offsetWidth;
		}
//		s+=tmp[1].offsetWidth+" "+itemList[i].offsetTop+"\n";
	}
	
//	s+=maxl+"  "+maxall+"\n";
	h=0;
	lister=menu.getElementsByTagName("*");
	for (i = 0; i < lister.length; i++) {
		if (lister[i].tagName=="A"){
			tmp=lister[i].getElementsByTagName("SPAN");
			tmp[1].style.width = maxl+"px";
			lister[i].style.width = maxall+"px";
			lister[i].style.top = h+"px";
			h+=lister[i].offsetHeight;
//			s+=lister[i].className+"\n";
		}
		if (lister[i].className=="menuItemSep"){
			tmp=lister[i].getElementsByTagName("SPAN");
			tmp[0].style.width = maxall+"px";
//			tmp[1].style.width = maxall+"px";
//			tmp[2].style.width = maxall+"px";
			lister[i].style.width = maxall+"px";
			lister[i].style.top = h+"px";
			h+=lister[i].offsetHeight;
//			s+=lister[i].className+"\n";
		}
	}
//	s+="----\n";
	menu.style.height=h+"px";
	menu.style.width=maxall+"px";
//alert(menu.offsetHeight);
//	alert(s);

   // Fix IE hover problem by setting an explicit width on first item of
  // the menu.

  if (browser.isIE) {
		for(i=0; i < itemList.length; i++){	
			w = itemList[i].offsetWidth;
			itemList[i].style.width = w + "px";
			dw = itemList[i].offsetWidth - w;
			w -= dw;
			itemList[i].style.width = w + "px";
		}
  }

  // Fix the IE display problem (SELECT elements and other windowed controls
  // overlaying the menu) by adding an IFRAME under the menu.

  if (browser.isIE) {
    var iframeEl = document.createElement("IFRAME");
    iframeEl.frameBorder = 0;
    iframeEl.src = "javascript:;";
    iframeEl.style.display = "none";
    iframeEl.style.position = "absolute";
    iframeEl.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";
    menu.iframeEl = menu.parentNode.insertBefore(iframeEl, menu);
  }

  // Mark menu as initialized.

  menu.isInitialized = true;
}

function set_id_div_submenu(z){
 id_div_submenu=z;
}


//----------------------------------------------------------------------------
// General utility functions.
//----------------------------------------------------------------------------

function getContainerWith(node, tagName, className) {

  // Starting with the given node, find the nearest containing element
  // with the specified tag name and style class.

  while (node != null) {
    if (node.tagName != null && node.tagName == tagName &&
        hasClassName(node, className))
      return node;
    node = node.parentNode;
  }

  return node;
}

//
//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
function hasClassName(el, name) {

  var i, list;

  // Return true if the given element currently has the given class
  // name.

  list = el.className.split(" ");
  for (i = 0; i < list.length; i++)
    if (list[i] == name)
      return true;

  return false;
}

//
//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
function removeClassName(el, name) {

  var i, curList, newList;

  if (el.className == null)
    return;

  // Remove the given class name from the element's className property.

  newList = new Array();
  curList = el.className.split(" ");
  for (i = 0; i < curList.length; i++)
    if (curList[i] != name)
      newList.push(curList[i]);
  el.className = newList.join(" ");
}

//
//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
function getPageOffsetLeft(el) {

	var x,i;
  // Return the x coordinate of an element relative to the page.
	x = 0;
	for (i=el; i!=null; i=i.offsetParent){
	//for (i=el; (i!=null && i.id!=id_div_submenu); i=i.offsetParent){
        if (i.id==id_div_submenu)
            break;
		x += i.offsetLeft;
	}
  return x;
}

//
//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
function getPageOffsetTop(el) {

  var y,i;
  y = 0;
	for (i=el; (i!=null && i.id!=id_div_submenu); i=i.offsetParent){
		y += i.offsetTop;
	}
  return y;
} 

//
//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
function prepic(path,arr) {
	var d=document; 
	if(d.images){ 
		d.arrPic=new Array();
		var i;
		for(i=0; i<arr.length; i++){
			d.arrPic[i]=new Image; 
			d.arrPic[i].src=path+arr[i];
		}
	}
}
//
set_id_div_submenu("header");
//
//]]>
