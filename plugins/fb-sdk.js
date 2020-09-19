
window.fbAsyncInit = function() {
    FB.init({
        appId: "533223224154522", // 填入自己 app 的 id
        cookie: true,
        xfbml: true,
        version: "v8.0" // 目前版本
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));