    var myExtension = {  
        init: function() {  
            if(gBrowser) gBrowser.addEventListener("DOMContentLoaded", this.onPageLoad, false);  
        },  
        onPageLoad: function(aEvent) {  
            var doc = aEvent.originalTarget; 
            var win = doc.defaultView; 
 
            doc.onkeydown = function(e) {
			
			 if (e.ctrlKey && e.shiftKey && e.altKey) {
				win.open("https://www.google.com/search?client=ubuntu&channel=fs&q=define " + content.getSelection(), '_blank');
			 }
		}
        }  
    }  
    window.addEventListener("load", function load(event){  
        window.removeEventListener("load", load, false);
        myExtension.init();    
    },false);