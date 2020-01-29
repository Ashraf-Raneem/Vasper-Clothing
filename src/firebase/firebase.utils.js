import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const config =  {
    apiKey: "AIzaSyDn7u9JcflxTMLjhbpsLGAq3Q97hcPfAdE",
    authDomain: "vasper-clothing-db.firebaseapp.com",
    databaseURL: "https://vasper-clothing-db.firebaseio.com",
    projectId: "vasper-clothing-db",
    storageBucket: "vasper-clothing-db.appspot.com",
    messagingSenderId: "887752852418",
    appId: "1:887752852418:web:319830190ab0de1e87cc5b",
    measurementId: "G-BN97BY3HEW"
  };

  firebase.initializeApp(config); 

  export const auth = firebase.auth(); 
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider(); 
  provider.setCustomParameters({prompt: 'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider); 

  export default firebase; 
  

