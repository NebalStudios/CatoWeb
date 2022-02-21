window.addEventListener('load', () => {

    document.getElementById("nojscript").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
    /*
	var prefix = url.searchParams.get('p');

	if(prefix == null || prefix == '' || prefix.length > 6){
		prefix = 'm!';
	}
    var spans = document.querySelectorAll("#result-prefix");
    var len = spans.length; 
    
    for (var i = 0; i < len; i++) { 
        spans[i].textContent = prefix; 
    } 
    
    const query = url.searchParams.get('query');
    
    if(query != null && query != ''){
        var content = document.getElementById("search-input");
        content.value = query;
        updateCommands(query);
    }
    */
});