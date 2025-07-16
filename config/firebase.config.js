const Firebase = require('firebase-admin');
const serviceAccount = require('../driveproject-7d9a3-firebase-adminsdk-fbsvc-4fe79746c9.json');

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: "driveproject-7d9a3-default-rtdb.firebaseio.com"
});

module.exports = firebase;





