function storeLang() {
	var username = $("#name").val(); // Using jQuery
	var languages = document.getElementById("languages").value; //Using JavaScript
	
	var arr = [];
	arr = languages.split(" ");

	var languageObj = {
       	"name" : username,
        	"languages" : arr
    	};	
    
 	try
  	{
	    	localStorage.setItem("languages", JSON.stringify(languageObj));
  	}
  	catch(e)
  	{
    		/* Google browsers use different error 
     		* constant
     		*/
    		if (window.navigator.vendor==="Google Inc.")
    		{
      			if(e == DOMException.QUOTA_EXCEEDED_ERR) 
      			{
        			alert("Error: Local Storage limit exceeded.");
      			}
    		}
    		else if(e == QUOTA_EXCEEDED_ERR){
      			alert("Error: Loading from local storage.");
    		}
   	}
	displayLang();
}

function displayLang() {
	var lang = JSON.parse(localStorage.getItem("languages"));

	$("#savedName").html(lang.name); // Using jQuery
	document.getElementById("savedLang").innerHTML = lang.languages.join(", "); // Using JavaScript
}
