import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCiqTTSXgQ39M9B6rsZ8Akg2NRH_zST1y0",
    authDomain: "shoppersstore-2b466.firebaseapp.com",
    databaseURL: "https://shoppersstore-2b466.firebaseio.com",
    projectId: "shoppersstore-2b466",
    storageBucket: "shoppersstore-2b466.appspot.com",
    messagingSenderId: "324994592782",
    appId: "1:324994592782:web:0011823474b153fc52cc5f",
    measurementId: "G-QCNG6PDFVY"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'prompt': 'select_account'
  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;