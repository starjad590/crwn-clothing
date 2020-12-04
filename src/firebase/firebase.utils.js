import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyAoItXpqBj7ujRTtv99_RwhfrO-8F0vgKs",
    authDomain: "crwn-db-558e1.firebaseapp.com",
    projectId: "crwn-db-558e1",
    storageBucket: "crwn-db-558e1.appspot.com",
    messagingSenderId: "818203211632",
    appId: "1:818203211632:web:549ca424cd791860c541b5",
    measurementId: "G-R9VSN5FZDF"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;