// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyA6xtplu7wE_MhEvk-reQ2dOYQb2i7MjXA",
//     authDomain: "todo-app-aarpee.firebaseapp.com",
//     projectId: "todo-app-aarpee",
//     storageBucket: "todo-app-aarpee.appspot.com",
//     messagingSenderId: "697838022334",
//     appId: "1:697838022334:web:d5d7c7939e0d6e73df38ef",
//     measurementId: "G-QRESWCNJHD"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA6xtplu7wE_MhEvk-reQ2dOYQb2i7MjXA",
    authDomain: "todo-app-aarpee.firebaseapp.com",
    projectId: "todo-app-aarpee",
    storageBucket: "todo-app-aarpee.appspot.com",
    messagingSenderId: "697838022334",
    appId: "1:697838022334:web:d5d7c7939e0d6e73df38ef",
    measurementId: "G-QRESWCNJHD"
});

const db = firebaseApp.firestore();
export default db;