const env = require('dotenv').config().parsed;
var { FB, FacebookApiException } = require('fb');
const fbCreds = require('./credentials/facebookAcessToken.json');

const firebase = require('firebase');

const firebaseConfig = {
  apiKey: 'AIzaSyA6KVNAW2N58iXzI-jxbsd7rfsl_E6d8D4',
  authDomain: 'crimes-agaisnt-asians.firebaseapp.com',
  databaseURL: 'https://crimes-agaisnt-asians.firebaseio.com',
  projectId: 'crimes-agaisnt-asians',
  storageBucket: 'crimes-agaisnt-asians.appspot.com',
  messagingSenderId: '10758215319',
  appId: '1:10758215319:web:df06ef67312ab626dbfbd2'
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const posts = firestore.collection('posts');
/*FB.api('oauth/access_token', {
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
    getFeed();
    
});*/
FB.setAccessToken(fbCreds.accessToken);
getFeed();


async function getFeed() {

  FB.api('/v6.0/682001392571001/feed', async function (res) {
    if (!res || res.error) {
      console.log(!res ? 'error occurred' : res.error);
      return;
    }
    let { data } = res;
    data.forEach(async (obj) => {
      //var post = await posts.doc(obj.id);
      //var post = await posts.add(obj);
      //console.log(post);

      FB.api(`/v6.0/${obj.id}`, async function (res) {
        if (!res || res.error) {
          console.log(!res ? 'error occurred' : res.error);
          return;
        }
        console.log(res);
        //console.log(data);
        /*data.forEach ( async (obj) => {
                    //var post = await posts.doc(obj.id);
                    var post = await posts.add(obj);
                    console.log(post);
                });*/
      });
    });
  });
}