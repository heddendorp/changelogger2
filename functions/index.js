const functions = require("firebase-functions");
const got = require("got");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });

exports.makeRequest = functions.https.onCall(async (data) => {
  console.log(data);
  const result = await got(data).json();
  console.log(result);
  return result;
});
