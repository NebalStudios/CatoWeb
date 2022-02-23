
var commissionsopen = 1;

window.addEventListener('load', () => {

    document.getElementById("nojscript").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");

    if(commissionsopen > 0){
        document.getElementById("commissionsstatus").innerHTML = ('Commissions: <span class="lime_text">OPEN</span> &emsp; "+commissionsopen+" SLOTS OPEN ');
    }else{
        document.getElementById("commissionsstatus").innerHTML = ('Commissions: <span class="red_text">CLOSED</span> ');
    }
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
