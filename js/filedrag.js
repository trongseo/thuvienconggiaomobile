/*
filedrag.js - HTML5 File Drag & Drop demonstration
Featured on SitePoint.com
Developed by Craig Buckler (@craigbuckler) of OptimalWorks.net
*/
(function() {

	// getElementById
	function $id(id) {
		return document.getElementById(id);
	}


	// output information
	function Output(msg) {
		var m = $id("messages");
		m.innerHTML = msg + m.innerHTML;
	}


	// file drag hover
	function FileDragHover(e) {
		e.stopPropagation();
		e.preventDefault();
		//e.target.className = (e.type == "dragover" ? "hover" : "");
	}

//-----------file 1----------
	// file selection
	function FileSelectHandler(e) {

		// cancel event and hover styling
		FileDragHover(e);

		// fetch FileList object
		var files = e.target.files || e.dataTransfer.files;

		// process all File objects
		for (var i = 0, f; f = files[i]; i++) {
			ParseFile(f);
		}

	}


	// output file information
	function ParseFile(file) {
	
	           var m = $id("messages");
		    m.innerHTML = file.name;
	
        reader = new FileReader();
        bin = reader.result;		
        
                    var url = window.location.pathname;
                    var filmID = url.substring(url.lastIndexOf('/') + 1);  
        
		    xhr = new XMLHttpRequest();
			xhr.open('POST', 'http://localhost/phimsonic/Films/UploadFileSubtitle/filmID/'+filmID+'/type/sub_vn' , true);
			xhr.setRequestHeader('UP-FILENAME', file.name);
			xhr.setRequestHeader('UP-SIZE', file.size);
			xhr.setRequestHeader('UP-TYPE', file.type);
			//xhr.send(file); 
                        
			xhr.send(window.btoa(bin));
		

	}
//-----------file 2----------

	function FileSelectHandler2(e) {

		// cancel event and hover styling
		FileDragHover(e);

		// fetch FileList object
		var files = e.target.files || e.dataTransfer.files;

		// process all File objects
		for (var i = 0, f; f = files[i]; i++) {
			ParseFile2(f);
		}

	}


	// output file information
	function ParseFile2(file) {
	
			var m = $id("messages2");
		    m.innerHTML = file.name;
	             
                     var url = window.location.pathname;
                      var filmID = url.substring(url.lastIndexOf('/') + 1); 
                      
                        reader = new FileReader();
                        bin = reader.result;	
                      
		    xhr = new XMLHttpRequest();
			xhr.open('POST', 'http://localhost/phimsonic/Films/UploadFileSubtitle/filmID/'+filmID+'/type/sub_en', true);
			xhr.setRequestHeader('UP-FILENAME', file.name);
			xhr.setRequestHeader('UP-SIZE', file.size);
			xhr.setRequestHeader('UP-TYPE', file.type);
			//xhr.send(file); 
			
		xhr.send(window.btoa(bin));

	}

//--------------------------

	// initialize
	function Init() {

			filedrag = $id("filedrag"),


			
			// file drop
			filedrag.addEventListener("dragover", FileDragHover, false);
			filedrag.addEventListener("dragleave", FileDragHover, false);
			filedrag.addEventListener("drop", FileSelectHandler, false);
			//filedrag.style.display = "block";


			filedrag2 = $id("filedrag2"),
			filedrag2.addEventListener("dragover", FileDragHover, false);
			filedrag2.addEventListener("dragleave", FileDragHover, false);
			filedrag2.addEventListener("drop", FileSelectHandler2, false);
		//	filedrag2.style.display = "block";
	}

	// call initialization file
	if (window.File && window.FileList && window.FileReader)
        {
		Init();
	}


})();