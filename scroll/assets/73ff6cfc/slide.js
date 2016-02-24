jQuery.fn.extend({
    createSlidesPresentation: function (options) {
        /* core */
            $slidesPresentation = function (jEl, options) {
                var self= this; //self references

                /* public methods */

                    /*
                    *  name : setup
                    *  arguments: 
                    *  return: void
                    *  description: autoplay
                    */
                    this.setup = function () {
                        this.options = {
                            delay: options != undefined && options.delay != undefined ? options.delay*1000 : 2*1000, //by default : each image can be viewed in 2 second
                            control: options != undefined && options.control != undefined ? options.control : undefined,
                            next_btn: options != undefined && options.next_btn != undefined ? options.next_btn : undefined,
                            prev_btn: options != undefined && options.prev_btn != undefined ? options.prev_btn : undefined,
                            play_backward: options != undefined && options.play_backward != undefined ? options.play_backward : false
                        }
                        this.list = jEl;
                        this.list_items = this.list.find("> li");

                        this.control_items = this.options.control.find("li");

                        this.current_active_index;

                        this.onAnimate = false;

                        this.list_items.each(function (index) { //init state
                            var item = jQuery(this);

                            if ( item.hasClass("Active") ) {
                                self.current_active_index = index;
							}
								/*self.list_items.eq(index).css({
									opacity: 1
								});
                            }
							else
								self.list_items.eq(index).css({
									opacity: 0
								});
							*/
                        });

                        self.control_items.eq(self.current_active_index).addClass("Active");

                        //binding event
                        if ( this.options.control != undefined ) {
                            this.control_items.each(function (index) {
                                var item = jQuery(this);

                                item.bind("click", function () {
                                    if ( !self.onAnimate && !item.hasClass("Active") ) {
                                        self.clear_timer();
                                        self.onAnimate = true;
                                        self.gotoSlide(index);
                                    }

                                    return false;
                                });
                            });
                        }

                        if ( this.options.next_btn != undefined ) { //next
                            this.options.next_btn.bind("click", function () {
                                if ( !self.onAnimate ) {
                                    self.clear_timer();
                                    self.onAnimate = true;
                                    self.next();
                                }

                                return false;
                            });
                        }

                        if ( this.options.prev_btn != undefined ) { //prev
                            this.options.prev_btn.bind("click", function () {
                                if ( !self.onAnimate ) {
                                    self.clear_timer();
                                    self.onAnimate = true;
                                    self.prev();
                                }

                                return false;
                            });
                        }

                        self.autoPlay(); //enable autoplay
                    }

                    /*
                    *  name : autoPlay
                    *  arguments: 
                    *  return: void
                    *  description: autoplay
                    */
                    this.autoPlay = function () {
                        this.timer = setInterval(function () {
                            self.onAnimate = true;
                            if ( !self.options.play_backward ) {
                                if ( self.current_active_index == self.list_items.length-1 ) { //current at the end of list
                                    self.gotoSlide(0);
                                }
                                else {
                                    self.gotoSlide(self.current_active_index+1);
                                }
                            }
                            else {
                                if ( self.current_active_index == 0 ) { //current at the begin of list
                                    self.gotoSlide(self.list_items.length-1);
                                }
                                else {
                                    self.gotoSlide(self.current_active_index-1);
                                }
                            }
                        }, this.options.delay);
                    }

                    /*
                    *  name : next
                    *  arguments: 
                    *  return: void
                    *  description: slide to next image
                    */
                    this.next = function () {
                        if ( this.current_active_index == this.list_items.length-1 ) { //current at the end of list
                            this.gotoSlide(0);
                        }
                        else {
                            this.gotoSlide(this.current_active_index+1);
                        }
                    }

                    /*
                    *  name : prev
                    *  arguments: 
                    *  return: void
                    *  description: slide to prev image
                    */
                    this.prev = function () {
                        if ( this.current_active_index == 0 ) { //current at the begin of list
                            this.gotoSlide(this.list_items.length-1);
                        }
                        else {
                            this.gotoSlide(this.current_active_index-1);
                        }
                    }

                    /*
                    *  name : gotoSlide
                    *  arguments: Integer index
                    *  return: void if index in range, false if out of range
                    *  description: go to specific slide
                    */
                    this.gotoSlide = function (index) {
                        this.swapSlides(this.current_active_index, index, function () {
                            self.current_active_index = index;
                        });
                    }

                    /*
                    *  name : swapSlides
                    *  arguments: Integer old_index, Integer new_index, Function callback
                    *  return: void
                    *  description: swap 2 slides (change visible state)
                    */
                    this.swapSlides = function (old_index, new_index, callback) {
                        self.control_items.eq(old_index).removeClass("Active"); //control_items
                        self.control_items.eq(new_index).addClass("Active"); //control_items

                        this.list_items.eq(old_index).children(".Overlay").show();
                        this.list_items.eq(old_index).children(".Overlay").animate({
                            opacity: 1
                        }, "normal", "swing", function () {
							self.list_items.eq(new_index).children(".Overlay").css({
								opacity: 0
							});
                            self.list_items.eq(old_index).removeClass("Active");
                            self.list_items.eq(new_index).addClass("Active");
							self.list_items.eq(new_index).children(".Overlay").hide();
                            self.internal_callback();
                            if ( callback != undefined ) {
                                callback(self);
                            }
                        });

                    }

                    /*
                    *  name : internal_callback
                    *  arguments: no
                    *  return: void
                    *  description: callback
                    */
                    this.internal_callback = function () {
                        this.onAnimate = false;
                        if ( this.timer == null ) {
                            this.autoPlay();
                        }
                    }

                    /*
                    *  name : clear_timer
                    *  arguments: no
                    *  return: void
                    *  description: callback
                    */
                    this.clear_timer = function () {
                        clearInterval(this.timer);
                        this.timer = null;
                    }

                /* END. public methods */

                /* public members + constructor */

                    //setup
                    this.setup();

                /* END. public members + constructor */
            }

        /* handling */
            this.each(function () {
                new $slidesPresentation( jQuery(this), options );
            });
        /* END. handling */
    }
});
/*
var curNum = 0; // Start
var oldNum = 0; // Do not change this var.
var intval = ""; // Do not change this var.
var status = ""; // Do not change this var (1 = Next; 2 = Prev;).
var speed = 8000; // Time to change slide.

function nextPrev(id,action) {
	var LIs = $("#slideObj > li");
	var Pages = $("#pages > li");
	
	//Pages
	Pages.removeClass("Active");
	Pages[id].className = "Active";
	
	//Slide Item
	LIs.removeClass("Active");
	LIs[id].className = "Active";
	
	if(action == "Next") {
		oldNum = curNum - 1;
		if(oldNum < 0) {
			oldNum = LIs.length - 1;
		}
		if(curNum >= LIs.length - 1) {
			curNum = 0;
		} else {
			curNum++;
		}
		status = 1;
	} else {
		oldNum = curNum + 1;
		if(oldNum > LIs.length - 1) {
			oldNum = 0;
		}
		if(curNum == 0) {
			curNum = LIs.length - 1;
		} else {
			curNum--;
		}
		status = 2;
	}
}

function nextAuto() {
	clearInterval(intval);
	if(status == 2) {
		curNum = oldNum;
	}
	nextPrev(curNum,'Next');
	intval = setInterval("nextPrev(curNum,'Next')",speed);
}

function prevAuto() {
	clearInterval(intval);
	if(status == 1) {
		curNum = oldNum;
	}
	nextPrev(curNum,'Prev');
	intval = setInterval("nextPrev(curNum,'Prev')",speed);
}

function nextItem() {
	clearInterval(intval);
	if(status == 2) {
		curNum = oldNum;
	}
	nextPrev(curNum,'Next');
}

function prevItem() {
	clearInterval(intval);
	if(status == 1) {
		curNum = oldNum;
	}
	nextPrev(curNum,'Prev');
}

function pauseAuto() {
	clearInterval(intval);
}

function goTo(id) {
	curNum = id;
	if(status == 1) {
		nextPrev(curNum,'Next');
	} else {
		nextPrev(curNum,'Prev');
	}
}
*/