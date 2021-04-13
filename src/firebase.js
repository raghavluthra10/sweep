import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAqzmFabcuFhh4o-eumU5v1aupW7c2nq6s",
    authDomain: "twitter-clone-70db1.firebaseapp.com",
    projectId: "twitter-clone-70db1",
    storageBucket: "twitter-clone-70db1.appspot.com",
    messagingSenderId: "328260356990",
    appId: "1:328260356990:web:014214d1b04f1b0626412f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;