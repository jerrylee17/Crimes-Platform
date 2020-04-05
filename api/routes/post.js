var express = require("express");
var router = express.Router();
const admin = require('firebase-admin');

let serviceAccount = require('../credentials/serviceKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
let collection = db.collection('posts');



router.get("/:id", function(req, res, next) {
    collection.doc(req.params.id).get().then( (post) => {
        res.send(post.data());
    })
});

module.exports = router;