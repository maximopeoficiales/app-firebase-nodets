import * as functions from "firebase-functions";
import dotenv from "dotenv";
dotenv.config(); //cargo las variables de entorno
import app from "./app";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const myapp = functions.https.onRequest(app);
