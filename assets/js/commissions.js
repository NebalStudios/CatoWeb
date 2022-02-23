
var commissionsopen = 0;

window.addEventListener('load', () => {

    document.getElementById("nojscript").classList.add("hidden");
    document.getElementById("webpage").classList.remove("hidden");

    if(commissionsopen > 0){
        document.getElementById("commissionsstatus").innerHTML = ('Commissions: <span class="text-lime">OPEN</span> &emsp; '+commissionsopen+' FREE SLOTS ');
    }else{
        document.getElementById("commissionsstatus").innerHTML = ('Commissions: <span class="text-red">CLOSED</span>');
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

const contact = [{stag:'discord', scontent:"Cato#2907", sname:"Discord Tag"},
                {stag:'telegram', scontent:"@Catoooooooooo", sname:"Telegram Tag"}];
function showcontact(tag){
    if(tag != null){
        contact.forEach(data => {
            if(data.stag == tag){
                console.log(data.scontent);
            }
        });
    }
}