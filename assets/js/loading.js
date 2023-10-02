const social = [{squery:'discord', slink:"https://discord.com/invite/6xdB7ZvZ95", sname:"Discord", sicon:"discord.webp", sbackground:"discord-bg.jpg"},
                {squery:'twitch', slink:"https://www.twitch.tv/catovr/", sname:"Twitch", sicon:"twitch.webp", sbackground:null},
                {squery:'tiktok', slink:"https://www.tiktok.com/@catovrc", sname:"TikTok", sicon:"tiktok.webp", sbackground:null},
                {squery:'instagram', slink:"https://www.instagram.com/furry_cato/", sname:"Instagram", sicon:"instagram.webp", sbackground:null},
                {squery:'melody', slink:"https://melodybot.ga/", sname:"Melody Bot", sicon:"melody.webp", sbackground:null},
                {squery:'donation', slink:"https://streamlabs.com/catovr/tip", sname:"Streamlabs", sicon:"streamlabs.webp", sbackground:null},
                {squery:'commissions', slink:"https://catovr.gay/commissions", sname:"Commissions", sicon:"commissions.webp", sbackground:null},
                {squery:'pronounspage', slink:"https://pronouns.page/@CatoVR", sname:"Pronounspage", sicon:"pronounspage.webp", sbackground:null},
                {squery:'pettingtown', slink:"https://petting.town/cato", sname:"Pettingtown", sicon:"pettingtown.webp", sbackground:null},
                {squery:'twitter', slink:"https://twitter.com/CatoVR", sname:"Twitter", sicon:"twitter.webp", sbackground:null}];
const url = (new URL(document.location));
const duration = 1500;
window.addEventListener('load', () => {

    var query = url.searchParams.get('q');
    var succes = false;
    if(query != null && query != ""){
        query = query.toLowerCase();
        social.forEach(content => {
            if(content.squery == query){
                const message = "Redirecting to " + content.sname + "...";
                document.getElementById('loading-pbvalue').innerHTML = message;
                document.title = message;
                document.getElementById('socialicon').src = "assets/images/reficon/" + content.sicon;
                if(content.sbackground != null){
                    document.body.style.background = "url('assets/images/" + content.sbackground + "')"; 
                }
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

