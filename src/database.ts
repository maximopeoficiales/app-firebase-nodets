import admin from "firebase-admin";
const credenciales = require("../credenciales.json");
admin.initializeApp({
  // credential: admin.credential.cert(credenciales),
  //https://cloud.google.com/docs/authentication/getting-started#windows
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://fb-api-86cd1.firebaseio.com",
});

const db = admin.firestore();
export default db;
