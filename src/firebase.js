import firebase from 'firebase';
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBK1z7Cm9iY7x3D4Brl9lKHOdnkoYOU23Y",
    authDomain: "facebookclone-dc8ef.firebaseapp.com",
    projectId: "facebookclone-dc8ef",
    storageBucket: "facebookclone-dc8ef.appspot.com",
    messagingSenderId: "10953297804",
    appId: "1:10953297804:web:e531e5afade3a5480350a9"
  });

  const db=firebaseConfig.firestore();
  export default db;