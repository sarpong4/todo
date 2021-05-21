import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBUFyYUECkiyH6n-kRWU7Du8kVXW6Q1GpQ",
  authDomain: "todo-app-3456b.firebaseapp.com",
  databaseURL:
    "https://console.firebase.google.com/u/0/project/todo-app-3456b/firestore/data~2Ftodos~2F4J4lg89CoF9wt84AsJrH",
  projectId: "todo-app-3456b",
  storageBucket: "todo-app-3456b.appspot.com",
  messagingSenderId: "566087794671",
  appId: "1:566087794671:web:1b1a9eb670477688b5001a",
  measurementId: "G-SH5WR2D4SG",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;