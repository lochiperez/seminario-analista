const admin = require('firebase-admin')
require('dotenv').config()

const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS);

// ⚠️ Reemplazar los caracteres \\n por saltos de línea reales
serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = db;