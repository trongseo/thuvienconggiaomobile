Rating = function (ratingID, defaultRating, enableOption) {
    this.ratingLevels = document.getElementById(ratingID).getElementsByTagName("li");
    this.defaultRating = defaultRating;
    this.currentRating;
    this.preRating;
    
	if (enableOption==true)
	{
    	//On Init
	    this.getCurrentRating();
    	this.updateRating();
	}
	else
		this.updateRating();

}

Rating.prototype.updateRating = function () {
    if (typeof(this.defaultRating) != "undefined") {
        if (typeof(this.currentRating) == "undefined") {
            this.currentRating = this.defaultRating - 1;
        }
    }
    this.showRating(this.currentRating);
}

Rating.prototype.getCurrentRating = function () {
    var ratingObj = this;
    for (var i = 0 ; i < this.ratingLevels.length ; i++) {
        this.ratingLevels[i].onclick = function () {
            ratingObj.currentRating = getElementIndex(this, ratingObj.ratingLevels);
            ratingObj.updateRating();
			
			return false;
        }
        this.ratingLevels[i].onmouseover = function () {
            ratingObj.preRating = getElementIndex(this, ratingObj.ratingLevels);
            ratingObj.showRating(ratingObj.preRating);
        }
        this.ratingLevels[i].onmouseout = function () {
            ratingObj.updateRating();
        }
    }
}

Rating.prototype.showRating = function (currentRating) {
    for (var i = 0 ; i < this.ratingLevels.length ; i++) {
        if (i != currentRating) {
            this.ratingLevels[i].className = this.ratingLevels[i].className.replace(/Active/, "");
        }
    }

    if ( currentRating >= 0 && !(this.ratingLevels[currentRating].className).match(/Active/)) {
        this.ratingLevels[currentRating].className += " Active";
    }
}

function getElementIndex (element, arrayObj) {
    for (var i = 0 ; i < arrayObj.length ; i++) {
        if (element == arrayObj[i]) {
            return i;
        }
    }
}