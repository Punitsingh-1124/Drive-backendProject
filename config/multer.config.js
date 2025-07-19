const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../driveproject-7d9a3-firebase-adminsdk-fbsvc-4fe79746c9.json');

const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName : "driveproject-7d9a3.appspot.com"
})

const upload = multer({
    storage: storage,
})

module.exports = upload;