import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAsnXeHcI09LhImJMrZZaiH_XuH0W_COKA",
    authDomain: "clone-3a488.firebaseapp.com",
    projectId: "clone-3a488",
    storageBucket: "clone-3a488.appspot.com",
    messagingSenderId: "223781412245",
    appId: "1:223781412245:web:8409144522b10264586a9c",
    measurementId: "G-9ZHLBPPDFB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };