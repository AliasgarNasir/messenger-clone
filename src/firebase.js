import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2OLxFsspjBuxRPhqdKRbf_zH6-PPrxGw",
  authDomain: "messenger-clone-4e18b.firebaseapp.com",
  projectId: "messenger-clone-4e18b",
  storageBucket: "messenger-clone-4e18b.appspot.com",
  messagingSenderId: "922710258503",
  appId: "1:922710258503:web:220ffea80f7de0862b1262",
  measurementId: "G-YBWP20T35V",
});

const db = firebaseApp.firestore();
export default db;
