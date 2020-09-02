import * as functions from "firebase-functions";
import app from "./app";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const myapp = functions.https.onRequest(app);
//falta hacer deploy