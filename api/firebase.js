const admin = require('firebase-admin');

let serviceAccount = require('./credentials/serviceKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
