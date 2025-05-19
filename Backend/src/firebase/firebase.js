const admin = require('firebase-admin')
require('dotenv').config()

const serviceAccount = process.env.FIREBASE_CREDENTIALS


admin.initializeApp({
  credential: admin.credential.cert(require('../../key-firebase.json')),
});

console.log('[Firebase] Cliente inicializado con:', serviceAccount);

const db = admin.firestore();
module.exports = db;