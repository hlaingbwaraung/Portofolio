// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA0HRLWwHmU4eV1XQ_oNXA5GNUiD1k2-CI",
    authDomain: "vue-blog-system-cf44c.firebaseapp.com",
    projectId: "vue-blog-system-cf44c",
    storageBucket: "vue-blog-system-cf44c.appspot.com",
    messagingSenderId: "946284851809",
    appId: "1:946284851809:web:dd582658fe6b66ef5e3020"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp }