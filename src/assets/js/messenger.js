//Importo el ID de la página de Facebook
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "103773319373075");
chatbox.setAttribute("attribution", "biz_inbox");

//SDK
window.fbAsyncInit = function() {
    FB.init ({
        xfbml: true,
        version: 'v16.0'
    });
}

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
} (document, 'script', 'facebook-jssdk'));