const env = require('dotenv').config()
var {FB, FacebookApiException} = require('fb');
console.log(env)
FB.api('oauth/access_token', {
    client_id: env.FACEBOOK_KEY,
    client_secret: env.FACEBOOK_SECRET,
    grant_type: 'client_credentials'
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }
 
    var accessToken = res.access_token;
    console.log(accessToken);
    FB.setAccessToken(accessToken);
    
});
FB.setAccessToken('EAAJGa73QbewBAPJtZBAO8PnlIn5cX0vfTop30Fn1vY1LuQI1xcU79xJC7SQaBZC4cMLbN3ipdY6LL9Wj2cgFSeTZCy7SkeD8TZBxd35q3D3ZCFvTA4YZBo1rdvoh6EvVOlaw84X77eSZB8iX4UWlfYGU6P2q3J3jPAvCxsWZBUekfgxZBiJ5AqGqvupVVMYLew0NF23p8jezCM9RbyMdY8NMTsQ294LeyRpx2IKpnemk2agZDZD');
    //FB.api('/v6.0/2054273191249821/feed', function (res) {
    FB.api('/v6.0/784947644987450/feed', function (res) {
        if(!res || res.error) {
         console.log(!res ? 'error occurred' : res.error);
         return;
        }
        console.log(res);
        console.log(res.id);
        console.log(res.name);
      });