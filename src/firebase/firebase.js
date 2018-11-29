import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
// var config = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID
// };
var config = {
  apiKey: "AIzaSyAUBtOEgpb9C3N4bctW6Qv2_wAAIZMIvEk",
  authDomain: "rojgaralerts-6ea92.firebaseapp.com",
  databaseURL: "https://rojgaralerts-6ea92.firebaseio.com",
  projectId: "rojgaralerts-6ea92",
  storageBucket: "rojgaralerts-6ea92.appspot.com",
  messagingSenderId: "180447348207"
};
// firebase.initializeApp(config);
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
const database = firebase.database();
new firebase.auth.EmailAuthProvider();

export { getData, firebase, database as default };
const getData = from => {
  return database
    .ref(from)
    .once("value")
    .then(snapshot => {
      const newContent = [];
      snapshot.forEach(childSnapshot => {
        newContent.push({
          key: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      return { [from]: newContent };
    });
};
