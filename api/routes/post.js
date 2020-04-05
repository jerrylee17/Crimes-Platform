var express = require("express");
var router = express.Router();
const admin = require('../firebase');

let db = admin.firestore();
let collection = db.collection('posts');



router.get("/:id", function(req, res, next) {
    collection.doc(req.params.id).get().then( (post) => {
        res.send(post.data());
    })
});

module.exports = router;