const social = [{squery:'discord', slink:"https://discord.com/invite/6xdB7ZvZ95", sname:"Discord", sicon:"assets/images/discord.png"},
                {squery:'twitch', slink:"https://www.twitch.tv/catovr/", sname:"Twitch", sicon:"assets/images/twitch.png"},
                {squery:'tiktok', slink:"https://www.tiktok.com/@catovrc", sname:"TikTok", sicon:"assets/images/tiktok.png"},
                {squery:'instagram', slink:"https://www.instagram.com/furry_cato/", sname:"Instagram", sicon:"assets/images/instagram.png"},
                {squery:'melody', slink:"https://melodybot.ga/", sname:"Melody Bot", sicon:"assets/images/melody.png"},
                {squery:'donation', slink:"https://streamlabs.com/catovr/tip", sname:"Streamlabs", sicon:"assets/images/streamlabs.png"}];
const url = (new URL(document.location));
const duration = 3500;
window.addEventListener('load', () => {

    var query = url.searchParams.get('q');
    var succes = false;
    if(query != null && query != ""){
        query = query.toLowerCase();
        social.forEach(content => {
            if(content.squery == query){
                const message = "Redirecting to "+content.sname+"...";
                document.getElementById('loading-pbvalue').innerHTML = message;
                document.title = message;
                document.getElementById('socialicon').src = content.sicon;
                succes = true;
                setTimeout(function(){
                    document.location.href = content.slink;
                }, duration);
            }
        });
    }
    if(!succes){
        document.getElementById('loading-pbvalue').innerHTML = "Invalid Query";
        document.title = "Invalid Query";
        setTimeout(function(){
            document.location.href = "https://catovr.ga/";
        }, duration);
    }
});

