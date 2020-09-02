import admin from "firebase-admin";
const credenciales = require("../credenciales.json");
admin.initializeApp({
  credential: admin.credential.cert(credenciales),
  databaseURL: "https://fb-api-86cd1.firebaseio.com",
});

const db = admin.firestore();
export default db;
