import firebase  from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBz39H6IedEyEE2PQ4s9KUwHLnb6yuxLoc",
    authDomain: "twitter-clone-9f44a.firebaseapp.com",
    databaseURL: "https://twitter-clone-9f44a.firebaseio.com",
    projectId: "twitter-clone-9f44a",
    storageBucket: "twitter-clone-9f44a.appspot.com",
    messagingSenderId: "717004672671",
    appId: "1:717004672671:web:c35690f9b9d319cea79caa",
    measurementId: "G-09RLQ6Q0BD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;